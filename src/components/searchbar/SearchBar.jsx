import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const navigate = useNavigate()

    const [search, setSearch]= useState()


    const handleChange = (e) =>{

        setSearch(e.target.value.trim())
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        const trimedValue = search
        console.log(trimedValue)

        if(trimedValue.length > 0){

            navigate(`/search?query=${trimedValue}`);
            document.querySelector('input').value=''
            setSearch('')

        } else{

            alert('please search somthing')
        }


    }


  return (
    <>
        <Form className="d-flex me-auto w-30" onSubmit={handleSubmit}>
            <Form.Control autoComplete='off'
              type="search"
              placeholder="Search"
              className="me-2 custom_input"
              aria-label="Search"
              name='search'
              onChange={handleChange}
            />
          </Form>

         
    </>
  )
}

export default SearchBar