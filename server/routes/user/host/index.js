const express = require("express");
const router = express.Router();
const {
  //   findAll,
  CreateHostUser,
  GetHostUser,
  GetAllHosts,
  UpdateAHost,
  DeleteAHost,
  Login,
} = require("../../../controllers/hostUser");

router.post("/", CreateHostUser);
router.get("/:uuid",GetHostUser);
router.get("/", GetAllHosts);
router.post("/login", Login);
router.put("/update/:uuid", UpdateAHost)
router.delete("/delete/:uuid", DeleteAHost)
module.exports = router;
