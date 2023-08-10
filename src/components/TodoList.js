import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import TodoModal from "./modal";
import TodoCard from "./TodoCard";
import { useTodoContext } from "../context";
import useModal from "../hooks/modal";

const TodoList = () => {
  const { modal, toggle } = useModal(false);

  const { todoList } = useTodoContext();

  return (
    <div style={{ backgroundColor: "#F6F7F8", height: "100%" }}>
      <div
        className="header"
        style={{
          height: "200px",
          backgroundColor: "#e9eef6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h4>TodoList</h4>
        <Button onClick={() => toggle()} size="md">
          Create
        </Button>
      </div>
      <div className="container ">
        <Row xs={1} md={2} lg={3}>
          {todoList.map((e, index) => (
            <TodoCard key={index} index={index} {...e} />
          ))}
        </Row>
      </div>
      <TodoModal modal={modal} toggle={toggle} />
    </div>
  );
};

export default TodoList;
