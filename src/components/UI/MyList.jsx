import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "../../api/axios"
import { category } from "../../redux/generalDataSlice"

function MyList(props) {

  const { users } = useSelector((state) => state.generalData)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("/category/")
      .then((response) => dispatch(category(response.data)))
      .catch(err => {
        throw Error(err)
      })
  }, [dispatch])

  return (
    <>
      <ul {...props}>
        {users.length > 0 &&
          users.map(user => <li key={user.id}>
            <Link to={`/${user.name}`}>{user.name}</Link>
          </li>)
        }
      </ul>
    </>
  )
}

export default MyList