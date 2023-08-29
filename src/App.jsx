import * as React from 'react'

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) ?? initialState
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const initialStories = [
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
]

const App = () => {
  const [stories, setStories] = React.useState(initialStories)

  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')

  React.useEffect(()=> {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => (item.objectID !== story.objectID)
    )
    setStories(newStories)
  }


  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id='search'
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  )
}


const InputWithLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
  const inputRef = React.useRef()

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input ref={inputRef} id={id} type={type} value={value} autoFocus={isFocused} onChange={onInputChange} />
    </>
  )
}

const List = ({ list, onRemoveItem }) => {
  return (
      <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} onRemove={onRemoveItem} />
        ))}
      </ul>
  )
}

const Item = ({ item, onRemove }) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type='button' onClick={() => onRemove(item)}>
          Dismiss
        </button>
      </span>
    </li>
  )
}

export default App