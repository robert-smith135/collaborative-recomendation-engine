import * as mongoose from 'mongoose';
import { Rating, RatingModel } from '../models/models';

export default class RatingsRepository {
    public async getUser(id: number): Promise<Rating> {
        return RatingModel.findOne({"_id": id});
    }

    public async getRatings(): Promise<Rating[]> {
        return RatingModel.find({}).populate('user_id').populate('item_id');
    }

    public async createRating(rating: Rating) {
        const ratingStore = new RatingModel(rating);
        ratingStore.save();
    }

    public async getRatingsByUser(id: number) {
        return RatingModel.find({}).populate('user_id').filter((item: Rating) => {
            return item.user_id._id !== id
        })
    }
}