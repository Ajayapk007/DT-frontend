
import axios from 'axios'
import React, { useEffect } from 'react'
import { API_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {addFeed} from '../utils/feedSlice'
import Feedcard from './FeedCard'
const Feed = () => {
    const FeedList = useSelector(store => store.feed);
    const dispatch = useDispatch();
    const feed = useSelector(store =>store.feed);
    const getFeed = async()=>{
      if(feed) return;
      try {
            const result = await axios.get(`${API_URL}user/feed?page=2&limit=4`, { withCredentials: true });
            dispatch(addFeed(result.data));
        } catch (error) {
            console.error( "i am runed: "+ error);
        }
    } 
    useEffect(()=>{
      getFeed();
    },[]);
  return (
    <div className=' flex justify-center items-center h-full '>
      <div className="carousel w-1/2 rounded-box flex ">
        {FeedList?.map(li=>( <Feedcard key={li._id} data={li}/> ))}
      </div>
    </div>
  )
}

export default Feed