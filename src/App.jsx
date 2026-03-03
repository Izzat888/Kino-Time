import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Kino from '../components/Kino/Kino'
import Kino2 from '../components/Kino2/Kino2'
import Sport from '../components/Sport/Sport'

const App = () => {
  const [search, setSearch] = useState("")

  return (
    <>
      
      <section id='home'>
        <Navbar search={search} setSearch={setSearch} />
      </section>

      <section id="home">
        <Header />
      </section>

      <section id="multfilm">
        <Kino search={search} />
      </section>

      <section id="kino">
        <Kino2 search={search} />
      </section>

      <section id="sport">
        <Sport search={search}/>
      </section>
    </>
  )
}

export default App