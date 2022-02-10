import './User.css'
import { Link } from 'react-router-dom';

import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
function User() {
    return (
         <div className='user'>
             <div className="userTitleConatiner">
                 <h1 className='userTitle'>Edit User</h1>
                 <Link to="/newUser">
                 <button className="userAddButton">Create</button>
                </Link>

             </div>
             <div className="userContainer">
                 <div className="userShow">
                     <div className="userShowTop">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWU5Tv-gm4fwZdFgthv_z2a5sLSbdnGIJLw&usqp=CAU" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Kone Siaka</span>
                        <span className="userShowUserTitle">Ingenieur en web</span>
                    </div>
                     </div>
                     <div className="userShowBottom">
                         <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                       <PermIdentity className='userShowIcon' />
                      <span className="userShowInfoTitle">annabeck90</span>
                       </div>
                       <div className="userShowInfo">
                       <CalendarToday className='userShowIcon' />
                      <span className="userShowInfoTitle">10.12.1999</span>
                       </div>
                       <span className="userShowTitle">Contact Details</span>

                       <div className="userShowInfo">
                       <PhoneAndroid className='userShowIcon' />
                      <span className="userShowInfoTitle">+212 7897 6543</span>
                       </div>
                       <div className="userShowInfo">
                       <MailOutline className='userShowIcon' />
                      <span className="userShowInfoTitle">monmail@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                       <LocationSearching className='userShowIcon' />
                      <span className="userShowInfoTitle">78 Avenue | Dark</span>
                       </div>
                    
                     </div>
                 </div>
                 <div className="userUpdate">
                 <span className="userUpdateTitle">Edit</span>
                 <form action="" className="userUpdateForm">
                     <div className="userUpdateLeft">
                         <div className="userUpdateItem">
                             <label>Username</label>
                             <input  type="text"
                               placeholder='annabeck90'
                              className='userUpdateInput'
                             />
                         </div>
                         <div className="userUpdateItem">
                             <label>Full Name</label>
                             <input  type="text"
                               placeholder='kone Siaka'
                              className='userUpdateInput'
                             />
                         </div>
                         <div className="userUpdateItem">
                             <label>nabinimaail@gmail.com</label>
                             <input  type="text"
                               placeholder='monmail@gmail.com'
                              className='userUpdateInput'
                             />
                         </div>
                         <div className="userUpdateItem">
                             <label>Phone</label>
                             <input  type="text"
                               placeholder='+212 7897 6543'
                              className='userUpdateInput'
                             />
                         </div>
                         <div className="userUpdateItem">
                             <label>Address</label>
                             <input  type="text"
                               placeholder='78 Avenue | Dark'
                              className='userUpdateInput'
                             />
                         </div>
                     </div>
                     <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img  src="data:image/png;base64,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"
                            alt="" className='userUpdateImg'
                            />
                            <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                            <input type="file"  id="file" style={{display: "none"}} />
                        </div>
                            <button className="userUpdateBottom">Update</button>
                     </div>
                 </form>
                 </div>
             </div>
         </div>
    );
}

export default User
