import React from 'react'
import "./WishListContentmember.css"

export default function WishListContentmember({content}) {
  console.log(content);
  return (
    <div className='wishlistmember_wrapper'>
      <div>{content}</div>
    </div>
  )
}
