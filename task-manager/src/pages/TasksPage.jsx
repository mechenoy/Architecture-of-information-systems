import { useEffect, useState } from "react";
import { getTasks, createTask } from "../api";
import { Container, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ title, description, project_id: 1 });
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <Container>
      <h2>Задачи</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Название задачи" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <TextField label="Описание" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <Button type="submit" variant="contained">Добавить</Button>
      </form>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TasksPage;
