const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');

let pendingCommands = {}; // comando por usuário

// Painel envia comando
router.post('/send', authMiddleware, (req, res) => {
  const { type, payload } = req.body;
  if (!type) return res.status(400).json({ message: 'Tipo do comando ausente.' });

  const userId = req.user.id;
  pendingCommands[userId] = { type, payload };

  res.json({ message: 'Comando armazenado com sucesso.' });
});

// Extensão consulta comandos
router.get('/receive', authMiddleware, (req, res) => {
  const userId = req.user.id;
  const command = pendingCommands[userId];

  if (command) {
    delete pendingCommands[userId];
    res.json(command);
  } else {
    res.status(204).send(); // nenhum comando
  }
});

module.exports = router;
