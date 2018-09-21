import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handelClickItem = this.handelClickItem.bind(this)
    }
    handelClickItem() {
        this.props.delete(this.props.index)
    }
    render() {
        return <div onClick={this.handelClickItem}>{this.props.content}</div>
    }
}

export default TodoItem