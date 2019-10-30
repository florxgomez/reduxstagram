import React from "react";
import { addComment, removeComment } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';

class Comments extends React.Component {
  render() {
    const { addComment, removeComment, postComments, match } = this.props;
    const { postId } = match.params;

    const handleSubmit = e => {
      e.preventDefault();
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      addComment(postId, author, comment);
      this.refs.commentForm.reset();
    };

    const handleRemoveComment = (postId, i) => {
      removeComment(postId, i)
    }

    const renderComment = (comment, i) => {
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button
              className="remove-comment"
              onClick={() => handleRemoveComment(match.params.postId, i)}
            >
              &times;
            </button>
          </p>
        </div>
      );
    };

    return(
      <div className="comment">
        {postComments.map(renderComment)}
        <form
          onSubmit={handleSubmit}
          ref="commentForm"
          className="comment-form"
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" className="button-submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
    addComment, removeComment
}

export default connect(null, mapDispatchToProps)(Comments);
