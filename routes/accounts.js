const { Router } = require("express");
const Account = require("../models/Account");
const { validateAccountId, validateAccount } = require("../middleware");


const router = new Router();

router.get("/", async (req, res) => {
    try {
        const accounts = await Account.get();
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "Unable to get accounts from database" });
    }
});

router.get("/:id", validateAccountId, async (req, res) => {
    try {
        const { account } = req;
        res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ error: "Unable to get account from database" });
    }
});

router.post("/", validateAccount, async (req, res) => {
    try {
        const accounts = await Account.insert(req.body);
        res.status(201).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: "There was a problem creating new account" })
    }
});

router.put("/:id", validateAccountId, async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Missing account data" });
        }
        const { id } = req.params;
        const account = await Account.update(id, req.body);
        res.status(200).json({ account });
    } catch (error) {
        res.status(500).json({ error: "Unable to update account" })
    }
});

router.delete("/:id", validateAccountId, async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Account.remove(id);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: "Unable to update account" })
    }
});

module.exports = router;