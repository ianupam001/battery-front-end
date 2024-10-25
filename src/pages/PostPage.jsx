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
  const postTitle = encodeURIComponent({ postSlug }); // Encode title for URL
  const postDescription = encodeURIComponent({ postSlug }); // Optional description

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
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
        const res = await fetch(`/api/post/getposts?limit=3`);
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
        <title>{post && post.title}</title>
        <meta
          name="title"
          content={post && post.title}
        />
        <meta
          name="description"
          content={post && post.title}
        />
      </Helmet>
      {/*Blog Details Start*/}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img
                    src={post && post.image}
                    alt={post && post.title}
                    className="mt-10 p-3 max-h-[600px] w-full object-cover"
                  />
                  {/* <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/> */}
                  {/* <div className="blog-details__date">
                                    <p>12<br/>Nov</p>
                                </div> */}
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

                  <div className="blog-details__tag-and-share">
                    {/* <div className="blog-details__tag">
                                        <h3 className="blog-details__tag-title">Tags :</h3>
                                        <ul className="blog-details__tag-list list-unstyled">
                                            <li>
                                                <Link href="#">Analysis</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Planning</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Management</Link>
                                            </li>
                                        </ul>
                                    </div> */}
                    <div className="blog-details__share-box">
                      <h3 className="blog-details__share-title">Share:</h3>
                      <div className="blog-details__share">
                        <Link
                          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                          target="_blank"
                        >
                          <span className="icon-facebook"></span>
                        </Link>
                        <Link
                          href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`}
                          target="_blank"
                        >
                          <span className="icon-xpa"></span>
                        </Link>
                        <Link
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`}
                          target="_blank"
                        >
                          <span className="icon-link-in"></span>
                        </Link>
                        <Link
                          href={`https://www.instagram.com/?url=${postUrl}`}
                          target="_blank"
                        >
                          <span className="icon-instagram"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="comment-one">
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Theresa Webb</h3>
                                            <span>02 June 2024 at 03:30 pm</span>
                                            <p>The wise man therefore always holds in these matters to this principle of
                                                selection. He rejects pleasures to secure other greater pleasures, or
                                                else he endures pains to avoid worse pains to the selection point. But
                                                in certain to all this circumstances</p>
                                            <div className="comment-one__btn-box">
                                                <Link href="blog-details" className="comment-one__btn"><span
                                                        className="icon-share-alt"></span>Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Cameron Williamson</h3>
                                            <span>02 June 2024 at 03:30 pm</span>
                                            <p>The wise man therefore always holds in these matters to this principle of
                                                selection. He rejects pleasures to secure other greater pleasures, or
                                                else he endures pains to avoid worse pains to the selection point. But
                                                in certain to all this circumstances</p>
                                            <div className="comment-one__btn-box">
                                                <Link href="blog-details" className="comment-one__btn"><span
                                                        className="icon-share-alt"></span>Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                  {/* <div className="comment-form">
                                    <h3 className="comment-form__title">Leave A Comment</h3>
                                    <p className="comment-form__text">By using form u agree with the message sorage, you can
                                        contact us directly now</p>
                                    <form action="assets/inc/sendemail.php"
                                        className="comment-one__form contact-form-validated" >
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Your Name" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Your Email" name="EMAIL"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message"
                                                        placeholder="Write your messege"></textarea>
                                                </div>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="thm-btn comment-form__btn">submit
                                                        now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                {/* <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here"/>
                                    <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__all-category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__all-category-list list-unstyled">
                                    <li>
                                        <Link href="#">Industrial service<span>(04)</span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="#">residential service<span>(06)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Commercial services<span>(02)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">power solution<span>(04)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">upgrade old wiring<span>(07)</span></Link>
                                    </li>
                                </ul>
                            </div> */}
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Our Latest Post</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {/* <PostCard key={post._id} post={post} /> */}
                    {recentPosts &&
                      recentPosts.map((post) => (
                        <li>
                          <div className="sidebar__post-image  object-cover">
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
