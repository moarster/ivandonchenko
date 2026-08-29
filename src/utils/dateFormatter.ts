export function formatDate(dateString: string, locale: "en" | "ru"): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  const localeCode = locale === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(localeCode, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
