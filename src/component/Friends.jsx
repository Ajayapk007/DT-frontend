import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

export default function Friends() {
  const [friendList, setFriendList] = useState([]);

  const fetchFriends = async () => {
    try {
      const result = await axios.get(API_URL + 'user/connection', {
        withCredentials: true,
      });
      // Correct typo:
      setFriendList(result?.data.message.info);
    } catch (err) {
      console.error("Error while fetching friends:", err);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  useEffect(() => {
    console.log("friendList updated:", friendList);
  },[friendList]);

  return (
    <div className="p-4 max-w-md -mt-8 mx-auto">
      <div className="mt-6 grid grid-cols-2  sm:grid-cols-3 gap-4 justify-items-center">
        {friendList.map((friend) => (
          <div key={friend._id} className="flex flex-col bg-white cursor-pointer p-3 items-center">
            <img
              src={friend.fromUserId.photoURL}
              alt={friend.fromUserId.firstName}
              className="w-20 h-20 rounded-full object-cover shadow-sm"
            />
            <span className="mt-2 text-sm font-semibold text-gray-800">
              {friend.fromUserId.firstName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
