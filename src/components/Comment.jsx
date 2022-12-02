import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";
import "moment/locale/fr";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Like from "./Like";

export const Comment = (props) => {
  const { t } = useTranslation();
  const [comment_user, setComment_user] = useState({});

  useEffect(() => {
    axios.get(`get_comment_user/${props.comment.user_id}`).then((res) => {
      setComment_user(res.data);
    });
  }, [props.comment.user_id]);
  moment.lang(t("code"));
  return (
    <div class="media py-3 border-bottom">
      <img
        src="assets/images/users/profil-nophoto.png"
        class="avatar-xs me-3 rounded-circle"
        alt="img"
      />
      <div class="media-body">
        <h5 class="mt-0 mb-1 font-size-15">{comment_user.email}</h5>
        <p class="text-muted">{props.comment.description}</p>
        <ul class="list-inline float-sm-end mb-sm-0">
          <li class="list-inline-item">
            <Like comment_id={props.comment.id} />
          </li>
        </ul>
        <div class="text-muted font-size-12">
          <i class="far fa-calendar-alt text-primary me-1"></i>{" "}
          {moment(props.comment.created_at).fromNow()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Comment);
