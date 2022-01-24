import Swal from 'sweetalert2';
import {useForm} from "../hooks/useForm";

const Form = ({addToDo, removeToDo}) => {
  
  const initialState = {
    title: '',
    description: '',
    state: 'inProgress',
    priority: false
  }

  const [input, handleChange, reset] = useForm(initialState)

  const { title, description, state, priority } = input;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim() || !description.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Empty fields are not allowed',
        icon: 'error'
      })
      return
    }

    addToDo({
      title: title,
      description: description,
      state: state === "inProgress" ? false : true,
      priority: priority,
      id: Date.now()
    })

    reset();

    Swal.fire({
      title: 'Success!',
      text: 'Task added successfully',
      icon: 'success'
    })
  }
  
  return (
  <div>
    <h2>Data</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-2"
        name="title"
        placeholder="Enter task title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Enter task description"
        value={description}
        onChange={handleChange}
      />
      <select
        name="state"
        className="form-control mb-2"
        value={state}
        onChange={handleChange}
      >
        <option value="inProgress">In progress</option>
        <option value="completed">Completed</option>
      </select>
      <div className="form-check">
        <input
          id="flexCheckDefault"
          className="form-check-input"
          type="checkbox"
          name="priority"
          checked={priority}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">Priority</label>
      </div>
      <button type="submit" className="btn btn-primary">Add task</button>
    </form>
  </div>);
};

export default Form;
