import React from "react";
import './LeftColumn.css'
import Button from 'react-bootstrap/Button'


class LeftColumn extends React.Component{
    constructor(){
        super();
        this.state ={
            images: [],
        }
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list?page=0&limit=2')
        .then(res => res.json())
        .then(data => this.setState({images:data}))
        .catch(e=>console.log(e))
    }

    getImages = () =>{
        const {images} = this.state  
        images.map((item,i)=>{
            console.log(item);
            const {author, download_url,id} = item
            return  <div key={id}>
                     <img src={download_url} alt={author}/>  
                  </div>            
      })    
    }

    render(){

        return (
            <div  >
             <h2>LeftColumn</h2>
             <Button 
             onClick={()=>this.getImages()}
             variant="info">Get images</Button>
            </div>
        )
    }
}

export default LeftColumn;