// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// ==============================================================================
// CONFIGURATION
// ==============================================================================
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// ==============================================================================
// ROUTER
// ==============================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// ==============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });