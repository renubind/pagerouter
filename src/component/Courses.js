import React from 'react'
import { Link,Outlet } from 'react-router-dom';
export default function Courses() {

  const courseArr=[
    {
      name:"javascript",
      id:1
    },
    {
      name:"HTML",
      id:2
    },
    {
      name:"Java",
      id:3
    },
    {
      name:"Python",
      id:4
    },
  ];
  return (
    <>
    <h1>Courses</h1>
    {courseArr.map((course)=>

    {
      const {name,id}=course;
      return<Link key={id} to={`${name}`}>
        <h3>{name}</h3>
      </Link>
    }
    )}
    <Outlet />
    </>
  )
}
