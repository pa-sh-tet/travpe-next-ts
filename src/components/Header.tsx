"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useAuthContext } from "./AuthContext";
import { useSession } from "next-auth/react";

function Header() {
  const pathname = usePathname();
  // const {
  //   isLoggedIn,
  //   // , handleLogin, handleLogout
  // } = useAuthContext();
  const session = useSession();
  console.log(session);
  return (
    <header className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <div className="nav__logo-icon"></div>
          <div className="nav__logo-text">TravPe</div>
        </div>
        <div className="nav__links">
          {session.status === "authenticated" ? (
            <>
              <Link
                href="/"
                className={`nav__link ${
                  pathname === "/" ? "nav__link_active" : ""
                }`}
              >
                <div
                  className={`nav__link-icon home-icon ${
                    pathname === "/" ? "home-icon_active" : ""
                  }`}
                />
                Home
              </Link>
              <Link
                href="/profile"
                className={`nav__link ${
                  pathname === "/profile" ? "nav__link_active" : ""
                }`}
              >
                <div
                  className={`nav__link-icon profile-icon ${
                    pathname === "/profile" ? "profile-icon_active" : ""
                  }`}
                />
                Profile
              </Link>
              <Link href="/settings" className="nav__link">
                <div
                  className={`nav__link-icon settings-icon ${
                    pathname === "/settings" ? "settings-icon_active" : ""
                  }`}
                />
                Settings
              </Link>
            </>
          ) : (
            <Link href="/login" className="nav__link">
              <div
                className={`nav__link-icon login-icon ${
                  pathname === "/login" ? "login-icon_active" : ""
                }`}
              />
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
