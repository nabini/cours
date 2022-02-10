import './WidgetSm.css';
import {Visibility} from '@material-ui/icons'
function WidgetSm() {
    return (
        <div  className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <il className="widgetSmListItem">
                    <img src="/user3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nom</span>
                        <span className="widgetSmUserTitle">Titre Utisateur</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'  />
                        Display 
                    </button>
                </il>
                <il className="widgetSmListItem">
                    <img src="/user3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nom</span>
                        <span className="widgetSmUserTitle">Titre Utisateur</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'  />
                        Display 
                    </button>
                </il>
                <il className="widgetSmListItem">
                    <img src="/user3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nom</span>
                        <span className="widgetSmUserTitle">Titre Utisateur</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'  />
                        Display 
                    </button>
                </il>
                <il className="widgetSmListItem">
                    <img src="/user3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nom</span>
                        <span className="widgetSmUserTitle">Titre Utisateur</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'   />
                        Display 
                    </button>
                </il>
                <il className="widgetSmListItem">
                    <img src="/user3.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nom</span>
                        <span className="widgetSmUserTitle">Titre Utisateur</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display 
                    </button>
                </il>
            </ul>

        </div>
    );
}

export default WidgetSm;
