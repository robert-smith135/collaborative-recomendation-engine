
import * as express from 'express';
import * as rawUserData from '../../../parsed-data/users.json';
import { User, UserModel } from '../models/models';
import UserRepository from '../repositories/UserRepository';

// import User from '../models/user.js';
export class UserRoute {

    private userModel: User
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    private router = express.Router();

    public registerRoute(): express.Router {
        this.router.get('/seed', (req, res, next) => {
            rawUserData.forEach((thing: any) => {
                this.userRepository.createUser(thing).then();
            })
            next();
        });

        this.router.get('/', async (req, res, next) => {
            res.json(await this.userRepository.getUsers())
            next()
        });

        return this.router;
    }
}
