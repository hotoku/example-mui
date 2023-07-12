import { Card, TextField, Box } from "@mui/material";

function InputCard(): JSX.Element {
  return (
    <Card sx={{ bgcolor: "#eee" }}>
      <Box sx={{ margin: 1 }}>
        <TextField size="small" label="value" />
      </Box>
    </Card>
  );
}

export default InputCard;
