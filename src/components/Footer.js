import React from 'react'

export default function Footer({ length }) {
    const footerStyle = {

        backgroundColor: 'red',
        color: '#fff'

    }
    return (
        <footer>
            <h3 style={footerStyle}>{length} List {length === 1 ? "item":"items"}</h3>
        </footer>
    )
}
