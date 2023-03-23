import React from 'react'

function Input() {
    const [input, setInput] = useState()
  return (
    <div className={'border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll'}>
      <img src="dp.png" alt="" className="h-9 w-9 rounded-full cursor-pointer " />
      
      <div className='w-full divide-y divide-gray-700'>
        <div className={''}>
        <textarea value={input} id="" cols="30" rows="10"></textarea>
        </div>
        
      </div>
      
    </div>
  )
}

export default Input
