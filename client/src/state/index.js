import {createSlice} from '@reduxjs/toolkit';

const initialState={
    user:null,
    token:null,
    notes:[],
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state)=>{
            state.user=null;
            state.token=null;
        },
        setSubject:(state,action)=>{
            state.subject=action.payload.subject;
            state.subject
        },
        setSubjects:(state,action)=>{
            if(state.user){
                state.user.subjects=action.payload.subjects;
            }else{
                console.error('user subjects not present');
            }
        },
        setNotes:(state,action)=>{
            state.notes=action.payload.notes;
        },
        
    }
})
