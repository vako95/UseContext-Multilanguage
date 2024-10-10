import { useContext } from "react";
import "./MenuItem.css"
import { LanguageContext } from "../../../../../../context/LanguageContext";

const MenuItem = ({item}) => {
const {currentLanguage,changeLanguage,Languages} = useContext(LanguageContext)
    return(
         <li>
           {Languages.map((lang) => (
             <button
              onClick={() => changeLanguage(lang.code)}
              disabled={currentLanguage === lang.code}
              >
                 {lang.name}
             </button>
           ))}
     {item.name}
         </li>
    )
}

export default MenuItem;