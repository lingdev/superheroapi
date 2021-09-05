import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('s')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://superheroapi.com/api.php/333870345146219/search/${query}`
      )

      console.log(result.data,"tutut")
      console.log(result.data.response,"errrrr");
      if(result.data.response!=="error"){

    

      setItems(result.data)
      setIsLoading(false)
    }
  }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      {isLoading===false && 
      <CharacterGrid isLoading={isLoading} items={items} />}
    </div>
  )
}

export default App
