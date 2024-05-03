import React, { useState } from 'react';

// CSS styles as template literals with Facebook-like styling
const styles = `
  .card {
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .card-header {
    background-color: #4267B2; /* Facebook blue color */
    color: #fff; /* White text */
    padding: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 24px;
    font-weight: bold;
  }

  .card-body {
    padding: 20px;
    text-align: left;
  }

  .form-label {
    color: #000; /* Black text */
    font-size: 16px;
    margin-bottom: 8px;
  }

  .form-control {
    border: 1px solid #ddd; /* Light gray border */
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .btn-primary {
    background-color: #4267B2; /* Facebook blue color */
    border-color: #4267B2; /* Facebook blue border color */
    color: #fff; /* White text */
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
  }

  .btn-primary:hover {
    background-color: #385898; /* Darker blue color on hover */
    border-color: #385898; /* Darker blue border color on hover */
  }

  .alert-danger {
    color: #721c24; /* Dark red color */
    background-color: #f8d7da; /* Light red background color */
    border-color: #f5c6cb; /* Light red border color */
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
`;

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validate username and password (you can add more complex validation logic here)
    if (username === 'admin' && password === 'admin123') {
      // Clear any previous error message
      setError('');

      // Perform login action (for example, navigate to dashboard)
      console.log('Login successful! Redirecting to dashboard...');
    } else {
      // Display error message
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <style>{styles}</style> {/* Embed CSS styles directly */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Admin Log in</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Email address or phone number</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
