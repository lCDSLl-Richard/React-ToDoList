import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

const ToDoList = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if(localStorage.getItem('tasks')){
      setTasks(JSON.parse(localStorage.getItem('tasks')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addToDo = newTask => {
    setTasks([...tasks, newTask])
  }

  const removeToDo = id => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const changeState = id => {
    
    const newTasks = tasks.map(task => {
      return task.id === id ? {...task, state: !task.state} : task
    })
    
    setTasks(newTasks)
  }

  return (
  <div>
    <Form addToDo={addToDo}/>
    <ul className="list-group list-group-numbered mt-2">
    {
      tasks.map((task) => {
      return <List key={task.id} task={task} className="list-item" removeToDo={removeToDo} changeState={changeState}/>
      })
    }
    </ul>
  </div>);
};

export default ToDoList;
