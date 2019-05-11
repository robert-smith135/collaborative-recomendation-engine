import * as mongoose from 'mongoose';
import { Movie, MovieModel } from '../models/models';

export default class MovieRepository {
    public async getMovie(id: number): Promise<Movie> {
        return MovieModel.findOne({"_id": id});
    }

    public async getMovies(): Promise<Movie[]> {
        return MovieModel.find({});
    }

    public async createMovie(movie: Movie) {
        const userStore = new MovieModel(movie);
        userStore.save();
    }
}