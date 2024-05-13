/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { createBlog } from '../../../store/blogSlice'
import { useDispatch } from 'react-redux'

const AddBlog = () => {
  const dispatch = useDispatch()
  const handleCreate = (data)=>{
    dispatch(createBlog(data))


  }
  return (
  <Layout>
	<Form type='Create'  onSubmit={handleCreate}/>
  </Layout>
  )
}

export default AddBlog