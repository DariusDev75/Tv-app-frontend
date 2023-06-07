import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Colors, Size } from "../../variables/GlobalStyles";
import Text from "../../atoms/Text/Text";
import Spacer from "../../atoms/Spacer/Spacer";
const { Primary, Secondary } = Colors;
const { Max, Min, Normal, XLMax } = Size;
type FormData = {
  firstName: string;
  password: string;
};
const AuthentContent = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  //   const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Les données du formulaire sont affichées dans la console
  };

  return (
    <MediaQuery maxWidth={1000}>
      <GlobalAuthentContent>
        <AuthentCardContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </AuthentCardContainer>
      </GlobalAuthentContent>
    </MediaQuery>
  );
};

const GlobalAuthentContent = styled.div`
  height: 93vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1001px) {
  }
`;

const AuthentCardContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Secondary};
  @media screen and (min-width: 1001px) {
  }
`;

export default AuthentContent;
