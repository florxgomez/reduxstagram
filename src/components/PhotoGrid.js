import React from "react";
import Photo from "./Photo";
import { connect } from "react-redux";

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map((post, i) => (
      <Photo {...props} key={i} i={i} post={post} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PhotoGrid);
