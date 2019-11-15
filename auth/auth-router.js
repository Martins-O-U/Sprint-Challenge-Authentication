const router = require('express').Router();

const db = require('./auth-router-helper')
const bcrypt = require('bcryptjs')

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  db.addUser(user)
      .then(saved => {
          res.status(201).json(saved)
      })
      .catch(error => {
          res.status(500).json(error.message);
      })
})

module.exports = router;
