import { useState } from 'react';
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginForm from '../LoginForm';
import ModalWindow from '../ModalWindow';
import './AppBar.scss';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const AppBar = ({ isAuthenticated, onLogout }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className="app-bar container">
      <IconButton onClick={() => history.push('/')}>
        <HomeIcon style={{ width: 35, height: 35 }} />
      </IconButton>

      {!isAuthenticated ? (
        <IconButton onClick={() => setIsOpen(true)}>
          <LockIcon style={{ width: 35, height: 35 }} />
        </IconButton>
      ) : (
        <IconButton onClick={onLogout}>
          <ExitToAppIcon style={{ width: 35, height: 35 }} />
        </IconButton>
      )}

      <ModalWindow title="login" isOpen={isOpen} onClose={toggleModal}>
        <LoginForm onClose={toggleModal} />
      </ModalWindow>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
