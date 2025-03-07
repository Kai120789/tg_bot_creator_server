import sequelize from '../db'
import { Sequelize, DataTypes, Model, Optional } from 'sequelize'

interface UserAttributes {
  id: number;
  login: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class Users extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public login!: string;
  public password!: string;
}

Users.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
  },
  { sequelize, tableName: 'users' }
);

export default { Users }