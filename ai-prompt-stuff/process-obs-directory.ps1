# Process obs/ directory for Vike restructure
# Only processes .mdx and .md files that don't start with underscore

Write-Host "Processing obs/ directory for Vike restructure..." -ForegroundColor Green

# Process root obs/ directory
$obsDir = "content2\docs\obs"
Write-Host "Processing root obs/ files..." -ForegroundColor Yellow

# Handle index.mdx in root
if (Test-Path "$obsDir\index.mdx") {
    Write-Host "  Converting index.mdx -> +Page.mdx" -ForegroundColor Cyan
    Move-Item "$obsDir\index.mdx" "$obsDir\+Page.mdx"
}

# Handle traffic-inspection.mdx in root
if (Test-Path "$obsDir\traffic-inspection.mdx") {
    Write-Host "  Converting traffic-inspection.mdx -> traffic-inspection/+Page.mdx" -ForegroundColor Cyan
    New-Item -ItemType Directory -Path "$obsDir\traffic-inspection" -Force | Out-Null
    Move-Item "$obsDir\traffic-inspection.mdx" "$obsDir\traffic-inspection\+Page.mdx"
}

# Process events subdirectory
$eventsDir = "$obsDir\events"
Write-Host "Processing events/ subdirectory..." -ForegroundColor Yellow

# Handle index.mdx in events/
if (Test-Path "$eventsDir\index.mdx") {
    Write-Host "  Converting events/index.mdx -> events/+Page.mdx" -ForegroundColor Cyan
    Move-Item "$eventsDir\index.mdx" "$eventsDir\+Page.mdx"
}

# Handle reference.mdx in events/
if (Test-Path "$eventsDir\reference.mdx") {
    Write-Host "  Converting events/reference.mdx -> events/reference/+Page.mdx" -ForegroundColor Cyan
    New-Item -ItemType Directory -Path "$eventsDir\reference" -Force | Out-Null
    Move-Item "$eventsDir\reference.mdx" "$eventsDir\reference\+Page.mdx"
}

Write-Host "obs/ directory processing complete!" -ForegroundColor Green
Write-Host "Files with underscore prefix were skipped as per Vike rules." -ForegroundColor Gray

# Verification
Write-Host "`nVerifying structure..." -ForegroundColor Yellow
if (Test-Path "$obsDir\+Page.mdx") { Write-Host "  ✓ obs/+Page.mdx exists" -ForegroundColor Green }
if (Test-Path "$obsDir\traffic-inspection\+Page.mdx") { Write-Host "  ✓ obs/traffic-inspection/+Page.mdx exists" -ForegroundColor Green }
if (Test-Path "$eventsDir\+Page.mdx") { Write-Host "  ✓ obs/events/+Page.mdx exists" -ForegroundColor Green }
if (Test-Path "$eventsDir\reference\+Page.mdx") { Write-Host "  ✓ obs/events/reference/+Page.mdx exists" -ForegroundColor Green }
