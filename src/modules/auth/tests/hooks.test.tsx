import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Topbar } from '../../../shared/components/Layout/Topbar';

const mocks: ReadonlyArray<MockedResponse> = []; // We'll fill this in next

it('renders without error', () => {
  const node = (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Topbar sidebarOpen={true} drawerWidth={88} />
    </MockedProvider>
  );

  const component = TestRenderer.create(node);
  const tree: ReactTestRendererJSON =
    component.toJSON() as ReactTestRendererJSON;
  expect(tree?.children).not.toBeNull();
});
