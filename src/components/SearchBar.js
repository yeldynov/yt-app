import React, { useState } from 'react'

const SearchBar = (props) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()

    props.onFormSubmit(term)
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label htmlFor='search'>Video Search</label>
          <input
            id='search'
            type='text'
            value={term}
            onChange={(event) => {
              setTerm(event.target.value)
            }}
            placeholder='Input your request here...'
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
