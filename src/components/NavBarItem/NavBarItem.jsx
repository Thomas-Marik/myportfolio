const NavBarItem = (props) => {
    return (
        <div className="nav-container">
        
            <img src={props.icon} class="item-icon" alt="icon" />
            <a href={props.path} className="nav-item"><h1>{props.name}</h1></a>
          
            </div>
    )
}
export default NavBarItem