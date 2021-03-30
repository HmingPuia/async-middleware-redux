export const countReducer=(state=0, action)=>{
    console.log('Action type is', action.type);
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}