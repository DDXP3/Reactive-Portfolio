import git from '../assets/git.png'
import SQ from '../assets/SQ.png'
import SQimage from '../assets/SQimage.png'
import MSTTY from '../assets/MSTTY.png'
import MSTTYimage from '../assets/MSTTYimage.png'
import CWACOFFimage from '../assets/CWACOFFimage.png'
import PG from '../assets/PassWord.png'
import ROC from '../assets/ROC.png'
import ROCimage from '../assets/ROCimage.png'

export default function Portfolio() {
    return (
      <div className="contentCard">
        <h2 className="title">Portfolio Page</h2>
        <h3 className="subTitle">
          Song Quest
        </h3>
        <p className="discript">
          Song Quest is a working progress of a application for music producers and managers. 
        </p>
        <img src={SQimage} alt='SQimage' className='image'></img>
        <a href='https://github.com/lavollmer/songquest'><img src={git} alt='songquestGitHub' width="100" height='100'></img></a>
        <a href='https://songquest-67489ba089f5.herokuapp.com/'><img src={SQ} alt='songquest' width="100" height='100'></img></a>
        <h3 className="subTitle">
          5 Dudes - Hockey Triva
        </h3>
        <p className="discript">
          Hockey Triva is a working progress of a Worldle like game, but for guessing Hockey Team.
        </p>
        <img src={MSTTYimage} alt='MSTTYimage' className='image'></img>
        <a href='https://github.com/mhalder4/group-project-1'><img src={git} alt='hockeyTriviaGitHub' width="100" height='100'></img></a>
        <a href='https://mhalder4.github.io/group-project-1/'><img src={MSTTY} alt='mstty' width="100" height='100'></img></a>
        <h3 className="subTitle">
          Cloudy With A Chance Of Fun Facts
        </h3>
        <p className="discript">
          Clouday With A Chance Of Fun Facts is a weather tracker. 
        </p>
        <img src={CWACOFFimage} alt='CWACOFFimage' className='image'></img>
        <a href='https://github.com/DDXP3/CWACOFF'><img src={git} alt='CWACOFFGitHub' width="100" height='100'></img></a>
        <a href='https://ddxp3.github.io/CWACOFF/'>CWACOFF</a>
        <h3 className="subTitle">
          Password Generater
        </h3>
        <p className="discript">
          Password Generater is a password generater.
        </p>
        <img src={PG} alt='PasswordGen' className='image'></img>
        <a href='https://github.com/DDXP3/PasswordGen'><img src={git} alt='PassGenGitHub' width="100" height='100'></img></a>
        <a href='https://songquest-67489ba089f5.herokuapp.com/'>Password Generater</a>
        <h3 className="subTitle">
          Ring of Challengers
        </h3>
        <p className="discript">
          Ring of Challengers is a webpage of a project that I started with my brother.
        </p>
        <img src={ROCimage} alt='ROCimage' className='image'></img>
        <a href='https://github.com/DDXP3/RingofChallengers'><img src={git} alt='songquestGitHub' width="100" height='100'></img></a>
        <a href='https://songquest-67489ba089f5.herokuapp.com/'><img src={ROC} alt='rocLogo' width="100" height='100'></img></a>
      </div>
    );
  }
  