import Logo from './Logo'
import './headerStylesheet.css'
import NavbarAndSocials from "./NavbarAndSocials"

const Header = (props) => {
  return(
    <div className="header">
      <Logo />
      <NavbarAndSocials changeBody={props.changeBody}/>
    </div>
  )
}

export default Header