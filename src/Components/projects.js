

function Projects (props){


    return(
        <div className="project">
        <div className="project__wrapper">
            <img src={props.image} alt={`${props.title} project`} className="project__img"/>
            <div className="project__description">
            <h3 className="project__description--title">{props.title}</h3>
            <h4 className="project__description--sub-title">{props.skills}</h4>
            <p className="project__description--para">{props.para}</p>
            <div className="project__description--links">
            <a href={props.github} target="_blank" className="project__description--link"><i className="fa-brands fa-github "></i></a>
            <a href={props.link} target="_blank" className="project__description--link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            

            </div>
            



        </div>
        </div>
    )
}
export default Projects