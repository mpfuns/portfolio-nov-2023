



function Header (props){
    return(
<header className='header'>
<div className="header-content">
    
     <h1 className="title">Hello</h1>
     <h1 className="title special-color">It's Monet.</h1>
     <p className="header__para">I'm a <strong className="special-color">Frontend Software Engineer</strong> with an interest in buliding web application with amazing user experiences. <br></br>
     Here's more <strong className="special-color"> about me.</strong>
     </p>  
     <div className="social__list">
     <a  className="social__link  click" href="https://www.linkedin.com/in/monetpaul/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
     <a  className="social__link click" href="https://github.com/mpfuns" target="_blank"><i className="fa-brands fa-github"></i></a>
     <a className="social__link click" href='MonetPaul2023.pdf'  target="_blank"><i className="fa-solid fa-file-lines "></i></a>
     </div> 
</div>
</header>

    
    )
    
    
    }
    export default Header