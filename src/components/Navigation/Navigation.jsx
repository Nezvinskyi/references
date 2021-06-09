import { connect } from 'react-redux';
import * as actions from '../../redux/videos/filter-reducer';
import { videosSelectors } from '../../redux/videos';

import './Navigation.scss';

// import videos from '../../data/db.json';
// const subjects = videos.subjects;
// const subjects = videos.authors;

const Navigation = ({ subjects, authors, toggleSubject, toggleAuthor }) => {
  const toggleCollapse = e => {
    e.target.classList.toggle('collapsed');
    e.target.setAttribute(
      'aria-expanded',
      e.target.getAttribute('aria-expanded') === 'false' ? 'true' : 'false',
    );

    e.target.parentNode.nextSibling.classList.toggle('show');
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
    <div className="nav-container container-fluid">
      <h2>Navigation</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSubjects">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSubjects"
              aria-expanded="true"
              aria-controls="collapseSubjects"
              onClick={toggleCollapse}
            >
              Subjects/Modules
            </button>
          </h2>
          <div
            id="collapseSubjects"
            className="accordion-collapse collapse show"
            aria-labelledby="headingSubjects"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                {subjects.map(subject => (
                  <li key={subject} onClick={handleSubjectClick}>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAuthors">
            <button
              onClick={toggleCollapse}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAuthors"
              aria-expanded="true"
              aria-controls="collapseAuthors"
            >
              Authors/Speakers
            </button>
          </h2>
          <div
            id="collapseAuthors"
            className="accordion-collapse collapse show"
            aria-labelledby="headingAuthors"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                {authors.map(author => (
                  <li key={author} onClick={handleAuthorClick}>
                    {author}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  subjects: videosSelectors.getSubjects(state),
  authors: videosSelectors.getAuthors(state),
});

export default connect(mapStateToProps, actions)(Navigation);
