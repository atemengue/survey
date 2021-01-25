/** @format */

module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define('question', {
    idQuestion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    intitule: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
  return Question;
};
