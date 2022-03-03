const EducationItem = (props) => {
  const curr = props.courses;
  return (
    <div className="">
      <div className="education-header">
              <h1>{props.name}</h1>
              <h2>{props.location}</h2>          
              <h3>Degree: {props.degree}</h3>
              <h4>GPA: {props.gpa}</h4>
        <h5>Years Attended: {props.years}</h5>
              <h2>Course List: </h2>
      </div>
          <div className="education-course-list">
          
        {curr.map((course) => (
          <div className="education-course-item">
            <p>{course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EducationItem;
