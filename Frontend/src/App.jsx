import StatusDashboard from "./components/StatusDashboard";

function App() {
  // Read environment variables
  const status = import.meta.env.VITE_APP_STATUS;
  const version = import.meta.env.VITE_APP_VERSION;
  const deployTime = import.meta.env.VITE_DEPLOY_TIME;

  return (
    <StatusDashboard
      status={status}
      version={version}
      deployTime={deployTime}
    />
  );
}

export default App;
