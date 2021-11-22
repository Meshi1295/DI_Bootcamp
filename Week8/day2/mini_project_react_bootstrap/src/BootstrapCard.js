//Exercise 2 : Bootstrap

import React from 'react';

// const BootstrapCard = () => {
//     return(
//      <div className="card m-5" style={{width: '30rem'}}>
//       <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />

//   <div className="card-body">
//     <h5 className="card-title">Bob Dylan</h5>
//     <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
//     <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
//   </div>
// </div>
//     )
// }

// class BootstrapCard extends React.Component{
//     render(){
//         return(
//             <div className="card m-5" style={{width: '30rem'}}>
//                   <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card cap" />
            
//                <div className="card-body">
//                 <h5 className="card-title">Bob Dylan</h5>
//                 <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
//                <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
//               </div>
//              </div>
//         )
//     }
// }


const BootstrapCard = (props) => {
    const {description,imageUrl,title,buttonUrl} = props.data[0];
    return(
     <div className="card m-5" style={{width: '30rem'}}>
      <img className="card-img-top" src={imageUrl} alt="Card cap" />

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={buttonUrl} className="btn btn-primary">Go to wikipedia</a>
  </div>
</div>

    )
}
export default BootstrapCard;