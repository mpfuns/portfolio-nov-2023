



function Header (props){
    return(
<header className='header'>
<div className="header-content">
    
     <h1 className="title">Hello</h1>
     <h1 className=" title"><span className="special-color">It's Monet.</span></h1>
     <p className="header__para">I'm a <strong className="special-color">Rising Developer</strong> with an interest in buliding application with amazing user experiences. <br></br>
     Here's more <strong className="special-color click" onClick={props.toggleModal}> about me.</strong>
     </p>  
     <div className="social__list">
     <a  className="social__link  click" href="https://www.linkedin.com/in/monetpaul/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
     <a  className="social__link click" href="https://github.com/mpfuns" target="_blank"><i className="fa-brands fa-github"></i></a>
     <a className="social__link click" href='2025-MonetPaulresume.pdf'  target="_blank"><i className="fa-solid fa-file-lines "></i></a>
     </div> 
</div>
</header>

    
    )
    
    
    }
    export default Header