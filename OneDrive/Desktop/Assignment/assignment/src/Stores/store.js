import { makeAutoObservable } from "mobx"
import {createContext, useContext } from "react"
import {configureStore, createSlice} from "@reduxjs/toolkit"


//     const store = makeAutoObservable({
//         loginTime : 0,
//         iterations : 0,
//         setLoginTime(){
//            store.loginTime++;
//         }, 
//         getIterations(){
//          return this.iterations;
//         },
//         setIterations(){
//             this.iterations++;
//         },
//         getLoginTime(){
//             console.log(store.loginTime,"get")
//             return store.loginTime;
//         }
//     })


// const storeContext =  createContext(store);
// export const useStores = () => useContext(storeContext);

const reducerFn = createSlice({
    name:"Iterations",
    initialState : {
        login : 0,
        iterations : 0
    },
    reducers : {
         increamentIterations(state, action){
            state.iterations++;
         },
         increamentLogin(state, action){
            console.log("hello")
             state.login++;
         },
    }
})

export const actions = reducerFn.actions;

export const stores = configureStore({
    reducer : reducerFn.reducer
})

