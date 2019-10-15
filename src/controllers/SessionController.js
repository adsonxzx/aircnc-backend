const User = require('../models/User')

module.exports = {
  async store(req, res){
    try {
      const {email} = req.body

      let user = await User.findOne({email})

      if(!user) {
        user = new User({email})
        await user.save()
      }

      res.send(user)
    } catch (e) {
      res.status(500).send({error: "Error ao cadastrar usuário"})
    }
  },

  async show(req, res) {
    try {
      const users = await User.find({})
      res.send(users)
    } catch (e) {
      res.status(404).send({error: "Nenhum usuario encontrado"})
    }
  }
}