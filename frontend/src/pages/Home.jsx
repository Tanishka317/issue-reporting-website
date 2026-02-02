function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Issue Reporting Platform</h1>
        <p>
          Report issues, track progress, and ensure faster resolution
          with a transparent and simple system.
        </p>

        <div className="hero-buttons">
          <a href="/report" className="primary-btn">Report an Issue</a>
          <a href="/issues" className="secondary-btn">View Issues</a>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>120+</h2>
          <p>Issues Reported</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Resolution Rate</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>Simple Reporting</h3>
          <p>Users can report issues quickly with a clean form.</p>
        </div>

        <div className="feature-card">
          <h3>Live Tracking</h3>
          <p>Track issues as Pending or Resolved in real time.</p>
        </div>

        <div className="feature-card">
          <h3>Admin Dashboard</h3>
          <p>Admins manage issues efficiently from one place.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="workflow">
        <h2>How It Works</h2>

        <div className="workflow-steps">
          <div className="step">
            <span>1</span>
            <p>Report an issue</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Admin reviews</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Issue resolved</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Built for Transparency & Efficiency</h2>
        <p>Designed as a modern solution for issue management.</p>
      </section>

    </div>
  );
}

export default Home;
