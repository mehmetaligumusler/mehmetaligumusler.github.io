import Link from "next/link";
import { Schema, Meta } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";
import Reveal from "@/components/Reveal";
import styles from "./home.module.scss";
import { LocalizedText } from "@/i18n/LanguageProvider";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

const focusAreas = [
  {
    index: "01",
    title: "Applied AI",
    titleTr: "Uygulamalı Yapay Zekâ",
    description: "Deep learning, anomaly detection, model evaluation, and data pipelines built around measurable outcomes.",
    descriptionTr: "Ölçülebilir sonuçlara odaklanan derin öğrenme, anomali tespiti, model değerlendirme ve veri hatları.",
  },
  {
    index: "02",
    title: "Computer Vision",
    titleTr: "Bilgisayarlı Görü",
    description: "Real-time detection, tracking, synthetic data, and autonomous-system perception with Python and OpenCV.",
    descriptionTr: "Python ve OpenCV ile gerçek zamanlı tespit, takip, sentetik veri ve otonom sistem algısı.",
  },
  {
    index: "03",
    title: "Production Software",
    titleTr: "Üretim Odaklı Yazılım",
    description: "Full-stack products and deployment workflows using React, PostgreSQL, containers, and CI/CD tooling.",
    descriptionTr: "React, PostgreSQL, konteynerler ve CI/CD araçlarıyla full-stack ürünler ve dağıtım süreçleri.",
  },
];

const profileFacts = [
  { value: "2021—Now", valueTr: "2021—Bugün", label: "Computer Engineering", labelTr: "Bilgisayar Mühendisliği" },
  { value: "3", valueTr: "3", label: "Industry internships", labelTr: "Sektör stajı" },
  { value: "11", valueTr: "11", label: "Project case studies", labelTr: "Proje çalışması" },
  { value: "3", valueTr: "3", label: "Awards & achievements", labelTr: "Ödül ve başarı" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}${home.image}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={`${styles.eyebrow} hero-fade-up delay-0`}>
            <span className={styles.statusDot} />
            <LocalizedText en="Computer Engineering · İstanbul" tr="Bilgisayar Mühendisliği · İstanbul" />
          </div>
          <p className={`${styles.kicker} hero-fade-up delay-1`}><LocalizedText en="AI · CYBERSECURITY · COMPUTER VISION" tr="YAPAY ZEKÂ · SİBER GÜVENLİK · BİLGİSAYARLI GÖRÜ" /></p>
          <h1 className="hero-fade-up delay-2">{home.headline}</h1>
          <div className={`${styles.intro} hero-fade-up delay-3`}>{home.subline}</div>
          <div className={`${styles.actions} hero-fade-up delay-4`}>
            <Link href="/work" className={styles.primaryAction}><LocalizedText en="Explore projects" tr="Projeleri incele" /> <span>↗</span></Link>
            <Link href="/about" className={styles.secondaryAction}><LocalizedText en="View experience" tr="Deneyimimi görüntüle" /></Link>
          </div>
        </div>

        <aside className={`${styles.profileCard} hero-fade-in delay-2`} aria-label="Profile summary">
          <div className={styles.avatarFrame}>
            <img src={person.avatar} alt={person.name} className={styles.avatar} />
          </div>
          <p className={styles.availability}><LocalizedText en="Based in İstanbul, Türkiye" tr="İstanbul, Türkiye" /></p>
          <h2>{person.name}</h2>
          <p><LocalizedText en={person.role} tr="Bilgisayar Mühendisliği Öğrencisi · Yapay Zekâ ve Yazılım Geliştirici" /></p>
          <div className={styles.profileLinks}>
            <a href="https://github.com/mehmetaligumusler">GitHub</a>
            <a href="https://www.linkedin.com/in/mehmetaligumusler/">LinkedIn</a>
            <a href={`mailto:${person.email}`}>Email</a>
          </div>
        </aside>
      </section>

      <Reveal as="section" className={styles.metrics}>
        {profileFacts.map((item) => (
          <div key={item.label} className={styles.metric}>
            <strong><LocalizedText en={item.value} tr={item.valueTr || item.value} /></strong>
            <span><LocalizedText en={item.label} tr={item.labelTr} /></span>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p><LocalizedText en="WHAT I BUILD" tr="NELER GELİŞTİRİYORUM" /></p>
          <h2><LocalizedText en="Engineering across the full lifecycle." tr="Uçtan uca mühendislik çözümleri." /></h2>
        </div>
        <div className={styles.focusGrid}>
          {focusAreas.map((area, i) => (
            <Reveal as="article" key={area.title} className={styles.focusCard} delay={i * 80}>
              <span>{area.index}</span>
              <h3><LocalizedText en={area.title} tr={area.titleTr} /></h3>
              <p><LocalizedText en={area.description} tr={area.descriptionTr} /></p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <div className={styles.sectionHeadingRow}>
          <div className={styles.sectionHeading}>
            <p><LocalizedText en="SELECTED WORK" tr="SEÇİLİ PROJELER" /></p>
            <h2><LocalizedText en="Projects with real constraints and clear outcomes." tr="Gerçek kısıtlar ve ölçülebilir sonuçlarla geliştirilen projeler." /></h2>
          </div>
          <Link href="/work" className={styles.textLink}><LocalizedText en="See all projects →" tr="Tüm projeleri gör →" /></Link>
        </div>
        <Projects range={[1, 4]} />
      </Reveal>

      <Reveal as="section" className={styles.contactBand}>
        <div>
          <p><LocalizedText en="LET'S BUILD SOMETHING USEFUL" tr="BİRLİKTE FAYDALI BİR ŞEY GELİŞTİRELİM" /></p>
          <h2><LocalizedText en="Open to ambitious AI and software engineering work." tr="İddialı yapay zekâ ve yazılım mühendisliği çalışmalarına açığım." /></h2>
        </div>
        <a href={`mailto:${person.email}`} className={styles.primaryAction}><LocalizedText en="Start a conversation" tr="İletişime geç" /> <span>↗</span></a>
      </Reveal>
    </main>
  );
}
