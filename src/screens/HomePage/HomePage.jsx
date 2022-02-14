import myPhoto from '../../assets/images/matthanrahan.jpg';
import './HomePage.css';

const HomePage = () => {

    const myInfo = [
        {
            first: "Matthew", last: "Hanrahan", middle: "Thomas", position: "Full Stack Developer", photo: myPhoto,
            bio: ("      My name is Matthew Hanrahan. I am a Entry Level Full Stack Developer with a focus on JavaScript, React, React/Native." +
                "I graduated with a degree in Software Development from Durham Tech Community College in June 2020. I have always loved computers" +
                "and have been around them since childhood. I remember programming choose your own advenure games in Basic on my C64. As I grew up," +
                "I started focusing on computer animation and started studying that field. I went away from the field for awhile then came back with a renewed" + 
                "spirit. I went back to school to learn the programming aspect of development. I want to bring my experiences and love of coding to " +
                "a company who encourages and continue to debelop my skills. ")
        }
    ]
    return (
        <div>
        <div className='homepage-container'>
           
            <div className='homepage-header'>
                <div className='homepage-header-photo'>
                    <img className='homepage-picture' src={myInfo[0].photo} alt="me"/>
                </div>
                <div className='homepage-header-title'>
                    <h1>{myInfo[0].first}</h1>
                    <h1>{myInfo[0].middle}</h1>
                    <h1>{myInfo[0].last}</h1>
                    <br></br>
                    <h2>{myInfo[0].position}</h2>
                </div>
            </div>
            <div className='homepage-bio'>
                <p><span>     </span>{myInfo[0].bio}</p>
            </div>
         </div>
        </div>
    )
}
export default HomePage