#!/usr/bin/env node

/**
 * Update agent/version-support-policy.mdx with a new version
 * 
 * This script:
 * - Prompts for version number and release date
 * - Adds a new row for the version
 * - Updates the "Latest" column for the version family
 * - Calculates support dates (Active Support: +12 months, EOL: +14 months)
 * - Updates Support Status based on current date
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const FILE_PATH = path.join(__dirname, 'agent/version-support-policy.mdx');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function parseDate(dateStr) {
  // Expected format: YYYY-MM-DD
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function parseVersion(versionStr) {
  // Extract major.minor.patch from version string like "3.33.0"
  const match = versionStr.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(`Invalid version format: ${versionStr}. Expected format: X.Y.Z (e.g., 3.33.0)`);
  }
  return {
    major: parseInt(match[1]),
    minor: parseInt(match[2]),
    patch: parseInt(match[3]),
    full: versionStr,
    family: `${match[1]}.${match[2]}x` // e.g., "3.33x"
  };
}

function compareVersions(v1, v2) {
  // Compare two version objects, return -1 if v1 < v2, 0 if equal, 1 if v1 > v2
  if (v1.major !== v2.major) return v1.major - v2.major;
  if (v1.minor !== v2.minor) return v1.minor - v2.minor;
  return v1.patch - v2.patch;
}

function getStatus(eolDate, now) {
  return now > eolDate ? 'End of life' : 'Active';
}

function parseTableRow(line) {
  // Parse a table row like: "| Active         | 3.33x   | 2025-11-12   | 3.33.0 | 2026-11-12     | 2028-01-12  |"
  const parts = line.split('|').map(s => s.trim()).filter(s => s);
  if (parts.length !== 6) return null;
  
  const [status, release, releaseDate, latest, activeSupport, endOfLife] = parts;
  
  // Extract version info from release (e.g., "3.33x")
  const match = release.match(/^(\d+)\.(\d+)x$/);
  if (!match) return null;
  
  return {
    status,
    release,
    releaseDate,
    latest,
    activeSupport,
    endOfLife,
    major: parseInt(match[1]),
    minor: parseInt(match[2])
  };
}

function formatTableRow(status, release, releaseDate, latest, activeSupport, endOfLife) {
  return `| ${status.padEnd(14)} | ${release.padEnd(7)} | ${releaseDate.padEnd(12)} | ${latest.padEnd(6)} | ${activeSupport.padEnd(14)} | ${endOfLife.padEnd(11)} |`;
}

async function main() {
  console.log('Agent Version Support Policy Updater\n');
  
  // Get version number
  const versionInput = await question('Enter version (e.g., 3.33.0): ');
  const version = parseVersion(versionInput.trim());
  
  // Get release date (default to today)
  const today = formatDate(new Date());
  const releaseDateInput = await question(`Enter release date (YYYY-MM-DD) [${today}]: `);
  const releaseDate = releaseDateInput.trim() || today;
  
  rl.close();
  
  // Validate date format
  try {
    parseDate(releaseDate);
  } catch (e) {
    console.error(`Error: Invalid date format: ${releaseDate}. Expected YYYY-MM-DD`);
    process.exit(1);
  }
  
  // Calculate support dates
  const releaseDateObj = parseDate(releaseDate);
  const activeSupportDate = formatDate(addMonths(releaseDateObj, 12));
  const eolDate = formatDate(addMonths(releaseDateObj, 14));
  
  console.log(`\nVersion: ${version.full}`);
  console.log(`Release Date: ${releaseDate}`);
  console.log(`Active Support Until: ${activeSupportDate}`);
  console.log(`End of Life: ${eolDate}`);
  console.log('');
  
  // Read the file
  let content;
  try {
    content = fs.readFileSync(FILE_PATH, 'utf8');
  } catch (e) {
    console.error(`Error reading file: ${FILE_PATH}`);
    console.error(e.message);
    process.exit(1);
  }
  
  const lines = content.split('\n');
  const now = new Date();
  
  // Find the table
  let tableStartIdx = -1;
  let headerIdx = -1;
  let separatorIdx = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('| Support Status | Release |')) {
      headerIdx = i;
      separatorIdx = i + 1;
      tableStartIdx = i + 2; // First data row
      break;
    }
  }
  
  if (tableStartIdx === -1) {
    console.error('Error: Could not find support table in file');
    process.exit(1);
  }
  
  // Parse all existing rows
  const rows = [];
  let tableEndIdx = tableStartIdx;
  for (let i = tableStartIdx; i < lines.length; i++) {
    if (!lines[i].trim().startsWith('|')) break;
    const row = parseTableRow(lines[i]);
    if (row) {
      rows.push(row);
      tableEndIdx = i;
    }
  }
  
  // Check if this version family already exists and find the highest patch version
  let familyExists = false;
  let highestInFamily = null;
  
  for (const row of rows) {
    if (row.major === version.major && row.minor === version.minor) {
      familyExists = true;
      const latestVersion = parseVersion(row.latest);
      if (!highestInFamily || compareVersions(latestVersion, highestInFamily) > 0) {
        highestInFamily = latestVersion;
      }
    }
  }
  
  // Determine if this is the new latest for the family
  const isNewLatest = !highestInFamily || compareVersions(version, highestInFamily) > 0;
  
  console.log(`Version family ${version.family} ${familyExists ? 'exists' : 'is new'}`);
  if (familyExists) {
    console.log(`Current latest in family: ${highestInFamily.full}`);
    console.log(`This version will be the latest: ${isNewLatest ? 'YES' : 'NO'}`);
  }
  console.log('');
  
  // Update or add the row for this version family
  let updatedRows = [];
  let familyRowFound = false;
  
  for (const row of rows) {
    if (row.major === version.major && row.minor === version.minor) {
      familyRowFound = true;
      
      // Update this family's row
      const newLatest = isNewLatest ? version.full : row.latest;
      
      // If this is the new latest, update the dates too
      let newReleaseDate, newActiveSupport, newEolDate;
      if (isNewLatest) {
        newReleaseDate = releaseDate;
        newActiveSupport = activeSupportDate;
        newEolDate = eolDate;
      } else {
        newReleaseDate = row.releaseDate;
        newActiveSupport = row.activeSupport;
        newEolDate = row.endOfLife;
      }
      
      // Recalculate status based on current date
      const eolDateObj = parseDate(newEolDate);
      const newStatus = getStatus(eolDateObj, now);
      
      updatedRows.push({
        ...row,
        status: newStatus,
        latest: newLatest,
        releaseDate: newReleaseDate,
        activeSupport: newActiveSupport,
        endOfLife: newEolDate
      });
    } else {
      // Update status for other rows too
      const eolDateObj = parseDate(row.endOfLife);
      const newStatus = getStatus(eolDateObj, now);
      updatedRows.push({
        ...row,
        status: newStatus
      });
    }
  }
  
  // If family doesn't exist, add a new row
  if (!familyRowFound) {
    const status = getStatus(parseDate(eolDate), now);
    updatedRows.push({
      status,
      release: version.family,
      releaseDate: releaseDate,
      latest: version.full,
      activeSupport: activeSupportDate,
      endOfLife: eolDate,
      major: version.major,
      minor: version.minor
    });
  }
  
  // Sort rows by version (descending - newest first)
  updatedRows.sort((a, b) => {
    if (a.major !== b.major) return b.major - a.major;
    return b.minor - a.minor;
  });
  
  // Generate new table rows
  const newTableLines = updatedRows.map(row => 
    formatTableRow(row.status, row.release, row.releaseDate, row.latest, row.activeSupport, row.endOfLife)
  );
  
  // Reconstruct the file
  const newLines = [
    ...lines.slice(0, tableStartIdx),
    ...newTableLines,
    ...lines.slice(tableEndIdx + 1)
  ];
  
  const newContent = newLines.join('\n');
  
  // Write the file
  try {
    fs.writeFileSync(FILE_PATH, newContent, 'utf8');
    console.log(`✅ Successfully updated ${FILE_PATH}`);
    console.log('');
    console.log('Changes:');
    if (!familyRowFound) {
      console.log(`  - Added new version family: ${version.family}`);
    } else if (isNewLatest) {
      console.log(`  - Updated ${version.family} to latest version: ${version.full}`);
    } else {
      console.log(`  - Version ${version.full} exists but is not the latest in family ${version.family}`);
    }
    console.log(`  - Updated support status for all versions based on current date`);
  } catch (e) {
    console.error('Error writing file:', e.message);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
