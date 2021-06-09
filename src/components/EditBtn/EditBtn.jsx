import { IconButton } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';

const EditBtn = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditBtn;
