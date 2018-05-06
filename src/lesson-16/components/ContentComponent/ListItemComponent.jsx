import React from "react";

export class ListItem extends React.Component{
  constructor() {
    super();
    this.state = {
      isEdit: false
    }
  }

  edit() {
    this.setState((state) => {
      state.isEdit = true;
      return state;
    })
  }

  render() {
    const classNames = `item ${this.state.isEdit ? 'edit' : ''}`;

    return <li className={classNames} onDoubleClick={this.edit.bind(this)}>{this.props.text}</li>
  }
}