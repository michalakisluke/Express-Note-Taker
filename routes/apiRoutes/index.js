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
    // console.log("The req id is " + req.params.id);
    // console.log(typeof req.params.id);
    // console.log(notes);
    const reqParamId =  parseInt(req.params.id);
    console.log(reqParamId);
    console.log(typeof reqParamId);
    const deleteArr = notes.filter(note => {
        return note.id != reqParamId;
    })
    console.log(deleteArr);
    if (deleteArr) {
        res.json(deleteArr);
    } else {
        res.send(404);
    }
});

module.exports = router;
