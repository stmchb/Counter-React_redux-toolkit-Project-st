import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const inputField = () => {

const dispatchValue = useDispatch()

const refrence = useRef()

const handleAddButton = () =>{
  dispatchValue(counterActions.add({
   num:refrence.current.value,
  })) 
  refrence.current.value='';
}

  return <> <div className="inputFil"> <input className="inputField" type="text" placeholder="Enter the Value" ref={refrence}></input> 
  </div>
    <div className="forInputButton">
      <button onClick={handleAddButton} type="button" className="btn btn-info">Add</button>
    </div>
  </>
}

export default inputField;