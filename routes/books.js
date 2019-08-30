const express = require("express");
const router = express.Router();

// Contact Model
const Books = require("../models/books");


router.get("/", (req, res) => {
  Books.find()
    .then(books => res.json(books))
    .catch(err => res.send("cannot get"));
});
router.post("/", (req, res) => {
  const newBook = new Books({
    title: req.body.title,
    image: req.body.image,
    auteur: req.body.auteur,
    bookType: req.body.bookType,
    quantity: req.body.quantity,
    price: req.body.price,
    rate: req.body.rate,
    label: req.body.label,
    description: req.body.description
  })

  newBook.save()
    .then(books => res.json(books))
    .catch(err => res.send("cannot post"));
});

router.delete("/:id", (req, res) => {
  Book.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const booklist = req.body;
  Book.findOneAndUpdate({ _id: req.params.id }, { $set: { ...booklist } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;