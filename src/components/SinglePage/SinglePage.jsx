import React from 'react'
import './SinglePage.scss'
import { useSelector } from "react-redux"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import clap from "../../assets/img/clap.svg"
import share from "../../assets/img/share.svg"
import * as dayjs from 'dayjs'
import { useParams } from "react-router-dom"


function SinglePage() {
  const { allDatas, cates, categories } = useSelector((state) => state.generalData)
  const { categoryId, id } = useParams()

  console.log(allDatas[id], categoryId);
  return (
    <>
      <Header />
      <section className="singlePage-section">
        <div className="container">
          <div className="singlePage">
            <div className="singlePage__like-wrapper">
              <div>
                <img src={clap} alt='clap' />
                <span>{allDatas[id].likes}</span>
              </div>
              <div>
                <img src={share} alt='share' />
                <span>{allDatas[id].shares}</span>
              </div>
            </div>
            <div className="singlePage__body">
              <p className="singlePage__top-text">
                {cates}
              </p>
              <h3 className="singlePage__title">
                {allDatas[id].title}
              </h3>
              <p className="singlePage__decsription">
                {allDatas[id].description}
              </p>
              <div className="singlePage__time-wrapper">
                <time>{`${dayjs(allDatas[id].createdAt).format('MMMM DD.YYYY')}`}</time>
                <span>{allDatas[id].readTime} minutes read</span>
              </div>
              <img src={allDatas[id].image} alt={allDatas[id].title} />
              <div className="singlePage__main-text">
                {allDatas[id].content}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SinglePage