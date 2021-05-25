import { useState } from 'react';
// import { connect } from 'react-redux';
import AddBtn from '../AddBtn/';
import AppBar from '../AppBar/AppBar';
import Modal from '../Modal/';

import Table from './Table';
import './VideosList.scss';

const VideosList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState(true);

  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(prev => !prev);
    }
  };

  const toggleAdmin = () => {
    setAdmin(prev => !prev);
  };

  return (
    <div className="videos-list-container">
      <AppBar>
        <AddBtn title="Add" onClick={toggleModal} />
        <AddBtn title="Edit List" onClick={toggleAdmin} />
      </AppBar>
      <div className="videos-list">
        <h2>Video List</h2>
        <Table adminMode={admin} />
      </div>
      {isOpen && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default VideosList;
