const router = require("express").Router();
const notes = require("../../db/db.json");

// Populate previous notes on left side of screen
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Write new note
router.post("/api/notes", (req, res) => {
    const note = req.body;
    note.id = notes.length;
    notes.push(note);
    res.json(notes);
});

// Delete note from tab on left
router.delete("/api/notes/:id", (req, res) => {
    const reqParamId =  parseInt(req.params.id);
    const deleteArr = notes.filter(note => {
        return note.id != reqParamId;
    })
    if (deleteArr) {
        res.json(deleteArr);
    } else {
        res.send(404);
    }
});

module.exports = router;
