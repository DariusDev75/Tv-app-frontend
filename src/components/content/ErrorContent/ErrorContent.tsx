import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { useNavigate } from "react-router";
import Icon from "../../atoms/Icon/Icon";
import error from "../../../img/error.gif";
type Props = {};

const ErrorContent = (props: Props) => {
  let navigate = useNavigate();
  const HomeRedirection = () => {
    navigate("/");
  };

  return (
    <div>
      <Icon src={error} />

      <Button handleClick={HomeRedirection}>
        <Text value={"Retour"} />
      </Button>
    </div>
  );
};

export default ErrorContent;
