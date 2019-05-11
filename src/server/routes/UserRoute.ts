
import * as express from 'express';
// import User from '../models/user.js';
export class UserRoute {
    private router = express.Router();

    public registerRoute(): express.Router {
        return this.router.get('/', (req, res, next) => {
            req.send('hello worls');
        });
    }
}
