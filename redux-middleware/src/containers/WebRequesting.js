import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getUsers } from "../modules/webRequest";

const WebRequesting = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ webRequest }) => ({
      post: webRequest.post,
      users: webRequest.users,
      loadingPost: webRequest.loading.post,
      loadingUsers: webRequest.loading.users,
    })
  );

  const dispatch = useDispatch();
  const onGetPost = useCallback((id) => dispatch(getPost(id)), [dispatch]);
  const onGetUsers = useCallback((id) => dispatch(getUsers(id)), [dispatch]);

  useEffect(() => {
    onGetPost(1);
    onGetUsers(1);
  }, [onGetPost, onGetUsers]);

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
        {loadingUsers && "로딩 중..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.id} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default WebRequesting;
