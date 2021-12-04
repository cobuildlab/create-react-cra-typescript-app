import { gql } from '@apollo/client';
import { ADMIN_TOKEN, FIELDWORKER_TOKEN, WORKSPACE_ID } from '../constants';
import { adminClient } from './apollo';

test('check test environment variables', async () => {
  expect(WORKSPACE_ID).toBeTruthy();
  expect(ADMIN_TOKEN).toBeTruthy();
  expect(FIELDWORKER_TOKEN).toBeTruthy();
});

test('apollo client', async () => {
  const result = await adminClient.query<{
    customersList: {
      items: {
        id: string;
      }[];
    };
  }>({
    query: gql`
      {
        customersList {
          items {
            id
          }
        }
      }
    `,
  });
  expect(result.data).not.toBeNull();
});
