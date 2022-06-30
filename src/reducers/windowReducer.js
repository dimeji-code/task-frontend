import {createSlice} from "@reduxjs/toolkit"

const windowSlice = createSlice({

    name:"window",
    initialState : {
        value:{
            tabOpen : true,
        }
    },
    reducers:{
            toggleWindowTab :(state,action) =>{
                state.value = action.payload 
            
        }
    }

})
export const {toggleWindowTab} = windowSlice.actions;

export default windowSlice.reducer ;

