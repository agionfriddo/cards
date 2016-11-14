const express = require('express');
const router = express.Router();

const models = require('APP/db/models');
const Group = models.Group;

router.get('/', (req, res, next) => {
  console.log("YOYOYO")
  Group.findAll({})
  .then(groups => {
    res.json(groups);
  })
  .catch(next);
});

router.get('/:groupId', (req, res, next) => {
  Group.findById(req.params.groupId)
  .then(group => res.send(group))
  .catch(next);
});

router.post('/', (req, res, next) => {
  Group.create({
    name: req.body.name,
    category: req.body.category,
    user_id: req.body.user_id
  })
  .then(group => {
    res.status(201).send(group);
  })
  .catch(next);
});

router.put('/:groupId', (req, res, next) => {
  Group.findById(req.params.groupId)
  .then(group => {
    group.update(req.body)
    .then(updatedGroup => {
      res.status(201).send(updatedGroup);
    })
    .catch(next);
  });
});

router.delete('/:groupId', (req, res, next) => {
  Group.findById(req.params.groupId)
  .then(group => {
    group.destroy()
    .then(() => res.sendStatus(204));
  })
  .catch(next);
});

module.exports = router;
