import { useEffect, useState } from 'react'

function App() {
  interface Character {
    id: number;
    name: string;
    image: string;
  }

  const [data, setData] = useState<Character[]>([])
  const fetchData =() =>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(result =>{
      setData(result.results )
    })
  }
  useEffect(() => {
    fetchData()
  })
  return (
    <>
    hello world      
    <div className="grid grid-cols-3 gap-4">
      {data.map(item =>
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" /> 

        </div>
      )}
    </div>
    </>
  )
}

export default App
