---
name: restructuring-ia
description: Restructures Mintlify documentation information architecture in docs.json. Use when reorganizing sidebar navigation, improving content discoverability, or refactoring doc structure.
---

# Restructuring Information Architecture

Guidelines for reorganizing Mintlify documentation navigation in `docs.json`.

## Mintlify Navigation Structure

Navigation is defined in `docs.json` under `navigation.tabs`. Each tab contains a `menu` with items:

```json
{
  "tab": "Tab Name",
  "menu": [
    {
      "item": "Section Name",
      "pages": [
        "path/to/page",
        {
          "group": "Group Name",
          "pages": ["path/to/nested-page"]
        }
      ]
    }
  ]
}
```

## IA Principles

### 1. Progressive Disclosure
- **Top level**: Overview, how it works, architecture (conceptual)
- **Second level**: Quickstarts, installation, core concepts
- **Third level**: Detailed guides, reference, integrations

### 2. Clear Group Naming
- Use action-oriented or noun-based names, not vague labels
- Bad: "Manage", "Usage Guides", "Misc"
- Good: "Installation & Management", "Traffic Policy Recipes", "Platform Integrations"

### 3. Logical Grouping
Avoid catch-all groups. Content should be grouped by:
- **Task type**: Installation, Configuration, Troubleshooting
- **Interface/API**: CRDs, CLI, Gateway API, Ingress
- **Use case**: Security, Load Balancing, Routing

### 4. Maximum Nesting Depth
- Prefer 2 levels of nesting maximum
- If content is buried 3+ levels deep, consider elevating it

### 5. Placement Rules
- Quickstarts near the top, after conceptual overview docs
- Reference docs (API, CRDs, CLI) near the bottom
- Integrations and platform-specific content at the end
- Troubleshooting accessible but not prominent

### 6. Avoid Root-Level Clutter
Only these belong at the section root (before any groups):
- Overview/Introduction
- How It Works
- Architecture
- Quickstart link (if singular)

Move operational content (releasing, local dev setup) into appropriate groups.

## Checklist When Restructuring

1. [ ] Read all pages in the section to understand content
2. [ ] Identify content types: conceptual, tutorial, how-to, reference
3. [ ] Check for orphaned pages not in navigation
4. [ ] Ensure quickstarts are discoverable (near top)
5. [ ] Ensure reference content is findable (clear group name)
6. [ ] Verify no group has 15+ items (split if needed)
7. [ ] Check nesting depth doesn't exceed 2-3 levels
8. [ ] Verify page paths match actual file locations

## Common Patterns

### Product/Feature Section
```
Section
├── Overview
├── How It Works
├── Architecture
├── Quickstarts (group)
├── Installation & Management (group)
├── Core Concepts (group)
├── Guides (group)
├── Reference (group)
└── Integrations (group)
```

### Interface-Heavy Section (like K8s Operator)
```
Section
├── Overview
├── How It Works
├── Architecture
├── Quickstarts (group)
├── Installation & Management (group)
├── Interfaces (group)
│   ├── CRDs
│   ├── Ingress
│   └── Gateway API
├── Guides (group)
├── Task Recipes (group)  ← task-based how-tos
├── Reference (group)
└── Platform Integrations (group)
```

## Anti-Patterns

- **Giant groups**: 20+ items in one group
- **Vague names**: "Other", "More", "Advanced"
- **Mixed content**: Conceptual docs mixed with how-tos in same group
- **Buried essentials**: Troubleshooting nested 3 levels deep
- **Duplicate paths**: Same page appearing multiple times in nav
