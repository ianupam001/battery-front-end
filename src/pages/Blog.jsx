import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Blog() {
  const title = "Blog";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Blog" }, // No link for the current page
  ];

  const [posts, setPosts] = useState([]);

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
                        <h2 className="section-title__title title-animation">Insights and Solutions for <br/>Today's Challenges
                        </h2>
                    </div>
                </div>
            <div className="row">
              
              {/*Blog One Single Start*/}
              {posts.map((post) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
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
                          12
                          <br />
                          Nov
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
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
