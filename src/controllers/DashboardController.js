const Spot = require('../models/Spot')

module.exports = {

  // mosta a lista de spots do usuário
  async show(req, res) {
    const {user_id} = req.headers
    try {
      const mySpots = await Spot.find({user: user_id})
      res.send(mySpots)
    } catch (e) {
      res.status(500)
    }
  }
}