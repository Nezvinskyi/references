import Navigation from '../components/Navigation';
import VideosList from '../components/VideosList/VideosList';
import Footer from '../components/Footer';

const VideosPage = () => {
  return (
    <div className="content">
      <Navigation />
      <VideosList />
      <Footer />
    </div>
  );
};

export default VideosPage;
