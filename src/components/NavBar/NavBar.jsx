import NavBarItem from "../NavBarItem/NavBarItem"
import home from '../../assets/images/home.png'
import school from '../../assets/images/school.jpg'
import work from '../../assets/images/work.jpg'
import projects from '../../assets/images/projects.png'
import skills from '../../assets/images/scroll.jpg'
import contacts from '../../assets/images/contact.png'
import './NavBar.css'

const NavBar = () => {

    const links = [
        { id: 1, name: "Home", path: "/", icon: home },
        { id: 2, name: "Education", path: "/education", icon: school },
        { id: 3, name: "Experience", path: "/work", icon: work },
        { id: 4, name: "Projects", path: "/projects", icon: projects },
        { id: 5, name: "Skills", path: "/skills", icon: skills },
        { id: 6, name: "Contact", path: "/contact", icon: contacts },
        
    ]
    
    return (
        <div className="navbar-list">
            
                {links.map((link) => (
                    <div className="navbar-item">
                    <NavBarItem
                        key={link.id}
                        name={link.name}
                        path={link.path}
                        icon={link.icon}
                        />
                        </div>
                ))}
            

        </div>
    )
}
export default NavBar