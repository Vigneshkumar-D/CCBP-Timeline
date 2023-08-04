// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderPages = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />
    }
    return <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="time-line-container-bg-container">
        <h1 className="my-journey-title">
          MY JOURNEY OF <br />
          <span className="title">CCBP 4.0</span>
        </h1>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => this.renderPages(eachItem))}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
