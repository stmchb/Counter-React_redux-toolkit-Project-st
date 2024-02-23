import { useSelector } from "react-redux";

const CounterHeading = () => {

  const { counterVal}= useSelector(store=>store.counter)
  
  return <h1>Counter:{counterVal}</h1>
}
export default CounterHeading;