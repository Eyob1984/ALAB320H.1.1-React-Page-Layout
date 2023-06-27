import React from 'react'
import Header from './Header'
export default function EmployeePage() {
  const style = {
    flex: 1,
    border: '1px Blue solid',
  }
  return (
    <div style={style}>
      <Header name=" Employee " />
    </div>
  )
}
