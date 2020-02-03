const express = require('express');
const app = express.Router();
const { Tournées } = require('../models/tournées');


app.get('/', function(req, res) {
    try {
        Tournées.findAll();
      } catch (err) {
        res.status(500).json(err);
      }
  });

  app.post("/api/v1", async (req, res) => {
    const { nameActs, describes, placeNumber } = req.body;
    const artiste = await Tournées.create({
      nameActs,
      describes,
      placeNumber
    });
    res.status(200).send({ artiste });
  });