const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.get('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  const filters = req.query;

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Response'
    });
    return
  }

  controller.get(filters)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        data: err.message
      })
    })


});

router.get('/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const id = req.params.id;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid id'
    });
    return
  }

  controller.getById(id)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        data: err.message
      })
    })

});

router.post('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Response'
    });
    return
  }

  controller.post(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        data: err.message
      })
    })

});

router.put('/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const id = req.params.id;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Response'
    });
    return
  }

  controller.put(id, req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        data: err.message
      })
    })


});

router.delete('/:resource/:id', (req,res)=> {
  const resource = req.params.resource;
  const id = req.params.id;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Response'
    });
    return
  }
  controller.delete(id)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        data: err.message
      })
    })
});

module.exports = router;