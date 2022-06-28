import React from 'react'
import Header from './Header'
import Description from './Description'
import Cart from './Cart'

export default function Banner (props) {
    return (
        <>
            <header>
                <Header/>
                <Description/>
            </header>
            <Cart/>
        </>
    )
}
