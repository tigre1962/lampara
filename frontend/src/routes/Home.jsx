import React, {  } from "react";
import { Container } from "react-bootstrap";
import Menu  from "./components/Menu";
import { Link, Outlet } from "react-router-dom";
import { items } from "../data/items";

export default function Home(){
  return(
    <Container>
      <Menu />
      <h1>Home</h1>
      <p>Bienvenido Infeliz</p>

      <div>
      <div>
          {items.map((item) => (
            <div>
              <Link to={`/contact/${item.id}`}>{item.name}</Link>{" "}
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </Container>
  );
}