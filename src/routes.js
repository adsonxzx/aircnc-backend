const routes = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/uploads')
const upload = multer(uploadConfig)

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')

// Session
routes.post('/sessions', SessionController.store)
routes.get('/sessions', SessionController.show)

// Spot
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)

// Dashboard
routes.get('/dashboard', DashboardController.show)

module.exports = routes