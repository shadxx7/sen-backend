const express = require("express");
const collegeController = require("../controllers/college");

const router = express.Router();

router.get("/:collegeId", collegeController.getCollege);
router.get("/search/:query", collegeController.searchCollege);
router.post("/add", collegeController.addCollege);
router.put("/update", collegeController.updateCollege);
router.delete("/:collegeId", collegeController.deleteCollege);

module.exports = router;
