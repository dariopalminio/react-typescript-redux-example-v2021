import React from "react";
import EmailFunctionalComponent from "./components/EmailFunctionalComponent";
import EmailClassComponent from "./components/EmailClassComponent";
import Image from "./images/redux-middlewares-api-diagram.png";

const App = () => {
  return (
    <div>
      <h1>React, Typescript and Redux Toolkit</h1>
      This is an example of how you can work with Redux Toolkit and use it with
      TypeScript. The view shows an email and allows you to change the value
      that is stored in a store.
      <EmailFunctionalComponent />
      <EmailClassComponent />
      <img src={Image} alt={""} />
      <br />
      <br />
      References:
      <ul>
        <li>
          <a href="https://dev.to/stanislavfedyna/redux-toolkit-and-typescript-the-best-way-to-manage-application-state-4i97">
            Reference article: Redux Toolkit and Typescript (the best way to
            manage application state)
          </a>
        </li>
        <li>
          <a href="https://redux.js.org/">Redux Org</a>
        </li>
        <li>
          <a href="https://es.redux.js.org/">Redux Org ES</a>
        </li>
      </ul>
    </div>
  );
};

export default App;
