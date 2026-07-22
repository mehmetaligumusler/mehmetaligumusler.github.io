"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import styles from "./LanguageToggle.module.scss";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const current = language === "en" ? "EN" : "TR";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Türkçeye geç" : "Switch to English"}
      title={language === "en" ? "Switch to Turkish" : "Türkçeye geç"}
    >
      {current}
    </button>
  );
}
