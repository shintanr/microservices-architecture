'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('media', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
     createdAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     }
   });
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('media');
 }
};
  

 

