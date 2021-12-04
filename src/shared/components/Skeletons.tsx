import { TableCell, TableRow, Skeleton } from '@mui/material';

/**
 * @param root0 - Props.
 * @param root0.rows - Number of rows.
 * @param root0.columns - Number of columns.
 * @param root0.loading - Type of table.
 * @returns Component.
 */
export function TableSkeleton({
  columns,
  rows,
  loading,
}: {
  rows: number;
  columns: number;
  loading?: boolean;
}): JSX.Element {
  if (loading) {
    return (
      <>
        {Array(rows)
          .fill(0)
          .map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={i}>
              {Array(columns)
                .fill(0)
                .map((itemCell, iCell) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell key={iCell}>
                    <Skeleton animation="wave" />
                  </TableCell>
                ))}
            </TableRow>
          ))}
      </>
    );
  }
  return (
    <>
      {Array(rows)
        .fill(0)
        .map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={i} sx={{ height: '50px' }}>
            {Array(columns)
              .fill(0)
              .map((itemCell, iCell) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableCell key={iCell}> </TableCell>
              ))}
          </TableRow>
        ))}
    </>
  );
}
