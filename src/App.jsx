import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { fetchData } from './util/persistence'

const blankItem = { id: '', item: '', quantity: '', cost: '' }

function App() {

  const [items, setItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState([])

  const APIURL = 'http://localhost:3000/api'

  function editItem(item) {
    setItemToEdit(item)
  }

  function mutateItem(item) {
    if (item.id != '') {
      // PUT
      updateItem(item)
    } else {
      // POST
      createItem(item)
    }
  }

  function updateItem(item) {
    console.log("updateItem: " + JSON.stringify(item))
    fetchData(
      `${APIURL}/${item.id}`,
        (item) => {
          setItems(
            items.map((i) => (i.id === item.id ? {...item} : i))
            );
          },
       "PUT",
        item
        );
  }

  function createItem(item) {
    console.log("createItem: " + JSON.stringify(item))
    fetchData(
      `${APIURL}`,
       (item) => setItems([...items, item]),
       "POST",
        item
        );
  }

  function getItems(callback) {
    fetchData(APIURL, callback)
  } 

  function deleteItemById(itemId) {
    // fjern via API - JSONServer
    fetchData(`${APIURL}/${itemId}`, () => {}, "DELETE");
    // fjern fra items array via setItems
    setItems([...items.filter((item) => item.id !== itemId)])
  }

  useEffect(() => {
    getItems((data) => setItems(data))
  }, []);

  return (
    <div>
      <ItemForm blankItem={blankItem} itemToEdit={itemToEdit} updateItem={updateItem} createItem={createItem} items={items}/>
      <ItemList deleteItemById={deleteItemById} items={items} editItem={editItem} mutateItem={mutateItem} />
    </div>
  )
}

export default App
