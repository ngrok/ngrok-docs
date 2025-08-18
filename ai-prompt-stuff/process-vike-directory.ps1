# PowerShell script to process a directory for Vike file-based routing
# Based on successful manual processing of traffic-policy directory
param(
    [Parameter(Mandatory=$true)]
    [string]$TargetDirectory
)

Write-Host "Processing directory: $TargetDirectory" -ForegroundColor Green

# Function to process a single directory
function Process-Directory {
    param([string]$DirPath)
    
    Write-Host "Processing: $DirPath" -ForegroundColor Yellow
    
    # Get all .md and .mdx files in this directory (not recursive)
    $mdFiles = Get-ChildItem -Path $DirPath -Filter "*.md" -File
    $mdxFiles = Get-ChildItem -Path $DirPath -Filter "*.mdx" -File
    $files = @()
    $files += $mdFiles
    $files += $mdxFiles
    
    if ($files.Count -eq 0) {
        Write-Host "  No .md or .mdx files found" -ForegroundColor Gray
        return
    }
    
    foreach ($file in $files) {
        $baseName = $file.BaseName
        $extension = $file.Extension
        
        if ($baseName -eq "index") {
            # Rename index files to +Page
            $newName = "+Page$extension"
            $newPath = Join-Path $DirPath $newName
            Write-Host "  Renaming: $($file.Name) -> $newName" -ForegroundColor Cyan
            Move-Item $file.FullName $newPath -Force
        } elseif ($baseName -ne "+Page") {
            # Skip if already a +Page file, create subdirectory and move file
            $newDir = Join-Path $DirPath $baseName
            $newFilePath = Join-Path $newDir "+Page$extension"
            
            Write-Host "  Creating directory: $baseName" -ForegroundColor Cyan
            New-Item -ItemType Directory -Path $newDir -Force | Out-Null
            
            Write-Host "  Moving: $($file.Name) -> $baseName\+Page$extension" -ForegroundColor Cyan
            Move-Item $file.FullName $newFilePath -Force
        }
    }
}

# Verify target directory exists
if (-not (Test-Path $TargetDirectory)) {
    Write-Error "Target directory '$TargetDirectory' does not exist"
    exit 1
}

# Get file count before processing
$beforeCount = (Get-ChildItem -Path $TargetDirectory -Include "*.md", "*.mdx" -Recurse).Count
Write-Host "Found $beforeCount .md/.mdx files to process" -ForegroundColor Yellow

# Process the target directory and all its subdirectories
$allDirs = @()
$allDirs += $TargetDirectory

$subdirs = Get-ChildItem -Path $TargetDirectory -Directory -Recurse | Where-Object { 
    $_.Name -notlike "_*" -and $_.Name -ne "img" -and $_.Name -ne "shared" -and $_.Name -ne "details"
}
$allDirs += $subdirs.FullName

# Process in reverse order (deepest first) to avoid path conflicts
$directories = $allDirs | Sort-Object { $_.Split('\').Length } -Descending

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        Process-Directory $dir
    }
}

# Verify file count after processing
$afterCount = (Get-ChildItem -Path $TargetDirectory -Include "*.md", "*.mdx" -Recurse).Count
Write-Host "Processing complete! File count: $beforeCount -> $afterCount" -ForegroundColor Green

if ($beforeCount -ne $afterCount) {
    Write-Warning "File count changed during processing. Please verify results."
} else {
    Write-Host "All files preserved during restructuring ✅" -ForegroundColor Green
}
