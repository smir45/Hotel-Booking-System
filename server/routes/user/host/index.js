const express = require("express");
const router = express.Router();
const {
  //   findAll,
  CreateHostUser,
  GetHostUser,
  GetAllHosts,
  UpdateAHost,
  DeleteAHost
  //   userLogin,
} = require("../../../controllers/hostUser");

router.post("/", CreateHostUser);
router.get("/:uuid",GetHostUser);
router.get("/", GetAllHosts);
router.put("/update/:uuid", UpdateAHost)
router.delete("/delete/:uuid", DeleteAHost)
module.exports = router;
