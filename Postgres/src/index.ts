import express from 'express'
import { Client } from 'pg';
const app = express();

import dotenv from 'dotenv'
dotenv.config();
const link = process.env.PG_URL;

app.use(express.json());

const pgClient = new Client(link)

console.log(link);
pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const aptName = req.body.aptName
    const locality = req.body.locality
    const landmark = req.body.landmark
    const city = req.body.city
    const pincode = req.body.pincode

    try {
        const userCreationQuery = `INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING username; `

        const userCreationQueryResponse = await pgClient.query(userCreationQuery, [username, email, password]);
        const userId = userCreationQueryResponse.rows[0].username;

        console.log(userId);

        const userAddCreationQuery = `INSERT INTO address (aptName, locality, landmark, city, pincode, user_id) VALUES($1, $2 , $3, $4, $5, $6);`
        const userAddCreationQueryResponse = await pgClient.query(userAddCreationQuery, [aptName, locality, landmark, city, pincode, userId]);

        res.json({
            message: " User Created SuckSexFully"
        })
    } catch (e) {
        console.log(e);
        res.json({
            messagae: e
        })
    }
})

app.listen(3000);

