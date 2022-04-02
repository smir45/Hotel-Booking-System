'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Room', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.STRING
            },
            catagory: {
                type: Sequelize.STRING
            },
            beds: {
                type: Sequelize.INTEGER
            },
            ac: {
                type: Sequelize.BOOLEAN
            },
            occupied: {
                type: Sequelize.BOOLEAN
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Room');
    }
};