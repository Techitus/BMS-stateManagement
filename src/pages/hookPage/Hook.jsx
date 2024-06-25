import useCounter from '../../../hooks/useCounter'
import useFetch from '../../../hooks/useFetch'
import useInput from '../../../hooks/useInput'

const Hook = () => {
  const {count,increment,decrement} = useCounter(0)
const {value,onChange} = useInput('')
const {data,loading,error} = useFetch()
if(loading){
  return <div>Loading...</div>
}
if(error){
  return <div>Error: {error}</div>
}
  return (
    <div>
      <h1>Hook</h1>
      <p>count : {count} </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button><br />
      <input className='border-solid border-2 border-black' type="text" value={value} onChange={onChange} />
      <p>{value}</p>
      <ul>
        {data.map((item)=>(
<li key= {item._id}>{item.title}</li>     
        ))}
      </ul>
    </div>
  )
}

export default Hook