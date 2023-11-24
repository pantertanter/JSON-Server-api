import React, { useEffect } from "react";
import { fetchData } from "../util/persistence";

function ItemList({ items, deleteItemById, editItem }) {
    

    return ( 
        <div>
            <h1></h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td scope="row">{item.id}</td>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                            <td>
                                <button onClick={() => editItem(item)}>Edit</button>
                                <button onClick={() => deleteItemById(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                            <td></td>
                            <td></td>
                            <th></th>
                            <th></th>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ItemList;
