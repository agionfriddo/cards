const express = require('express');
const router = express.Router();

const models = require('APP/db/models');
const Question = models.Question;

router.get('/', (req, res, next) => {
  Question.findAll({})
  .then(questions => {
    res.json(questions);
  })
  .catch(next);
});

router.get('/:groupId', (req, res, next) => {
  Question.findAll({ where: { group_id: req.params.groupId } })
  .then(questions => {
    res.json(questions);
  })
  .catch(next);
});

router.get('/:questionId', (req, res, next) => {
  Question.findById(req.params.questionId)
  .then(question => {
    res.json(question);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Question.create(req.body.question)
  .then(question => {
    res.status(201).send(question);
  })
  .catch(next);
});

router.put('/:questionId', (req, res, next) => {
  Question.findById(req.params.questionId)
  .then(question => {
    question.update(req.body)
    .then(updatedQuestion => {
      res.status(201).send(updatedQuestion);
    })
    .catch(next);
  });
});

router.delete('/:questionId', (req, res, next) => {
  Question.findById(req.params.questionId)
  .then(question => {
    question.destroy()
    .then(() => res.sendStatus(204));
  })
  .catch(next);
});

module.exports = router;
