import { useEffect } from "react";
import i18n from "../language/i18n";

const useLanguage = () => {
  useEffect(() => {
    const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);
};
export default useLanguage;
