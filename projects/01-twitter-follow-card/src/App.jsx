import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true
    }
]

export function App() {
    return(
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <TwitterFollowCard 
                            key = {userName}
                            userName = {userName}
                            isFollowing = {isFollowing}
                        >
                                {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}