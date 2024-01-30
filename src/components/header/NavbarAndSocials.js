import MenuItems from "./MenuItems"
import SocialIcons from "./SocialIcons"

const NavbarAndSocials = (props) => {
  const menuItems = ["Home", "Podcast", "Authors"]
  const socialIcons = ["tiktok", "twitter", "instagram", "spotify"]
  return(
    <div className="navbar-and-socials">
      <MenuItems menuItems={menuItems} changeBody={props.changeBody}/>
      <span className="seperator"></span>
      <SocialIcons socialIcons={socialIcons}/>
    </div>
  )
}

export default NavbarAndSocials