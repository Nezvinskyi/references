/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import { videosSelectors } from '../../redux/videos/';
import { authSelectors } from '../../redux/auth';
import { useEffect, useRef, useState } from 'react';
import { videosActions } from '../../redux/videos';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

const sortArrayByProperty = (array, property, sortDirection) => {
  console.log(
    `Sorting by ${property}, sort direction ${
      sortDirection > 0 ? 'asc' : 'desc'
    }`,
  );
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

  useEffect(() => {
    getVideos();
  }, []);

  const headRef = useRef();
  console.log(headRef.node);
  const handleClick = e => {
    // headRef.current.classList.remove('ascending', 'descending');
    // e.target.classList.remove('ascending', 'descending');
    setSortBy(e.target.textContent.toLowerCase());
    // e.target.classList.add('sort');
    // const classNameSort = sortDirection > 0 ? 'ascending' : 'descending';
    // e.target.classList.add(classNameSort);

    setSortDirection(prev => -prev);
    sortArrayByProperty(videos, sortBy, sortDirection);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th onClick={handleClick} ref={headRef}>
            Date
          </th>
          <th onClick={handleClick} ref={headRef}>
            Subject
          </th>
          <th onClick={handleClick} ref={headRef}>
            Author
          </th>
          <th onClick={handleClick} ref={headRef}>
            Description
          </th>
          <th onClick={handleClick} ref={headRef}>
            Link
          </th>
          <th onClick={handleClick} ref={headRef}>
            Watched
          </th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {sortArrayByProperty(videos, sortBy, sortDirection).map(
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
                    style={{
                      height: 20,
                      width: 20,
                      cursor: 'pointer',
                    }}
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
