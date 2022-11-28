import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "../../../lib/axios";
import SpecialCharacter from "../../../lib/SpecialCharacter";
import "./Modal.scss";

function Modal(isOn) {
  const { searched } = useSelector((state) => state.generalData);

  const [datas, setDatas] = useState();
  const { categoryId, url } = useParams();

  useEffect(() => {
    axios
      .get(categoryId ? `/category/${categoryId}/posts` : `/category`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        throw Error(err);
      });
  }, [categoryId]);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const keys = ["title", "description"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searched))
    );
  };

  if (isOn.isOn) {
    return createPortal(
      <div className="modal-wrapper">
        <div className="modal">
          <h3 className="modal__title">Natijalar</h3>
          {search.length > 0 &&
            search(datas).map((data, index) => (
              <div key={index} className="modal__body">
                <Link
                  onClick={toTop}
                  to={`/${url}/${data.categoryId}/${SpecialCharacter(
                    data.title.toLowerCase()
                  )}`}
                >
                  <div className="time__wrapper">
                    <h4>{data.title}</h4>
                    <time>{`${dayjs(data.createdAt).format(
                      "MMMM DD.YYYY"
                    )}`}</time>
                  </div>
                  <p>{data.description}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>,
      document.body
    );
  }
  return null;
}

export default Modal;
