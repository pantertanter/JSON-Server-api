import React, { useEffect, useState } from 'react';

function ItemForm({ blankItem, itemToEdit, updateItem, createItem, items }) {
    const [item, setItem] = useState({...itemToEdit});

    useEffect(() => {
        setItem(itemToEdit);
    }, [itemToEdit]);

    function handleChange(e) {
        setItem({...item, [e.target.id]: e.target.value});
    }        

    return (
        <div>
            <h1>Edit Items in your shoppinglist</h1>
            <form>
            <div class="container">
            <div class="row">
            <div class="col-sm my-4">
                <label htmlFor="id">Id</label>
                <input id="id" type="number" readOnly placeholder="id" value={items.length + 1}/>
                </div>
                <div class="col-sm my-4">
                <label htmlFor="item">Item</label>
                <input id="item" type="text" placeholder="item" value={item.item} onChange={handleChange}/>
                </div>
                <div class="col-sm my-4">
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" placeholder="quantity" value={item.quantity} onChange={handleChange}/>
                </div>
                <div class="col-sm my-4">
                <label htmlFor="cost">Cost</label>
                <input id="cost" type="number" placeholder="cost" value={item.cost} onChange={handleChange}/>
                </div>
                </div>
                <div class="row">
                <div class="col-sm my-4">
                <button onClick={() => updateItem(item)} style={{width: "400px"}}>Update</button>
                </div>
                <div class="col-sm my-4">
                <button onClick={() => createItem(item)} style={{width: "400px"}}>Create</button>
                </div>
                <div class="col-sm my-4">
                <button onClick={() => setItem(blankItem)} style={{width: "400px"}}>Reset</button>
                </div>
            </div>
            </div>
            </form>
        </div>
    );
}

export default ItemForm;
