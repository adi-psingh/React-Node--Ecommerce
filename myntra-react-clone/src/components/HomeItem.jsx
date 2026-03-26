import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FcPaid } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";

/* eslint-disable react/prop-types */
export default function HomeItem({ item }) {
  const bagData = useSelector((store) => store.bag);

  const dispatch = useDispatch();

  return (
    <>
      <div className="item-container">
        <img
          className="item-image"
          src={`http://98.94.13.150:8080/${item?.image}`}
          alt="item image"
        />{" "}
        <div className="rating">
          {item?.rating?.stars ?? 0} ⭐ | {item?.rating?.count ?? 0}{" "}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>
        {bagData.includes(item.id) ? (
          <button
            onClick={() => {
              dispatch(bagActions.removeItem(item.id));
            }}
            type="button"
            className="btn-add-bag btn btn-danger"
          >
            <FcFullTrash /> Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(bagActions.addToBag(item.id));
            }}
            type="button"
            className="btn-add-bag btn btn-success"
          >
            <FcPaid /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
}
