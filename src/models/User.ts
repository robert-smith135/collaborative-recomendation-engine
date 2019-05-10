import { 
    Model, 
    Column, 
    Table, 
    HasMany, 
} from "sequelize-typescript";

export interface IUser {
    id: number;
    age: number;
    sex: String;
    occupation: string;
    zipcode: string;
}

@Table
export default class Users extends Model<Users> {
    @Column
    id: number;

    @Column
    age: number;

    @Column
    sex: String;

    @Column
    occupation: string;

    @Column
    zipcode: string;
}