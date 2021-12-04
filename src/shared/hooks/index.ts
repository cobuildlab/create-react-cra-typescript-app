import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

type Props = {
  deafultPage?: number | undefined;
  deafultPageSize?: number | undefined;
};

type OnChaneParams = {
  page?: number;
  pageSize?: number;
};
/**
 * @param {number} deafultPage  - Default page to render.
 * @returns {[number,Function]} - State tuple.
 */
export function usePagination({
  deafultPage = 1,
  deafultPageSize = 10,
}: Props = {}): [
  { page: number; pageSize: number },
  (n: OnChaneParams) => void,
] {
  const location = useLocation();
  const history = useHistory();

  const [page, setPage] = useState(() => {
    const query = new URLSearchParams(location.search);
    const currentPage = query.get('page')
      ? Number(query.get('page'))
      : deafultPage;
    const currentPageSize = query.get('pageSize')
      ? Number(query.get('pageSize'))
      : deafultPageSize;

    return {
      page: currentPage,
      pageSize: currentPageSize,
    };
  });

  /**
   * @param value - Params.
   */
  const onChange = (value: OnChaneParams): void => {
    const query = new URLSearchParams(location.search);
    if (value.page) {
      query.set('page', value.page.toString());
    }
    if (value.pageSize) {
      query.set('pageSize', value.pageSize.toString());
    }

    const push = {
      pathname: location.pathname,
      search: query.toString(),
    };
    history.push(push);

    setPage((prev) => ({ ...prev, ...value }));
  };
  return [page, onChange];
}
