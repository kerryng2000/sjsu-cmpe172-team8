const router = require('express').Router();
let ParkingSpace = require('../models/ParkingSpace.model');

router.route('/').get((req, res) => {
  ParkingSpace.find()
    .then(ParkingSpaces => res.json(ParkingSpaces))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const FirstName = req.body.FirstName;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newParkingSpace = new ParkingSpace({
    FirstName,
    description,
    duration,
    date,
  });

  newParkingSpace.save()
  .then(() => res.json('ParkingSpace added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  ParkingSpace.findById(req.params.id)
    .then(ParkingSpace => res.json(ParkingSpace))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
  ParkingSpace.find()
    .then(ParkingSpaces => res.json(ParkingSpaces))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
  ParkingSpace.findByIdAndDelete(req.params.id)
    .then(() => res.json('ParkingSpace deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  ParkingSpace.findById(req.params.id)
    .then(ParkingSpace => {
      ParkingSpace.FirstName = req.body.FirstName;
      ParkingSpace.description = req.body.description;
      ParkingSpace.duration = Number(req.body.duration);
      ParkingSpace.date = Date.parse(req.body.date);

      ParkingSpace.save()
        .then(() => res.json('ParkingSpace updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;