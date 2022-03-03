import WorkItem from "../../components/WorkItem/WorkItem"
import './WorkPage.css';
const WorkPage = () => {

    const jobs = [
        {
            id: 1,
            company: "NC Central Web Services",
            location: "Durham, NC, USA",
            title: "Web Applications Technician",
            date:"Jan 2020 - Jun 2020",
            duty: [
                ("Using a Drupal 8 environment for the web sites, created new events and announcements to be publishing on the live" +
                    "site.Helped transition of the legacy servers and web sites to the new ones. "),
                ("Did Quality Assurance improvements such as finding and fixing broken links, finding and fixing misdirected links," +
                    " content editing for readability, and picture editing and compression."),
                ("Part of a development team in the NCCU Eddie Chat-bot. Developed, custom entities, intents, and follow up intents " +
                "for the Ai Chat- bot.Helped review CSS, HTML and PHP code for errors and possible improvements")
            ]
        },
        {
            id: 2,
            company: "Revature",
            location: "Reston , VA, USA",
            title: "Full Stack Developer",
            date: "Jun 2021 - present",
            duty: [
                ("Part of React /React Native Batch tasked with learning and implementing technologies into a number of projects."),
                ("Using Agile/Scrum methodology developed Social Media App clones with batch mates"),
                ("Prepared for client interviews and developed skills to be sent to differnt projects. ")
            ]
        }

    ]

    return (
        <div className="work">
        {jobs.map((job) => (
            <div className="eork-container">
                <WorkItem
          
                    id={job.id}
                    company={job.company}
                    location={job.location}
                    title={job.title}
                    date={job.date}
                    duty={job.duty}
                
                />
            </div>
        ))}
    </div>
    )

}
export default WorkPage