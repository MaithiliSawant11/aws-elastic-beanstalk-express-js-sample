const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Aaj aagye wapis mat aana'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
