import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
export default function Homepage() {

const style = {
  flex: 1,
  border: '1px red solid'
}
  return (
    <div style={style}>
      <Header name="Employee Directory"/>
      <SearchBar />
      <EmployeeList />
    </div>
  )
}
