import EducationItem from "../../components/EducationItem/EducationItem"
import './Education.css'

const Education = () => {

    const schools=[
        {id:1,name:"Mars Hill College",location:"Mars Hill, NC",gpa:"3.54",degree:"Bachelor of Fine Arts in Art",years:"Aug 1995 - Juun 1999",courses:["Drawing/Painting","Photography","Graphic Design","C++","Visual Basic","Ceramics","Print-Making"]},
        {id:2,name:"NC School of Communication Arts",location:"Raleigh, NC",gpa:"n/a",degree:"Certification of 3D Art/Animation",years:"Aug 1999 - Jun 2001",courses:["3D Art/Animation","Maya 3.0","SoftImage XSI","3D Studio Max 2.0"]},
        { id: 3, name: "Durham Tech Community College", location: "Durham, NC", gpa: "4.0", degree: "Associate's in Software Development", years:"Aug 2018 - Jun 2020",courses:["JavaScript","Linux","Java","SAS","SQL","Swift","Python","C#","HTML/CSS"]}
    
    
    ]

    return (
        <div className="education">
            {schools.map((school) => (
                <div className="education-container">
                    <EducationItem
              
                        id={school.id}
                        name={school.name}
                        location={school.location}
                        degree={school.degree}
                        gpa={school.gpa}
                        years={school.years}
                        courses={school.courses}
                    />
                </div>
            ))}
        </div>
    )
}

export default Education