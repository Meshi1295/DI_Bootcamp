import React from 'react';

const Jumbotron = (props) => {
    const {title, description,buttonLabel, buttonURL} = props
    return (
    <div className="p-5 bg-light">
        <h1 className="mb-3">{title}</h1>
        <h4 className="mb-3">{description}</h4>
        <a className="btn btn-primary" href={buttonURL} role="button">{buttonLabel}</a>
  </div>
    )
}

export default Jumbotron