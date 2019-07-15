const Account = require("../models/Account");

module.exports = {
    async validateAccountId(req, res, next) {
        const id = Number.parseInt(req.params.id, 10);
        if (Number.isInteger(id)) {
            const account = await Account.get(id);
            if (account) {
                req.account = account;
                next();
            } else {
                res.status(404).json({ message: "There's no account with that id" });
            }
        } else {
            res.status(400).json({ message: "invalid account id" });
        }
    },

    validateAccount(req, res, next) {
        if (!req.body) {
            return res.status(400).json({ message: "missing account data" });
        }
        if (!req.body.name) {
            return res
                .status(400)
                .json({ message: "Account must have a name" });
        }
        if (!req.body.budget) {
            return res
                .status(400)
                .json({ message: "Account must have a budget" });
        }
        next();
    },
};
