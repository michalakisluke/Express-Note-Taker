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

router.delete("/api/notes/:id", (req, res) => {
    function findById(id, notes) {
        const result = notes.filter(note => note.id === id);
        console.log(result);
        return result;
    }
    const result = findById(req.params.id, notes)
    if (result) {
        console.log('Stops in if')
        res.json(result);
    } else {
        console.log('Stops in else')
        res.send(404);
    }
});

module.exports = router;
