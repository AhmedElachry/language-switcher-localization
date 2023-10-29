import arMesseges from "../lang/ar-EG.json";
import enMesseges from "../lang/en-US.json";
export const defaultLocale = "en-US";

export const locales = {
  "en-US": {
    messeges: enMesseges,
    name: "English",
    dir: "ltr",
  },
  "ar-EG": {
    messeges: arMesseges,
    name: "العربية",
    dir: "rtl",
  },
};
