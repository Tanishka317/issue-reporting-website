function Admin({ issues, setIssues }) {
  const updateStatus = (id, newStatus) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id ? { ...issue, status: newStatus } : issue
    );

    setIssues(updatedIssues);
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      {issues.map((issue) => (
        <div key={issue.id} className="card">
          <h3>{issue.title}</h3>

          <select
            value={issue.status}
            onChange={(e) => updateStatus(issue.id, e.target.value)}
          >
            <option>Pending</option>
            <option>Resolved</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Admin;
