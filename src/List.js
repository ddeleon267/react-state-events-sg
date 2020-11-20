import React, { Component } from 'react'
import { Item } from './Item'

class List extends Component {
    constructor(props){
        super(props) // gives access to 'this'

        this.state = {
            list: [{id: 1, title: "test1"}, {id: 2, title: "test2"}]
        }
    }

    handleDelete = (id) => {
       this.setState((previousState) => {
           const newState = previousState.list.filter(item => item.id !== id)
           return {
               list: newState
           }
       })

      
    }

    render() {
        const { list } = this.state
        const itemList = list.map(item => {
            return <Item id={item.id} key={item.id} title={item.title} handleOnDelete={this.handleDelete}/>
        })
        return (
            <div>
                {itemList}
            </div>
        )
    }
}

export default List
