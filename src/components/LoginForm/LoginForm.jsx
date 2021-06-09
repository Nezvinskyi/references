import { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

const LoginForm = ({ onLogin, onClose }) => {
  const history = useHistory();
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setCredentials({ email: '', password: '' });
    onClose();
    history.push('/videos');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            id="floatingEmail"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">E-mail</label>
        </div>
        <div className=" mb-3 form-floating">
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-secondary">
            Login
          </button>
          <button type="reset" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
