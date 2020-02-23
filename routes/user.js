const express = require('express');
const router = express.Router();
import { adminLogin } from "../controller/user"
import {decrypt,genPassword} from "./../utils/util"
const { exec } = require('../db/mysql')
import {SuccessModel, ErrorModel} from "../baseClass/baseClass"

router.post('/adminlogin',adminLogin);

module.exports = router;