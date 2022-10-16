
import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";
const URL="https://redux-http-c6c68-default-rtdb.firebaseio.com/cartItems.json";

export const fetchData = ()=>{
    return async (dispatch)=>{
        dispatch(uiAction.showNotification({
            open:true,
            message: "Sending request to get data..",
            type: "warning",
        }))
       const fetchHandler=async()=>{
        const res= await fetch(URL,{
            method: 'GET'
        });
        const data =await res.json();
        dispatch(uiAction.showNotification({
            open:true,
            message: "Successfully fetched Data",
            type: "success",
        }))
        return data;
       } 
       try{
           const data= await fetchHandler();
           dispatch(cartAction.replaceData(data));
           console.log(data);
       }catch(e){
        dispatch(uiAction.showNotification({
            open:true,
            message: "Error while fetching data.",
            type: "error",
        }))
       }
    }
}
export  const sendCartData =(cart)=>{
    return async (dispatch)=>{
        dispatch(uiAction.showNotification({
            open:true,
            message: "Sending request..",
            type: "warning",
        }))
        const sendRequest=async()=>{
            const res= await fetch(URL,{
               method: 'PUT',
               body: JSON.stringify(cart)
             });
             const data= res.json();
            //const data= await res.json();
             dispatch(uiAction.showNotification({
               open:true,
               message: "data successfully seved!",
               type: "success",
             }))
        };
        try{
            await sendRequest();
        }catch(e){
            console.log(e)
            dispatch(uiAction.showNotification({
              open:true,
              message: "error:",
              type: "error",
            }))
        }
         
    }
};