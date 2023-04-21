import React,{useState} from "react";
import './../App.css';
import {db} from '../firebase';
import { collection, addDoc} from "firebase/firestore";

const AddToDo = () =>{
    const[data, setData] = useState("");
    const onsetData = (event) =>{
           setData(event.target.value);
    }
    const addTodo = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "todoLists"), {
              data: data,   
            });
            console.log("Document written with ID: ", docRef.id);
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
        <div className="addTodo">
            <textarea type="text" placeholder="Enter the task" className="addTodo_input" onChange={onsetData}></textarea>
            <button className="addToDo_btn" onClick={addTodo}>ADD TASK</button>
        </div>
    )
}
export default AddToDo;