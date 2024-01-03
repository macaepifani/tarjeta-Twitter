import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

    

    const users = [
        {
            username: 'juan',
            name: 'Juan J.',
            isFollowing: true
        },
        {
            username: 'sofia',
            name: 'Sofia K.',
            isFollowing: false
        },
        {
            username: 'rosa',
            name: 'Rosa M.',
            isFollowing: false
        }
    ]
export function App(){
    return(
        <section className='App' >
            {
                users.map(({username, name, isFollowing} ) =>(
                        <TwitterFollowCard
                            key={username} //para que react sepa a que elemento del array me estoy refiriendo
                            username = {username}
                            initialIsFollowing = {isFollowing}
                        >
                                {name}
                        </TwitterFollowCard>
                    ))
            }
        {/* <TwitterFollowCard  username= "maca" initialIsFollowing={true}>
            Macarena Epifani   
        </TwitterFollowCard> 
        <TwitterFollowCard  username= "macaaa">
            Macarena Epifani
        </TwitterFollowCard>       
        <TwitterFollowCard username= "maaaca" >
            Macarena Epifani
        </TwitterFollowCard> */ }            { /* esto es lo que se renderiza con la const user */ }
        {/* <button onClick={()=> setName('midudududu')}>
            Cambio nombre
        </button> */}
        </section>
        )
}