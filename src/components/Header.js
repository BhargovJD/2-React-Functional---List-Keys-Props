import React from 'react'

export default function Header(props) {
    return (
        <header style={{
            backgroundColor:'mediumblue',color:'#fff',
        }}>
            <h1>{props.title}</h1>
        </header>
    )
}


Header.defaultProps ={
    title:"Default Title"
}
