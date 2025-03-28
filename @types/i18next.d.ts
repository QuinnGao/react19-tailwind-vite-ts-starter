// import the original type declarations
import "i18next"
// import all namespaces (for the default language, only)
import { resources, defaultNS } from "src/i18n"

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: typeof defaultNS
    // custom resources type
    resources: (typeof resources)["en"]
    // other
  }
}
