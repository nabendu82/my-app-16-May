import React from 'react'
import ListItem from './ListItem'

const ListPost = () => {
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat ",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur"
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint "
        },
        {
            "id": 3,
            "title": "ea molestias quasi ",
            "body": "et iusto sed quo iure\nvoluptatem occaecati "
        }
    ]

    return posts.map(post => <ListItem key={post.id} post={post} />)
}

export default ListPost