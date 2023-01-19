import React from 'react'
import { BsSearch,BsChatFill,BsHeart,BsFillCameraVideoFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const UserProfile = () => {
    return (
        <div>
            <div className='bg-light'>
                {/* Search Bar */}
                <div className='pb-3  '>
                    <div className=' bg-white rounded-pill px-2 py-2 mx-3'>
                       <span style={{paddingLeft:5}}><BsSearch style={{ color: "lightgrey", fontSize: 19 }} /></span> 
                        <input type="text" className='border-0 px-2' size="25" placeholder='Search People' />

                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='text-center'>
                        <img src="imges/user1.jpg" className='rounded-circle ' alt="user" width="100px" height="115px" />
                        <div>
                            <h4 className='mb-0'>Polermo Joseph</h4>
                            <h6 className='mb-0'>Junior Developer</h6> </div>

                    </div>
                </div>
                {/* chat   and    video call */}
                <div className='d-flex justify-content-around mt-4'>
                    <div className='text-center '>
                        <span className='d-inline-block p-3  rounded-circle bg-sky' ><BsChatFill style={{fontSize:30,color:"#0d6efd"}}/></span>
                        <h6 className='text-secondary mt-2'>Chat</h6>
                    </div>
                    <span className='border-end border-2'></span>
                    <div className='text-center'>
                        <span className='d-inline-block p-3 bg-sky rounded-circle' ><BsFillCameraVideoFill style={{fontSize:30,color:"#0d6efd"}}/></span>
                        <h6 className='text-secondary mt-2'>Video Call</h6>
                    </div>
                </div>
                {/* View Friends */}
                <div className='mx-3 mt-3'>
                    <div className='mb-1'><span className='mx-2 '><BiUser style={{fontSize:20,color:"grey"}}/></span><span className='text-secondary fw-500'>View Friends</span></div>
                    <div><span className='mx-2'><BsHeart style={{fontSize:18,color:"grey"}}/></span><span className='text-secondary fw-500'>Add  to Favorite</span></div>
                </div>

                {/* Attachments */}
                <div className='mx-4 mt-4 '>
                    <h6 className=''>Attachments</h6>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className='p-3 rounded-3 bg-sky' ><span className='text-primary fw-500'>PDF</span></div>
                        <div className='p-3 rounded-3 bg-sky' ><span className='text-primary fw-500'>Video</span></div>
                        <div className='p-3 rounded-3 bg-sky' ><span className='text-primary fw-500'>MP3</span></div>
                        <div className='p-3 rounded-3 bg-sky' ><span className='text-primary fw-500'>Image</span></div>
                    </div>
                    <div className='text-center'><button className='btn btn-outline-primary rounded-pill py-0 mt-3 '>View All</button></div>   
                </div>
            </div>
        </div>
    )
}

export default UserProfile