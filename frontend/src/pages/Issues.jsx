import { useState } from "react";
import IssueCard from "../components/IssueCard";

function Issues({ issues }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  // filtering logic
  const filteredIssues = issues.filter((issue) => {
    const matchesStatus =
      statusFilter === "All" || issue.status === statusFilter;

    const matchesSearch = issue.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container">
      <h2>Reported Issues</h2>

      {/* FILTER BAR */}
      <div style={{ marginBottom: "20px" }}>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>

        <input
          type="text"
          placeholder="Search by title..."
          style={{ marginLeft: "10px", width: "250px" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredIssues.length === 0 && (
        <p>No matching issues found.</p>
      )}

      {filteredIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default Issues;
