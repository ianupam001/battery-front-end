import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  const postUrl = `${postSlug}`;
  const postTitle = encodeURIComponent({ postSlug });
  const postDescription = encodeURIComponent({ postSlug });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`${apiUrl}/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      <Helmet>
        <title>{post && post.meta_title}</title>
        <meta name="title" content={post && post.meta_title} />
        <meta name="description" content={post && post.meta_description} />
      </Helmet>
      {/*Blog Details Start*/}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img
                    src={post && post.image}
                    alt={post && post.title}
                    className="mt-10 p-3 max-h-[600px] w-full object-cover"
                  />
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="icon-user"></span>By Admin
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <Link href="#">
                          <span className="icon-clock"></span>
                          {post &&
                            new Date(post.createdAt).toLocaleDateString()}
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="icon-clock"></span>
                          {post && (post.content.length / 1000).toFixed(0)} Min
                          Read
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-details__title">{post && post.title}</h3>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post && post.content }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mt-5">
              <div className="sidebar">
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Our Latest Post</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {/* <PostCard key={post._id} post={post} /> */}
                    {recentPosts &&
                      recentPosts.map((post) => (
                        <li>
                          <div className="flex flex-col">
                            <div className="object-cover">
                              <img
                                src={post && post.image}
                                alt={post && post.title}
                                className=" object-cover"
                              />
                            </div>
                            <div className="sidebar__post-content">
                              <p className="sidebar__post-date">
                                {post &&
                                  new Date(post.createdAt).toLocaleDateString()}
                              </p>
                              <h3>
                                <Link to={`/post/${post.slug}`}>
                                  {post && post.title}
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
