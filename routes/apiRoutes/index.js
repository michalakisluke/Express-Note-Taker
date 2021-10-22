const router = require("express").Router();
const notes = require("../../db/db.json");

// Populate previous notes on left side of screen
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Populate previous notes info on right side of screen
router.get("/:id", (req, res) => {
    function findById(id, notes) {
        const result = notes.filter(note => note.id === id);
        return result;
    }
    const result = findById(req.params.id, notes)
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// Write new note
// Need to add something to assign id to these new notes
router.post("/api/notes", (req, res) => {
    const note = req.body;
    notes.push(note);
    res.json(notes);
});

// Delete a note
// router.delete("/api/note/:id", (req, res) => {

// });

module.exports = router;
