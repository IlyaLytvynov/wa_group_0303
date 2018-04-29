import * as React from "react";

export class ContentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      value: '',
    };
    this.fetchData();
  }

  fetchData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:4001/list', true);

    xhr.send();

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        this.setState((state) => {
          state.comments = JSON.parse(xhr.response);
          return state;
        });

      }
    });
  }

  addTask(eventObject) {
    eventObject.preventDefault();
    console.log(this.state.value);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:4001/list', true);
    const data = JSON.stringify({
      title: this.state.value
    });
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        this.setState((state) => {
          state.comments.push(JSON.parse(xhr.response));
          return state;
        });

      }
    });
  }

  inputChange(eventObject) {
    const value = eventObject.currentTarget.value;
    this.setState((state) => {
      state.value = value;
      return state;
    });
  }

  render() {
    let classNames = '';
    let commentsElements = this.state.comments.map((comment, i) => {
      return <li key={i}>{ comment.title }</li>
    });

    if (this.state.isActive) {
      classNames = 'is_active'
    }

    return <div className={classNames}>
      <form onSubmit={this.addTask.bind(this)}>
        <input type="text" value={this.state.value} onChange={this.inputChange.bind(this)}/>
        <button>TEST</button>
      </form>
      <ul>
        {commentsElements}
      </ul>
    </div>
  }
}