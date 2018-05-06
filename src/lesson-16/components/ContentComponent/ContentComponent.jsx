import * as React from "react";
import { AjaxService } from '../../services/ajax.service';
import { Form } from './FormComponent.jsx';
import { List } from './ListComponent.jsx';

const ajaxService = new AjaxService('http://localhost:4001/list');


export class ContentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      value: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const success = (comments) => {
      console.log(comments);
      this.setState((state) => {
        state.comments = comments;
        return state;
      });
    };

    ajaxService.get()
      .then(success.bind(this))
      .catch((e) => {
        console.log(e);
      });
  }

  addTask(eventObject) {
    eventObject.preventDefault();
    console.log(this.state.value);
    ajaxService
      .post()
      .then((comment) => {
        this.setState((state) => {
          state.comments.push(comment);
          return state;
        });
      })
  }

  render() {
    let classNames = '';

    if (this.state.isActive) {
      classNames = 'is_active'
    }

    return <div className={classNames}>
      <Form helloWorld={'Add atsk'}/>
      <List comments={this.state.comments} />
    </div>
  }
}