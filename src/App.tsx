import { Paper, Typography } from "@mui/material";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Paper className={style.AppBase}>
        <Typography variant="h1">Hello World</Typography>
      </Paper>
    </div>
  );
}

export default App;
