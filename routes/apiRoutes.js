// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var path = require("path");
var fs = require("fs");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
//GET /api/notes to read db.json
app.get("/api/notes", function(req, res) {

    fs.readFile("./db/db.json", "utf-8", function(error, data){
      if (error) {
        return console.log(error);
      }
      return res.json(JSON.parse(data));
    });
  
  });

//POST /api/notes add new note to db.json

//DELETE /api/notes/:id from db.json
};