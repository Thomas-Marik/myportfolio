import './ContactPage.css'
import email from '../../assets/images/gmail.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.jpg'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'


const ContactPage = () => {

    const links = [
        { id: 1, name: "Email", path: "mailto:sunracer1977@gmail.com", logo: email },
        { id: 2, name: "Twitter", path: "https://twitter.com/hanrahanMatthew", logo: twitter },
        { id: 3, name: "Instagram", path: "https://www.instagram.com/hanrahan21", logo: instagram},
        { id: 4, name: "Facebook", path: "https://www.facebook.com/matthew.t.hanrahan", logo: facebook },
        { id: 5, name: "LinkedIn", path: "https://www.linkedin.com/in/matthew-hanrahan-712a9b170", logo: linkedin},
        
        
    ]    
    return (
        <div className="contact-container">
            <h1>Like what you see and want to know more contact me please at:</h1>
            <div className="contact-list">
                {links.map((link) => (
                    
                    <a href={link.path}>
                        <div className="contact-item">
                            <div className='link-logo'>
                                <img src={link.logo} className="link-logo" alt="logo" />
                            </div>
                            <div className='link-name'>
                                <h2>{link.name}</h2>
                            </div>
                            </div>
                        </a>
                    
                ))}
            </div>

        </div>

    )
}
export default ContactPage