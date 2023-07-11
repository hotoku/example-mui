import { Paper, Box, Typography } from "@mui/material";
import style from "./App.module.css";
import InputCard from "./components/InputCard";

function App() {
  return (
    <div className={style.App}>
      <Paper className={style.AppBase}>
        <Typography variant="h1">Hello World</Typography>
        <Box style={{ margin: "10px" }}>
          <InputCard />
        </Box>
      </Paper>
    </div>
  );
}

export default App;
