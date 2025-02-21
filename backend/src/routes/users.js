import express from 'express'
import {faker} from '@faker-js/faker'

const router = express.Router();

router.get("/", (req,res) => {
    const count = req.query.count || 5;
    let users =[];

    for (let i=0; i< count ; i++){
        users.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            jobTitle: faker.person.jobTitle(),
        });
    }

    res.json(users);
});

export default router;