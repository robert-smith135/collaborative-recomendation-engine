import * as mongoose from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';

class Movie extends Typegoose {
    @prop()
    _id: number;

    @prop()
    ovie_title?: number;

    @prop()
    release_date?: string;

    @prop()
    video_release_date?: string;

    @prop()
    IMDb_URL?: string;

    @prop()
    unknown?: boolean;

    @prop()
    action?: boolean;

    @prop()
    adventure?: boolean;

    @prop()
    animation?: boolean;

    @prop()
    childrens?: boolean;

    @prop()
    comedy?: boolean;

    @prop()
    crime?: boolean;

    @prop()
    documentary?: boolean;

    @prop()
    drama?: boolean;

    @prop()
    fantasy?: boolean;

    @prop()
    film_noir?: boolean;

    @prop()
    horror?: boolean;

    @prop()
    musical?: boolean;

    @prop()
    mystery?: boolean;

    @prop()
    romance?: boolean;

    @prop()
    sci_Fi?: boolean;

    @prop()
    thriller?: boolean;

    @prop()
    war?: boolean;

    @prop()
    western?: boolean;
}

class User extends Typegoose {
    @prop()
    _id?: number;

    @prop()
    age?: number;

    @prop()
    sex?: string;

    @prop()
    occupation?: string;

    @prop()
    zipcode?: string;
}
  
class Rating extends Typegoose {
    @prop({ ref: User })
    user?: Ref<User>;

    @prop()
    item_id?: number;

    @prop({ ref: Movie })
    movie?: Ref<Movie>;

    @prop()
    rating?: number;

    @prop()
    timestamp?: string;
}
  
const ratingModel = new Rating().getModelForClass(Rating);
const movieModel = new Movie().getModelForClass(Movie);
const userModel = new User().getModelForClass(User);

export {
    ratingModel,
    movieModel,
    userModel
};