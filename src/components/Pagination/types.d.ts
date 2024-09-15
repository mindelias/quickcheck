type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (currentPage: number) => void;
  currentPage: number;
};
