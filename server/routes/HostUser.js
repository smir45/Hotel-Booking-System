const express = require("express");
const router = express.Router();
const {
  //   findAll,
  CreateHostUser,
  GetHostUser,
  GetAllHosts,
  //   updateUser,
  //   deleteUser,
  //   userLogin,
} = require("../controllers/HostUser.controller");

router.post("/", CreateHostUser);
router.get("/:uuid",GetHostUser);
router.get("/", GetAllHosts);

module.exports = router;
