import React from 'react'

export default function Cart (props) {
    let monstera = 8
    , lierre = 10
    , bdf = 15
    return <>
        <h2>Panier:</h2>
        <ul>
            {<li><span>Monstera</span>: {monstera} €</li>}
            {<li><span>Lierre</span>: {lierre} €</li>}
            {<li><span>Bouquet de fleur</span>: {bdf} €</li>}
                
        </ul>
        <h3>Total:</h3>
        <p>{monstera+lierre+bdf} €</p>
    </>
}
