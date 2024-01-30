const SocialIcons = (props) => {
  return(
    <div className="social-icons">
      {props.socialIcons.map((item) => {return(<a href="#" className="icon" key={item}><i className={"fab " + "fa-" + item }></i></a>)})}
    </div>
  )
}

export default SocialIcons