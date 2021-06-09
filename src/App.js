import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const VideosPage = lazy(() => import('./pages/VideosPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/videos" component={VideosPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
