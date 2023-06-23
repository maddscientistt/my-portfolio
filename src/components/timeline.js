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
              <span className="flag">Freelance</span>
              <span className="time-wrapper"><span className="time">2010 - 2016</span></span>
            </div>
            <div className="desc">
              Som freelance Fullstack Developer arbejder jeg med et hav af kunder, hjemmesider og apps. Jeg har tidligere designet og udviklet hjemmesider og andre løsninger for arkitekter, bilforhandlere, skoler, designere, fotografer og manger flere. Læs mere: <a href="https://tristanwhite.info" target="_top">https://tristanwhite.info</a>
            </div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Rundhøjskolen</span>
              <span className="time-wrapper"><span className="time">2013 - 2016</span></span>
            </div>
            <div className="desc">
              Som <strong>IT-vejleder</strong> på Rundhøjskolen er jeg ansvarlig for indkøb opsætning og vedligeholdelse af skolens IT-udstyr. Envidere står jeg får udvikling og vedligeholdelse af skolens hjemmeside, samt diverse mindre projekter, infoskærme og mere. I det daglige står jeg for support af skolens IT-udstyr samt support for elever så vel som kollegaer. Jeg underviser ugentligt et IT-valghold.
            </div>
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Serverhosting A/S</span>
              <span className="time-wrapper"><span className="time">2012</span></span>
            </div>
            <div className="desc">
              Hos Serverhosting prøvede jeg kræfter diverse netværksteknologier. Jeg konfigurerede og installerede routere, switche, servere. Jeg ydede support for kunder, samt stod for indkøb af ny hardware.
            </div>
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">IT-teknolog</span>
              <span className="time-wrapper"><span className="time">2010 - 2012</span></span>
            </div>
            <div className="desc">
              Studerede IT-tekonologi på Aarhus Erhvervsakademi
            </div>
          </div>
        </li>

      </ul>
    </div>
  )
}