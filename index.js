const express = require('express');

const app = express();

const PORT = 8003;
const HOST = "localhost";

app.use(express.static('dist'));

app.listen(PORT, HOST, () => {
    console.log(`Host Started at ${HOST}:${PORT}`)
});