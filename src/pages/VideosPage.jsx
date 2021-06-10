import AppBar from '../components/AppBar';
import Navigation from '../components/Navigation';
import VideosList from '../components/VideosList/VideosList';
import Footer from '../components/Footer';

const VideosPage = () => {
  return (
    <div className="container">
      <AppBar />
      <div style={{ display: 'flex' }}>
        <Navigation />
        <VideosList />
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
