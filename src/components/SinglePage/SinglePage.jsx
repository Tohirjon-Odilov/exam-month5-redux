import React, { useState } from 'react'
import './SinglePage.scss'
import { useSelector } from "react-redux"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import clap from "../../assets/img/clap.svg"
import share from "../../assets/img/share.svg"
import * as dayjs from 'dayjs'
import { useParams } from "react-router-dom"


function SinglePage() {
  const { allDatas, cates } = useSelector((state) => state.generalData)
  const { id } = useParams()
  const [dataId, setDataId] = useState(id)
  const moreLikeDatas = allDatas.slice(0, 3)
  const datas = allDatas[dataId]

  return (
    <>
      <Header />
      <section className="singlePage-section">
        <div className="container">
          {
            datas && <div className="singlePage">
              <div className="singlePage__like-wrapper">
                <div>
                  <img src={clap} alt='clap' />
                  <span>{datas?.likes}</span>
                </div>
                <div>
                  <img src={share} alt='share' />
                  <span>{datas?.shares}</span>
                </div>
              </div>
              <div className="singlePage__body">
                <p className="singlePage__top-text">
                  {cates}
                </p>
                <h3 className="singlePage__title">
                  {datas?.title}
                </h3>
                <p className="singlePage__decsription">
                  {datas?.description}
                </p>
                <div className="singlePage__time-wrapper">
                  <time>{`${dayjs(datas.createdAt).format('MMMM DD.YYYY')}`}</time>
                  <span>{datas?.readTime} minutes read</span>
                </div>
                <img src={datas?.image} alt={datas?.title} />
                <div className="singlePage__main-text">
                  {datas?.content}
                </div>

                <h3 className="last-wrapper__title">More like this</h3>

                {moreLikeDatas.map(data => (
                  <div className="singlePage__last-wrapper" key={data.id}>
                    <div className="date__wrapper">
                      <time>{`${dayjs(data.createdAt).format('MMMM DD.YYYY')}`}</time>
                      <span>{cates}</span>
                    </div>
                    <div onClick={() => setDataId(data.id)} className="singlePage__content-wrapper">
                      <h4>
                        {data.title}
                      </h4>
                      <p className="singlePage__main-text">
                        {data.description}
                      </p>
                    </div>
                    <span className="singlePage__time">
                      {data.readTime} minutes read
                    </span>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SinglePage