import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
import { Helmet } from "react-helmet-async";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Blog() {
  const title = "Blog";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Blog" }, 
  ];

  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${apiUrl}/api/post/getPosts`);
      const blogpost = await res.json();
      setPosts(blogpost.posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | 800 BBattery</title>
        <meta name="title" content="blog page 800 BBattery" />
        <meta name="description" content="Blogpage description  800 BBattery" />
      </Helmet>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      {/*Blog One Start*/}
      {posts && posts.length > 0 && (
        <section className="blog-list">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Blog</span>
              </div>
              <div className="section-title__title-box sec-title-animation animation-style1">
                <h2 className="section-title__title title-animation">
                  Insights and Solutions for <br />
                  Today's Challenges
                </h2>
              </div>
            </div>
            <div className="row">
              {/*Blog One Single Start*/}
              {posts.map((post) => {
                const date = new Date(post.createdAt); 

               
                const formattedDay = date.toLocaleDateString("en-GB", {
                  day: "numeric",
                 
                });
                const formattedMonth = date.toLocaleDateString("en-GB", {
                 
                  month: "short",
                });

                return (
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                    key={post.slug} 
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img src={post.image} alt="@@title" />
                          <img src={post.image} alt="@@title" />
                          <Link
                            to={`/post/${post.slug}`}
                            className="blog-one__link"
                          >
                            <span className="sr-only"></span>
                          </Link>
                        </div>
                        <div className="blog-one__date">
                          <p>
                            {formattedDay} <br />{formattedMonth}
                          </p>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__user">
                          <p>
                            <span className="icon-user"></span>By Admin
                          </p>
                        </div>
                        <h3 className="blog-one__title">
                          <Link to={`/post/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <Link
                          to={`/post/${post.slug}`}
                          className="blog-one__learn-more"
                        >
                          Learn More<span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
