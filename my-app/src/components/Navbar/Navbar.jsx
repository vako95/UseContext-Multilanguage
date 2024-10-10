import Menu from "./components/Menu/Menu"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
const Navbar = () => {
const {getTranslate} = useContext(LanguageContext)
    const items = [
        {
            "name":getTranslate("navbar_list"),
             "link":"/",
             "dropdown":[]
        }
      
    ]
    return (
        <div className="navbar">
         <Menu
          items={items}
         />
        </div>
    )
}

export default Navbar;