import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        list: [],
        inputValue: ''   
    }
    this.handelChange = this.handelChange.bind(this)
    this.handelClick = this.handelClick.bind(this)
    this.handelItem = this.handelItem.bind(this)
  }
  handelClick() {
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }
  handelChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handelItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  getItem() {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem delete={this.handelItem} key={index} content={item} index={index}/>
      })
    )
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handelChange}/>
          <button onClick={this.handelClick}>click</button>
        </div>
        <ul>{this.getItem()}</ul>
      </div>
    );
  }
}

export default TodoList;
