import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './actions'

const Posts = () => {
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    const renderPost=()=>{
        if(state.loading){
            return <h2>Loading</h2>
        }
        return state.items.map((post)=>{
            return <h3>{post.title}</h3>
        })
    }
    return (
        <div>
            {renderPost()}
           {/* {posts.map((post)=>{
               return <h3>{post.title}</h3>
           })} */}
        </div>
    )
}

export default Posts;
