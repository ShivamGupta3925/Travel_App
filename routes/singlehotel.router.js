const express = require('express');
const router =express.Router();

const singlehotelHandler=require("../controllers/singleHotelController")

//localhost:3500/api/hotels/6657207f82df188e2ac1872a
router.route("/:id")
.get(singlehotelHandler)

module.exports=router;