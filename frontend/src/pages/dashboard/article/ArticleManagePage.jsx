import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Loading from "@/shared/ui/Loading";
import Alert from "@/shared/ui/Alert";
import Pagination from "@/shared/ui/Pagination";

import {
  ArticleItem,
  ArticleSearchInput,
  ArticleTab,
} from "@/features/article/ui";
import { useArticleDashboard } from "@/features/article/hooks";

const ArticleManagePage = () => {
  const alert = useLocation().state;
  const [status, setStatus] = useState("publish");
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, pagination, page, setPage } = useArticleDashboard(
    status,
    keyword
  );

  return (
    <>
      {alert && <Alert type={alert?.type} message={alert?.message} />}
      <ArticleSearchInput onSearch={(val) => setKeyword(val)} />
      <ArticleTab onChangeStatus={(val) => setStatus(val)} active={status} />
      <div className="grid grid-cols-1 gap-y-2 mt-6">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((article, index) => <ArticleItem key={index} {...article} />)
        )}
      </div>
      {pagination.last_page > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={pagination.last_page}
        />
      )}
    </>
  );
};

export default ArticleManagePage;
