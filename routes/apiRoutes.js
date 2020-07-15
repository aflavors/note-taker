// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var path = require("path");
var fs = require("fs");
const { v4: uuidv4 } = require('uuid');
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
app.post("/api/notes", function(req, res){
    let note = (req.body)
    let id = uuidv4(); 
    note.id = id
    let notesArray;
    let savedNotes = fs.readFileSync("./db/db.json","utf-8");
    notesArray = JSON.parse(savedNotes);
    notesArray.push(note);
    
    fs.writeFile("./db/db.json", JSON.stringify(notesArray), function(error){
        if (error) {
        console.log(error);
        }
        console.log(notesArray); 
        return res.json(notesArray); 
    });
})

//DELETE /api/notes/:id from db.json
};