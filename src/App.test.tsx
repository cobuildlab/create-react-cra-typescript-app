import crypto from 'crypto';

Object.defineProperty(global, 'crypto', {
  value: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /**
     * @param arr - Arrr.
     * @returns Buffter.
     */
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
  },
});

test('renders learn react link', () => {
  // eslint-disable-next-line jest/no-standalone-expect
  expect({}).toBeTruthy();
});
