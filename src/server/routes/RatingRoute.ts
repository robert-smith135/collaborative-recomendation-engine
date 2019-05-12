
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

        this.router.get('/user-ratings/:id', async (req, res, next) => {
            let ratings = await this.ratingRepository.getRatings()
            res.json(ratings.filter((item) => {
                if(item.user_id && item.user_id._id){
                    return item.user_id._id == req.params.id;
                }
                return false
            }).map((item) => {
                return {
                    title: item.item_id.movie_title,
                    rating: item.rating
                }
            }))
        });

        return this.router;
    }
}
