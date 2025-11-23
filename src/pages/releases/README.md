# Release Notes

This directory contains release notes for Summit AI Notes, rendered with a beautiful template that includes the logo, typography, and brand colors.

## Creating a New Release

1. Copy `_template.mdx` to a new file with the version number (e.g., `1.2.mdx`)
2. Update the frontmatter:
   ```yaml
   ---
   layout: ../../layouts/ReleaseLayout.astro
   version: "1.2"
   date: "2025-01-20"
   title: "Summit AI Notes 1.2"
   ---
   ```
3. Fill in the release notes content using the sections:
   - **✨ New Features** - Major new capabilities
   - **🐛 Bug Fixes** - Issues that were resolved
   - **🔧 Improvements** - Enhancements and optimizations

4. Use this format for items:
   ```markdown
   - **Feature/Fix name** - Brief description of what it does
   ```

## Accessing Release Notes

Release notes are available at:
- `/releases/1.1` - Version 1.1 release notes
- `/releases/1.2` - Version 1.2 release notes
- etc.

## Template Features

The release notes template includes:
- ✅ Summit AI Notes logo in the header
- ✅ Version badge with color styling
- ✅ Formatted release date
- ✅ Beautiful typography using Tailwind's prose plugin
- ✅ Organized sections with emojis
- ✅ Card-based layout with proper spacing
- ✅ Links back to homepage and support
- ✅ Responsive design for all screen sizes
- ✅ Dark mode support

## Example

See `1.1.mdx` for a complete example of a release notes page.
