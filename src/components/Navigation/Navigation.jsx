import { useRef } from 'react';
import './Navigation.scss';

const Navigation = ({ subjects, authors, toggleSubject, toggleAuthor }) => {
  const subjectsListRef = useRef();
  const authorsListRef = useRef();
  const handleNavSubjectsClick = e => {
    e.currentTarget.classList.toggle('nav-link_active');
    subjectsListRef.current.classList.toggle('hidden');
  };
  const handleNavAuthorsClick = e => {
    e.currentTarget.classList.toggle('nav-link_active');
    authorsListRef.current.classList.toggle('hidden');
  };

  const handleSubjectClick = e => {
    toggleSubject(e.target.textContent);
    e.target.classList.toggle('active');
  };
  const handleAuthorClick = e => {
    toggleAuthor(e.target.textContent);
    e.target.classList.toggle('active');
  };
  return (
    <div className="nav-container">
      <div className="container">
        <h2>Navigation</h2>
        <ul>
          <li>
            <button
              type="button"
              className="nav-link"
              onClick={handleNavSubjectsClick}
            >
              <div className="">
                <span className="nav-item__title">Занятия</span>
              </div>
            </button>
            <ul ref={subjectsListRef}>
              {subjects.map(({ id, subject }) => (
                <li key={id} onClick={handleSubjectClick}>
                  {subject}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="nav-link"
              onClick={handleNavAuthorsClick}
            >
              <div className="">
                <span className="nav-item__title">Авторы</span>
              </div>
            </button>
            <ul ref={authorsListRef}>
              {authors.map(({ id, name }) => (
                <li key={id} onClick={handleAuthorClick}>
                  {name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
