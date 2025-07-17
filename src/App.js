import './App.css';
import emailjs from '@emailjs/browser';
//COMP
import Nav from './Components/Nav';
import Header from './Components/Header';
import Projects from './Components/projects';
import Footer from './Components/Footer';
import data from './data';

function App() {
 

 function contact(event){
  event.preventDefault()
  const loading= document.querySelector('.modal__overlay--loading')
loading.classList+= ' modal__overay--visible' 
 const success=document.querySelector('.modal__overlay--success')


  emailjs.sendForm(
   'service_hztb83j',
   'template_2c353bc',
  event.target, 
  '_43HFqhr843RLsncp'
  ).then(()=>{
    loading.classList.remove('modal__overay--visible')
    success.classList+= ' modal__overay--visible' 
  }).catch(()=>{
    loading.classList.remove('modal__overay--visible')
    alert(
      "The email servcie is tempoarily unavailable. Please contact me directly on monetpaul23@gmail.com"
    )
  })

 }
 let isModalOpen =false
 function toggleModal(){
  

  if(isModalOpen){
    isModalOpen=false
    return document.body.classList.remove("modal--open") ;
  } 

    
    document.body.classList+= " modal--open";
    isModalOpen= true
  
  

 }
 
 let contrastToggle= false
function toggleContrast(){
  contrastToggle= !contrastToggle
  if(contrastToggle){
    document.body.classList+=" dark-theme"
  }
  else{
    document.body.classList.remove("dark-theme")
  }

} 
function moveBackground(event){
  const scaleFactor= 1/20
  const shapes= document.querySelectorAll(".shape")
  const xMouse= event.clientX*scaleFactor
  const yMouse= event.clientY * scaleFactor
  for(let i =0; i<shapes.length; ++i){
    const isOdd= i%2 !==0;
    const boolInt= isOdd? -1:1;
    shapes[i].style.transform= `translate(${xMouse* boolInt}px, ${yMouse*boolInt}px)`
  }

}


 
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
  <section id='landing-page' onMouseMove={moveBackground}>
      <Nav  toggleModal={toggleModal} toggleContrast={toggleContrast}/> 
      <Header toggleModal={toggleModal}/>
  <a href='#'>
  <button className='mail__btn click' onClick={toggleModal}>
  <i class="fa-solid fa-envelope"></i>
  </button>
  </a>
    <a href="#projects" className="scroll">
      <div className='scroll__icon click'></div>
    </a>
    <div className='modal'>
    <div className='modal__half modal__about'>
      <h3 className='modal__title modal__title--about'>Here's a bit  about me.</h3>
      <h4 className='modal__sub-title modal__sub-title--about'>Rising Developer</h4>
      <p className='modal__para'>
        I'm a <b className='special-color'>Rising Developer</b> with a strong passion for developing software with<b className='special-color'> great user experiences.</b>
        <br></br>
        I'm currently working on Bachelor degree in <b className='special-color'> Computer Science</b>! 
      </p>
  
      <div className='modal__languages'>
        <figure className='modal__language' >
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"/>
            <span className='language__name'> HTML</span>
        </figure>
        <figure className='modal__language'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"/>
        <span  className='language__name'> CSS</span>
        </figure>
        <figure className='modal__language'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"/>
        <span  className='language__name'> Javascript</span>
        </figure>
        <figure className='modal__language'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"/> 
        <span  className='language__name'> React</span>
        </figure>

      </div>
    </div>
    <div className='modal__half modal__contact'>
    <i class="fa-solid fa-x modal__exit click" onClick={toggleModal}></i>
    <h3 className='modal__title modal__title--contact'>Let's have a chat!</h3>
    <h3 className='modal__sub-title modal__sub-title--conact'>I'm currently open to new opportunities</h3>
    <form id="contact__form"  onSubmit={contact}>
    <div className='form__item'>
      <label className='form__item--label' for="name">Name</label>
      <input className='input' name="user_name" type="text" required></input>
    </div>
    <div className='form__item'>
      <label className='form__item--label' for="email">Email</label>
      <input className='input' name="user_email" type="email" required></input>
    </div><div className='form__item'>
      <label className='form__item--label' for="message">Message</label>
      <textarea className='input' name="message" type="text" required></textarea>
    </div>
    <button id="contact__submit" className='form__submit'>Send it my way</button>
    </form>
        <div className='modal__overlay modal__overlay--loading'>
        <i class="fa-solid fa-spinner"></i>
        </div>
        <div className='modal__overlay modal__overlay--success'>
        Thanks for  the message! Looking  forward to speaking  to you soon!
        </div>
    </div>
    </div>
    <img src="semi circle.svg" className='shape shape--0'></img>
    <img src="circle.svg" className='shape shape--1'></img>
    <img src="squiggly.svg" className='shape shape--2'></img>
    <img src="circle.svg" className='shape shape--3'></img>
    <img src="triangle.svg" className='shape shape--4'></img>
    <img src="circle.svg" className='shape shape--5'></img>
    <img src="squiggly.svg" className='shape shape--6'></img>
    <img src="circle.svg" className='shape shape--7'></img>
    <img src="semi circle.svg" className='shape shape--8'></img>
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
        <Footer toggleModal={toggleModal} />
      </div>
  );
}

export default App;
