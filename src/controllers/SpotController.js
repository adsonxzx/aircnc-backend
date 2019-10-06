const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {

  async index(req, res) {
    try {
      const {tech}= req.query
      const spots = await Spot.find({techs: tech})
      res.send(spots)
    } catch (e) {
      res.status(404).send({ error: "Spots nao encontrado"})
    }
  },

  async store(req, res){
    const {price, company, techs} = req.body
    const { filename} = req.file
    const {user_id} = req.headers

    try {
      const user = await User.findById(user_id)

      if(!user) {
        return res.status(400).send({error: "usuario náo existe"})
      }

      const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        price,
        company,
        techs: techs.split(',').map(tech => tech.trim())
      })

      res.send(spot)
    } catch (e) {
      res.status(500).send({error: "error ao cadastrar spot"})
    }
    res.send(req.body)
  }
}