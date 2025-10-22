const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'API is running fine!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

