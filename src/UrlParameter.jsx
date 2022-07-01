import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // useLocation.search = クエリ などの情報を含むオブジェクト
  const { search } = useLocation();
  // JavaScriptのメソッド
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>Url Parameterページ</h1>
      <p>パラメーターは{id}です。</p>
      <p>パラメーターは{query.get("name")}です。</p>
    </div>
  );
};
