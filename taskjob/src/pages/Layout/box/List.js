import React,{Component} from 'react';
import Task from './List/Task';
import MenuTab from './List/MenuTab';
class List extends Component {
    render(){
        return (
            <div>
                <MenuTab/>
                <div className="is-task-list">
                    <div>
                        <Task />
                    </div>
                </div>
            </div>
        )
    }
}

export default List;