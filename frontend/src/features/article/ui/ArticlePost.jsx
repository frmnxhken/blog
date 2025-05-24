import React from "react";
import Loading from "@/shared/ui/Loading";
import Pagination from "@/shared/ui/Pagination";
import Card from "@/shared/ui/Card";

const ArticlePost = ({ data, pagination, isLoading, page, setPage }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-24">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((article, index) => <Card key={index} {...article} />)
        )}
      </div>
      {pagination?.last_page > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={pagination.last_page}
        />
      )}
    </>
  );
};

export default ArticlePost;
