import SichounImg from '../assets/327329356_917954972567949_8077330827873234565_n.jpg'

export default function About() {
    return (
      <div className="contentCard">
        <h2 className="title">About Page</h2>
        <div className='profile'>
        <img className="image" src={SichounImg} alt='SichounIMG'></img>
        <p className="infoscript">
          Hello! My name is Sichoun Nplhaib Lee. I'm a Junior Web Developer, who is willing to do anything to learn a little more of everything.
        </p>
        </div>
        <p className="discript">
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
        <p className="discript">
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    );
  }
  