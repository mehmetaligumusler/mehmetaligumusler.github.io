import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";
import styles from "./gallery.module.scss";
import { LocalizedText } from "@/i18n/LanguageProvider";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL,
    image: "/images/avatar.jpg",
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="l" fillWidth className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image="/images/avatar.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.intro}>
        <Text variant="label-strong-s" onBackground="brand-strong"><LocalizedText en="VISUAL JOURNAL" tr="GÖRSEL GÜNLÜK" /></Text>
        <Heading as="h1" variant="display-strong-xl"><LocalizedText en="Gallery" tr="Galeri" /></Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          <LocalizedText en="A growing collection of landscapes, places, and moments beyond the code." tr="Kodun ötesindeki manzaralardan, yerlerden ve anlardan oluşan büyüyen bir koleksiyon." />
        </Text>
      </header>
      <GalleryView />
    </Column>
  );
}
