const { Router } = require("express");
const Account = require("../models/Account");

const router = new Router();

router.get("/", async (req, res) => {
    const accounts = await Account.get();
    res.status(200).json({ accounts });
});

module.exports = router;