import { createContext, useState } from "react";
import { LanguageCollection } from "../lang/LanguageCollection";

export const LanguageContext = createContext(null);

const Languages = [
    { code: "en", name: 'English' },
    { code: "ru", name: "Русский" },
    { code: "az", name: "Azerbaycan" }
];

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");

 const changeLanguage = (lang = "en") => {
         if(Languages.some(language => language.code === lang))
            setCurrentLanguage(lang)
        else setCurrentLanguage("en")
 }

 const getTranslate = (key) => {
     return LanguageCollection?.[key ?? "collection"][currentLanguage]
 }

    return (
        <LanguageContext.Provider value={{currentLanguage,getTranslate,changeLanguage,Languages}}>
{children}
        </LanguageContext.Provider>
    )
}