const express = require('express');
const path = require('path');

const app = express();

const browserPath = path.join(
  __dirname,
  'dist',
  'goodwinct',
  'browser'
);

// Serve Angular static files
app.use(express.static(browserPath));

// Angular SPA fallback
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(browserPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Goodwin City running on port ${port}`);
});