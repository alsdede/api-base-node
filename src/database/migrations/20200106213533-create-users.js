module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            email: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
