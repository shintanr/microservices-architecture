module.exports = function(sequelize, DataTypes) {
    const Media = sequelize.define('media', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updadtedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        tableName: "media",

    });
    return media;
};

