const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('User returned! ID: ' + req.params.id);
});

router.delete('/:id', (req, res) => {
  res.send('User deleted! ID: ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('User created!');
});

router.put('/:id', (req, res) => {
  res.send('User updated! ID: ' + req.params.id);
});

module.exports = router;