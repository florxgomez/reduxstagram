import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";
import { connect } from 'react-redux';

const Single = props => {
  const { posts, comments, match } = props;
  const { postId } = match.params;
  const i = posts.findIndex(post => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
})

export default connect(mapStateToProps)(Single);