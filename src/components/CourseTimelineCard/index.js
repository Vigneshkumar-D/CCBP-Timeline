// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-timeline-card-bg-container">
      <div className="sub-con">
        <h1 className="project-heading">{courseTitle}</h1>
        <div className="duration-container-course-timeline">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="des">{description}</p>
      <div className="language-con">
        {tagsList.map(eachLan => (
          <p className="lan-item" key={eachLan.id}>
            {eachLan.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
