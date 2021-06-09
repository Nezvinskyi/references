import { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import './Modal.scss';
import moment from 'moment';
// import shortid from 'shortid';

import { addVideo } from '../../services/videos-api';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btns: {
    justifyContent: 'center',
  },
}));

const ModalWindow = ({ authors, subjects, onClose }) => {
  const classes = useStyles();
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState(moment(Date.now()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let authorId;
    let subjectId;
    authors.forEach(({ id, name }) => {
      if (name === author) {
        authorId = id;
      }
    });
    subjects.forEach(subj => {
      if (subject === subj.subject) {
        subjectId = subj.id;
      }
    });

    const newVideo = {
      author,
      link,
      date,
      description,
      authorId,
      subject,
      subjectId,
      watched: false,
    };
    addVideo(newVideo);
  };

  // const openNewModal = () => {
  //   ModalWindow();
  // };
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal">
        <div className={classes.paper}>
          <h3>Add video link</h3>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Add</legend>
              <ul>
                <li>
                  <label>
                    Author
                    <select
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                    >
                      <option value=""></option>
                      {authors.map(({ name }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </label>
                </li>
                <li>
                  <label>
                    Link
                    <input
                      required
                      type="text"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Description
                    <input
                      type="text"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Subject
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                    >
                      <option value=""></option>
                      {subjects.map(({ subject, id }) => (
                        <option key={id} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </label>
                </li>
                <li>
                  <label>
                    Date
                    <input
                      type="date"
                      value={date}
                      onChange={e => {
                        setDate(e.target.value);
                      }}
                    />
                  </label>
                </li>
              </ul>
            </fieldset>

            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
          {/* <button onClick={openNewModal}>New Modal</button> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authors: state.videos.authors,
  subjects: state.videos.subjects,
});

export default connect(mapStateToProps)(ModalWindow);
