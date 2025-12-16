// src/App.jsx
import React, { useState } from 'react';

const appStyles = {
  container: {
    height: '100vh',
    padding: '30px',
    backgroundColor: '#1e1e1e', 
    color: '#d4d4d4',           
    fontFamily: 'Segoe UI, Arial, sans-serif'
  },
  title: {
    color: '#4ec9b0', 
    marginBottom: '20px'
  },
  button: {
    padding: '10px 15px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#007acc', 
    border: 'none',
    borderRadius: '2px',
    color: 'white',
    transition: 'background-color 0.3s'
  },
  status: {
    marginTop: '25px',
    padding: '10px',
    backgroundColor: '#3c3c3c'
  }
};

const App = () => {
  const [status, setStatus] = useState('React Frontend is ready. Click button to simulate AI scan.');

  const handleRunTask = () => {
    // This simulates an IPC call to the Electron main process
    setStatus('Initiating AI Security Scan...');
    setTimeout(() => {
      setStatus('AI Security Scan Completed successfully. No critical vulnerabilities found.');
    }, 2000);
  };

  return (
    <div style={appStyles.container}>
      <h1 style={appStyles.title}>AI/Security Product Dashboard</h1>
      <p>
        **Technology:** Electron + React.js Refactor Complete.
      </p>

      <button 
        style={appStyles.button} 
        onClick={handleRunTask}
      >
        Run AI Vulnerability Check
      </button>

      <div style={appStyles.status}>
        **Status:** {status}
      </div>

      <p style={{marginTop: '40px', fontSize: '0.9em', color: '#888'}}>
        *This UI successfully replaced the original Lit.dev frontend.*
      </p>
    </div>
  );
};

export default App;