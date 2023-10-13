import { Text, CommentList } from '../../styles/postdetail.styled';

export default function CommentsBox() {
  return (
    <Text height={'auto'}>
      <h3>댓글</h3>
      <CommentList>
        <div className="text">댓글 1</div>
        <div className="text">댓글 2</div>
        <div className="text">댓글 3</div>
      </CommentList>
      <input type="text" placeholder="댓글 작성" className="comment-input" />
      <div className="button-container">
        <button className="button">댓글 작성</button>
      </div>
    </Text>
  );
}
