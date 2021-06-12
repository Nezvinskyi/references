/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import { videosSelectors } from '../../redux/videos/';
import { authSelectors } from '../../redux/auth';
import { useEffect, useState } from 'react';
import { videosActions } from '../../redux/videos';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import EditBtn from '../EditBtn/EditBtn';
import ModalWindow from '../ModalWindow/ModalWindow';
import EditForm from '../EditForm/EditForm';
import LinkBtn from '../LinkBtn/LinkBtn';

const sortArrayByProperty = (array, property, sortDirection) => {
  return array.sort((a, b) => {
    if (a[property] > b[property]) return sortDirection;
    if (a[property] < b[property]) return -sortDirection;
    return 0;
  });
};

const Table = ({
  videos,
  isAuthenticated,
  getVideos,
  handleDelete,
  handleToggleCompleted,
}) => {
  const [sortDirection, setSortDirection] = useState(1);
  const [sortBy, setSortBy] = useState('Date');
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    getVideos();
  }, []);
  const handleSortClick = e => {
    e.target.parentElement.childNodes.forEach(item =>
      item.classList.remove('sort', 'ascending', 'descending'),
    );
    setSortBy(e.target.textContent.toLowerCase());
    e.target.classList.add('sort');
    const classNameSort = sortDirection > 0 ? 'ascending' : 'descending';
    e.target.classList.add(classNameSort);

    setSortDirection(prev => -prev);
    sortArrayByProperty(videos, sortBy, sortDirection);
  };

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={handleSortClick}>Date</th>
            <th onClick={handleSortClick}>Subject</th>
            <th onClick={handleSortClick}>Author</th>
            <th onClick={handleSortClick}>Description</th>
            <th onClick={handleSortClick}>Link</th>
            <th onClick={handleSortClick}>Watched</th>
            <th style={{ textAlign: 'center' }}>Admin</th>
          </tr>
        </thead>
        <tbody>
          {sortArrayByProperty(videos, sortBy, sortDirection).map(
            (
              { id, date, author, description, link, subject, watched },
              idx,
            ) => {
              return (
                <tr key={id} className="align-middle">
                  <td nowrap="true">{date}</td>
                  <td>{subject}</td>
                  <td>{author}</td>
                  <td>{description}</td>
                  <td>
                    <a href={link}>
                      <LinkBtn />
                    </a>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={watched}
                      onChange={() =>
                        handleToggleCompleted({ id, watched: !watched })
                      }
                      style={{
                        height: 20,
                        width: 20,
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                  <td nowrap="true" style={{ textAlign: 'center' }}>
                    <EditBtn
                      onEdit={() => {
                        toggleModal();
                        setCurrentVideo({
                          id,
                          date,
                          author,
                          description,
                          link,
                          subject,
                          watched,
                        });
                      }}
                    />
                    <DeleteBtn
                      id={id}
                      onDelete={handleDelete}
                      disabled={isAuthenticated ? false : true}
                    />
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
      <ModalWindow title="edit" isOpen={isOpen} onClose={toggleModal}>
        <EditForm
          onClose={toggleModal}
          id={currentVideo.id}
          video={currentVideo}
        />
      </ModalWindow>
    </>
  );
};

const mapStateToProps = state => ({
  videos: videosSelectors.getFilteredVideos(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispathToProps = dispatch => ({
  getVideos: () => dispatch(videosActions.fetchVideos()),
  handleDelete: id => dispatch(videosActions.deleteVideo(id)),
  handleToggleCompleted: args => dispatch(videosActions.toggleCompleted(args)),
});

export default connect(mapStateToProps, mapDispathToProps)(Table);
