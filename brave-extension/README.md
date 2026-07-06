# Brave extension

This extension replaces Brave's new tab page with
`https://tab.irespaldiza.com`.

## Installation

1. Open `brave://extensions` in Brave.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `brave-extension` directory from this repository.
5. If Brave asks you to confirm the new tab page change, accept it and keep the
   extension enabled.

If another extension controls the new tab page, disable it to avoid conflicts.

## Home page and startup

These options do not require an extension:

- In `brave://settings/appearance`, set the home button URL to
  `https://tab.irespaldiza.com`.
- In `brave://settings/getStarted`, select **Open a specific page or set of
  pages** and add `https://tab.irespaldiza.com`.

## Updating

After changing files in this directory, open `brave://extensions` and click the
reload button for **Tab Start Page**.
