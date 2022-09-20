//Express imports
const express = require('express');
const bodyParser = require('body-parser');

const notesRoutes = require('./routes/notes-routes');

const app = express();

app.use('/api/notes', notesRoutes);

//port
app.listen(3000);