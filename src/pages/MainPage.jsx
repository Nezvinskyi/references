import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import './MainPage.scss';

const useStyles = createUseStyles({
  card: {
    width: 300,
    height: 300,
    backgroundColor: 'teal',
    cursor: 'pointer',
    outline: '1px solid',
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    outline: '1px solid',
    width: 600,
    margin: '0 auto',
  },
});

const MainPage = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="container">
      <h1 className={`container ${classes.title}`}>React Videos</h1>
      <div className={classes.wrapper}>
        <Link className={`card ${classes.card}`} to="/videos">
          <h2 className="card-title">continue as guest</h2>
        </Link>
        <div className={`card ${classes.card}`} onClick={toggleModal}>
          <p>continue as admin</p>
        </div>
        <ModalWindow title="login" isOpen={isOpen} onClose={toggleModal}>
          <LoginForm onClose={toggleModal} />
        </ModalWindow>
      </div>
    </div>
  );
};

export default MainPage;
