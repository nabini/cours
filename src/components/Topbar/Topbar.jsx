import React from 'react';
import './Topbar.css'
import { Notifications, Language, Settings} from '@material-ui/icons'
function Topbar() {
    return (
        <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">Lamaadmin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <Notifications />
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBag">4</span>
                </div>

                <div className="topbarIconContainer">
                    < Settings />
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-mv4OD_U0-P4RkFpYCxtAAa0A46oUmQN-Q&usqp=CAU" alt='' className='topAvatar' />
            </div>
        
            </div>
            </div>
    )
}

export default Topbar
