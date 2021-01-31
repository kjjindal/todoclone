import React, { useState } from 'react';
import {Button, List, ListItem,ListItemText, Modal} from '@material-ui/core';
import './Todo.css';
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
   function Todo(props) {
      const [open,setopen]=useState(false);
      const [input,setinput]=useState();
      const classes=useStyles();
       
      function updatetodo(){
          db.collection('todo').doc(props.todo.id).set({
             todo:input
          },{merge:true})
          setopen(false);
      }
      

    //   function handleclose(){
    //          setopen(false);
    //   }
    //   function handleopen(){
    //       setopen(true);

    // }
     
       return (
           <>
           <div className="todo">
           <Modal 
           open={open}

           onClose={e=>setopen(false)}

           >
           <div className={classes.paper} >
               <h1> This is Modal </h1>
               <input onChange={e=>setinput(e.target.value)} placeholder={props.todo.todo} value={input} />
               <Button onClick={updatetodo}> Update Todo </Button>
           </div>

           </Modal>


           <List className="todo__list">
               <ListItem>
                   <ListItemText  primary={props.todo.todo} secondary={props.todo.id}>

                   </ListItemText>
                
               </ListItem>
               <button onClick={e=>setopen(true)}> Edit  </button>
               <Button  onClick={()=>{db.collection('todo').doc(props.todo.id).delete() }}> <DeleteForeverIcon />  Delete   </Button>
           </List>

             


               
           </div>
           </>
       )
   }
   
   export default Todo
   