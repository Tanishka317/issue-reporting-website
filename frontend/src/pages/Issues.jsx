import { useState } from "react";
import IssueCard from "../components/IssueCard";

function Issues({ issues }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

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
      <div className="filter-bar">
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default Issues;
