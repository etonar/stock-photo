// custom hook
import { useFetch } from './useFetch'

// icons
import { FaSearch } from 'react-icons/fa'

// component
import SingleItem from './single-image'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState(0)

  const url = `https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}`

  const { data, loading } = useFetch(url)

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <div className='container'>
      <form className='form'>
        <div>
          <input type='text' placeholder='Search' />
          <FaSearch />
        </div>
      </form>

      <section className='images-container'>
        {data.map((item) => {
          return <SingleItem key={item.id} {...item} />
        })}
      </section>
    </div>
  )
}

export default App
