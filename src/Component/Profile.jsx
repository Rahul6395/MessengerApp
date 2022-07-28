import React from 'react';
import { BsPencil,BsSearch,BsCheck } from "react-icons/bs";
import UserList from './UserList';

const Profile = () => {
  return (
    <div>
        <div className='container bg-light'>
          <div className='row'>
            <div className='col'>
                <div className='d-flex justify-content-between  '>
                <div className='d-flex '>
                    <div>
                     <img src="imges/user1.jpg" className='rounded-circle border border-primary' alt="user" width="65px" height="70px"/>                   
                    </div>
                    <div className='d-flex align-items-center mx-3'>
                    <div className='lh-sm'>
                        <h5 className='text-primary mb-0'>Gravid Cristofer</h5>
                         <span className='text-secondary  fw-500'>Senior Developer</span>
                    </div>
                    </div></div>
                    <span className='d-inline-block pt-2'> <BsPencil style={{fontSize:18}}/></span>
                </div>
                {/* Search Bar */}
                <div className='py-3 pt-4'>
                    <div className=' bg-white rounded-pill px-3 py-2'>
                    <BsSearch style={{color:"lightgrey",fontSize:19}}/>
                        <input type="text" className='border-0 px-2' size="27" placeholder='Search Friends'/>

                    </div>
                </div>
                {/* userList */}
                <div>
                <UserList src="imges/user1.jpg" name="Tokyo Rio" newMessage="Thank for this opportunity this project and i worked" seen=""/>
                <UserList src="imges/user2.jpg" name="Berlin Doe" newMessage="Thank for  project and i worked" seen="1"/>
                <UserList src="imges/user3.jpg" name="Lisbin" newMessage="Thank for this opportunity this" seen="1"/>
                <UserList src="imges/user1.jpg" name="Tokyo Rio" newMessage="They this project and i worked" seen=""/>
                <UserList src="imges/user2.jpg" name="Berlin Doe" newMessage="Thank for this opportunity this project and i worked" seen="1"/>
                <UserList src="imges/user3.jpg" name="Lisbin" newMessage="Thank  and i worked" seen=""/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile