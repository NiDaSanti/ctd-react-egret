import React from 'react';

let todoList = [
    {
      id: 1,
      title: "Clone Repository",
    },
    {
      id: 2,
      title: "Write Lesson 1.1",
    },
    {
      id: 3,
      title: "Submit pull request",
    },
    {
      id: 4,
      title: "Slack the asssigmet",
    },
  
  
  ];

function TodoList() {
    return (
        <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>{item.title}</li>
          );
        })}
      </ul>

     )
}

export default TodoList;