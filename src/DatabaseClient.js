import { Client } from 'pg';

export default class DatabaseClient {
    constructor() {
        this.client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
    }

    connect() {
        this.client.connect();
    }

    query(query) {
        this.client.query(query, (error, resolve) => {
            if (error) {
                throw error;
            }
            return resolve.rows;
        })
    }
}