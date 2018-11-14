import React from 'react';
import Form from './Form';

import {withTodos} from './TodoProvider'

const Todo = (props) => {
    let {title, description, _id} = props.allTodos
    console.log(props)
    return (
            <div>
            {props.toggleForm ?
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={props.toggle}>edit</button>
                    <button onClick={() => props.deleteTodos(_id)}>delete</button>
                </div>
                :
                <div>
                    <Form button="Save Changes" type='update' id={_id}/>
                    <button onClick={() => props.deleteTodos(_id)}>delete</button>
                </div>
            }
            </div>
    );
};

export default withTodos(Todo);

                // <form>
                //     <input type="text" onChange={this.handleChange} name='title' placeholder='title' value={this.state.title} />
                //     <input type="text" onChange={this.handleChange} name='description' placeholder='description' value={this.state.description} />
                //     <button onClick={()=> props.editTodos(_id, )}>save</button>
                //     
                // </form>