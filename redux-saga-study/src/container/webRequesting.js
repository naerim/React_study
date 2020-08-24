import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getComment } from "../reducers/webRequest";

const WebRequesting = () => {
  const { post, comment } = useSelector(({ webRequest }) => ({
    post: webRequest.post,
    comment: webRequest.comment,
  }));

  const { loadingPost, loadingComment } = useSelector(({ loading }) => ({
    loadingPost: loading["webRequest/GET_POST"],
    loadingComment: loading["webRequest/GET_COMMENT"],
  }));

  const dispatch = useDispatch();
  const onGetPost = useCallback(() => dispatch(getPost()), [dispatch]);
  const onGetComments = useCallback(() => dispatch(getComment()), [dispatch]);

  useEffect(() => {
    onGetPost();
    onGetComments();
  }, [onGetPost, onGetComments]);

  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingComment && "로딩 중..."}
        {!loadingComment && comment && (
          <ul>
            {comment.map((comments) => (
              <li key={comments.id}>
                {comments.id} ({comments.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default WebRequesting;
