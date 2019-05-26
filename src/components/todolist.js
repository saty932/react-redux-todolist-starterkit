import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faFlagCheckered, faSquareFull, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {connect } from 'react-redux';
import {addTodo,deletePost,changeStatusOfATodo} from '../actions/todoactions';
import {updateVisibleFilter} from '../actions/visiblefilter';
import { Container, Row, Col,Button} from 'reactstrap';
import './todolist.css';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
    return todos
    case "SHOW_COMPLETED":
    return todos.filter(t => t.completed)
    case "SHOW_ACTIVE":
    return todos.filter(t => !t.completed)
    default:
    throw new Error('Unknown filter: ' + filter)
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:""
    };
    this.updateInputValue=this.updateInputValue.bind(this);
    this.addToTodoList=this.addToTodoList.bind(this);
    this.deletePost=this.deletePost.bind(this);
    this.changeStatusOfATodo=this.changeStatusOfATodo.bind(this);
    this.updateVisibleFilter=this.updateVisibleFilter.bind(this);
  }
  

  updateInputValue(evt){
    this.setState({inputValue:evt.target.value
    })
    
  }
  addToTodoList(){
    if(this.state.inputValue!==null&&this.state.inputValue!==""){
      this.props.addTodo(this.state.inputValue);
      this.setState({inputValue:""});        
    }
    
  }
  deletePost(index){
    this.props.deletePost(index);
  }
  changeStatusOfATodo(index){
    this.props.changeStatusOfATodo(index);
  }
  updateVisibleFilter(filterType){
    this.props.updateVisibleFilter(filterType);
  }
  render() {
    
    let todos=this.props.todos.map((todo,index)=>{
      let fontAwesomeIcon=todo.completed===false?<FontAwesomeIcon className="checkBox" onClick={() => this.changeStatusOfATodo(index)} icon={faSquareFull}/>:<FontAwesomeIcon className="checkBoxWithTick" onClick={() => this.changeStatusOfATodo(index)} icon={faCheckSquare}/>;
      return (
        <div key={index} className="eachTodo">
        <span>{fontAwesomeIcon}</span>
        <span>
        <FontAwesomeIcon className="deleteSymbol" onClick={() => this.deletePost(index)}  icon={faTrashAlt} />
        </span>
        <span className="todoDesc">{todo.desc}</span>
        </div>
      );
    });
    
    return (    
      
      <Container >
      <Row>
      <Col sm="12" md={{size:6,offset:3}}>
      <div className="todoContent">
      <h3 className="header">Todo List</h3>
      <div>
      <input value={this.state.inputValue} className="textField" onChange={this.updateInputValue} placeholder="   Enter Todo..."/>
      <Button color="success" className="addButton" onClick={this.addToTodoList}>Add</Button>
      </div>
      <p className="filterType">
        <span className="leftFilter" style={{color:this.props.visibilityFilter==='SHOW_ALL'?'red':'black'}}
        onClick={this.updateVisibleFilter.bind(this,"SHOW_ALL")}>All</span>
        <span style={{color:this.props.visibilityFilter==='SHOW_COMPLETED'?'red':'black'}} onClick={this.updateVisibleFilter.bind(this,"SHOW_COMPLETED")}>Completed
        </span>
        <span style={{color:this.props.visibilityFilter==='SHOW_ACTIVE'?'red':'black'}} className="rightFilter" onClick={this.updateVisibleFilter.bind(this,"SHOW_ACTIVE")}>Active
        </span>
      </p>
      <div className="todoDataContent">
      {todos}
      </div>
      </div>  
      </Col>
      </Row>
      </Container>
      
      
    );
  }
}

const mapStateToProps=state=>({
  todos:getVisibleTodos(state.todos,state.visibilityFilter),
  visibilityFilter:state.visibilityFilter
})
export default connect(mapStateToProps,{addTodo,deletePost,changeStatusOfATodo,updateVisibleFilter})(TodoList)
