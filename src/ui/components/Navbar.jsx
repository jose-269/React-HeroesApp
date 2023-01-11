import { Outlet, Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brandy"
                to="/marvel"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `navbar-item nav-link ${ isActive ? 'active' : '' }`} 
                        to="marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `navbar-item nav-link ${ isActive ? 'active' : '' }`}
                        to="dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className={ ({isActive}) => `navbar-item nav-link ${ isActive ? 'active' : '' }`}
                        to="login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}