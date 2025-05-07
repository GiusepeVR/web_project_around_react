import logo from "/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Around The U.S. Logo" className="nav__logo" />
      </nav>
      <h1 className="header__title">Around The U.S.</h1>
      <div className=""></div>
    </header>
  );
}

export default Header;
