import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./Timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline className="timeline" id="experience">
      <header className="header-div">
        <p className="work-experience">Work Experience</p>
      </header>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title" id="experience">
          Student Full Stack Developer - Cal State University, Bakersfield
        </h2>
        <h2 className="vertical-timeline-element-subtitle">
          July 2021 - Current
        </h2>
        <p1>
          <ul>
            <li>
              Built a full-stack application for an energy project using ReactJS
              and ExpressJS that keeps track and controls the user's energy
              usage to maintain a secure and reliable power supply for
              mission-critical loads.
            </li>
            <li>
              Developed a visualization graph dashboard by building and
              connecting APIs to help customers visualize their potential cost
              savings and optimize their energy usage.
            </li>
          </ul>
        </p1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      // className="vertical-timeline-element--work"
      // date="2010 - 2011"
      // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">
          Software Developer Program - IBM
        </h2>
        <h2 className="vertical-timeline-element-subtitle">
          Jun 2021 - July 2021
        </h2>
        <p1>
          <ul>
            <li>
              Built full-stack applications using MongoDB, ExpressJs, ReactJS,
              and NodeJS, which helped smooth the development process and build
              robust and scalable web applications.
            </li>
            <li>
              Optimized front-end applications by using libraries such as
              Material UI, Bootstrap, and React Router for simple and quick
              development.
            </li>
          </ul>
        </p1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">
          Video Specialist - Cal State University, Bakersfield
        </h2>
        <h2 className="vertical-timeline-element-subtitle">
          Nov 2020 - Current
        </h2>
        <p1>
          <ul className="description">
            <li>
              Made over 40+ informative e-learning videos in a variety of
              subjects that enabled students to have a positive and immersive
              learning experience.
            </li>
            <li>
              Held an event with 40+ attendees through a Zoom meeting that
              catered to students' needs in navigating the school's website and
              portal.
            </li>
            <li>
              Managed and created engaging social media content that increased
              student engagement by 18%.
            </li>
          </ul>
        </p1>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-title">Web Designer</h4>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h2 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h2>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement> */}
    </VerticalTimeline>
  );
};
export default Timeline;
