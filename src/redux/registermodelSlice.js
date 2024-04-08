import { createSlice } from '@reduxjs/toolkit';



  const regisistermodelSlice = createSlice({
    name:"regisistermodel",
    
    initialState: {
        isOpen: false
      },
    reducers :{
       
        openRegModal :(state)=>{
            state.isOpen = true;
        },
        closeRegModal :(state)=>{
            state.isOpen = false;
        }

    }
  })

  export const { openRegModal, closeRegModal } = regisistermodelSlice.actions;

  export default regisistermodelSlice.reducer;