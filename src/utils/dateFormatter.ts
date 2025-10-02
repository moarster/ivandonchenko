/**
 * Format a date or date period with month and year in the specified locale
 * @param dateOrPeriod - Either a single date string (YYYY-MM-DD) or period string (YYYY-MM-DD - YYYY-MM-DD)
 * @param locale - 'en' or 'ru'
 * @returns Formatted string like "May 2020" or "April 2018 - June 2019"
 */
export function formatDatePeriod(dateOrPeriod: string, locale: 'en' | 'ru'): string {
    // Check if it's a period (contains dash separator)
    if (dateOrPeriod.includes(' - ')) {
        const [startDate, endDate] = dateOrPeriod.split(' - ').map(d => d.trim());
        const formattedStart = formatSingleDate(startDate, locale);
        const formattedEnd = formatSingleDate(endDate, locale);
        return `${formattedStart} - ${formattedEnd}`;
    }

    // Single date
    return formatSingleDate(dateOrPeriod, locale);
}

/**
 * Format a single date as "Month Year" in the specified locale
 */
function formatSingleDate(dateString: string, locale: 'en' | 'ru'): string {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long'
    };

    const localeCode = locale === 'ru' ? 'ru-RU' : 'en-US';

    return new Intl.DateTimeFormat(localeCode, options).format(date);
}
