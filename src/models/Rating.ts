import { 
    Model, 
    Column, 
    Table, 
    HasMany, 
} from "sequelize-typescript";

export interface IUser {
    id: number;
    item_id: number;
    rating: number;
    timestamp: string;
}

@Table
export default class Ratings extends Model<Ratings> {
    @Column
    id: number;

    @Column
    item_id: number;

    @Column
    rating: number;

    @Column
    timestamp: string;
}