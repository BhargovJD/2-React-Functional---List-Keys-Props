import React from 'react'
import { useState } from 'react';
import Footer from './Footer';

export default function Content() {

    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Rice',
            checked: false,
        },

        {
            id: 2,
            name: 'Oil',
            checked: false,
        },

        {
            id: 3,
            name: 'Juice',
            checked: true,
        }




    ]);



    // Changing items state when check button clicked and saving items array in  listItems as items
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // Delete from items array

    const handleDelete = (id) => {
        // console.log(id);

        const listItems = items.filter((item) => item.id !== id);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));



    }






    return (
        <main>
            <h4>Content</h4>

            {items.length ? (<ul>

                {items.map((item) => (


                    <li key={item.id}>

                        <input onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked}></input>
                        <label>{item.name}</label>
                        <button onClick={() => handleDelete(item.id)} >Delete</button>

                    </li>


                ))}
            </ul>) : <p>List is empty</p>
            }


            <Footer length={items.length} />







        </main>
    )
}
