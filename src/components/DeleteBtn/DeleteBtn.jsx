import { IconButton } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteBtn = ({ id, onDelete, disabled }) => (
  <IconButton
    aria-label="delete"
    onClick={() => onDelete(id)}
    disabled={disabled}
  >
    <DeleteIcon />
  </IconButton>
);

export default DeleteBtn;
