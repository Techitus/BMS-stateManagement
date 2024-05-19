/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import {  useState } from "react"

const Form = ({type, onSubmit}) => {
	const[data,setData] = useState({
		title: '',
		subtitle: '',
		description: '',
		image: '',

	})
	
	const handleChange = (e)=>{
const {name,value } = e.target
		setData({
			...data,
			[name] : name === 'image' ? e.target.files[0] : value

		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault()
		onSubmit(data)

	}
    
  return (
	<form onSubmit={handleSubmit} action="">
    <div class="flex justify-center  w-screen h-screen">

	<div class="container my-3 px-4 lg:px-20 ">

		<div class="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
			<div class="flex">
				<h1 class="font-bold uppercase text-5xl">{type} <br /> Blog</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input onChange={handleChange} class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" name="title" placeholder="Title*" />
				<input onChange={handleChange} class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" name="subtitle" placeholder="Subtitle*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"  />
				<input onChange={handleChange} class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" name="category" placeholder="Category*" />
        </div>
				<div class="my-4">
					<textarea name="description" onChange={handleChange} placeholder="Description*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button type="submit"  class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Submit
          </button>
				</div>
			</div>


    </div>
 
</div>
</form>
  )
}

export default Form