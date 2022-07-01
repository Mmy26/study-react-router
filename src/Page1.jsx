import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const histroy = useHistory();
  const onClickDetailA = () => histroy.push("/page1/detailA");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathName: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
