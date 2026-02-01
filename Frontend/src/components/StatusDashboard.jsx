function StatusDashboard({ status, version, deployTime }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-lg font-semibold text-center mb-4">
          System Status
        </h1>

        <div className="flex justify-between text-sm mb-2">
          <span>Status</span>
          <span className="text-green-600 font-medium">{status}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Version</span>
          <span>{version}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Last Deploy</span>
          <span className="text-right">{deployTime}</span>
        </div>
      </div>
    </div>
  );
}

export default StatusDashboard;
