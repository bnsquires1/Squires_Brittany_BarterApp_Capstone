import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  count: 0,
  liked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "like":
      return {
        ...state,
        count: state.count + (state.liked ? -1 : 1),
        liked: !state.liked,
      };
    default:
      return state;
  }
};

const LikeButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-4">
      <button
        className={`btn btn-${state.liked ? "danger" : "primary"}`}
        onClick={() => dispatch({ type: "like" })}
      >
        {state.liked ? "Unlike" : "Like"}{" "}
        <span className="badge bg-light">{state.count}</span>
      </button>
    </div>
  );
};

export default LikeButton;
