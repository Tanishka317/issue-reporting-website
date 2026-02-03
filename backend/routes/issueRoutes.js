const express = require("express");
const router = express.Router();
const { createIssue, getIssues } = require("../controllers/issueController");

// POST /api/issues → create issue
router.post("/", createIssue);

// GET /api/issues → get all issues
router.get("/", getIssues);

module.exports = router;
