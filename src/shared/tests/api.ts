import { getEndpointUrl } from '@cobuildlab/8base-utils';
import { WORKSPACE_ID } from '../constants';

/**
 * Test getEndpointUrl function.
 *
 * @returns {string} - The URL of the workspace.
 */
export const getWorkspaceUrl = (): string =>
  getEndpointUrl(WORKSPACE_ID || '', 'main');
