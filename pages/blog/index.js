import Head from 'next/head'
import React from 'react'
import DefaultLayout from '../../layouts/Default'
import Link from 'next/link'

 const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog Home</title>
        <meta property="og:title" content="blog home" key="title" />
      </Head>
     
      <DefaultLayout>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
            <p className="lead">
          <Link className="btn btn-primary btn-lg" href="/" role="button">
            home
          </Link>
        </p>
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>
            <div className="col-md-8">
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>
            <div className="col-md-8">
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>

            <div className="col-md-8">
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>
            <div className="col-md-8">
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>
            <div className="col-md-8">
              <h1 className="text-primary">Hello Next.js</h1>
              <p> lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                doloremque. .lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              </p>
            </div>
          </div>
        </div>

      </DefaultLayout>
    
    </div>
  )
}
export default Blog
