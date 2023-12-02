
function Nav (props){
return(
<nav >
<figure><img id="logo-img" src ='logo-white.png'></img></figure>
<ul className="nav-list"> 
 <li className="nav-items" onClick={props.toggleModal}><a href="#" className="nav-link-a link-hover-effect ">About</a></li>
 <li className="nav-items"><a href="#projects"  className="nav-link-a link-hover-effect  ">Projects</a></li>  
 <li className="nav-items" onClick={props.toggleModal}><a href="#"  className="nav-link-a link-hover-effect " >Contact</a></li>    
 <li className="nav-items"><a href="#"  className="nav-link-a " onClick={props.toggleContrast} ><i class="fa-solid fa-circle-half-stroke"></i></a></li>    
</ul>
</nav>

)


}
export default Nav