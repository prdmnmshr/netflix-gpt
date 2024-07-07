import {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged,getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid, email, displayName, photoUrl} = user;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoUrl }));
        navigate("/browse")
      }else{
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[])
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      //navigate("/error")
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex'>
      <img className='w-36' 
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    <div>
      <img src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />
      <button>(Sign out)</button>
    </div>
    </div>
  )
}

export default Header
