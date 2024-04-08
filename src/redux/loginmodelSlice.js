import { createSlice } from '@reduxjs/toolkit';



  const loginmodelSlice = createSlice({
    name:"loginmodel",
    
    initialState: {
        isOpen: false
      },
    reducers :{
        openModal :(state)=>{
            state.isOpen = true;
        },
        closeModal :(state)=>{
            state.isOpen = false;
        },
       

    }
  })

  export const { openModal, closeModal,  } = loginmodelSlice.actions;

  export default loginmodelSlice.reducer;