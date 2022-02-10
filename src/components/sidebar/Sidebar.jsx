import './Sidebar.css'
import {LineStyle, Timeline, TrendingUp,Edit,PeopleAlt,Phone,LocalPostOffice,Facebook,AirportShuttle
} from "@material-ui/icons"
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Tableau de bord</h3>
                    <ul className="sidebarList">
                       <Link to="/" className='link'>
                       <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon' />
                        Home
                        </li></Link>
                        <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'  />
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'  />
                        Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Éditer</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                        <Edit className='sidebarIcon' />
                        Éditer une offre
                        </li></Link>
                        <Link to="/newProduct"  className='link'>
                        <li className="sidebarListItem">
                        <PeopleAlt className='sidebarIcon'  />
                         Page des Propects
                        </li></Link>
                        <li className="sidebarListItem">
                        <Phone className='sidebarIcon'  />
                        Mobile
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <LocalPostOffice className='sidebarIcon' />
                        Email
                        </li>
                        <li className="sidebarListItem">
                        <Facebook className='sidebarIcon'  />
                        Facebook
                        </li>
                        <li className="sidebarListItem">
                        <AirportShuttle className='sidebarIcon'  />
                        Livraison
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
