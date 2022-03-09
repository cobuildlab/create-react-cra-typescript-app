import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Sidebar } from '../../../shared/components/Layout/Sidebar';

const mocks: ReadonlyArray<MockedResponse> = []; // We'll fill this in next

it('renders without error', () => {
  const node = (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Sidebar open={true} drawerWidth={38} />
    </MockedProvider>
  );

  const component = TestRenderer.create(node);
  const tree: ReactTestRendererJSON =
    component.toJSON() as ReactTestRendererJSON;
  expect(tree?.children).not.toBeNull();
});
