import React,{useState,useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './Firebase';
import firebase from 'firebase';

function App() {

  const [todos,settodos]=useState([]);
  const [item,setitem]=useState("");

   useEffect(()=>{
     db.collection('todo').orderBy('timestamp','desc').onSnapshot(snapshot=>
      {settodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo}))) 
  } 

     );
   },[]);

  function addArray(){
    
    db.collection('todo').add({
      todo:item,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    settodos([...todos,item]);
    setitem('');



  }

  function addItem(e){
    setitem(e.target.value);

  }
  return (
    <div className="App">
    <FormControl>
      <InputLabel>  Todo Item </InputLabel>
      <Input onChange={addItem} value={item}   />
    </FormControl>
    <Button variant="contained" color="primary"  disabled={!item}  onClick={addArray}>
  Add Todo
</Button>


    <ol> 
    
    {todos.map((val,index)=>{
      return <Todo  todo={val}  key={index}  />

    })}
    </ol>



    
    </div>
  );
}

export default App;
