import React from 'react'
import { Alert } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { uiAction } from '../store/ui-slice';
const Notification = ({type,messsage}) => {
   const notification = useSelector((state)=>state.ui.notification); 
   const dispatch= useDispatch();
   const handleClose=()=>{
    dispatch(uiAction.showNotification({
        open: false,
        messsage: "",
        type: "success"
    }))
   }
  return (
    <div>
      <Alert onClose={handleClose} severity={type}>{messsage}</Alert>
    </div>
  )
}

export default Notification
