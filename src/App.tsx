import { Paper, Box, Typography } from "@mui/material";
import InputCard from "./components/InputCard";

function App() {
  return (
    <Box>
      <Paper sx={{ pb: 1 }}>
        <Typography sx={{ textAlign: "center" }} variant="h1">
          Hello World
        </Typography>
        <Box sx={{ m: 1 }}>
          このPaperには、<code>padding-bottom: 1</code>
          を入れないと、
          子要素のInputCardの下端とPaperの下端がくっついてしまう。
        </Box>
        <Box sx={{ mx: 1 }}>
          <InputCard />
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
