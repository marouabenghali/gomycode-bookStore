const express = require("express");
const router = express.Router();


const BookAdmin = require("../models/booksadmin");

router.get("/", (req, res) => {
  BookAdmin.find()
    .then(booksadmin => res.json(booksadmin))
    .catch(err => res.send("cannot get"));
});
router.post("/", (req, res) => {
  const newBookAdmin = new BookAdmin({
    title: req.body.title,
    img: req.body.img,
    price: req.body.price,
    type: req.body.type,
    label: req.body.label,
    description: req.body.description,
    qt: req.body.qt,
  });

  newBookAdmin
    .save()
    .then(booksadmin => res.json(booksadmin))
    .catch(err => res.send("cannot post"));
});

router.delete("/:id", (req, res) => {
  BookAdmin.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const bookadminlist = req.body;
  BookAdmin.findOneAndUpdate({ _id: req.params.id }, { $set: { ...bookadminlist } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;
