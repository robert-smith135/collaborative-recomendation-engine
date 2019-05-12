
import * as express from 'express';
import * as rawRatingData from '../../../parsed-data/ratings.json';
import RatingRepository from '../repositories/RatingsRepository';

// import User from '../models/user.js';
export class RatingRoute {

    private ratingJsonData: any
    private ratingRepository: RatingRepository;

    constructor() {
        this.ratingJsonData = rawRatingData;
        this.ratingRepository = new RatingRepository();
    }

    private router = express.Router();

    public registerRoute(): express.Router {
        this.router.get('/seed', (req, res, next) => {
            //mongoimport --db test --collection ratings --file ratings.json --jsonArray
            // this.ratingJsonData.slice()
            this.ratingJsonData.forEach(async (thing: any) => {
                await this.ratingRepository.createRating(thing)
                res.send(200)
            })
        });

        this.router.get('/', async (req, res, next) => {
            res.json(await this.ratingRepository.getRatings())
        });

        return this.router;
    }
}
