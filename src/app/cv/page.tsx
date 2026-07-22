import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, cv, about, person, social } from "@/resources";
import styles from "./cv.module.scss";
import React from "react";
import { LocalizedText } from "@/i18n/LanguageProvider";
import PrintButtonClient from "./PrintButtonClient";

export async function generateMetadata() {
  return Meta.generate({
    title: cv.title,
    description: cv.description,
    baseURL: baseURL,
    image: "/images/avatar.jpg",
    path: cv.path,
  });
}

export default function CV() {
  const fileName = `${person.name.replace(/\s+/g, "-")}-CV.pdf`;

  return (
    <Column maxWidth="m" fillWidth className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={cv.title}
        description={cv.description}
        path={cv.path}
        image="/images/avatar.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${cv.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ===== Header / Identity ===== */}
      <header className={styles.intro}>
        <Row gap="20" vertical="center" s={{ direction: "column", horizontal: "center" }}>
          <Avatar src={person.avatar} size="l" />
          <Column gap="4" s={{ horizontal: "center" }}>
            <Heading as="h1" variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              <LocalizedText en={person.role} tr="Bilgisayar Mühendisliği Öğrencisi · Yapay Zekâ ve Yazılım Geliştirici" />
            </Text>
          </Column>
        </Row>

        {/* Contact info */}
        <div className={styles.contactRow}>
          <span className={styles.contactItem}>
            <Icon onBackground="accent-weak" name="email" />
            <Text variant="body-default-s">{person.email}</Text>
          </span>
          <span className={styles.contactItem}>
            <Icon onBackground="accent-weak" name="globe" />
            <Text variant="body-default-s"><LocalizedText en={person.location.split("/").pop()} tr="İstanbul" /></Text>
          </span>
          {social
            .filter((item) => item.essential)
            .map(
              (item) =>
                item.link && (
                  <span key={item.name} className={styles.contactItem}>
                    <Icon onBackground="accent-weak" name={item.icon} />
                    <Text variant="body-default-s">{item.name}</Text>
                  </span>
                ),
            )}
        </div>

        {/* Languages */}
        {person.languages && person.languages.length > 0 && (
          <Row wrap gap="8" paddingTop="4">
            {person.languages.map((language, index) => (
              <Tag key={index} size="m">
                {language}
              </Tag>
            ))}
          </Row>
        )}

        {/* ===== PDF download + print actions ===== */}
        <div className={styles.actionRow}>
          <a href="/cv.pdf" download={fileName}>
            <Button prefixIcon="document" variant="primary" size="m" aria-label={`Download ${fileName}`}>
              <LocalizedText en="Download CV (PDF)" tr="CV İndir (PDF)" />
            </Button>
          </a>
          <PrintButtonClient />
        </div>
      </header>

      {/* ===== Work Experience ===== */}
      {about.work.display && (
        <section className={styles.cvSection}>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            <LocalizedText en={about.work.title} tr="İş Deneyimi" />
          </Heading>
          <Column fillWidth gap="l">
            {about.work.experiences.map((experience, index) => (
              <Column key={`${experience.company}-${index}`} fillWidth className={styles.experienceEntry}>
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4" s={{ direction: "column", vertical: "start", gap: "4" }}>
                  <Text variant="heading-strong-l">{experience.company}</Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {experience.role}
                </Text>
                <Column as="ul" gap="12">
                  {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                    <Text as="li" variant="body-default-m" key={`${experience.company}-ach-${i}`}>
                      {achievement}
                    </Text>
                  ))}
                </Column>
              </Column>
            ))}
          </Column>
        </section>
      )}

      {/* ===== Education ===== */}
      {about.studies.display && (
        <section className={styles.cvSection}>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            <LocalizedText en={about.studies.title} tr="Eğitim" />
          </Heading>
          <Column fillWidth gap="l">
            {about.studies.institutions.map((institution, index) => (
              <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                <Text variant="heading-strong-l">{institution.name}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
        </section>
      )}

      {/* ===== Awards & Highlights ===== */}
      {about.highlights.display && (
        <section className={styles.cvSection}>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            <LocalizedText en={about.highlights.title} tr="Başarılar" />
          </Heading>
          <Column fillWidth gap="l">
            {about.highlights.items.map((item) => (
              <Column key={item.title} fillWidth gap="8" className={styles.highlightCard}>
                <Row fillWidth horizontal="between" vertical="start" s={{ direction: "column", gap: "4" }}>
                  <Text variant="heading-strong-l">{item.title}</Text>
                  <Text variant="label-default-s" onBackground="brand-weak">{item.timeframe}</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">{item.description}</Text>
                {item.link && (
                  <Button href={item.link} suffixIcon="arrowUpRightFromSquare" size="s" variant="tertiary">
                    <LocalizedText en="View event page" tr="Etkinlik sayfasını görüntüle" />
                  </Button>
                )}
              </Column>
            ))}
          </Column>
        </section>
      )}

      {/* ===== Technical Skills ===== */}
      {about.technical.display && (
        <section className={styles.cvSection}>
          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            <LocalizedText en={about.technical.title} tr="Teknik Yetkinlikler" />
          </Heading>
          <Column fillWidth gap="l">
            {about.technical.skills.map((skill, index) => (
              <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                <Text variant="heading-strong-l">
                  <LocalizedText
                    en={skill.title}
                    tr={
                      skill.title === "Programming & Application Development"
                        ? "Programlama ve Uygulama Geliştirme"
                        : skill.title === "Front-End Development"
                          ? "Front-End Geliştirme"
                          : skill.title === "Cloud, DevOps & Platforms"
                            ? "Bulut, DevOps ve Platformlar"
                            : "Bilgisayarlı Görü ve Yapay Zekâ"
                    }
                  />
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {skill.description}
                </Text>
                {skill.tags && skill.tags.length > 0 && (
                  <Row wrap gap="8" paddingTop="8">
                    {skill.tags.map((tag, tagIndex) => (
                      <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                        {tag.name}
                      </Tag>
                    ))}
                  </Row>
                )}
              </Column>
            ))}
          </Column>
        </section>
      )}
    </Column>
  );
}
