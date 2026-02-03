const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String
    },
    status: {
      type: String,
      default: "Open"
    },
    createdBy: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
