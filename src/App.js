import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [listItems, setlistItems] = useState([]);
  const [todoItem, settodoItem] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    //add item to list
    let copylistItems = listItems.concat(todoItem);
    setlistItems(copylistItems);
    settodoItem('');
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>


        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={todoItem}
            onChange={(e) => settodoItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
      {listItems.length > 0 && (
        <div className='grocery-container'>
          {
            listItems.map((item) => {
              return <List items={item} />;
            })
          }
          {/* <button className='clear-btn'>
            clear items
          </button> */}
        </div>
      )}
    </section>
  )
}

export default App
