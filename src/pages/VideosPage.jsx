import Navigation from '../components/Navigation';
import VideosList from '../components/VideosList/VideosList';
import Footer from '../components/Footer';

const VideosPage = () => {
  return (
    <>
      <Navigation />
      <VideosList />
      <Footer />
    </>
  );
};

export default VideosPage;

// html, body {
//   height: 100%;
// }
// body {
//   display: flex;
//   flex-direction: column;
// }
// .content {
//   flex: 1 0 auto;
// }
// .footer {
//   flex-shrink: 0;
// }
