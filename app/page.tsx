
import Banner from '@/components/Banner'
import BlogPosts from '@/components/Blog/BlogPosts'
import RecentBlog from '@/components/Blog/RecentBlog'
import Footer from '@/components/Footer'

import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
     
      <Banner />
      <RecentBlog />
      <BlogPosts />
      <Footer />
    </>
  )
}

export default Home