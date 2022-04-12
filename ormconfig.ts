import { DataSource } from "typeorm";

export const OrmDataSource = new DataSource( {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "mysql1234",
    "database": "mysql",
    "synchronize": true,
    "entities": [
      "src/entities/*.ts"
    ]
});