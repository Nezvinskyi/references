import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleCompleted, deleteVideo } from '../../services/api';

const Table = ({ videos, adminMode }) => {
  const handleClick = e => {
    console.log(e.target.textContent);
  };

  const onDelete = id => {
    deleteVideo(id);
  };
  const thToHide = useRef();
  const tdToHide = useRef();
  tdToHide.current = new Array(videos.length);

  useEffect(() => {
    thToHide.current.toggleAttribute('hidden');
    tdToHide.current.map(el => el.toggleAttribute('hidden'));

    // tdToHide.current.toggleAttribute('hidden');
  }, [adminMode]);

  // const sortByProperty=(property)=> {
  //   this.sortDirection *= -1;
  //   this.data.sort((a, b) => {
  //     if (a[property] > b[property]) return this.sortDirection;
  //     if (a[property] < b[property]) return -this.sortDirection;
  //   });
  // }

  return (
    <table>
      <caption>
        {/* TODO sort by click */}
        {/* JS: List of videos and webinars (click on column header to sort) */}
      </caption>
      <thead>
        <tr>
          <th onClick={handleClick}>Date </th>
          <th onClick={handleClick}>Subject</th>
          <th onClick={handleClick}>Author</th>
          <th onClick={handleClick}>Description</th>
          <th onClick={handleClick}>Link</th>
          <th ref={thToHide}>Admin</th>
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
                <td
                  ref={el => {
                    tdToHide.current[idx] = el;
                  }}
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={watched}
                    onChange={() => toggleCompleted(id, !watched)}
                  />
                  <button onClick={() => onDelete(id)}>x</button>
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
  videos: state.videos.videos,
});

export default connect(mapStateToProps)(Table);
