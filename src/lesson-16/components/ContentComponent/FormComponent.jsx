import * as React from "react/cjs/react.development";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  inputChange(eventObject) {
    const value = eventObject.currentTarget.value;
    this.setState((state) => {
      state.value = value;
      return state;
    });
  }

  submit() {

  }

  render() {
    return  <form onSubmit={this.submit.bind(this)}>
      <input type="text" value={this.state.value} onChange={this.inputChange.bind(this)}/>
      <button>{this.props.helloWorld}</button>
    </form>
  }
}