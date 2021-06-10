import { useState } from 'react';
import { connect } from 'react-redux';
import { videosActions } from '../../redux/videos';
// import { authSelectors } from '../../redux/auth';
import { videosSelectors } from '../../redux/videos';

const EditForm = ({
  id,
  video,
  onClose,
  handleEditVideo,
  subjects,
  authors,
}) => {
  const [formData, setFormData] = useState({
    date: video.date,
    link: video.link,
    description: video.description,
    subject: video.subject,
    author: video.author,
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleEditVideo({ id, formData });
    onClose();
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="date"
            name="date"
            value={formData.date}
            id="floatingDate"
            placeholder="Date"
            onChange={handleChange}
          />
          <label htmlFor="floatingDate">Date</label>
        </div>

        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="text"
            name="link"
            value={formData.link}
            id="floatingLink"
            placeholder="Link"
            onChange={handleChange}
          />
          <label htmlFor="floatingLink">Link</label>
        </div>

        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="text"
            name="description"
            value={formData.description}
            id="floatingDescription"
            placeholder="Description"
            onChange={handleChange}
          />
          <label htmlFor="floatingDescription">Description</label>
        </div>

        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="text"
            name="subject"
            value={formData.subject}
            id="floatingSubject"
            placeholder="Subject"
            onChange={handleChange}
            list="listSubjectsOptions"
          />
          <datalist id="listSubjectsOptions">
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </datalist>
          <label htmlFor="floatingAuthor">Subject</label>
        </div>

        <div className="mb-3 form-floating">
          <input
            className="form-control"
            type="text"
            name="author"
            value={formData.author}
            id="floatingAuthor"
            placeholder="Author"
            onChange={handleChange}
            list="listAuthorsOptions"
          />
          <datalist id="listAuthorsOptions">
            {authors.map(author => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </datalist>

          <label htmlFor="floatingAuthor">Author</label>
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-secondary">
            Confirm change
          </button>
          <button type="reset" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  subjects: videosSelectors.getSubjects(state),
  authors: videosSelectors.getAuthors(state),
});

const mapDispatchToProps = dispatch => ({
  handleEditVideo: args => dispatch(videosActions.editVideo(args)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
