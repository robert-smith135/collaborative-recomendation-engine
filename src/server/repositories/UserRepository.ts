import * as mongoose from 'mongoose';
import { User, UserModel } from '../models/models';

export default class UserRepository {
    public async getUser(id: number): Promise<User> {
        return UserModel.findOne({"userId": id});
    }

    public async getUsers(): Promise<User[]> {
        return UserModel.find({});
    }

    public async createUser(user: User) {
        const userStore = new UserModel(user);
        userStore.save();
    }

    public async getRatingsForUser(id: number){
        return UserModel.findOne({"userId": id});
    } 
}