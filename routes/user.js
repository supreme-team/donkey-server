const express = require('express');
const router = express.Router();
import { adminLogin } from "../controller/user"

router.get('/', (req, res, next)=>{
    res.render("index.html")
});

module.exports = router;