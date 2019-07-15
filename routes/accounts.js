const { Router } = require("express");
const Account = require("../models/Account");

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const accounts = await Account.get();
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "Unable to get accounts from database" });
    }

});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const accounts = await Account.get(id);
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "Unable to get account from database" });
    }

});

router.post("/", async (req, res) => {
    try {
        const accounts = await Account.insert(req.body);
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "There was a problem creating new account" })
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.update(id, req.body);
        res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ error: "Unable to update account" })
    }
});

module.exports = router;