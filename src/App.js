import './App.css';
import Layout from './components/Layout/';

import Navigation from './components/Navigation';
import VideoList from './components/VideosList';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <VideoList />
      </Layout>
    </div>
  );
}

export default App;
