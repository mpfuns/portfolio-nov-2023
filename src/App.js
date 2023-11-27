import './App.css';
//COMP
import Nav from './Components/Nav';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import Footer from './Components/Footer';





import data from './data';

function App() {
 const projectGroup= data.map(item => {  
  return (
  <Projects   
  image={item.picImg}
  title={item.projectName}
  skills={item.program}
  para={item.para}
  github={item.githubLink}
  link={item.onlineLink}


  
  />
    )}
)
 
 
  return (
    <div className="App">
  <section id='landing-page'>
      <Nav/> 
      <Header/>
  <button className='mail__btn click'>
  <i class="fa-solid fa-envelope"></i>
  </button>
    <a href="#projects" className="scroll">
      <div className='scroll__icon click'></div>
    </a>
    <div className='modal'>
    <div className='modal__half modal__about'>
      <h3 className='modal__title modal__title--about'>Here's a bit  about me.</h3>
      <h4 className='modal__sub-title modal__sub-title--about'>Frontend Software Engineer</h4>
    </div>
    <div className='modal__half modal__contact'>Let's have a chat
    <h3 className='modal__title modal__title--contact'>Here's a bit  about me.</h3>
    <h4 className='modal__sub-title modal__sub-title--conact'>Frontend Software Engineer</h4>
    </div>
    </div>
  </section>
     
    
      <section id='projects'>
        <div className='container'>
          <div className='big-row'>
          <div className='section__title'>
            <h1>Here are some of my <span className='special-color'>projects</span></h1>
            </div>
       <div className="project--group">
       {projectGroup}
        </div>     
      
      </div>
      </div>
      </section>
        <Footer   />
      </div>
  );
}

export default App;
