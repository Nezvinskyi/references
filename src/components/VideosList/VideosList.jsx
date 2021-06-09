import { useState } from 'react';
import { connect } from 'react-redux';
import ModalWindow from '../ModalWindow';
import Table from './Table';
import './VideosList.scss';

import { authSelectors } from '../../redux/auth';
import AddBtn from '../AddBtn';
import AddForm from '../AddForm/AddForm';
import LoginForm from '../LoginForm';

const VideosList = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div className="videos-list-container container">
        <h2>Video List</h2>
        <Table />
      </div>
      <ModalWindow isOpen={isOpen} title="Add new video" onClose={toggleModal}>
        {isAuthenticated ? (
          <AddForm onClose={toggleModal} />
        ) : (
          <LoginForm onClose={toggleModal} />
        )}
      </ModalWindow>
      <AddBtn onClick={toggleModal} />
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(VideosList);
