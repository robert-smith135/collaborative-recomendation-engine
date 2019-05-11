import * as express from "express";
import * as bodyParser from "body-parser";
var path = require("path");


// import { PostRoute } from "./routes/PostRoute";
import { UserRoute } from "./routes/UserRoute";
import { BaseRoute } from "./routes/BaseRoute";
// import { SignupRoute } from "./routes/SignupRoute";
// import { AuthRoute } from "./routes/AuthRoute";

export class App {

	private express: express.Application;
	private db_name: string;
	private router: express.Router;

	constructor() {
		this.express = express();
		this.router = express.Router();
		this.db_name = 'blog';
		this.connectDatabase();
		this.registerMiddleware();
		this.registerRoutes();
		this.registerErrorHandlers();
	}

	private connectDatabase(): void {
		console.log('Connecting to database...');
	}

	private registerMiddleware(): void {
		this.express.use(bodyParser.json());
		//setup CORS and options response
		this.express.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, Z-Requested-With, Content-Type, Accept, Authorization");

			if (req.method === "OPTIONS") {
				res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,GET");
				return res.status(200).json({});
			};

			next();
		});
	}

	private registerRoutes(): void {
		console.log('thing is ', path.resolve(__dirname, '../public'));
		this.express.use(express.static(path.resolve(__dirname, '../public')))
		this.express.use("/", new BaseRoute().registerRoute());
		this.express.use("/users", new UserRoute().registerRoute());
	}

	private registerErrorHandlers(): void {
		this.express.use((req, res, next) => {
			var err: any = new Error("Not Found");
			err.message = err.message;
			err.status = 404
			next(err);
		});

		this.express.use((err,req,res,next) => {
			res.status(err.status || 500);
			res.json({
				error: {
					message: err.message || err
				}
			});
		});
	}
}