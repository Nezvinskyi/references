import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddBtn = ({ onClick }) => (
  <Fab
    onClick={onClick}
    color="primary"
    variant="extended"
    aria-label="add"
    style={{ position: 'fixed', bottom: '2em', right: '2em' }}
  >
    <AddIcon />
    Add video
  </Fab>
);

export default AddBtn;
