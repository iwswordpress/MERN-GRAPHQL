import React from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBeer } from 'react-icons/fa';
import avatar1 from '../images/avatar1.png';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  // Start component
  function likePost() {
    console.log('Like post!!');
  }

  function commentOnPost() {
    console.log('Comment on post!!');
  }
  return (
    <div className='card'>
      <div>
        <div>
          <img class='avatar' src={avatar1} />
          {username}{' '}
          <span as={Link} to={`/posts/${id}`}>
            {moment(createdAt).fromNow(true)}
            <span> ago...</span>
          </span>
        </div>

        <div>{body}</div>
      </div>
      <div>
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={likePost}
        >
          <FaBeer /> {likeCount}
        </button>{' '}
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={commentOnPost}
        >
          <FaBeer /> {commentCount}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
