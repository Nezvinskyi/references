import { useState } from 'react';
import { connect } from 'react-redux';
import AddBtn from '../AddBtn/';
import Modal from '../Modal/';

import Table from './Table';
import './VideosList.scss';

const VideosList = ({ videos }) => {
  const [isOpen, setOpenModal] = useState(false);
  const [admin, setAdmin] = useState(false);

  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setOpenModal(prev => !prev);
    }
  };

  const toggleAdmin = () => {
    setAdmin(prev => !prev);
  };

  return (
    <div className="videos-list-container">
      <div className="videos-list">
        <h2>Video List</h2>
        <AddBtn title="Add" onClick={toggleModal} />
        <AddBtn title="Edit List" onClick={toggleAdmin} />
        {/* <ul>
          {videos.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </ul> */}
        <Table adminMode={admin} />
      </div>
      {isOpen && <Modal onClose={toggleModal} />}
    </div>
  );
};

const mapStateToProps = state => ({
  videos: state.videos.videos,
});

export default connect(mapStateToProps)(VideosList);
