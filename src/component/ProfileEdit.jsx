import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";
import { FaUpload } from "react-icons/fa";

export default function ProfileEdit() {
  const user = useSelector((store) => store.user);
  const [showtoast,setToast] = useState(false);
  const [forms, setForm] = useState({
    firstName: user.firstName ?? '',
    email: user.email ?? '',
    bio: user.about ?? '',
    photoURL: user.photoURL ?? '',
  });

  useEffect(() => {
    setForm({
      firstName: user.firstName,
      email: user.email,
      about: user.about,
      photoURL: user.photoURL,
    });
  }, [user]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser());
    try {
      const data = await axios.patch(API_URL + "profile/edit", forms, {
        withCredentials: true,
      });
      dispatch(addUser(data.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const handleURL = () => {
    // return <h1></h1>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Form */}
      <main className="flex-1 p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow max-w-lg mx-auto"
        >
          <div className="avtar flex  flex-col  items-center">
            <div className=" flex items-center">
              <img src={forms.photoURL}
                alt="Avatar"
                className="w-36  h-36 rounded-full mr-3 object-cover"
              /> <FaUpload onClick={handleURL} />
            </div>
            <h3 className="text-2xl mt-2 font-semibold mb-6">Edit Profile</h3>
          </div>
          {/* Inputs */}
          {["firstName", "email", "photoURL"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                name={field}
                value={forms[field]}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              About
            </label>
            <textarea
              name="about"
              value={forms.about}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </main>
      { showtoast && <div className="toast toast-top toast-center mt-12 ">
        <div className="alert alert-success ">
          <span>Message sent successfully.</span>
        </div>
      </div>}
    </div>
  );
}
