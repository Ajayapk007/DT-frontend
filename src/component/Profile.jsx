import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Posts from './Posts'
import Friends from './Friends'
import { useState } from 'react'
import ErrorPage from './ErrorPage'
import FriendRequest from './FriendRequest'


const initialVisible = {
  postVisible: false,
  friendVisible: false,
  addFriendVisible: false,

  // add more flags if needed
};


const Profile = () => {
const [visible, setVisible] = useState(initialVisible);

  const handleClick = (e) => {
    const { name } = e.target;
    setVisible({
      ...initialVisible,
      [name]: true,
    });
  };

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const {
    photoURL,
    firstName,
    about,
    postURL,
  } = user;

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="max-w-4xl mx-auto p-6 flex items-center">
        <img
          src={photoURL}
          alt="Avatar"
          className="w-36 h-36 rounded-full mr-8 object-cover"
        />
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-3xl font-light">{firstName}</h1>
            <button onClick={() => (navigate('/profileEdit'))} className="px-4 py-1 border rounded text-sm font-semibold">
              Edit Profile
            </button>
          </div>
          <div className="flex space-x-6  mb-4 text-md">
            <span><strong>{1}</strong> posts</span>
            <span><strong>{8}</strong> Friends</span>
          </div>
          <div className="text-sm">
            <p className="font-semibold">{user.name}</p>
            <p>{about}</p>
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
            </a>
          </div>
        </div>
      </header>
      <div className='btns mx-auto flex gap-4 ml-70 pb-7'>
        <button
          name='postVisible'
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          Posts
        </button>
        <button
          name ='friendVisible'
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          Show Friends
        </button>
        <button
          name='requestVisible'
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          Friend Requests
        </button>
        <button
          name='addFriendVisible'
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          Add Friends
        </button>
      </div>
      {visible.postVisible && <Posts posts={postURL}  />}
      {visible.friendVisible && <Friends />}
      {visible.requestVisible && <FriendRequest/>}
      {visible.addFriendVisible && <ErrorPage />}
    </div>
  );
}

export default Profile