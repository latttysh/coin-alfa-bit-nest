import { Column, DataType, Model, Table } from "sequelize-typescript";

// @ts-ignore
@Table({tableName: "wallet"})
export class Wallet extends Model{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false, allowNull: true})
  name: string;

  @Column({type: DataType.STRING, unique: false, allowNull: true})
  address: string;
}