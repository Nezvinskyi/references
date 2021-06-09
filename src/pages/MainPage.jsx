import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import ModalWindow from '../components/ModalWindow/ModalWindow';

const useStyles = createUseStyles({
  card: {
    width: '16rem',
    height: '16rem',
    backgroundColor: 'teal',
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
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
      <h1 className={`container ${classes.title}`}>Main</h1>
      <div className={classes.wrapper}>
        <Link className={`card ${classes.card}`} to="/videos">
          <p>continue as guest</p>
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
