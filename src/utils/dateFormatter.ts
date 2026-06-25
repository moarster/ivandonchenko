export function formatDatePeriod(
  dateOrPeriod: string,
  locale: "en" | "ru",
): string {
  // Check if it's a period (contains dash separator)
  if (dateOrPeriod.includes(" - ")) {
    const [startDate, endDate] = dateOrPeriod.split(" - ").map((d) => d.trim());
    const formattedStart = formatSingleDate(startDate, locale);
    const formattedEnd = formatSingleDate(endDate, locale);
    return `${formattedStart} - ${formattedEnd}`;
  }

  // Single date
  return formatSingleDate(dateOrPeriod, locale);
}

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

/**
 * Format a single date as "Month Year" in the specified locale
 */
function formatSingleDate(dateString: string, locale: "en" | "ru"): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const localeCode = locale === "ru" ? "ru-RU" : "en-US";

  return new Intl.DateTimeFormat(localeCode, options).format(date);
}
