import "reflect-metadata";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {ApiRoutes} from "./routes";
import { OrmDataSource } from "../../ormconfig";

OrmDataSource.initialize().then(()=>{
    // create express app and read
    const _express = express();
    const port = process.env.PORT || 3000;
    _express.use(bodyParser.json());
    _express.use(bodyParser.urlencoded({extended: true}));
    
    // find routes then add them to the app
    ApiRoutes.forEach(routes => 
        routes.forEach(route =>{
        _express[route.method](route.path, route.middleware ?? [] , (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    }));

    _express.listen(port, () => console.log(`App listening on port ${port}`));
}).catch(error => console.log("connection error: ", error));