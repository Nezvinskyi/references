import Navigation from './Navigation';
import { connect } from 'react-redux';
import * as actions from '../../redux/filter-reducer';

const mapStateToProps = state => ({
  subjects: state.videos.subjects,
  authors: state.videos.authors,
});

export default connect(mapStateToProps, actions)(Navigation);
