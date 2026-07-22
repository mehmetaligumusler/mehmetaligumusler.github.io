"use client";

import { Button } from "@once-ui-system/core";
import { LocalizedText } from "@/i18n/LanguageProvider";

/**
 * Client-side print button.
 * Triggers the browser's print dialog, which lets the user "Save as PDF".
 * The print styles in cv.module.scss optimize the output for paper/PDF.
 */
export default function PrintButtonClient() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Button onClick={handlePrint} variant="secondary" size="m" prefixIcon="document">
      <LocalizedText en="Print / Save as PDF" tr="Yazdır / PDF olarak kaydet" />
    </Button>
  );
}
