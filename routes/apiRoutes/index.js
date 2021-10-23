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
    console.log(note);
    notes.push(note);
    res.json(notes);
});

router.delete("/api/note/:id", (req, res) => {
    console.log("It's started")
    function findById(id, notes) {
        const result = notes.filter(note => note.id === id);
        console.log(notes);
        return result;
    }
    const result = findById(req.params.id, notes)
    console.log("It's going");
    if (result) {
        console.log("It's in the loop, but it wont send");
        res.json(result);
    } else {
        console.log("It's in the loop, but there's an error");
        res.send(404);
    }
});

module.exports = router;
