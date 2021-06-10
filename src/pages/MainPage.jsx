import { useRef, useState } from 'react';
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
  const svgRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = e => {
    e.target.firstElementChild.setAttribute('fill', '#fff');
  };
  const handleMouseLeave = e => {
    e.target.firstElementChild.setAttribute('fill', '#4b93da');
  };

  return (
    <div className="container">
      <h1 className={`container ${classes.title}`}>React Videos</h1>
      <div className={classes.wrapper}>
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => history.push('/videos')}
        >
          <StarIcon ref={svgRef} fill="#4b93da" className="icon" />
          <p className="card-title title">I am a guest</p>
        </div>
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleModal}
        >
          <OctopusIcon ref={svgRef} fill="#4b93da" className="icon" />
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
