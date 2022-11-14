import styles from "../styles/eom.module.css";
//"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth

import React from 'react'

const eom = ({employee}) => {
  console.log(employee)
  return (
    <div>
      <h1>
        
        {employee.name}
        </h1> 
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const response = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth")
  const employee = await response.json()

  return {
    props: {
      employee
    }
  }
} 

export default eom