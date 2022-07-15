import React from 'react'

interface Props{
  title: string
  description: string
  image: string

}
function card({title,description,image}:Props) {
  return (
    <div className='group cursor-default relative duration-500 hover:scale-105 transition-all ease-out text-black border rounded-sm shadow-lg'>
    <div>
    <img className="object-contain h-52 w-full"src={image}/>
    </div>
    <div>
      <p className='text-base text-black font-bold flex justify-center'>{title}</p>
    </div>
    <div className='py-2'>
      <p className='text-black text-xs px-2 text-center font-light line-clamp-1 group-hover:line-clamp-none'>{description}</p>
    </div>
    </div>
  )
}

export default card