import { ADDPOST, DELETEPOST, FETCHPOST } from "./actionConstant";

export const postAction = (post) => {
  return {
    type: ADDPOST,
    payload: post,
  };
};

export const deleteAction = (id) => {
  return {
    type: DELETEPOST,
    payload: id,
  };
};
