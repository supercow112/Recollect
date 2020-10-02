const Sequelize = require("sequelize");
const db = require("./database");

// Sample model template
const date = new Date();
const Project = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  deadline: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date(date.getTime() + 10080 * 60000),
  },
  priority: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10,
    },
    defaultValue: 1,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "",
  },
});

module.exports = Project;
