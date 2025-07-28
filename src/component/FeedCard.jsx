import { FaHeart, FaRegComment, FaShare } from 'react-icons/fa';

const Feedcard = ({data}) => {
  const {firstName,lastName,photoURL} = data;
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md mt-6 py-2 border border-gray-200">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={photoURL}
          alt="profile"
          className="rounded-full w-10 h-10 object-cover"
        />
        <span className="ml-4 font-semibold">{firstName + lastName}</span>
      </div>

      {/* Image */}
      <div>
        <img
          src={photoURL}
          alt="Feedcard"
          className="w-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 px-4 py-2">
        <FaHeart className="w-6 h-6 cursor-pointer hover:text-red-500" />
        <FaRegComment className="w-6 h-6 cursor-pointer" />
        <FaShare className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Likes */}
      <div className="px-4 font-semibold">123 likes</div>

      {/* Caption */}
      <div className="px-4 py-2">
        <span className="font-semibold">username </span>
        <span>This is a caption for the Feedcard
        ...</span>
      </div>

      {/* Comments */}
      <div className="px-4 text-sm text-gray-600">View all 10 comments</div>

      {/* Add Comment */}
      <div className="flex items-center px-4 py-2 border-t">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 outline-none border-none"
        />
        <button className="text-blue-500 font-semibold">Feedcard
        
        </button>
      </div>
    </div>
  );
};

export default Feedcard;
