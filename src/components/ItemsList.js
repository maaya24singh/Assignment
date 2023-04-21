import React,{useState, useEffect} from "react";
import './../App.css';
import {db} from '../firebase';
import { collection, getDocs, deleteDoc, doc} from "firebase/firestore";

const ItemsList = () =>{
    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {
       
        await getDocs(collection(db, "todoLists")).then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                
         })
        
    }
    useEffect(()=>{
        setTimeout(() => {
            fetchPost();
        }, 100); 
    }, [todos])

    const removeData = async(e) =>{
        e.preventDefault();
        const value = e.target.dataset;
        console.log(value);
        console.log(todos[0].id === value);
        deleteDoc(doc(db, "todoLists", value.value))
     
    }

    return(
        <>
          { todos?.map((data,i) => (
                    <div className="itemList">
                        <div className="itemList_div" key={i}>
                            <p className="itemList_p">{data.data}</p>
                            <input type="checkbox" className="itemList_input"/>
                            <button className="itemList_btn" data-value={data.id} onClick={removeData}>REMOVE</button>
                        </div>  
                    </div> 
            ))
          }
           
        </>
        
    )
}
export default ItemsList;