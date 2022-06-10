import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button, Paper } from '@mui/material';
//import CommentIcon from '@mui/icons-material/Delete';

export default function TodoItem({todo,deleteTodo}) 
{

        return (
          <Paper style={{padding: "0.5em 0 em"}}>
            <ListItem
              secondaryAction={
                <Button variant="text" onClick={()=>deleteTodo(todo.id)}>
                    Delete
                </Button>
              }
            >
              <ListItemButton role={undefined}  dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start" tabIndex={-1} disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={todo.text} />
              </ListItemButton>
            </ListItem>
          </Paper>
        );
}
