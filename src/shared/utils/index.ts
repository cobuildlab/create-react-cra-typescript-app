import { ApolloCache } from '@apollo/client';
import dayjs from 'dayjs';
import { Query } from '../types/generated';

/**
 * @param str - Inpunt string.
 * @returns String humanized.
 */
export function humanize(str: string): string {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[_\s]+/g, ' ')
    .replace(/^[a-z]/, (m) => m.toUpperCase());
}

/**
 * @param query - Query to remove from the cache.
 * @returns The function that will handle the cache.
 */
export function clearQuerysFromCache<T>(
  query: keyof Query | Array<keyof Query>,
) {
  return (cache: ApolloCache<T>): void => {
    if (typeof query === 'string') {
      cache.evict({ id: 'ROOT_QUERY', fieldName: query });
    } else {
      query.forEach((item) => {
        cache.evict({ id: 'ROOT_QUERY', fieldName: item });
      });
    }

    cache.gc();
  };
}

/**
 * @param rawDate - Date to format.
 * @returns Formated date.
 */
export function humanizeDate(rawDate: string): string {
  const date = dayjs(rawDate);

  return date.isValid() ? date.format('MM/DD/YYYY hh:mm A') : '-';
}
/**
 * @param phoneNumber - PhoneNumber.
 * @returns Formated date.
 */
export function validePhone(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}
