import {useState} from 'react'

const Button = ({text, color, fn}) => {
    const [count,setCount] = useState(0)

    const click = () => {
        setCount(count + 1) 
        fn(count)
    }

  return (
    <button onClick={()=>click()}>{text}</button>
    
  )
}

export default Button