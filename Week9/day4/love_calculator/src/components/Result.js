const Result = (props) => {
    if(!props.result.result){
        return null
    } else {

        return (
            <div>
                <h4>Result</h4>
    
                <p>{props.result.fname} & {props.result.sname}</p>
                <p> percentage: {props.result.percentage}</p>
                <p>Result: {props.result.result}</p>
            </div>
        )
    }
}

export default Result