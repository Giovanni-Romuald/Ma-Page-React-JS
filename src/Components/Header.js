import monLogo from '../images/monLogo.jpeg'
import '../styles/Header.css'

function Header(){
    const alt = "logo de HACK-G7"
    
    return(
        <div className="enTete">
            <div className="logo-container">
                <img src={monLogo} alt={alt} className="rotating-logo"></img>
            </div>
            
            <div className="nav-container">
                <ul className="element-enTete">
                    <li>
                        <a href="">
                            <i className="fas fa-home icon"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-users icon"></i>
                            About US
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-chalkboard-teacher icon"></i>
                            Teachers
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-book-open icon"></i>
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-envelope icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                
                <div className="auth-buttons">
                    <button className="btn-signup">
                        <i className="fas fa-user-plus icon"></i>
                        S'inscrire
                    </button>
                    <button className="btn-login">
                        <i className="fas fa-sign-in-alt icon"></i>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header