import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { useTodoContext } from "../context";
import TodoModal from "./modal";

const colors = [
  {
    primaryColor: "#5D93E1",
    secondaryColor: "#ECF3FC"
  },
  {
    primaryColor: "#F9D288",
    secondaryColor: "#FEFAF1"
  },
  {
    primaryColor: "#5DC250",
    secondaryColor: "#F2FAF1"
  },
  {
    primaryColor: "#F48687",
    secondaryColor: "#FDF1F1"
  },
  {
    primaryColor: "#B964F7",
    secondaryColor: "#F3F0FD"
  }
];

const TodoCard = ({ name, description, index, id, onUpdate }) => {
  const { onDeleteTodo } = useTodoContext();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Col className="mt-3">
        <Card
          style={{
            borderTop: `5px solid ${colors[index % 5].primaryColor}`,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
          }}
        >
          <Card.Body
            style={{
              textAlign: "start"
            }}
          >
            <Card.Title
              style={{
                display: "inline",
                padding: "2px 10px",
                borderRadius: "8px",
                backgroundColor: colors[index % 5].secondaryColor
              }}
            >
              {name}
            </Card.Title>
            <br />
            <Card.Text style={{ marginTop: "16px" }}>{description}</Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              textAlign: "right"
            }}
          >
            <FaRegEdit
              style={{ marginRight: "10px" }}
              size={20}
              color={colors[index % 5].primaryColor}
              onClick={() => toggle()}
            />

            <FaTrashAlt
              size={20}
              color={colors[index % 5].primaryColor}
              onClick={() => onDeleteTodo(id)}
            />
          </Card.Footer>
        </Card>
      </Col>
      <TodoModal
        todo={{ id, name, description }}
        modal={modal}
        toggle={toggle}
      />
    </>
  );
};

export default TodoCard;
