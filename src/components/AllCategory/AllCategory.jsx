import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import axios from "../../api/axios"
import { allPosts } from "../../redux/generalDataSlice"
import Aside from "../Aside/Aside"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './AllCategory.scss'

function AllCategory() {

  const { users } = useSelector((state) => state.generalData)
  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("/category/1/posts")
      .then((response) => dispatch(allPosts(response.data)))
      .catch(err => {
        console.log(err)
      })
  }, [dispatch])

  const handleData = () => {


    console.log("salom");

    // dispatch(workWithUsers())

  }

  return (
    <>
      <Header />
      <section className="allcategory-section" >
        <div className="container">
          <div className="allcategory">
            <Aside />
            <div className="allcategory__posts">
              <h3 className="posts__title">
                Recent Posts
              </h3>
              <button onClick={handleData}>click</button>

              {users.length > 0 &&
                users.map((user, index) => <div className="posts__wrapper" key={index}>
                  <div className="date__wrapper">
                    <time>September 24.2020</time>
                    <span>Design theory</span>
                  </div>
                  <div className="post__title">
                    <p>
                      {user.title}
                    </p>
                  </div>
                  <span className="post__time">
                    3 minutes read
                  </span>
                </div>)}

            </div>
            <div className="posts__wrapper">
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AllCategory