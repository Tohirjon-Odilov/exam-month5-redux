import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { allData } from "../../redux/generalDataSlice"
import axios from "../../api/axios"
import './MainPage.scss'
import Aside from "../Aside/Aside"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as dayjs from 'dayjs'
import { Link } from "react-router-dom"

function MainPage() {
  const { allDatas, cates, categories } = useSelector((state) => state.generalData)
  const [param, setParams] = useState(1)
  const dispatch = useDispatch()
  const category = categories.map((data) => (data.name))

  useEffect(() => {
    switch (cates) {
      case "/": {
        setParams(1)
        break
      }
      case "tenetur": {
        setParams(1)
        break
      }
      case "laudantium": {
        setParams(2)
        break
      }
      case "placeat": {
        setParams(3)
        break
      }
      case "corrupti": {
        setParams(4)
        break
      }
      default: {
        setParams(1)
      }
    }
  }, [cates])
  useEffect(() => {
    axios.get(`/category/${param}/posts`)
      .then((response) => dispatch(allData(response.data)))
      .catch(err => {
        throw Error(err)
      })
  }, [dispatch, param])

  return (
    <>
      <Header />
      <section className="data-section" >
        <div className="container">
          <div className="data">
            <Aside />
            <div className="data__posts">
              <h3 className="posts__title">
                Recent Posts
              </h3>
              {allDatas.length > 0 &&
                allDatas.map((data, index) => <div className="posts__wrapper" key={index}>
                  <div className="date__wrapper">
                    <time>{`${dayjs(data.createdAt).format('MMMM DD.YYYY')}`}</time>
                    <span>{category[param - 1]}</span>
                  </div>
                  <div className="post__title">
                    <Link to={`${data.categoryId}/${index}`}>
                      <h4>
                        {data.title}
                      </h4>
                      <p>
                        {data.description}
                      </p>
                    </Link>
                  </div>
                  <span className="post__time">
                    {data.readTime} minutes read
                  </span>
                </div>)}
            </div>
            <div className="posts__wrapper">
            </div>
          </div>
          <div className="content__pagenation">
            <div>
              <a href="/" >1</a>
              <a href="/" >2</a>
              <a href="/" >3</a>
              <a href="/" >4</a>
              <a href="/" >5</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MainPage