import { HomeContext } from '@/Homepage/context/HomeContext';
import { Parser } from 'html-to-react';
import React, { useContext, useEffect, useState, useRef } from 'react';

function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const iframeRef = useRef(null);

  const { methods } = useContext(HomeContext);

  async function fetchBlog() {
    setLoading(true);
    const blogId = location.pathname.split('/').pop();
    let fetchedBlog = await methods?.loadBlogs(blogId);
    let recentBlogs = await methods?.loadBlogs();
    if (fetchedBlog && recentBlogs) {
      setBlog(fetchedBlog);
      setRecentBlogs(recentBlogs);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  useEffect(() => {
    if (blog && iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      const content = Parser().parse(blog?.content);

      // Inject the blog content into the iframe
      iframeDocument.body.innerHTML = blog.content;

      // Add Poppins font style
      const styleElement = iframeDocument.createElement('style');
      styleElement.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `;
      iframeDocument.head.appendChild(styleElement);

      // Adjust iframe size based on content
      iframeRef.current.style.width = "100%";
      iframeRef.current.style.height = `${iframeDocument.body.scrollHeight}px`;

      // Resize the iframe if content changes dynamically
      const resizeObserver = new ResizeObserver(() => {
        iframeRef.current.style.height = `${iframeDocument.body.scrollHeight}px`;
      });

      resizeObserver.observe(iframeDocument.body);

      // Cleanup observer when component unmounts
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [blog]);

  if (loading || !blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container-fluid page-header m-0 p-0" style={{ height: "100%", background: `url(${blog.image.replace('public', '/storage')}) center center/cover` }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">{blog.title}</h1>
            <p className="text-white font-semibold">By Autopulse | {new Date(blog.created_at).toLocaleDateString()}</p>
            <nav aria-label="breadcrumb" style={{ background: "transparent" }}>
              <ol className="breadcrumb justify-content-center text-uppercase" style={{ background: "transparent" }}>
                <li className="breadcrumb-item"><a href="/" className='text-light'>Home</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">{blog.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="products my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>{blog.title}</h2>
              </div>
            </div>

            <div className="col-md-10">
              <iframe
                ref={iframeRef}
                title="Blog Content"
                style={{
                  border: "0",
                  overflow: "hidden",
                  width: "100%",
                  height: "auto !important",
                }}
              />
            </div>

            <div className="col-md-2">
              <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {recentBlogs.map((recentBlog) => (
                  <div key={recentBlog.id} className="rounded overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={recentBlog.image.replace('public', '/storage')}
                      alt={recentBlog.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2">{recentBlog.title}</div>
                      <p className="text-gray-700 text-base">
                        {new Date(recentBlog.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
