import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'


export default function Home() {
    const [todos, setTodos] = useState([]);

    const todoHandler = (todo) => {
        console.log(todo)
        setTodos([...todos,todo]);
    };

  return (


    <Container maxWidth="xs" style={{ marginTop:"1em" }}>
    <Form/>
    <List sx={{ marginTop:"1em"}}>
        {todos.map((todo) =>(
            <div style={ {marginTop: "1em" }}>
                 <Todo/>
            </div>
        ))}

    </List>
    </Container>
  )
}
