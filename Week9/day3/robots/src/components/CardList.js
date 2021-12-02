import Card from './Card';

const CardList = ({robotsArr}) => {
  // const {arr_robots} = props;
  return(
    <div>
      {
        robotsArr.map((item,i) => {
          return <Card robot={item} id={i} />
        })
      }
    </div>
  )
}
export default CardList;