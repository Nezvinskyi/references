import './Navigation.scss';
import { connect } from 'react-redux';

const Navigation = ({ videos }) => {
  return (
    <div className="nav-container">
      <h2>Navigation</h2>

      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.author}</li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  videos: state.videos.videos,
});

export default connect(mapStateToProps)(Navigation);
