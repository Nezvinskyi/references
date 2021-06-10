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
  // change true to isAuthenticated

  return (
    <>
      <div className="videos-list-container container">
        <Table />
      </div>
      <ModalWindow isOpen={isOpen} title="Add new video" onClose={toggleModal}>
        {true ? (
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
