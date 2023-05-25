import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
      <div className='blog-card' /* style={{border: "1px solid black"}} */>
        <div className='card-image'>
          <img src={require("../images/6.jpg")} className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>1 Dec, 2022</p>
          <h5 className='title'>A beautiful sunday morning renaissance </h5>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
          <Link to='/blogs/:id' className='button mb-3'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard