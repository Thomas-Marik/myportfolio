const WorkItem = (props) => {
    return (
        <div className="workitem-container">
            <div className="workitem-header">
                <h1>{props.company}</h1>                
                <h2>{props.title}</h2>
                <h3>{props.location}</h3>
                <h3>{props.date}</h3>
              
                <h3>Job Duties: </h3>
            </div>
            <div className="workitem-dutylist">
                {props.duty.map((duty) => (
                    <div className="duty-item">
                        <p> {duty}</p>
                    </div>   
                ))}
            </div>

        </div>
    )
}
export default WorkItem