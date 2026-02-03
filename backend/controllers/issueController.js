const Issue = require("../models/Issue");

// Create a new issue
const createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json(issue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all issues
const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createIssue, getIssues };
