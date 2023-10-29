import { useEffect } from "react";
import { useIntl } from "react-intl";
import { locales } from "./i18n-config";

export function useDocL10n() {
  // Get the active locale from the `intl`
  // instance.
  const { locale } = useIntl();

  // Update the <html dir> attr whenever
  // the locale changes.
  useEffect(() => {
    document.dir = locales[locale].dir;
  }, [locale]);
}
