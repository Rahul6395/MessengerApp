import React from 'react'
import { BsBell, BsSearch, BsHeart, BsMic, BsCamera, BsEmojiSmile } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
import { IoMdSend } from "react-icons/io";

const UserMessage = () => {
    return (
        <div className='overflow-auto px-4'>
            <div className='border-bottom border-2 pb-3'>
                <div className='px-2 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src="imges/user1.jpg" className='rounded-circle border border-1 border-secondary' alt="user" width="50px" height="55px" />
                        <div className='mx-3 position-relative'>
                            <h4 className='text-dark mb-0 d-inline-block fw-normal'>Gravid Cristofer</h4>
                            <span className=' dataActive' ></span>
                        </div>
                    </div>

                    <div>
                        <span><BsSearch style={{ fontSize: 22, marginRight: 10, color: "grey" }} /></span>
                        <span><BsHeart style={{ fontSize: 22, marginRight: 10, color: "grey" }} /></span>
                        <span><BsBell style={{ fontSize: 22, color: "grey" }} /></span>
                    </div>
                
                </div>
            </div>
            <div className='position-relative text-center'>
                <span className='borderLeft'></span>
                <span className=' d-inline-block fs-f text-secondary'>Tomorrow</span>
                <span className='borderRight'></span>
            </div>



            {/*friend  */}
            <div className='d-flex mt-3'>
                <div className='d-flex align-items-end mt-2'>
                    <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                </div>
                <div className='mx-2'>
                    <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>That's Great</span>
                </div>
            </div>
            {/* user */}
            <div className='d-flex justify-content-end'>
                <div>
                    <div className='d-flex justify-content-end' >
                        <div className='   mx-2 my-2 lh-sm' style={{ width: "50%" }}>
                            <span className='bg-primary d-inline-block px-2 py-2 rounded-2 text-white fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='mx-2'>
                            <span className='bg-primary d-inline-block px-2 py-2 rounded-2 text-white fw-500'>That's Great</span>
                        </div>
                        <div className='d-flex align-items-end mt-2'>
                            <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                        </div>
                    </div>

                </div>

            </div>
            {/*friend  */}
            <div className='d-flex'>
                <div>
                    <div className='d-flex justify-content-start' >
                        <div className='   mx-2 my-2 lh-sm' style={{ width: "50%" }}>
                            <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div>
                    <div className='d-flex '>
                        <div className='d-flex align-items-end mt-2'>
                            <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                        </div>
                        <div className='   mx-2 my-2 lh-sm' style={{ width: "50%" }}>
                            <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className='position-relative text-center mt-3'>
                <span className='borderLeft'></span>
                <span className=' d-inline-block fs-f text-secondary'>Today</span>
                <span className='borderRight'></span>
            </div>


            {/* today */}


            {/*friend  */}
            <div className='d-flex mt-3'>
                <div className='d-flex align-items-end mt-2'>
                    <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                </div>
                <div className='mx-2'>
                    <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>Hii</span>
                </div>
            </div>
            {/* user */}
            <div className='d-flex justify-content-end'>
                <div>
                    {/* <div className='d-flex justify-content-end' >
                        <div className='   mx-2 my-2 lh-sm' style={{width:"50%"}}>
                            <span className='bg-primary d-inline-block px-2 py-2 rounded-2 text-white fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div> */}
                    <div className='d-flex justify-content-end'>
                        <div className='mx-2'>
                            <span className='bg-primary d-inline-block px-2 py-2 rounded-2 text-white fw-500'>Hello Bro</span>
                        </div>
                        <div className='d-flex align-items-end mt-2'>
                            <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                        </div>
                    </div>

                </div>

            </div>
            {/*friend  */}
            <div className='d-flex'>
                <div>
                    {/* <div className='d-flex justify-content-start' >
                        <div className='   mx-2 my-2 lh-sm' style={{width:"50%"}}>
                            <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div> */}
                    <div className='d-flex '>
                        <div className='d-flex align-items-end mt-2'>
                            <img src="imges/user1.jpg" className='rounded-circle border ' alt="user" width="30px" height="35px" />
                        </div>
                        <div className='   mx-2 my-2 lh-sm' style={{ width: "50%" }}>
                            <span className='bg-light d-inline-block px-2 py-2 rounded-2 text-secondary fw-500'>Thank  this opportunity this project and i work</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* type message */}

            <div>
                {/* Search Bar */}
                <div className=' pb-3 border-top pt-3 mt-3 d-flex justify-content-center'>
                    <div className=' bg-light rounded-pill px-3 py-2'>
                        <div className='d-flex '>
                            <div>
                                <BsMic style={{ color: "grey", fontSize: 20 }} />
                                <input type="text" className='border-0 px-2 bg-light' size="40" placeholder='Write Something' />
                            </div>
                            <div>
                                <GiPaperClip style={{ color: "grey", fontSize: 20 ,}}/>
                                <BsCamera style={{ color: "grey", fontSize: 20 ,marginLeft:10}}/>
                                <BsEmojiSmile style={{ color: "grey", fontSize: 20 ,marginLeft:10}}/>
                            </div>

                        </div>
                    </div>
                    <button className='rounded-circle border-0 bg-primary mx-2'><IoMdSend style={{color:"white",fontSize:25,padding:2}}/></button>
                </div>
            </div>
        </div>
    )
}

export default UserMessage