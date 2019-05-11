import * as mongoose from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';

export class Movie extends Typegoose {
    @prop()
    _id: number;

    @prop()
    movie_title?: string;

    @prop()
    release_date?: string;

    @prop()
    video_release_date?: string;

    @prop()
    IMDb_URL?: string;

    @prop()
    unknown?: boolean;

    @prop()
    Action?: boolean;

    @prop()
    Adventure?: boolean;

    @prop()
    Animation?: boolean;

    @prop()
    Childrens?: boolean;

    @prop()
    Comedy?: boolean;

    @prop()
    Crime?: boolean;

    @prop()
    Documentary?: boolean;

    @prop()
    Drama?: boolean;

    @prop()
    Dantasy?: boolean;

    @prop()
    Film_noir?: boolean;

    @prop()
    Horror?: boolean;

    @prop()
    Musical?: boolean;

    @prop()
    Mystery?: boolean;

    @prop()
    Romance?: boolean;

    @prop()
    Sci_Fi?: boolean;

    @prop()
    Thriller?: boolean;

    @prop()
    War?: boolean;

    @prop()
    Western?: boolean;
}

export class User extends Typegoose {
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
  
export class Rating extends Typegoose {
    @prop({ ref: User, required: true })
    user_id: Ref<User>;

    @prop({ ref: Movie, required: true })
    item_id: Ref<Movie>;

    @prop()
    rating: number;

    @prop()
    timestamp?: string;
}
  
export const RatingModel = new Rating().getModelForClass(Rating, {
    existingMongoose: mongoose,    
    schemaOptions: {collection: 'ratings'}
});
export const MovieModel = new Movie().getModelForClass(Movie, {
    existingMongoose: mongoose,    
    schemaOptions: {collection: 'movies'}
});
export const UserModel = new User().getModelForClass(User, {
    existingMongoose: mongoose,    
    schemaOptions: {collection: 'users'}
})