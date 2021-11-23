import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class UserCard extends React.Component{
    constructor(){
        super();
        this.state = {
            users:[],
            posts:[]
        }
    }

    render(){
        const {users, posts} = this.state
    return(
            <>
            {
                users.map((item,i) => {
                    return <Card key={i} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.email} </Card.Text>
                        <Card.Text>{item.username} </Card.Text>
        
                        <Button variant="primary" onClick={()=>this.getPost(item.id)}>Go somewhere</Button>
                    </Card.Body>
            </Card>
                })
             }
             {
                 posts.map((item,i) => {
                     return <Card key={i} style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Title>{item.body}</Card.Title>
                            </Card.Body>
                     </Card>
                 })
             }
     
          </>
        );
    }

    getPost = (id) => {
        console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => res.json())
        .then(data => this.setState({posts:data}))
        .catch(e => console.log(e))
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(users => users.json())
        .then(data => {
            this.setState({users:data})
            console.log(data);
        })
        .catch(e => console.log(e))

    }
}

export default UserCard