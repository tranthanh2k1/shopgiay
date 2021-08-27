const express = require("express");
const router = express.Router();

import { signup, signin, signout } from "../controllers/auth";
import { userSignupValidator } from "../validator";

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);

module.exports = router;
