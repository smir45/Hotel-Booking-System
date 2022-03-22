const express = require("express");
const router = express.Router();
const {createAdmin, getAllAdmin} = require('../../../controllers/admin')

router.post("/", createAdmin);
// router.get("/:uuid", GetHostUser);
router.get("/", getAllAdmin);
// router.post("/login", Login);
// router.put("/update/:uuid", UpdateAHost)
// router.delete("/delete/:uuid", DeleteAHost)
module.exports = router;
