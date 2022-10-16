import { createStore } from "redux";


const reducreFunc= (state={counter:10},action)=>{
    switch(action.type){
        case 'INC':{
            return {counter:state.counter+1};
        }
        case 'DEC': {
            return {counter:state.counter-1};
        }
        case 'ADDBY':{
            return {counter:state.counter+action.payload};
        }
    }
   
    return state;
};

const store= createStore(reducreFunc); 
export default store;