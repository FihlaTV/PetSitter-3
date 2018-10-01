const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// Routes
require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);



app.listen(port, () => console.log(`Listening on port ${port}`));

//MongoDB Require all models (For Quering)
var db = require("./models");

