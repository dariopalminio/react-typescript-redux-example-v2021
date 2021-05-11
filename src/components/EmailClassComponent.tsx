import * as React from "react";
import { connect } from "react-redux";
import { changeEmail } from "../store/reducers/profileReducer";
import { store } from "../store/store";
import { TStore } from "../store/store";

class EmailClassComponent extends React.Component<any, any> {

  inputRef = React.createRef<HTMLInputElement>();

  // Constructor is not necessary
  //constructor(props: any) {
  //  super(props);
  //  this.state = { email: "" };
  //}

  public handleEmailChange = () => {
    var value = "";
    if (this.inputRef.current) value = this.inputRef.current.value;

    // Triggers an action for the reducer to modify the state in store.
    store.dispatch(changeEmail({ email: value }));

    if (this.inputRef.current) this.inputRef.current.value = "";
  };

  public render() {
    return (
      <div style={{ backgroundColor: "#7c9ecc" }}>
        <h1>EmailClassComponent</h1>
        <div>
          <input ref={this.inputRef} placeholder="newEmail@gmail.com" />

          <button onClick={this.handleEmailChange}>Change email</button>
        </div>
        {console.log("render Prop:", this.props)}
        <h2>Email: {this.props.email}</h2>
      </div>
    );
  }
}

/**
 * If a mapStateToProps function is specified, the new wrapper component
 * will subscribe to Redux store updates. This means that any time the store is updated,
 * mapStateToProps will be called. The results of mapStateToProps must be a plain object,
 * which will be merged into the wrapped component’s props.
 * If your mapStateToProps function is declared as taking one parameter,
 * it will be called whenever the store state changes, and given the store state as
 * the only parameter.
 * @param state
 * @returns
 */
const mapStateToProps = (state: TStore) => state.profileReducer;

/**
 * The connect() function connects a React component to a Redux store.
 */
export default connect(mapStateToProps, null)(EmailClassComponent);
