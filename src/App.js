import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:0,
      text:'Food shopping',
      day:'some day',
      reminder: false,
    },
    {
      id:1,
      text:'somethin',
      day:'today',
      reminder: false,
    },
    {
      id:2,
      text:'surfs up',
      day:'yestaday',
      reminder: false,
    },
    {
      id:3,
      text:'getting shmoney',
      day:'all day erday',
      reminder: false,
    }
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks'}
    </div>
  );
}

export default App;