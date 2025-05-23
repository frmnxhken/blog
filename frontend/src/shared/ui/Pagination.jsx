import React, { useMemo } from "react";
import Button from "./Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Pagination = ({ page, totalPages, setPage }) => {
  const pageNumbers = useMemo(() => {
    const range = 1;
    const pages = [];

    if (page > range + 2) {
      pages.push(1, "...");
    } else {
      for (let i = 1; i < page; i++) pages.push(i);
    }

    for (
      let i = Math.max(1, page - range);
      i <= Math.min(totalPages, page + range);
      i++
    ) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (page < totalPages - range - 1) {
      pages.push("...");
      if (!pages.includes(totalPages)) pages.push(totalPages);
    } else {
      for (let i = page + 1; i <= totalPages; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
    }

    return pages;
  }, [page, totalPages]);

  return (
    <div className="flex gap-2 flex-wrap items-center justify-center px-6 pt-12 pb-24">
      {page > 1 && (
        <Button variant="secondary" onClick={() => setPage(page - 1)}>
          <HiChevronLeft size={20} />
        </Button>
      )}

      {pageNumbers.map((pageNumber, index) =>
        pageNumber === "..." ? (
          <Button variant="light">...</Button>
        ) : (
          <Button
            key={pageNumber}
            variant={pageNumber === page ? "primary" : "light"}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        )
      )}

      {page < totalPages && (
        <Button variant="secondary" onClick={() => setPage(page + 1)}>
          <HiChevronRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
