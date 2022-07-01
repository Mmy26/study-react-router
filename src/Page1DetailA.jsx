import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  // state === arr
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <p>Page1DetailA</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
