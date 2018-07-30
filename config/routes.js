const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const restRegistrationController = require('../controllers/restRegistrationController');
const revRegistrationController = require('../controllers/revRegistrationController');

router.get('/', (req, res) => res.render('pages/home'));

router.route('/restaurants')
  .get(restaurantController.index);

router.route('/restaurants/:id')
  .get(restaurantController.show);

// // TODO: Write this!
// router.route('/users/:id')
//   .get(userController.show);

router.route('/restaurant-registrations/new')
  .get(restRegistrationController.new);

router.route('/restaurant-registrations')
  .post(restRegistrationController.create);

router.route('/reviewer-registrations/new')
  .get(revRegistrationController.new);

router.route('/reviewer-registrations')
  .post(revRegistrationController.create);

module.exports = router;
