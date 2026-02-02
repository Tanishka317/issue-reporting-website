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

      <div className="card">
        <form onSubmit={submitHandler}>
          <label>Issue Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">Submit Issue</button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
