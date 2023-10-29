import { useContext } from "react";
import { locales } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";

export default function LangSwitcher() {
  // Pull in the top-level locale and its setter.
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div>
      <select
        value={locale}
        // Whenever the user selects a locale, update the
        // top-level active locale.
        onChange={(e) => setLocale(e.target.value)}
      >
        {/* The keys of the `locales` config object
            are the locale codes: "en-US", "ar-EG". */}
        {Object.keys(locales).map((loc) => (
          <option value={loc} key={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
