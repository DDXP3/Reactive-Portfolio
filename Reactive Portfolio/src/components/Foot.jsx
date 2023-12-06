import git from '../assets/git.png'
import link from '../assets/link.png';
import stack from '../assets/stack.png';



export default function Footer() {



  return (

    <>
      <div className="foot">
        <a href='https://github.com/DDXP3'><img src={git} alt='git' width='150' height='150' align='middle'></img></a>
        <a href='https://www.linkedin.com/in/sichoun-lee-10566827b/'><img src={link} width='150' height='150' align='middle' alt='link'></img></a>
        <a href='https://stackoverflow.com/users/23053721/sichoun-lee'><img src={stack} alt='git' width="400" height='100' align='middle'></img></a>
      </div>
    </>


  )



}