import { Paper } from '@mui/material';
import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export default function Form( props) {

  const [text,setText] = useState(null);

  return (
    <Paper>
      <div style={{display:"flex",justifyContent: "center"}}>
        <TextField 
        id="outlined-basic" 
        label="Inserir tarefa" 
        variant="outlined" 
        onChange={(e) => setText(e.target.value)}
        fullWidth
        />
        
        <Button 
        variant="text"
        onClick={() =>props.todoHandler}>
          Inserir
          </Button>
      </div>
    </Paper>
    );
}
