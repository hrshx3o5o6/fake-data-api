import express from "express";
import { faker } from "@faker-js/faker"

const router = express.Router();

router.get("/", (req, res) => {
    const count = req.query.count || 5;
    let transactions = [];

    for (let i = 0; i < count; i++) {
        transactions.push({
            id: faker.string.uuid(),
            amount: faker.finance.amount(),
            currency: faker.finance.currencyCode(),
            date: faker.date.recent().toISOString(),
            status: faker.helpers.arrayElement(["pending", "completed", "failed"]),
        });
    }

    res.json(transactions);
});

export default router;