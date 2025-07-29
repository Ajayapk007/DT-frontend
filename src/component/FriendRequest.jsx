import axios from "axios";
import { useEffect, useState } from "react"
import { API_URL } from "../utils/constant";

const FriendRequest = () => {
    const [requestList,setRequestList] = useState([]);
    const fetchRequest = async()=>{
        const result = await axios.get(API_URL + 'user/requests/received',{withCredentials:true});
        setRequestList(result?.data);
    }  
    useEffect(()=>{
        fetchRequest();
    },[]);
    useEffect(()=>{
        // fetchRequest(); 
        console.log(requestList);
    },[requestList]);

    // return <h1>h</h1>
  return (
    <div className="p-4 max-w-md -mt-8  mx-auto">
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
        {requestList.map((friend) => (
          <div key={friend._id} className="flex w-[170px] flex-col bg-white p-3 cursor-pointer items-center">
            <img
              src={friend.fromUserId.photoURL}
              alt={friend.fromUserId.firstName}
              className="w-20 h-20 rounded-full object-cover shadow-sm"
            />
            <span className="mt-2 text-sm font-semibold text-gray-800">
              {friend.fromUserId.firstName}
            </span>
            <button className="btn btn-soft btn-primary w-full bg-blue-300">Accept</button>
            <button className="btn btn-soft btn-primary w-full text-white bg-red-400">Remove </button>
            {/* <span></span> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendRequest