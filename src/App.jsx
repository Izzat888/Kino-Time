import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Kino from '../components/Kino/Kino'
const App = () => {
   const [search, setSearch] = useState("")
  return (
    <>
    <Navbar search={search} setSearch={setSearch}/>
    <Header/>
    <Kino search={search}/>
    </>
  )
}

export default App