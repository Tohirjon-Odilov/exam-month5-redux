import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "../../api/axios"
import { category, cate } from "../../redux/generalDataSlice"

function MyList(props) {
  const { categories } = useSelector((state) => state.generalData)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("/category/")
      .then((response) => dispatch(category(response.data)))
      .catch(err => {
        throw Error(err)
      })
  }, [dispatch])
  const handleClick = (data) => {
    dispatch(cate(data))
  }

  return (
    <>
      <ul {...props}>
        {categories.length > 0 &&
          categories.slice(0, 4).map(user => <li key={user.id}>
            <Link to={`/${user.name}`} onClick={() => handleClick(user.name)}>{user.name}</Link>
          </li>)
        }
      </ul>
    </>
  )
}

export default MyList