'use strict';

const express = require('express');
const app = express();

app.get('/math/circle/:r', (req, res) => {
  
  const PI = 3.14
  const r = Number(req.params.r);

  const area = PI * r * r;
  const circumference = 2 * PI * r;

  const result = {"area": area,"circumference": circumference}
  res.json(result);
});

app.get('/math/rectangle/:w/:h', (req, res) => {
  
  const w = Number(req.params.w);
  const h = Number(req.params.h);

  const area = w * h;
  const perimiter = 2 * w + 2 * h;

  const result = {"area": area,"perimiter": perimiter}
  res.json(result);
});

app.get('/math/power/:base/:exponent', (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);
  const passRoot = req.query.root === 'true';

  if (Number.isNaN(base)) {
    return res.status(400).json({ error: "invalid input." });
  }

  if (Number.isNaN(exponent)) {
    return res.status(400).json({ error: "invalid input." });
  }

  const result = Math.pow(base, exponent);
  const root = Math.sqrt(base);

  if (passRoot) {
    return res.json({ result, root });
  }

  return res.json({ result });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});