import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useTodoContext } from "../context";
import uuid from "react-uuid";

function TodoModal(props) {
  const { addTodo, onUpdateTodo, getTodoId } = useTodoContext();

  const initialTask = {
    id: props.todo?.id || "",
    name: props.todo?.name || "",
    description: props.todo?.description || ""
  };

  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = () => {
    const updatedTask = {
      ...task,
      id: task.id || getTodoId()
    };

    task.id ? onUpdateTodo(updatedTask) : addTodo(updatedTask);

    setTask(initialTask);
    props.toggle();
  };

  return (
    <Modal toggle={props.toggle} isOpen={props.modal}>
      <ModalHeader toggle={props.toggle}>
        {task.id ? "Update Task" : "Create Task"}
      </ModalHeader>
      <ModalBody>
        <form className="form">
          <div className="form-group">
            <label className="form-label">Task</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={task.name}
              className="form-control"
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Description</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="description"
              rows="5"
              value={task.description || ""}
              className="form-control"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onSubmit}>
          {task.id ? "Update" : "Create"}
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TodoModal;
