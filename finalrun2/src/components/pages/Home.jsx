import Button from "react-bootstrap/Button";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    document.title='Home'
  })
  return (
    <>
      <h2>ReactJS and Django REST API</h2>
      <p>CRUD PROJECT</p>
      <a href="/customers">click here or customers tag to view</a>
    </>
  );
}
