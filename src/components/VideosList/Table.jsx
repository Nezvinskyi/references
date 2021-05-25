import { connect } from 'react-redux';
import { toggleCompleted, deleteVideo } from '../../services/api';
import selectors from '../../redux/videos-selectors';
import { useState } from 'react';

const Table = ({ videos, adminMode }) => {
  const [sortDirection, setSortDirection] = useState(-1);
  const [sortBy, setSortBy] = useState('Date');
  const handleClick = e => {
    setSortBy(e.target.textContent.toLowerCase());
    setSortDirection(prev => -prev);

    videos.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return sortDirection;
      if (a[sortBy] < b[sortBy]) return -sortDirection;
    });
  };

  const onDelete = id => {
    deleteVideo(id);
  };

  // const sortByProperty = () => {
  //   return videos.sort((a, b) => {
  //     if (a[sortBy] > b[sortBy]) return sortDirection;
  //     if (a[sortBy] < b[sortBy]) return -sortDirection;
  //   });
  // };

  return (
    <table>
      <caption>
        {/* TODO sort by click */}
        {/* JS: List of videos and webinars (click on column header to sort) */}
      </caption>
      <thead>
        <tr>
          <th onClick={handleClick}>Date</th>
          <th onClick={handleClick}>Subject</th>
          <th onClick={handleClick}>Author</th>
          <th onClick={handleClick}>Description</th>
          <th onClick={handleClick}>Link</th>
          {adminMode && <th>Admin</th>}
        </tr>
      </thead>
      <tbody>
        {videos.map(
          ({ id, date, author, description, link, subject, watched }, idx) => {
            return (
              <tr key={id}>
                <td>{date}</td>
                <td>{subject}</td>
                <td>{author}</td>
                <td>{description}</td>
                <td>
                  <a href={link}>Link</a>
                </td>
                {adminMode && (
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={watched}
                      onChange={() => toggleCompleted(id, !watched)}
                    />
                    <button onClick={() => onDelete(id)}>x</button>
                  </td>
                )}
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  videos: selectors.getFilteredVideos(state),
});

export default connect(mapStateToProps)(Table);
