import React, {  } from "react";
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  
    return (
      <Container>
        < Menu />
        <h1>Dashboard</h1>
        <p>Este es el panel de control</p>
      </Container>
    );
  }


