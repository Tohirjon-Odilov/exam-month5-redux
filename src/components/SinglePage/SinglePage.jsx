import React, { useEffect, useState } from "react";
import "./SinglePage.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import clap from "../../assets/img/clap.svg";
import share from "../../assets/img/share.svg";
import * as dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import axios from "../../api/axios";
import Loading from "../UI/Loading/Loading";

function SinglePage() {
  const { id, categoryId, url } = useParams();
  const [load, setLoad] = useState(true);
  const [datas, setDatas] = useState([]);
  const [response, setResponse] = useState("");
  const moreLikeDatas = datas.slice(0, 3);

  useEffect(() => {
    axios
      .get(`/category/${categoryId}/posts`)
      .then((response) => {
        setDatas(response.data);
        setResponse(response.status);
      })
      .catch((err) => {
        throw Error(err);
      });
  }, [categoryId]);
  useEffect(() => {
    response === 200 && setLoad(false);
  }, [response]);

  useEffect(() => {
    if (window.scrollY === "20") {
      console.log(window.scrollY);
    }
  }, []);

  const data = datas.find((data) => data.id === id);
  const top = () => {
    if (window.scrollY > 0) window.screenY = 0;
    console.log(window.navigator);
  };

  return (
    <>
      <Header />
      <section className="singlePage-section">
        <div className="container">
          {load && <Loading />}
          {response && (
            <div className="singlePage">
              <div className="singlePage__like-wrapper">
                <div>
                  <img src={clap} alt="clap" />
                  <span>{data.likes}</span>
                </div>
                <div>
                  <img src={share} alt="share" />
                  <span>{data.shares}</span>
                </div>
              </div>
              <div className="singlePage__body">
                <p className="singlePage__top-text">{url}</p>
                <h3 className="singlePage__title">{data.title}</h3>
                <p className="singlePage__decsription">{data.description}</p>
                <div className="singlePage__time-wrapper">
                  <time>{`${dayjs(datas.createdAt).format(
                    "MMMM DD.YYYY"
                  )}`}</time>
                  <span>{data.readTime} minutes read</span>
                </div>
                <img src={data.image} alt={data.title} />
                <div className="singlePage__main-text">{data.content}</div>

                <h3 className="last-wrapper__title">More like this</h3>

                {moreLikeDatas &&
                  moreLikeDatas.map((data, index) => (
                    <div className="singlePage__last-wrapper" key={data.id}>
                      <div className="date__wrapper">
                        <time>{`${dayjs(data.createdAt).format(
                          "MMMM DD.YYYY"
                        )}`}</time>
                        <span>{url}</span>
                      </div>
                      <div className="singlePage__content-wrapper">
                        <Link
                          onClick={top}
                          to={`/${url}/${data.categoryId}/${data.id}`}
                        >
                          <h4>{data.title}</h4>
                          <p className="singlePage__main-text">
                            {data.description}
                          </p>
                        </Link>
                      </div>
                      <span className="singlePage__time">
                        {data.readTime} minutes read
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SinglePage;
