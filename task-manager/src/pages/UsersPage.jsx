import { useEffect, useState } from "react";
import { getUsers, createUser } from "../api";
import { Container, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await createUser({ name, email });
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <Container>
      <h2>Пользователи</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Button type="submit" variant="contained">Добавить</Button>
      </form>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersPage;
