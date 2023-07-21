import * as React from 'react'

const list1 = [
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

const list2 = [
  {
    title: 'React2',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux2',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'TanStack Query2',
    url: 'https://tanstack.com/query/v3/',
    author: 'Tanner Linsley',
    num_comments: 4,
    points: 6,
    objectID: 2,
  },
  {
    title: 'Next.js2',
    url: 'https://nextjs.org/',
    author: 'Dijon Musters',
    num_comments: 8,
    points: 3,
    objectID: 3,
  },
];

const App = () => (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={list1} />
      <List list={list2}/>
    </div>
)


const Search = () => {
  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value)
  }

  const handleBlur = (event) => {
    console.log(event)
    console.log(event.target.value)
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} onBlur={handleBlur} />
    </div>
  )
}

const List = ({list}) => (
    <ul>
    {list.map((item) => (
        <Item key={item.objectID} url={item.url} title={item.title} author={item.author} numberOfComments={item.num_comments} points={item.points}/>
    ))}
  </ul>
)

const Item = ({url, title, author, numberOfComments, points}) => (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{numberOfComments}</span>
      <span>{points}</span>
    </li>
)

export default App