import { IconButton } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';

const EditBtn = ({ onEdit }) => {
  return (
    <IconButton onClick={onEdit} aria-label="edit">
      <EditIcon />
    </IconButton>
  );
};

export default EditBtn;
