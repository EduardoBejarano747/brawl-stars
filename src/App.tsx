import { useEffect, useState } from 'react'

function App() {
  interface Character {
    id: number;
    name: string;
    image: string;
  }

  const [data, setData] = useState<Character[]>([])
  const [searchTerm, setSearchTerm] = useState('')

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
  const filteredData = data.filter(character=>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-gradient-to-r from-green-600 to-blue-500 text-white text-6xl text-center'>
    hello world      
    <input type="text" placeholder='busca un personaje' className="w-1/2 p-2 rounded-lg text-black text-lg border-gray-400" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />

    <div className="grid grid-cols-3 gap-[20px] bg-gradient-to-r from-green-600 to-blue-500 text-white text-2xl text-center">
      {filteredData.map(item =>
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" /> 

        </div>
      )}
    </div>
    </div>
  )
}

export default App
