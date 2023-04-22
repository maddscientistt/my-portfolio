import './App.scss';
import Timeline from './components/timeline';
import Banner from './components/banner';
import Header from './components/header';
// import LegacyTimeline from './components/legacyTimeline';
// import {Stars} from './components/StarsCanvas';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Stars /> */}
      <div className="container-fluid">
        <div className='header-div'>
          <Header />
          {/* <LegacyTimeline /> */}
        </div>
        <div className="row example-centered">     
         <Timeline /> 
        </div>
      </div>
 
    </div>
  );
}

export default App;
