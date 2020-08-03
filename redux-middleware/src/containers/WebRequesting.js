import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/webRequest";

const WebRequesting = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);

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

export default connect(
  ({ webRequest }) => ({
    post: webRequest.post,
    users: webRequest.users,
    loadingPost: webRequest.loading.post,
    loadingUsers: webRequest.loading.users,
  }),
  {
    getPost,
    getUsers,
  }
)(WebRequesting);
