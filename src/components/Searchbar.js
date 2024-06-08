import React, {useState} from 'react';

const Searchbar = ({onSubmit, onClick}) => {

  const [query, setQuery] = useState('');
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form 
    className='searchbar'
    onSubmit={handleSubmit}
    >
      <input
        className='searchbar-input'
        placeholder='Search for a city...'
        type='text'
        name='text'
        onChange={handleChange}
        value={query}
      >
      </input>
      <button className='searchbar-button' type='submit' onClick={onClick}>SEARCH</button>
    </form>
  );

};

export default Searchbar;