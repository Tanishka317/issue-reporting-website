function IssueCard({ issue }) {
  return (
    <div className="card">
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>

      <span className={`status ${issue.status.toLowerCase()}`}>
        {issue.status}
      </span>
    </div>
  );
}

export default IssueCard;
