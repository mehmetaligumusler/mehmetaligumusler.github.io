"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "tr";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    const preferred = saved === "tr" || saved === "en"
      ? saved
      : navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
    setLanguageState(preferred);
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "tr" : "en"),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LocalizedText({ en, tr }: { en: React.ReactNode; tr: React.ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "tr" ? tr : en}</>;
}

export function LocalizedBlock({ en, tr }: { en: React.ReactNode; tr: React.ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "tr" ? tr : en}</>;
}

export function LocalizedDate({ value }: { value: string }) {
  const { language } = useLanguage();
  const date = new Date(`${value}T00:00:00`);
  return <>{new Intl.DateTimeFormat(language === "tr" ? "tr-TR" : "en-US", { year: "numeric", month: "long", day: "numeric" }).format(date)}</>;
}
