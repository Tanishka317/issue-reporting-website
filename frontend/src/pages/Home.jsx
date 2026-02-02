function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Issue Reporting Platform</h1>
        <p>
          A simple and transparent way to report issues, track progress,
          and ensure faster resolution.
        </p>

        <div className="hero-buttons">
          <a href="/report" className="primary-btn">Report an Issue</a>
          <a href="/issues" className="secondary-btn">View Issues</a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <h3>Easy Reporting</h3>
          <p>
            Submit issues in seconds using a simple and intuitive form.
          </p>
        </div>

        <div className="feature-card">
          <h3>Live Tracking</h3>
          <p>
            Track issue status in real time — pending or resolved.
          </p>
        </div>

        <div className="feature-card">
          <h3>Admin Control</h3>
          <p>
            Admins can manage issues efficiently from a single dashboard.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cta">
        <h2>Built for Speed, Transparency & Simplicity</h2>
        <p>
          Designed as a hackathon-ready solution using modern web technologies.
        </p>
      </section>

    </div>
  );
}

export default Home;
