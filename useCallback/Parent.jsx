import { useState } from "react"
import Title from "./Title"
import Display from "./Display"
import Button from "./Button"

const Parent = () => {
    const [salary,setSalary] = useState(2000)
    const [age,setAge] = useState(20)

    const increaseAge = ()=>{
        setAge(age+5)
    }
    const increaseSalary = ()=>{
        setSalary(salary+1000)
    }
  return (
    <>
        <div>
            <Title/>
            <Display text= "age" displayValue={age} />
            <Button content="Increase Age" onClick={increaseAge} />
            <Display text= "salary" displayValue={salary} />
            <Button content="Increase Salary" onClick={increaseSalary} />
        </div>
    </>
  )
}

export default Parent