const express = require("express");
const router = express.Router();

// Contact Model
const Commandes = require("../models/commandes");

router.get("/", (req, res) => {
  Commandes.find()
    .then(commandes => res.json(commandes))
    .catch(err => res.send("cannot get"));
});
router.post("/", (req, res) => {
  const newCommande = new Commande({
    idclient:req.body.idclient,
    idbook:req.body.idbook,
    quantitytot: req.body.quantitytot,
    prixtot: req.body.prixtot
    
  });

  newCommande
    .save()
    .then(commandes => res.json(commandes))
    .catch(err => res.send("cannot post"));
});

router.delete("/:id", (req, res) => {
  Commande.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const commandelist = req.body;
  Commande.findOneAndUpdate({ _id: req.params.id }, { $set: { ...commandelist } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;