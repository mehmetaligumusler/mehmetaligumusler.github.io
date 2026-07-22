import type { Language } from "./LanguageProvider";

const labels = {
  Home: "Ana Sayfa",
  Profile: "Profil",
  Projects: "Projeler",
  Gallery: "Galeri",
  CV: "Özgeçmiş",
  "About Me": "Hakkımda",
  "Work Experience": "İş Deneyimi",
  Education: "Eğitim",
  "Awards & Highlights": "Başarılar",
  "Technical Skills": "Teknik Yetkinlikler",
  "Read case study": "Proje detayını oku",
  "View project": "Projeyi görüntüle",
  "Related projects": "İlgili projeler",
} as const;

export function translateLabel(value: string, language: Language) {
  if (language === "en") return value;
  return labels[value as keyof typeof labels] ?? value;
}
