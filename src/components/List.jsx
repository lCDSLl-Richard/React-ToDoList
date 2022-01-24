const List = ({task, removeToDo, changeState}) => {

const {title, description, state, priority, id} = task;

  return (
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{title} \\ {state ? "Completed" : "In progress"}</div>
      <p>{description}</p>
      <div>
        <button className="btn btn-danger me-2" onClick={() => removeToDo(id)}>Remove</button>
        <button className="btn btn-warning" onClick={() => changeState(id)}>State</button>
      </div>
    </div>
    <span className="badge bg-primary rounded-pill">
      {priority && "Priority"}
    </span>
  </li>);
};

export default List;
