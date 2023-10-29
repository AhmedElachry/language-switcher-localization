import { IntlProvider } from "react-intl";
import { defaultLocale, locales } from "./i18n-config";
import { useState } from "react";
import { LocaleContext } from "./LocaleContext";

export default function I18n(props) {
  // Add the active locale as component state.
  const [locale, setLocale] = useState(defaultLocale);
  return (
    //  IntlProvider needs to be fed the active `locale`
    //     as well as the translation `messages` of the
    // active locale. The `defaultLocale` is a
    //     fallback when there is a missing translation.
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={locales[locale].messeges}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
