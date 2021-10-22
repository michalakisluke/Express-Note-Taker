const router = require("express").Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const {getNotes, saveNote, deleteNote} = require('../../public/assets/js/index');
const notes = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
    let results = notes;
    if (req.query) {
      results = getNotes(req.query, results);
    }
    res.json(results);
});

router.post("/api/notes", (req, res) => {

});

module.exports = router;