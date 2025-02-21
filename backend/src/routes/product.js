import express from "express"
import { faker } from "@faker-js/faker"

const router = express.Router();

router.get("/", (req, res) => {
    const count = req.query.count || 5;
    let products = [];

    for (let i = 0; i < count; i++) {
        products.push({
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            category: faker.commerce.department(),
        });
    }

    res.json(products);
});

export default router;