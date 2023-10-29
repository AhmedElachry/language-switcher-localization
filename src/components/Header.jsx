import logo from "../assets/logo.png";
import { FormattedMessage } from "react-intl";
import LangSwitcher from "../i18n/LanguageSwitcher";
function Header() {
  return (
    <nav className="">
      <div className="flex flex-row items-center justify-center gap-5 mx-auto">
        <img src={logo} alt="languages logo" />
        <h1>
          <FormattedMessage id="app.title" />
        </h1>
        <LangSwitcher />
      </div>
    </nav>
  );
}

export default Header;
