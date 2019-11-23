import { DataTypes } from "sequelize/types";
module.exports = function (sequelize, DataTypes) {
    const employee = sequelize.define("employees", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hiredate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return employee;
}