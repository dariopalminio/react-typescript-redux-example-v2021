import * as React from "react";
import { changeEmail } from "../store/reducers/profileReducer";
//import { useDispatch, useSelector } from "react-redux";
//import { TStore } from "../store/store";
import { store } from "../store/store";

export default class EmailClassComponent extends React.Component<any, any> {
  _isMounted = false; // note this flag denote mount status
  
  inputRef = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
    this.state = { inputEmail: "", outputEmail: "" };

    //subscribe to store with callback function
    store.subscribe(() => {
      this._isMounted = true;
      var value = store.getState().profileReducer.email;
      if (this._isMounted) {
        this.setState({ outputEmail: value });
        //This throws Warning: Can't call setState on a component that is not yet mounted. 
        //This is a no-op, but it might indicate a bug in your application. 
      }
      console.log("Component receive data from store with subscribe");
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  public handleOnChange(event: any): void {
    this.setState({ inputEmail: event.target.value });
  }

  public handleEmailChange = () => {
    var value = this.state.inputEmail;
    store.dispatch(changeEmail({ email: value }));
    if (this.inputRef.current) this.inputRef.current.value = '';
  };

  public render() {
    return (
      <div style={{backgroundColor: "#7c9ecc"}}>
        <h1>EmailClassComponent</h1>
        <div>
          <input
            ref={this.inputRef} 
            placeholder="newEmail@gmail.com"
            onChange={(e) => this.handleOnChange(e)}
          />

          <button onClick={this.handleEmailChange}>Change email</button>
        </div>
        <h2>Email: {this.state.outputEmail}</h2>
      </div>
    );
  }
}
