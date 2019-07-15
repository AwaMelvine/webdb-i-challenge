const { Router } = require("express");
const Account = require("../models/Account");

const router = new Router();

router.get("/", async (req, res) => {
    const accounts = await Account.get();
    res.status(200).json({ accounts });
});

router.post("/", async (req, res) => {
    try {
        const accounts = await Account.insert(req.body);
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "There was a problem creating new account" })
    }
});

module.exports = router;