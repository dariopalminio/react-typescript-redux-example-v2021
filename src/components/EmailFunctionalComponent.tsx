import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../store/reducers/profileReducer";
import { TStore } from "../store/store";

const EmailFunctionalComponent = () => {
  const dispatch = useDispatch();
  let htmlInputElement = React.createRef<HTMLInputElement>();

  const { email } = useSelector((state: TStore) => state.profileReducer);

  const handleEmailChange = () => {
    var value = "newEmail@gmail.com";
    if (htmlInputElement.current) {
      value = htmlInputElement.current.value;
    };

    // Emite la acción con el profileReducer de cambiar el email en el store
    dispatch(changeEmail({ email: value }));

    if (htmlInputElement.current) {
      htmlInputElement.current.value='';
    };
  };

  const styleColor = {  backgroundColor: "#7c9ea1"};

  return (
    <div style={styleColor}>
      <h1>EmailFunctionalComponent</h1>
      <div>
        <input ref={htmlInputElement} type="text" placeholder="newEmail@gmail.com" id="myInput1"  />
        <button onClick={handleEmailChange}>Change email</button>
      </div>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default EmailFunctionalComponent;