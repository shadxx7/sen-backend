const express = require("express");
const facultyController = require("../controllers/faculty");

const router = express.Router();

router.get("/:facultyId", facultyController.getFaculty);
router.get("/search/:query", facultyController.searchFaculty);
router.post("/add", facultyController.addFaculty);
router.put("/update", facultyController.updateFaculty);
router.delete("/:facultyId", facultyController.deleteFaculty);

module.exports = router;
