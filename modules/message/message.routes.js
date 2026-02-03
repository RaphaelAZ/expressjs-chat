const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('message returned! ID: ' + req.params.id);
});

router.delete('/:id', (req, res) => {
  res.send('message deleted! ID: ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('message created!');
});

router.put('/:id', (req, res) => {
  res.send('message updated! ID: ' + req.params.id);
});

module.exports = router;