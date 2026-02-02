function IssueCard({ issue }) {
  return (
    <div className="card issue-card">
      <div className="issue-header">
        <h3>{issue.title}</h3>
        <span className={`status ${issue.status.toLowerCase()}`}>
          {issue.status}
        </span>
      </div>

      <p className="issue-desc">{issue.description}</p>
    </div>
  );
}

export default IssueCard;
