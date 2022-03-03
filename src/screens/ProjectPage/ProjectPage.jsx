import Carousel from 'flat-carousel'
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import bootstrap from 'bootstrap'
import Scouter from '../../assets/images/scouterapp.jpg'
import OPO from '../../assets/images/opoapp.jpg'
import Gobo from '../../assets/images/ghbapp.jpg'
import './ProjectPage.css'

const ProjectPage = () => {

    const projects = [
        {
            id: 1,
            title: "Scouter 9000",
            image: "",
            summary: ("React application designed for anime viewers to review an anime, learn more about what the community thinks" +
                " about anime, and add friends to check out their personal page.The user will be able to read a description about a" +
                " specific anime, add it to their favorites, and leave a review on that page. There is also a personal page that is" +
                " specific to each user’s account where you can find a user’s bio as well as any photos they have posted."),
            roles: [
                { id: 1, role: "•	Created Carousel Component to display Top 5 on Home page." },
                { id: 2, role: "•	Created routes for CRUD GET for Anime in back-end using express." },
                { id: 3, role: "•	Utilized Agile/Scrum methodology in development" },
                { id: 4, role: "•	Created Card Components for Anime to be displayed dynamically." },
                { id: 5, role: "•	Assisted in design of NoSQL table on DynamoDB with group." },
                { id: 6, role: "•	Experimented with custom CSS for changing design of Bootstrap." },
            ],
            tech: [
                { id: 1, name: "JavaScript" },
                { id: 2, name: "TypeScript" },
                { id: 3, name: "Express.js" },
                { id: 4, name: "React" },
                { id: 5, name: "AWS SDK" },
                { id: 6, name: "Redux" },
                { id: 7, name: "DynamoDB" },
                { id: 8, name: "Node.js" },
            ],
            fontend: "https://github.com/Thomas-Marik/Team-4-Project-1-FrontEnd",
            backend: "https://github.com/Thomas-Marik/Team-4-Project-1",
        },
        {
            id: 1,
            title: "Scouter 9000",
            image: "",
            summary: ("React application designed for anime viewers to review an anime, learn more about what the community thinks" +
                " about anime, and add friends to check out their personal page.The user will be able to read a description about a" +
                " specific anime, add it to their favorites, and leave a review on that page. There is also a personal page that is" +
                " specific to each user’s account where you can find a user’s bio as well as any photos they have posted."),
            roles: [
                { id: 1, role: "•	Created Carousel Component to display Top 5 on Home page." },
                { id: 2, role: "•	Created routes for CRUD GET for Anime in back-end using express." },
                { id: 3, role: "•	Utilized Agile/Scrum methodology in development" },
                { id: 4, role: "•	Created Card Components for Anime to be displayed dynamically." },
                { id: 5, role: "•	Assisted in design of NoSQL table on DynamoDB with group." },
                { id: 6, role: "•	Experimented with custom CSS for changing design of Bootstrap." },
            ],
            tech: [
                { id: 1, name: "JavaScript" },
                { id: 2, name: "TypeScript" },
                { id: 3, name: "Express.js" },
                { id: 4, name: "React" },
                { id: 5, name: "AWS SDK" },
                { id: 6, name: "Redux" },
                { id: 7, name: "DynamoDB" },
                { id: 8, name: "Node.js" },
            ],
            fontend: "https://github.com/Thomas-Marik/Team-4-Project-1-FrontEnd",
            backend: "https://github.com/Thomas-Marik/Team-4-Project-1",
        }
    ]

    const images = [
        { src: Scouter },
        { src: OPO },
        { src: Gobo }
        
    ]


    return (
        <div className='slide-page'>
        <div className='slide-container'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Scouter} class="slide" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <a href='' className='slide-link'><h3 className='slide-link'>Front End Repo</h3></a>
                        <a href='' className='slide-link'><h3 className='slide-link'>Back End Repo</h3></a>
                   
                            </div>
                </div>
                <div class="carousel-item">
                    <img src={OPO} class="slide" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                    <a href='' className='slide-link'><h3 className='slide-link'>Front End Repo</h3></a>
                    <a href='' className='slide-link'><h3 className='slide-link'>Back End Repo</h3></a>
               
                            </div>
                </div>
                <div class="carousel-item">
                    <img src={Gobo} class="slide" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                    <a href='' className='slide-link'><h3 className='slide-link'>Front End Repo</h3></a>
                                <a href='' className='slide-link'><h3 className='slide-link'>Back End Repo</h3></a>
                           
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            </div>
    )
}
        /* <Carousel>
            {/* {projects.map((project) => (
                <ProjectItem
                    key={project.id}
                    title={project.title}
                    summary={project.summary}
                    roles={project.roles}
                    tech={project.tech}
                    fontend={project.frontend}
                    backend={project.backend}
                />
                
            ))} }
                
        </Carousel> */
   
            

export default ProjectPage