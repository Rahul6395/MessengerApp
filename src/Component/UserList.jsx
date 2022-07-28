import React from 'react';
import { BsCheck } from "react-icons/bs";

const UserList = (props) => {
    return (
        <div>

            <div className='py-3 '>
                
                <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                        <div>
                            <img src={props.src} className='rounded-circle ' alt="user" width="45px" height="50px" />
                        </div>
                        <div className='d-flex align-items-center mx-3'>
                            <div className='lh-sm'>
                                <h6 className='text-primary mb-0 fw-500 fs-6'>{props.name}</h6>
                               <div className='lh-1 overflow-hidden lh-1' style={{width:"160px",maxHeight:"33px"}}> <small className='text-secondary lh-1 fs-15'>{props.newMessage}</small></div>
                            </div>
                        </div></div>
                        <div className='  text-nowrap text-end lh-1 mt-1'>
                            <small  className='d-block fs-17'>10:30 AM</small>
                            {props.seen ==="1"?
                                <small className='d-inline-block mx-3  bg-primary rounded-circle text-white fw-500 mt-2' style={{padding:"1px 4px"}}>{props.seen}</small>
                                :
                                <small className='d-inline-block mx-2  text-primary  ' ><BsCheck style={{fontSize:25}}/></small>
                            }
                       
                        </div>
                </div>

            </div>
        </div>
    )
}

export default UserList