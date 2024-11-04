import { HomeContext } from '@/Homepage/context/HomeContext';
import AppLoader from '@/dashboards/admin/components/AppLoader';
import React, { useContext, useEffect, useState } from 'react';

function AllBlogs() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const { state, methods, dispatch } = useContext(HomeContext);

    async function fetchBlogs() {
        setLoading(true);
        let blogs = await methods.loadBlogs();

        if (blogs) {
            setBlogs(blogs);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            <div className="container-fluid page-header m-0 p-0" style={{ height: "100%", background: `url(/images/about-banner.jpg) center center/cover` }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Blogs</h1>
                        <nav aria-label="breadcrumb" style={{ background: "transparent" }}>
                            <ol className="breadcrumb justify-content-center text-uppercase" style={{ background: "transparent" }}>
                                <li className="breadcrumb-item"><a href="/" className='text-light'>Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Blogs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <div className="products container my-5 w-full">
                <div className="row w-full"> */}
            <div class="container w-full my-5">
                <div class="row w-full">
                    {blogs?.map((blog, index) => (
                        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div class="card">
                                <img src={blog.image?.replace('public', '/storage')} className="img-fluid" alt={blog.title} />
                                <div class="card-img-overlay">
                                    <a href="#" class="btn btn-light btn-sm">Dairy Farm</a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{blog.title}</h4>

                                    <p class="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
                                    <a href={`/blogs/${blog.slug}`} class="my-3 mx-0 primary-btn w-fit">Read Blog</a>
                                </div>
                                <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div class="views">{new Date(blog.created_at).toLocaleDateString()}
                                    </div>
                                    {/* <div class="stats">
                                        <i class="far fa-eye"></i> 1347
                                        <i class="far fa-comment"></i> 12
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {/* {loading ? (
                <p><AppLoader /></p>
            ) : (
                
            )} */}
            {/* </div>
            </div> */}
        </div>
    );
}

export default AllBlogs;
