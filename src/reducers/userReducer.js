// A "slice" is a collection of Redux reducer logic and actions
// for a single feature in your app, typically defined together in a single file.
import {createSlice} from '@reduxjs/toolkit'
import {taskData,userData} from '../data/data'
const userSlice = createSlice({
    //name of the slice
    name: "user",
    //the initial state definition, will be altered along the way
    initialState:{
            user:userData,
            login:false,
            tasks: taskData,
            selectedTask:{}
        // }
    },
    //contains functions that will perform dispatched actions on the state and (initialState)
    reducers:{
        login:(state,action) => {

            return{
                ...state,
                login: action.payload.login,
                
            }
        },
        logout:(state,action)=>{
            return{
                ...state,
                login: action.payload.login,
                tasks: taskData,
                selectedTask:{},
                
            }
        },
        addTask:(state, action) =>{
            state.tasks = state.tasks.concat(action.payload);

        },
        selectTask:(state,action) =>{
            console.log("selected task ",action.payload);
            console.log("selected task ",action.payload);
            console.log("selected task ",action.payload);
            return{
                ...state,
                selectedTask: action.payload.selectedTask,
            }
        },
        setComplete:(state,action) =>{
            var tasksUpdated = state.tasks.filter(task => task.id != action.payload.id)
            tasksUpdated = tasksUpdated.concat(action.payload)
            return{
                ...state,
                tasks : tasksUpdated
            }
        }
        // edit user
    }
})
export const {login, logout, addTask, selectTask,setComplete} = userSlice.actions
export default userSlice.reducer;