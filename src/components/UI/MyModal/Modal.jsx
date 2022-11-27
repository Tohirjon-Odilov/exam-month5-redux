import dayjs from "dayjs";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Modal.scss";

function Modal(isOn) {
  const { allDatas, cates, searched } = useSelector(
    (state) => state.generalData
  );

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
            search(allDatas).map((data, index) => (
              <div key={index} className="modal__body">
                <Link to={`/${cates}/${data.categoryId}/${data.id}`}>
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
