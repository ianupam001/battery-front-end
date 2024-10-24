import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Blog() {
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
