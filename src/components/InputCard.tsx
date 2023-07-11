import { Card, TextField, Box } from "@mui/material";

import style from "./InputCard.module.css";

function InputCard(): JSX.Element {
  return (
    <Card className={style.Base}>
      <Box className={style.FormBase}>
        <TextField className={style.Text} size="small" label="value" />
      </Box>
    </Card>
  );
}

export default InputCard;
