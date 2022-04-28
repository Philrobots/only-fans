import UserPreview from "../../user/domain/UserPreview";

interface CommentWithAuthorPreview {
  id: string;
  author: UserPreview;
  comment: string;
  createdAt: number;
}

export default CommentWithAuthorPreview;
