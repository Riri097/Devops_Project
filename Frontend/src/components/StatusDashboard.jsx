function StatusDashboard({ status, version, deployTime }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>System Status Dashboard</h1>

      <p><strong>Status:</strong> {status}</p>
      <p><strong>Version:</strong> {version}</p>
      <p><strong>Last Deploy:</strong> {deployTime}</p>
    </div>
  );
}

export default StatusDashboard;
