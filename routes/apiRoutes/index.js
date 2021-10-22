const router = require("express").Router();
const notes = require("../../db/db.json");

// Populate previous notes on left side of screen
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Populate previous notes info on right side of screen
router.get("/:id", (req, res) => {

});

// Write new note
router.post("/api/notes", (req, res) => {
    const note = req.body;
    req.body.id = notes.length;
    notes.push(note);
    res.json(notes);
});


// Get text and title from note on the left

// Delete a note
// router.delete("/api/note/:id", (req, res) => {

// });

module.exports = router;
