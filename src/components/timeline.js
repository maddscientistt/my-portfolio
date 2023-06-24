import '../styles/timeline.scss'
import {Stars} from './StarsCanvas';

export default function Timeline() {

  return (
    <div>
      <div className='stars'>
        <Stars />
      </div>

      <ul className="timelineDiv">
        <li>

          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Full Stack Software developer</span>
              <span className="time-wrapper"><span className="time">2023 - present</span></span>
            </div>
            <div className="desc">
              <strong>Blackhawk Networks</strong> <br></br> Designed and built end-to-end UI features using ReactJS and Django for 4+ e-commerce web apps used by 479+ clients, and internationalised them for 6+ locales.: <a href="https://store.dsc.starbucks.co.jp/store-v2?locale=ja-jp" target="_top">https://starbucks.co.jp</a>
            </div>
            <br></br>
            <div className="flag-wrapper">
              <span className="flag">Associate Software developer</span>
              <span className="time-wrapper"><span className="time">2021 - 2023</span></span>
            </div>
            <div className="desc">
            <strong>Blackhawk Networks</strong> <br></br> Developed a production-ready web application for a gift card commerce solution by translating UI/UX design wireframes into high quality, reusable components using ReactJS, Redux and Context API.
            </div>
            <div className="desc">
              Delivered a responsive, cross-browser compatible and accessibility compliant website in a short period of time by expanding features that resulted in smoother operations and increased user engagement.
            </div>
          </div>

        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Lead Developer</span>
              <span className="time-wrapper"><span className="time">2022 - Present</span></span>
            </div>
            <div className="desc">
            <strong>Gritly</strong> <br></br> Contributing actively and leading a team for the development of a product.
            </div>
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Software Engineer</span>
              <span className="time-wrapper"><span className="time">2020 - 2021</span></span>
            </div>
            <div className="desc">
            <strong>GigSky</strong> <br></br> Automated test scripts using Selenium Web Driver in Java.
            </div>
            <div className="desc">
              Experience in writing Test Plans, Test Suits, Test Cases and Test Scripts from requirement sand Use-Cases.
            </div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">SDE intern</span>
              <span className="time-wrapper"><span className="time">2020 - 2020</span></span>
            </div>
            <div className="desc">
              <strong>Shadowfax</strong> DevOps – Built CICD Pipeline for Android apps using Jenkins and webhooks.
            </div>
            <div className="desc">
              Delivered python scripts for Data analysis on the Jenkins and JIRA using APIs.
            </div>
          </div>
        </li>

        
      </ul>
    </div>
  )
}