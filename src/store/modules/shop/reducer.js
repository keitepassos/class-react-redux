import produce from 'immer';
 
const INITIAL_STATE={
 customer:{
   name:"Joao"
 },
 customer2:{
  sobrenome:"teste"
  }
}
 
function shop(state = INITIAL_STATE, action){
 switch(action.type){
   case 'SET_CUSTOMER': {
     return produce(state, (draft)=>{
       draft.customer = action.customer;
     })
   }
   case 'SET_CUSTOMER_SOBR': {
    return produce(state, (draft)=>{
      draft.customer2 = action.customer;
    })
  }
   default:
     return state;
 }
 
}
 
export default shop;