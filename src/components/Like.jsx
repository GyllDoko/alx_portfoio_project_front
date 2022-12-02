import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Like = (props) => {
  const [like, setLike] = useState(0);
  const [user_like, setUser_like] = useState(false);
  useEffect(() => {
    axios.get(`/get_likes/${props.comment_id}`).then((res) => {
      if (res.data) {
        setLike(res.data.length);
        for (let like of res.data) {
          if (like.user_id === props.currentUser.id) {
            setUser_like(true);
          } else {
            setUser_like(false);
          }
        }
      }
    });
  }, [props.currentUser.id]);
  console.log(user_like);
  const addLike = (e) => {
    e.preventDefault();
    axios
      .post("/likes", {
        like: {
          user_id: props.currentUser.id,
          comment_id: props.comment_id,
          value: 1,
        },
      })
      .then((res) => {
        axios.get(`/get_likes/${props.comment_id}`).then((res) => {
          if (res.data) {
            setLike(res.data.length);
            for (let like of res.data) {
              if (like.user_id === props.currentUser.id) {
                setUser_like(true);
              } else {
                setUser_like(false);
              }
            }
          }
        });
      });
  };
  const disLike = (e) => {
    e.preventDefault();
    axios
      .post("/dislike", {
        user_id: props.currentUser.id,
        comment_id: props.comment_id,
      })
      .then((res) => {
        axios.get(`/get_likes/${props.comment_id}`).then((res) => {
          if (res.data) {
            setLike(res.data.length);
            for (let like of res.data) {
              if (like.user_id === props.currentUser.id) {
                setUser_like(true);
              } else {
                setUser_like(false);
              }
            }
          }
        });
        setUser_like(false);
      });
  };
  return (
    <>
      {user_like ? (
        <button
          type="button"
          class="btn btn-outline-default waves-effect waves-light mt-2 me-1 shadow-none border-0 "
          onClick={(e) => disLike(e)}
        >
          <span className="mx-2">{like}</span>
          <i class="far fa-thumbs-down me-1 text-primary"></i>
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-outline-default waves-effect waves-light mt-2 me-1 shadow-none border-0 "
          onClick={(e) => addLike(e)}
        >
          <span className="mx-2">{like}</span>
          <i class="far fa-thumbs-up me-1 text-primary"></i>
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(Like);
