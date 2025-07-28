import  { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { API_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import ErrorPage from '../component/ErrorPage'
const Body = () => {
  const userData = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser =  async() =>{
    try {
      if(userData) return ;
      const user = await axios.get(API_URL + "profile/view",{withCredentials: true});
      dispatch(addUser(user.data));
    } catch (error) {
      if(error.status === 401 ){
        return  navigate('/login');
      }
    }
  }
  useEffect(()=>{
    fetchUser();
  })
  return   (
    <div className=' h-full bg-[#f2f4f7]'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Body;