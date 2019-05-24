import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faFlagCheckered, faSquareFull, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {connect } from 'react-redux';
import {addTodo,deletePost,changeStatusOfATodo} from '../actions/todoactions';
import { Container, Row, Col,Button} from 'reactstrap';
import './todolist.css';
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
    todos:state
  })
  export default connect(mapStateToProps,{addTodo,deletePost,changeStatusOfATodo})(TodoList)
