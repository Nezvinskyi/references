import './AddBtn.scss';
import { makeStyles } from '@material-ui/core/styles';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AddBtn = ({ title, onClick }) => {
  const classes = useStyles();

  return (
    <>
      <button onClick={onClick} className="add-btn">
        <QueuePlayNextIcon className={classes.extendedIcon} /> {title}
      </button>
    </>
  );
};

export default AddBtn;
