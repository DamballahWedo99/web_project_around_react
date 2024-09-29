import logo from "../images/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__image"
          src={logo}
          alt="Logo de Around the U.S."
        />
      </div>
    </header>
  );
}

export default Header;
