import { useEffect, useState } from "react";
import { getProjects, createProject } from "../api";
import { Container, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = await createProject({ name });
    setProjects([...projects, newProject]);
    setName("");
  };

  return (
    <Container>
      <h2>Проекты</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Название проекта" value={name} onChange={(e) => setName(e.target.value)} required />
        <Button type="submit" variant="contained">Добавить</Button>
      </form>
      <List>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <ListItemText primary={project.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProjectsPage;
