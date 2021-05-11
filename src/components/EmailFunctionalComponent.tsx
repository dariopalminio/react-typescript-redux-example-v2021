import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../store/reducers/profileReducer";
import { TStore } from "../store/store";

const EmailFunctionalComponent = () => {
  
  /**
   * This hook returns a reference to the dispatch function from the Redux store. 
   * You may use it to dispatch actions as needed.
   */
  const dispatch = useDispatch();
  /**
   * The equivalent of map state to props is useSelector. 
   * It takes in a function argument that returns the part of the state that you want. 
   */
  const { email } = useSelector((state: TStore) => state.profileReducer);

  let htmlInputElement = React.createRef<HTMLInputElement>();

  const handleEmailChange = () => {
    var value = "newEmail@gmail.com";
    if (htmlInputElement.current) {
      value = htmlInputElement.current.value;
    };

    // Issue the action with the profileReducer to change the email in the store.
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