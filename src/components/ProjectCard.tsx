"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";
import { LocalizedText } from "@/i18n/LanguageProvider";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  titleTr?: string;
  content: string;
  description: string;
  descriptionTr?: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  titleTr,
  content,
  description,
  descriptionTr,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.card}>
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        padding="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              <LocalizedText en={title} tr={titleTr || title} />
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                <LocalizedText en={description} tr={descriptionTr || description} />
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s"><LocalizedText en="Read case study" tr="Proje detayını oku" /></Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s"><LocalizedText en="View project" tr="Projeyi görüntüle" /></Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
