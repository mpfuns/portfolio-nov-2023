
export default function Footer (props){


    return(
        <footer>
            <div className="small-row footer__row">
                <a href="#" className="footer__anchor">
                    <figure className="footer__logo">
                        <img src="logo-pink.png" className="footer__logo--img"/>
                    </figure>
                    <span className="footer__logo--popper">Top <i class="fa-solid fa-arrow-up"></i></span>
                </a>
                <div className="footer__links--list">
                   <a href="https://github.com/mpfuns"  className=" footer__link link-hover-effect link-hover-effect--black" target="_blank">Github</a> 
                   <a href="https://www.linkedin.com/in/monetpaul/"  className=" footer__link link-hover-effect link-hover-effect--black" target="_blank">LinkedIn</a> 
                   <a href="mailto:monetpaul23@gmail.com"  className=" footer__link link-hover-effect link-hover-effect--black" target="_blank">Email</a> 
                   <a href="MonetPaul2023.pdf"className=" footer__link link-hover-effect link-hover-effect-black" target="_blank">Resume</a> 
                </div>
                <div className="footer__copyright">
Copyright &copy; 2023 Monet Paul
                </div>
            </div>
        </footer>
    )
}