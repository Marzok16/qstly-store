import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/Images/logo.jpg";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { cart, wishlist } = useCart();
  const { t, i18n } = useTranslation();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = true;
  const username = "Abdulrhman";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 sticky-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      {/* Left: Logo */}
      <div className="d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="qstly Logo"
            height="35"
            className="me-2"
            style={{
              objectFit: "contain",
              maxHeight: "35px",
              borderRadius: "5px",
            }}
          />
          <span className="fw-bold fs-5">{t("logoText")}</span>
        </Link>
      </div>

      {/* Center: Navigation links */}
      <div className="d-none d-lg-flex justify-content-center flex-grow-1">
        <ul className="navbar-nav flex-row gap-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/products">{t("shop")}</Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link text-white" to="/wishlist">
              {t("wishlist")}
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link text-white" to="/cart">
              {t("cart")}
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Language and user */}
      <div className="d-flex align-items-center gap-2">
        <button onClick={toggleLanguage} className="btn btn-outline-light btn-sm">
          {t("languageToggle")}
        </button>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle btn-sm"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {isAuthenticated ? username : t("login")}
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            {isAuthenticated ? (
              <>
                <li>
                  <Link className="dropdown-item" to="/profile">{t("profile")}</Link>
                </li>
                <li>
                  <button className="dropdown-item">{t("logout")}</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="dropdown-item" to="/login">{t("login")}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">{t("signup")}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

    </div>
  </nav>
);

}

export default NavBar;
