"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="settings-page">
      <div className="settings block-style">
        <h2 className="settings__title">Settings</h2>
        <div className="settings__container">
          <ul className="settings__menu">
            <li
              className={`settings__menu-item link ${
                activeTab === 0 && "settings__menu-item_active"
              }`}
              onClick={() => handleTabClick(0)}
            >
              General
            </li>
            <li
              className={`settings__menu-item link ${
                activeTab === 1 && "settings__menu-item_active"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Profile
            </li>
          </ul>
          <div className="settings__content">
            {activeTab === 0 && (
              <div className="settings__content-box">
                <div className="settings__content-item">
                  {/* TODO Добавить языки */}
                  <label className="settings__label">Language</label>
                  <select
                    className="settings__select"
                    name="language"
                    id="language-select"
                  >
                    {/* TODO сделать изначальным английский */}
                    <option value={""} className="settings__option" disabled>
                      Choose language
                    </option>
                    <option value={"English"} className="settings__option">
                      English
                    </option>
                    <option value={"Russian"} className="settings__option">
                      Русский
                    </option>
                  </select>
                </div>
                {/* TODO Добавить тему */}
                <div className="settings__content-item">
                  <label className="settings__label">Theme</label>
                  <select
                    className="settings__select"
                    name="theme"
                    id="theme-select"
                  >
                    <option value={""} className="settings__option" disabled>
                      Choose theme
                    </option>
                    <option value={"Light"} className="settings__option">
                      Light
                    </option>
                    <option value={"Dark"} className="settings__option">
                      Dark
                    </option>
                  </select>
                </div>
                <div className="settings__content-item">
                  <label className="settings__label">Logout fron system</label>
                  <h3>Are you sure?</h3>
                  <button
                    className="settings__logout-button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
            {activeTab === 1 && <div className="settings__content-item"></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
