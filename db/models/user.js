const Sequelize = require('sequelize');
const db = require('APP/db');

const User = db.define('users', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accountType: {
    type: Sequelize.ENUM('Teacher', 'Student', 'Admin'),
    allowNull: false
  },
  wins: {
    type: Sequelize.INTEGER
  },
  losses: {
    type: Sequelize.INTEGER
  }
}, {
  getterMethods: {
    record: (user) => {
      return user.wins + '-' + user.loses
    }
  }
});

module.exports = User;
