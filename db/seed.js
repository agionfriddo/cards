const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  { userName: 'so many', password: '1234', accountType: 'Admin' },
  { userName: 'Barack Obama', password: '1234', accountType: 'Teacher' },
  { userName: 'Max', password: '1234', accountType: 'Student', wins: 2, losses: 1 },
  { userName: 'Bob', password: '1234', accountType: 'Student', wins: 1, losses: 2 },
  { userName: 'Jenny', password: '1234', accountType: 'Student', wins: 2, losses: 1 },
  { userName: 'Susie', password: '1234', accountType: 'Student', wins: 1, losses: 2 }
], user => db.model('users').create(user));

const seedGroups = () => db.Promise.map([
  { name: "Vocab Unit 1", category: 'Vocabulary', user_id: 2 },
  { name: "Othello", category: 'Literature', user_id: 2 },
  { name: "JavaScript Libraries", category: "Computer Programming", user_id: 2 },
  { name: "Fast Math", category: "Mathematics", user_id: 2 },

], group => db.model('groups').create(group));

const seedQuestions = () => db.Promise.map([
  { content: "Synonym of generous", answer: "Altruistic", points: 1, group_id: 1 },
  { content: "Synonym of sharp", answer: "Angular", points: 1, group_id: 1 },
  { content: "Antonym of admiration", answer: "Disdain", points: 1, group_id: 1 },
  { content: "Who's the antagonist of Othello?", answer: "Iago", points: 1, group_id: 2},
  { content: "What is the name of the island the play takes place on?", answer: "Cyprus", points: 1, group_id: 2},
  { content: "What is the name of Othello's wife?", answer: "Desdemona", points: 1, group_id: 2 },
  { content: "The front end framework that uses components and state", answer: "React", points: 1, group_id: 3 },
  { content: "The back end framework for instantiating models", answer: "Sequelize", points: 1, group_id: 3 },
  { content: "This library has one central source of truth", answer: "Redux", points: 1, group_id: 3 },
  { content: "45 + 57", answer: "102", points: 1, group_id: 4 },
  { content: "123 - 35", answer: "88", points: 1, group_id: 4 },
  { content: "457 + 134", answer: "591", points: 1, group_id: 4 },
  { content: "42 * 3", answer: "126", points: 1, group_id: 4 },
  { content: "759 - 125", answer: "634", points: 1, group_id: 4 }
], question => db.model('questions').create(question))

const seedGames = () => db.Promise.map([
  { pointsOfWinner: 10, pointsOfLoser: 5, group_id: 2, winner_id: 3, loser_id: 4 },
  { pointsOfWinner: 10, pointsOfLoser: 9, group_id: 3, winner_id: 3, loser_id: 4 },
  { pointsOfWinner: 10, pointsOfLoser: 2, group_id: 1, winner_id: 5, loser_id: 3 },
  { pointsOfWinner: 10, pointsOfLoser: 4, group_id: 2, winner_id: 6, loser_id: 5 },
  { pointsOfWinner: 10, pointsOfLoser: 1, group_id: 2, winner_id: 5, loser_id: 6 },
  { pointsOfWinner: 10, pointsOfLoser: 8, group_id: 2, winner_id: 4, loser_id: 6 }
], game => db.model('games').create(game));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedGroups)
  .then(groups => console.log(`Seeded ${groups.length} groups OK`))
  .then(seedQuestions)
  .then(questions => console.log(`Seeded ${questions.length} questions OK`))
  .then(seedGames)
  .then(games => console.log(`Seeded ${games.length} games OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
