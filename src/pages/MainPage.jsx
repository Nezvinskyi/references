import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import './MainPage.scss';
import { ReactComponent as StarIcon } from './sea-star.svg';
import { ReactComponent as OctopusIcon } from './octopus.svg';

const useStyles = createUseStyles({
  card: {
    width: 300,
    height: 300,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    textAlign: 'center',
    color: '#4b93da',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 600,
    margin: '100px auto',
  },
});

const MainPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="container">
      <h1 className={`container ${classes.title}`}>React Videos</h1>
      <div className={classes.wrapper}>
        <div className="card" onClick={() => history.push('/videos')}>
          <StarIcon className="icon" />
          <p className="card-title title">I am a guest</p>
        </div>
        <div className="card" onClick={toggleModal}>
          <OctopusIcon className="icon" />
          <p className="card-title title">I have an account</p>
        </div>
        <ModalWindow title="login" isOpen={isOpen} onClose={toggleModal}>
          <LoginForm onClose={toggleModal} />
        </ModalWindow>
      </div>
    </div>
  );
};

export default MainPage;
