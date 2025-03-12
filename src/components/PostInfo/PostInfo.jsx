import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  if (!user) return null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.lenght !== 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};

export default PostInfo;
