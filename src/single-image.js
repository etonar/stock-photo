import React from 'react'

const SingleItem = ({ alt_description, urls, likes, user }) => {
  return (
    <article className='item'>
      <img src={urls.small} alt={alt_description} />
      <div className='info'>
        <div>
          <h3>{user.name}</h3>
          <p>{likes} likes</p>
        </div>
        <a href={user.portfolio_url} target='_blank' rel='noreferrer'>
          <img src={user.profile_image.medium} alt={user.username} />
        </a>
      </div>
    </article>
  )
}

export default SingleItem
