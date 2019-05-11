
import * as express from 'express';
import * as rawMovieData from '../../../parsed-data/movies.json';
import { User, UserModel } from '../models/models';
import MovieRepository from '../repositories/MovieRepository';

// import User from '../models/user.js';
export class MovieRoute {

    private userModel: User
    private movieRepository: MovieRepository;

    constructor() {
        this.movieRepository = new MovieRepository();
    }

    private router = express.Router();

    public registerRoute(): express.Router {
        this.router.get('/seed', (req, res, next) => {
            rawMovieData.forEach((thing: any) => {
                this.movieRepository.createMovie(thing)
            })
            next();
        });

        this.router.get('/', async (req, res, next) => {
            res.json(await this.movieRepository.getMovies())
            next()
        });

        return this.router;
    }
}
