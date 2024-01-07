import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const TodoItem = ({ completed, text, id }) => {
  return (
    <div className="todo-list">
      <h2 className="text">Text</h2>
      <div>
        <button>
          <AccessAlarmIcon />
        </button>
        <button>
          <CheckCircleRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
