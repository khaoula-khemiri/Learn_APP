import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    root: ["/CheckQuestion/0", "/DragQuestion/0","/Advice",
        "/CheckQuestion/1", "/InputQuestion/0", "/DragQuestion/1",
        "/CheckQuestion/2", "/Conclusion"],
        quantity: 0,
        falseQuestion:0,
        trueQuestion:0

};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addQuestion:(state,action)=>{
           state.quantity +=1;
        },
        addIncorrect:(state,action)=>{
            state.root.splice(7, 0,action.payload )
        },
        countFalseQuestion:(state,action)=>{
            state.falseQuestion +=1;
        },
        removeQuestion:(state,action)=>{
            state.root.splice(action.payload,1)
        },
        deleteIncorrect:()=> initialState
        
    }
}
);

export const {addQuestion,addIncorrect,deleteIncorrect,removeQuestion,countFalseQuestion} = cartSlice.actions
export default cartSlice.reducer;