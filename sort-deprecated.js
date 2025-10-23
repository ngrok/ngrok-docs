const fs = require('fs');
const path = require('path');

const docsJsonPath = path.join(__dirname, 'docs.json');
const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));

const referencesTab = docsJson.navigation.tabs.find(tab => tab.tab === "Reference");
const apiMenu = referencesTab.menu.find(menuItem => menuItem.item === "API");
const deprecatedGroup = apiMenu.pages.find(pageGroup => pageGroup.group === "Deprecated");

deprecatedGroup.pages.sort((a, b) => {
  return a.group.localeCompare(b.group);
});

fs.writeFileSync(docsJsonPath, JSON.stringify(docsJson, null, 2) + '\n', 'utf8');

console.log('Sorted Deprecated pages alphabetically by group name');
