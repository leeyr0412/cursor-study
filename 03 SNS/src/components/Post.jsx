import React, { useState } from 'react'
import './Post.css'

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <article className="post">
      <header className="post-header">
        <div className="post-user">
          <img 
            src={`/${post.profileImage}`} 
            alt={post.username}
            className="post-profile-img"
          />
          <span className="post-username">{post.username}</span>
        </div>
        <svg aria-label="옵션 더 보기" className="post-more-icon" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </header>
      
      <div className="post-image-container">
        <img 
          src={`/${post.image}`} 
          alt={post.caption}
          className="post-image"
        />
      </div>
      
      <div className="post-actions">
        <div className="post-action-icons">
          <button 
            className="post-action-btn"
            onClick={handleLike}
            aria-label="좋아요"
          >
            {liked ? (
              <svg aria-label="좋아요 취소" fill="#ed4956" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.21 4.21 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.395 7.29.42.178.79.315 1.105.42a6.58 6.58 0 0 0 1.88.52c.312.05.612.075.72.075s.408-.025.72-.075a6.58 6.58 0 0 0 1.88-.52 5.99 5.99 0 0 0 1.105-.42c2.845-1.463 5.395-3.68 5.395-7.29 0-3.27-2.214-5.936-5.207-5.936Z"></path>
              </svg>
            ) : (
              <svg aria-label="좋아요" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.21 4.21 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.395 7.29.42.178.79.315 1.105.42a6.58 6.58 0 0 0 1.88.52c.312.05.612.075.72.075s.408-.025.72-.075a6.58 6.58 0 0 0 1.88-.52 5.99 5.99 0 0 0 1.105-.42c2.845-1.463 5.395-3.68 5.395-7.29 0-3.27-2.214-5.936-5.207-5.936Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            )}
          </button>
          <button 
            className="post-action-btn"
            onClick={() => setShowComments(!showComments)}
            aria-label="댓글"
          >
            <svg aria-label="댓글 달기" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          <button className="post-action-btn" aria-label="공유">
            <svg aria-label="게시물 공유" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
            </svg>
          </button>
        </div>
        <button className="post-action-btn post-save-btn" aria-label="저장">
          <svg aria-label="저장" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>
        </button>
      </div>
      
      <div className="post-content">
        <div className="post-likes">
          <strong>{formatLikes(likes)}</strong>명이 좋아합니다
        </div>
        <div className="post-caption">
          <strong>{post.username}</strong> {post.caption}
        </div>
        {post.comments.length > 0 && (
          <button 
            className="post-view-comments"
            onClick={() => setShowComments(!showComments)}
          >
            댓글 {post.comments.length}개 모두 보기
          </button>
        )}
        {showComments && post.comments.length > 0 && (
          <div className="post-comments">
            {post.comments.map((comment, index) => (
              <div key={index} className="post-comment">
                <strong>{comment.username}</strong> {comment.text}
              </div>
            ))}
          </div>
        )}
        <div className="post-timestamp">{post.timestamp}</div>
      </div>
    </article>
  )
}

export default Post
