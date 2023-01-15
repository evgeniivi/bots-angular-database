const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();


app.use('/', express.static('dist', { index: false }));
app.get('/*', (req, res) => {
   res.sendFile('index.html', { root: './dist/' });
});


app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});