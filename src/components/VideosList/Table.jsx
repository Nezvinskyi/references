/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import { videosSelectors } from '../../redux/videos/';
import { authSelectors } from '../../redux/auth';
import { useEffect } from 'react';
import { videosActions } from '../../redux/videos';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

const Table = ({
  videos,
  isAuthenticated,
  getVideos,
  handleDelete,
  handleToggleCompleted,
}) => {
  // const [sortDirection, setSortDirection] = useState(-1);
  // const [sortBy, setSortBy] = useState('Date');

  useEffect(() => {
    getVideos();
  }, []);

  const handleClick = e => {
    // setSortBy(e.target.textContent.toLowerCase());
    // setSortDirection(prev => -prev);
    // videos.sort((a, b) => {
    //   if (a[sortBy] > b[sortBy]) return sortDirection;
    //   if (a[sortBy] < b[sortBy]) return -sortDirection;
    // });
  };

  // const sortByProperty = () => {
  //   return videos.sort((a, b) => {
  //     if (a[sortBy] > b[sortBy]) return sortDirection;
  //     if (a[sortBy] < b[sortBy]) return -sortDirection;
  //   });
  // };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th onClick={handleClick}>Date</th>
          <th onClick={handleClick}>Subject</th>
          <th onClick={handleClick}>Author</th>
          <th onClick={handleClick}>Description</th>
          <th onClick={handleClick}>Link</th>
          <th>Watched</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {videos.map(
          ({ id, date, author, description, link, subject, watched }, idx) => {
            return (
              <tr key={id} className="align-middle">
                <td>{date}</td>
                <td>{subject}</td>
                <td>{author}</td>
                <td>{description}</td>
                <td>
                  <a href={link}>Link</a>
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
                  />
                </td>
                <td>
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
