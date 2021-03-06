import React, {Component} from 'react';
import './app.sass'
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddItem from "../add-item/add-item";
import ItemStatusFilter from "../item-status-filter";

class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'all'
    }



    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    onEddit = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }

    onDel = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id)
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    search(items, term) {
        if(term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const {todoData, term, filter} = this.state
        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData
            .filter((el) => el.done).length
        const todoCount = todoData.length - doneCount
        return (
            <div className={'todo-app'}>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className={'top-panel d-flex mb-2'}>
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItems} onDeleted={this.onDel} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
                <AddItem onEddit={this.onEddit}/>
            </div>
        );
    }
}

export default App;