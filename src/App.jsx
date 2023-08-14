import * as React from 'react'

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'TanStack Query',
      url: 'https://tanstack.com/query/v3/',
      author: 'Tanner Linsley',
      num_comments: 4,
      points: 6,
      objectID: 2,
    },
    {
      title: 'Next.js',
      url: 'https://nextjs.org/',
      author: 'Dijon Musters',
      num_comments: 8,
      points: 3,
      objectID: 3,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') ?? 'React'
  )

  React.useEffect(()=> {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  )
}


const Search = ({search, onSearch}) => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' value={search} onChange={onSearch} />
  </div>
)

const List = ({list}) => (
    <ul>
    {list.map((item) => (
        <Item key={item.objectID} item={item}/>
    ))}
  </ul>
)

const Item = ({item}) => (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
)

export default App