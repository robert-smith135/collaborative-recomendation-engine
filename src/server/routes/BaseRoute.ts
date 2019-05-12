
import * as express from 'express';
var path = require("path");

// import User from '../models/user.js';
export class BaseRoute {
    private router = express.Router();

    public registerRoute(): express.Router {
        return this.router.get('/', (req, res, next) => {
            res.sendFile(path.resolve(__dirname, '../../../../public/index.html'));
        });
    }
}