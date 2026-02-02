import { useState } from "react";

function ReportIssue({ issues, setIssues }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newIssue = {
      id: issues.length + 1,
      title,
      description,
      status: "Pending",
    };

    setIssues([newIssue, ...issues]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <h2>Report an Issue</h2>

      <form onSubmit={submitHandler}>
        <label>Issue Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}

export default ReportIssue;
