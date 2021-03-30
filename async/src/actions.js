import axios from 'axios';
 export const fetchPost=()=>async(dispatch,getState)=>{
     dispatch({type:"FETCH_POSTS_REQUEST"})

        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type:'FETCH_POSTS_SUCCESS',payload:response.data})
        }catch(error){
            dispatch({type:"FETCH_FAILURE",error})
        }
            
        }
    


// export const fetchPost=()=>{
//     return async(dispatch,getState)=>{
//         const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        
//         dispatch({
//             type:'FETCH_POST',
//             payload:response.data
//         })
//     }
// }
// export const fetchPost=()=>{
//     const promise=axios.get('https://jsonplaceholder.typicode.com/posts');

//     return{
//         type:'FETCH_POST',
//         payload:promise
//     }
// }