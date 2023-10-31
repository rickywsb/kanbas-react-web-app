import React from "react";
import Add from "./Add";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import HelloRedux from "./ReduxExamples/HelloRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    

 return(
   <>
     <h1>Assignment 4</h1>
    <ReduxExamples />
    <HelloRedux />
        <CounterRedux />
    <AddRedux />
    <TodoList />
 
     <Add a={1} b={2} />
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions theFunction={sayHello} />
    <EventObject />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />
   </>
 );
};
export default Assignment4;