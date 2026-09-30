# Notes for Claude

- **Update the build stamp on every change to `index.html`.** It is the line under the
  page title (`<h1>⚔️ Storm Manager</h1><div class="muted" ...>build YYYY-MM-DD HH:MM UTC · short description</div>`,
  near the top of `<body>`). Set the current UTC date and time and a few words on what
  changed, so it's obvious which version is live.
- The maintainer may not be able to push from Claude sessions. If a push fails with a 403,
  hand over the updated file instead (`index.html` is the whole app).
