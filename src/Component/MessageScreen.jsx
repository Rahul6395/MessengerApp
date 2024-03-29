import React from 'react';
import Profile from './Profile';
import UserMessage from './UserMessage';
import UserProfile from './UserProfile';

const MessageScreen = () => {
  return (
    <div >
   <div className='bg-primary  py-5'>
<div className='  mx-auto' style={{width:1240,borderRadius:10}}>
    <div className='row '>
        <div className='col'>
        <div className='row '>
            <div className='col-3 pt-4 pb-3 bg-light px-0'>
            <Profile/>
            </div>
            <div className='col-6 pt-4 pb-3 bg-white px-0'>
            <UserMessage/>
            </div>
            <div className='col-3 pt-4 pb-3 bg-light  px-0'>
            <UserProfile/>
            </div>
        </div>

        </div>
    </div>
</div></div>
    </div>
  )
}

export default MessageScreen