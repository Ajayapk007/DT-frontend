import React from 'react'
import ProfileEdit from './ProfileEdit'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const {
    photoURL,
    firstName,
    about,
  } = user;

  const posts = [
    { image: photoURL },
  ];

  return  (
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
            <h1 className="text-3xl font-light">{firstName }</h1>
            <button onClick={()=>(navigate('/profileEdit'))} className="px-4 py-1 border rounded text-sm font-semibold">
              Edit Profile
            </button>
          </div>
          <div className="flex space-x-6 mb-4 text-sm">
            <span><strong>{1}</strong> posts</span>
            <span><strong>{8}</strong> followers</span>
            <span><strong>{7}</strong> following</span>
          </div>
          <div className="text-sm">
            <p className="font-semibold">{user.name}</p>
            <p>{about }</p>
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {}
            </a>
          </div>
        </div>
      </header>

      <div className=' h-4 bg-white'>

      </div>

      {/* Posts Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-3 gap-1">
          {posts.map((p, idx) => (
            <img
              key={idx}
              src={p.image}
              alt={`Post ${idx + 1}`}
              className="w-full aspect-square object-cover hover:opacity-90"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile