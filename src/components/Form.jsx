import { Paper } from '@mui/material';
import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export default function Form( {addTodo}) {

  const [text,setText] = useState(null);
  const [id,setId] = useState(0);

  const todoCreate =  (text)=>{
    const todoObj = {text: text,id:id};
    setId(id+1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value=null;

  };

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
        onClick={() =>todoCreate(text)}>
          Inserir
          </Button>
      </div>
    </Paper>
    );
}
