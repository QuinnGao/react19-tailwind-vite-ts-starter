import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enError from "./locales/en/error.json"
import cnError from "./locales/cn/error.json"
import jaError from "./locales/jp/error.json"
import enRequest from "./locales/en/request.json"
import cnRequest from "./locales/cn/request.json"
import jpRequest from "./locales/jp/request.json"

export const defaultNS = "error"
export const resources = {
  en: {
    error: enError,
    request: enRequest,
  },
  cn: {
    error: cnError,
    request: cnRequest,
  },
  jp: {
    error: jaError,
    request: jpRequest,
  },
} as const

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS,
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
