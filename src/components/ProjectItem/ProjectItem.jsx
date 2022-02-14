

const ProjectItem = (props) => {
    return (
        <div className="project-card">
            <div className="project-splash">
                <h1>{props.name}</h1>
                <h1>Image here</h1>
                <h3>Frontend: {props.frontend}</h3>
                <h3>Backend: {props.backend}</h3>
            </div>
            <div className="project-info">
                <h3>{props.summary}</h3>
                <h2>Roles:</h2>
                {props.roles.map((role) => (
                    <div className="project-role">
                        <h3>{role}</h3>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default ProjectItem