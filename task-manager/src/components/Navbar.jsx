import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Пользователи</Button>
        <Button color="inherit" component={Link} to="/projects">Проекты</Button>
        <Button color="inherit" component={Link} to="/tasks">Задачи</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
