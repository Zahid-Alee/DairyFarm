import { a as jsxs, j as jsx, F as Fragment } from "./jsx-runtime-B5WjVc0P.js";
import { b as HomeContext, P as ProductListSkeleton, c as ProductComponent, C as Contact } from "./OrderSuccess-DdFC9bR5.js";
import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { S as Slider } from "./Slider-DlNrtDXl.js";
import { MdCheckCircle, MdBuild, MdVerified, MdMonitor, MdFeedback, MdDelete, MdOutlineLocationOn, MdWhatsapp } from "react-icons/md";
import { Layout, Drawer, Button, Row, Col, Empty, Pagination, Select, Checkbox, Flex, Card, Steps, Typography, Space, Form, Input, Tooltip, Table, Radio, Avatar, Popconfirm, Skeleton, List, Menu, Dropdown, Badge, Image } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { GrClose, GrFilter, GrMastercard, GrUserSettings, GrDashboard, GrLocation, GrLogout, GrLogin, GrServices, GrCar, GrBike, GrMenu, GrMail, GrCart } from "react-icons/gr";
import { Parser } from "html-to-react";
import { Toaster } from "react-hot-toast";
import { f as formatDate } from "./helpers-isL4n3oi.js";
import axios$1 from "axios";
import { CiShoppingCart } from "react-icons/ci";
import debounce from "lodash.debounce";
import { SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FaRegUser, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import Slider$1 from "react-slick";
import Slider$2 from "react-slick/lib/slider.js";
function AllBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const { state, methods, dispatch } = useContext(HomeContext);
  async function fetchBlogs() {
    setLoading(true);
    let blogs2 = await methods.loadBlogs();
    if (blogs2) {
      setBlogs(blogs2);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchBlogs();
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "container-fluid page-header m-0 p-0", style: { height: "100%", background: `url(/images/about-banner.jpg) center center/cover` }, children: /* @__PURE__ */ jsx("div", { className: "container-fluid page-header-inner py-5", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "display-3 text-white mb-3 animated slideInDown", children: "Blogs" }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
        /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-light", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { className: "breadcrumb-item text-white active", "aria-current": "page", children: "Blogs" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { class: "container w-full my-5", children: /* @__PURE__ */ jsx("div", { class: "row w-full", children: blogs == null ? void 0 : blogs.map((blog, index) => {
      var _a;
      return /* @__PURE__ */ jsx("div", { class: "col-12 col-sm-8 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { class: "card", children: [
        /* @__PURE__ */ jsx("img", { src: (_a = blog.image) == null ? void 0 : _a.replace("public", "/storage"), className: "img-fluid", alt: blog.title }),
        /* @__PURE__ */ jsx("div", { class: "card-img-overlay", children: /* @__PURE__ */ jsx("a", { href: "#", class: "btn btn-light btn-sm", children: "Autpulse" }) }),
        /* @__PURE__ */ jsxs("div", { class: "card-body", children: [
          /* @__PURE__ */ jsx("h4", { class: "card-title", children: blog.title }),
          /* @__PURE__ */ jsx("p", { class: "card-text", children: "I love quick, simple pasta dishes, and this is one of my favorite." }),
          /* @__PURE__ */ jsx("a", { href: `/blogs/${blog.slug}`, class: "my-3 mx-0 primary-btn w-fit", children: "Read Blog" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "card-footer text-muted d-flex justify-content-between bg-transparent border-top-0", children: /* @__PURE__ */ jsx("div", { class: "views", children: new Date(blog.created_at).toLocaleDateString() }) })
      ] }) });
    }) }) })
  ] });
}
const data = [
  {
    id: 1,
    icon: /* @__PURE__ */ jsx(MdCheckCircle, { size: 25 }),
    title: "Thorough Inspection",
    description: "Every product, whether used machinery, vehicles, or bikes, undergoes a meticulous inspection process. Our team of experts evaluates each item for functionality, durability, and safety, identifying any defects or issues that may affect performance.",
    delay: "0.1s",
    bgColor: "bg-blue-500",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    icon: /* @__PURE__ */ jsx(MdBuild, { size: 25 }),
    title: "Refurbishment and Testing",
    description: "For used machinery and vehicles, we conduct thorough refurbishment and testing. This process includes replacing worn-out parts, repairing any damage, and performing rigorous operational tests to ensure optimal functionality.",
    delay: "0.2s",
    bgColor: "bg-green-500",
    textColor: "text-green-600"
  },
  {
    id: 3,
    icon: /* @__PURE__ */ jsx(MdVerified, { size: 25 }),
    title: "Certified Standards",
    description: "We adhere to international quality standards and certifications. Our products are inspected and certified to meet industry-specific requirements, providing our customers with the assurance that they are receiving reliable and safe products.",
    delay: "0.3s",
    bgColor: "bg-red-500",
    textColor: "text-red-600"
  },
  {
    id: 4,
    icon: /* @__PURE__ */ jsx(MdMonitor, { size: 25 }),
    title: "Continuous Monitoring",
    description: "Quality assurance doesn't end with inspection and testing. We continuously monitor the performance and quality of our products, making adjustments and improvements as needed to maintain the highest levels of satisfaction.",
    delay: "0.4s",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-600"
  },
  {
    id: 5,
    icon: /* @__PURE__ */ jsx(MdFeedback, { size: 25 }),
    title: "Customer Feedback",
    description: "We value our customers' input and use their feedback to enhance our products and services. By listening to our clients, we can address any concerns and improve our quality control processes.",
    delay: "0.5s",
    bgColor: "bg-purple-500",
    textColor: "text-purple-600"
  }
];
function AboutPage() {
  const { state, dispatch, methods } = useContext(HomeContext);
  const [slides, setSlides] = useState([]);
  async function fetchSlides() {
    let slides2 = await methods.loadSlides("about_slider");
    if (slides2) {
      setSlides(slides2);
    }
  }
  console.log("slides", slides);
  useEffect(() => {
    fetchSlides();
  }, []);
  const videos = [
    {
      src: "/images/WhatsApp Video 2024-08-21 at 11.48.14 PM.mp4"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-whtite", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid page-header m-0 p-0",
        style: {
          height: "100%",
          background: `url(/images/about-banner.jpg) center center/cover`
        },
        children: /* @__PURE__ */ jsx("div", { className: "container-fluid page-header-inner py-5", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "display-3 text-white mb-3 animated slideInDown", children: "About Us" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-light", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item text-white active", "aria-current": "page", children: "Track" })
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "best-features about-features", style: { margin: "30px 0px" }, children: /* @__PURE__ */ jsx("div", { className: "container mt-5  pt-4", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "right-image", children: /* @__PURE__ */ jsx(Slider, { videos, slides, link: false }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "left-content", children: [
        /* @__PURE__ */ jsx("h1", { className: "h3 text-yellow-600 m-0 mb-3 p-0", children: "What is Autopulse" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: "Autopulse Global Trading Company, with 15 years of experience, is your trusted partner in exporting high-quality used machinery, new and used vehicles, and new bikes from China. We pride ourselves on our fast shipping services and rigorous quality assurance processes, ensuring you receive top-notch products promptly and reliably. Our commitment to excellence and customer satisfaction sets us apart, making us a preferred choice for clients worldwide" }),
        /* @__PURE__ */ jsxs("ul", { className: "social-icons", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "!flex items-center justify-center", href: "#", children: /* @__PURE__ */ jsx(FaFacebook, { className: "text-yellow-700" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "!flex items-center justify-center", href: "#", children: /* @__PURE__ */ jsx(FaLinkedin, { className: "text-yellow-700" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "!flex items-center justify-center", href: "#", children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-yellow-700" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "!flex items-center justify-center", href: "#", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-yellow-700" }) }) })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "team-members my-3", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-md-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading h3 text-zinc-600  mb-2 border-none my-1", children: "Company Introduction" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: "Welcome to Autopulse Global Trading Company! Established in 2009 and headquartered in [City, China], we have over 15 years of experience as a leading exporter of high-quality used machinery, new and used vehicles, and new bikes from China. Our extensive range of products includes industrial and construction machinery, passenger and commercial vehicles, and a variety of bikes, including mountain, road, and electric models. We are committed to delivering exceptional products and services, backed by rigorous quality assurance and fast, reliable shipping to clients worldwide. Our team of experts ensures a seamless and efficient experience, making us a trusted partner for customers across the globe." })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "team-members my-3", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-md-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading h3 text-zinc-600  mb-2 border-none my-1", children: "OUR MISSION" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: "At Autopulse Global Trading Company, our mission is to connect global buyers with high-quality used machinery, vehicles, and bikes from China, providing reliable and cost-effective solutions. We are dedicated to fostering long-term relationships with our customers by consistently delivering exceptional products and outstanding service. Through our commitment to quality, innovation, and efficiency, we aim to be a trusted partner, supporting the growth and success of businesses and individuals worldwide." })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "team-members my-3", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-md-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading h3 text-zinc-600  mb-2 border-none my-1", children: "Quality Assurance" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: "At Autopulse Global Trading Company, quality assurance is a cornerstone of our operations. We implement a comprehensive quality control process to ensure that every product we offer meets our high standards and exceeds customer expectations. Our quality assurance procedures include:                            " })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mb-5", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-10 mt-10", children: data == null ? void 0 : data.map((service) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ jsx("span", { className: `bg-yellow-500/10  text-yellow-600 p-3 rounded-full`, children: service.icon }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-700", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: service.description })
      ] })
    ] }, service.id)) }) })
  ] });
}
const { Option: Option$1 } = Select;
const { Footer: Footer$1, Sider, Content, Header } = Layout;
const AllProducts = () => {
  var _a, _b, _c, _d, _e;
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const location2 = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location2.search);
  const parseParam = (param) => param ? param.split(",") : [];
  let initialCategories = parseParam(queryParams.get("categories"));
  initialCategories = initialCategories == null ? void 0 : initialCategories.map((cat) => Number(cat));
  let initialBrands = parseParam(queryParams.get("brands"));
  initialBrands = initialBrands == null ? void 0 : initialBrands.map((brand) => Number(brand));
  const initialWeights = parseParam(queryParams.get("weights"));
  const initialYears = parseParam(queryParams.get("years"));
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const [selectedBrands, setSelectedBrands] = useState(initialBrands);
  const [selectedPrice, setSelectedPrice] = useState(queryParams.get("price") || "");
  const [page, setPage] = useState(parseInt(queryParams.get("page")) || 1);
  const [loading, setLoading] = useState(true);
  const [selectedWeights, setSelectedWeights] = useState(initialWeights);
  const [selectedYears, setSelectedYears] = useState(initialYears);
  const { state, methods } = useContext(HomeContext);
  const slug = location2.pathname.split("/")[2];
  useEffect(() => {
    methods == null ? void 0 : methods.loadBrandsAndCats({ slug });
  }, [slug]);
  useEffect(() => {
    setLoading(false);
  }, [state.filterProducts]);
  useEffect(() => {
    setLoading(true);
    methods == null ? void 0 : methods.filterProducts({ prod_type: slug, selectedCategories, selectedBrands, selectedPrice, page, selectedWeights, selectedYears });
    const queryParams2 = new URLSearchParams({
      price: selectedPrice,
      page,
      type: slug,
      categories: selectedCategories.join(","),
      brands: selectedBrands.join(","),
      weights: selectedWeights.join(","),
      years: selectedYears.join(",")
    });
    navigate(`/products/${slug}/search?${queryParams2.toString()}`);
  }, [selectedPrice, slug, selectedCategories, selectedBrands, page, selectedWeights, selectedYears]);
  const weightFilters = [
    { key: "up_to_10", value: "Up to 10 Ton" },
    { key: "up_to_20", value: "Up to 20 Ton" },
    { key: "up_to_30", value: "Up to 30 Ton" },
    { key: "up_to_40", value: "Up to 40 Ton" },
    { key: "up_to_50", value: "Up to 50 Ton" },
    { key: "over_50", value: "Over 50 Ton" }
  ];
  const yearFilters = Array.from({ length: 2024 - 2e3 + 1 }, (_, i) => 2e3 + i);
  const handleWeightChange = (checkedValues) => setSelectedWeights(checkedValues);
  const handleCategoryChange = (checkedValues) => {
    console.log("Category checked values:", checkedValues);
    setSelectedCategories(checkedValues);
  };
  const handleBrandChange = (checkedValues) => {
    console.log("Brand checked values:", checkedValues);
    setSelectedBrands(checkedValues);
  };
  const handleYearChange = (values) => {
    console.log("Year selected values:", values);
    setSelectedYears(values);
  };
  const RenderSider = () => {
    var _a2, _b2;
    return /* @__PURE__ */ jsxs(Sider, { width: "100%", style: { backgroundColor: "white", padding: "10px" }, children: [
      /* @__PURE__ */ jsx("h3", { style: { fontSize: "16px", borderBottom: "1px solid", padding: "10px", textAlign: "left", fontWeight: "bold" }, children: "Filters" }),
      slug != "electric-bikes" && /* @__PURE__ */ jsxs("div", { className: "filter-item", style: { marginTop: "20px", padding: "10px" }, children: [
        /* @__PURE__ */ jsx("strong", { className: "text-dark heading", children: "Year" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            mode: "multiple",
            className: "item-group my-3",
            placeholder: "Select years",
            onChange: handleYearChange,
            style: { width: "100%" },
            value: selectedYears,
            children: yearFilters == null ? void 0 : yearFilters.map((year) => /* @__PURE__ */ jsx(Option$1, { value: year, children: year }, year))
          }
        )
      ] }),
      slug != "electric-bikes" && slug != "electric-vehicles" && /* @__PURE__ */ jsxs("div", { className: "filter-item", style: { marginTop: "20px", padding: "10px" }, children: [
        /* @__PURE__ */ jsx("strong", { className: "text-dark heading", children: "Weight" }),
        /* @__PURE__ */ jsx(
          Checkbox.Group,
          {
            className: "item-group flex flex-col gap-3 my-3",
            options: weightFilters == null ? void 0 : weightFilters.map((filter) => ({ label: filter.value, value: filter.key })),
            onChange: handleWeightChange,
            value: selectedWeights
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "filter-item", style: { marginTop: "20px", padding: "10px" }, children: [
        /* @__PURE__ */ jsx("strong", { className: "text-dark heading", children: "Brands" }),
        /* @__PURE__ */ jsx(
          Checkbox.Group,
          {
            className: "item-group flex flex-col gap-3 my-3",
            options: (_a2 = state == null ? void 0 : state.brands) == null ? void 0 : _a2.map((brand) => ({ label: brand.name, value: brand.id })),
            onChange: handleBrandChange,
            value: selectedBrands
          }
        )
      ] }),
      slug != "electric-bikes" && /* @__PURE__ */ jsxs("div", { className: "filter-item", style: { marginTop: "20px", padding: "10px" }, children: [
        /* @__PURE__ */ jsx("strong", { className: "text-dark heading", children: "Categories" }),
        /* @__PURE__ */ jsx(
          Checkbox.Group,
          {
            className: "item-group flex flex-col gap-3 my-3",
            options: (_b2 = state == null ? void 0 : state.categories) == null ? void 0 : _b2.map((cat) => ({ label: cat.name, value: cat.id })),
            onChange: handleCategoryChange,
            value: selectedCategories
          }
        )
      ] })
    ] });
  };
  return /* @__PURE__ */ jsx("div", { className: "pt-3 mb-20 all-products-container mx-auto", style: { width: "100%", maxWidth: "1500px" }, children: /* @__PURE__ */ jsxs(Layout, { style: { overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx(
      Drawer,
      {
        title: /* @__PURE__ */ jsxs("div", { style: { display: "flex !important" }, className: "mobile-all-prod-filters hidden flex justify-between w-full ", children: [
          /* @__PURE__ */ jsx("h4", { children: "Menu" }),
          /* @__PURE__ */ jsx(GrClose, { onClick: onClose })
        ] }),
        placement: "left",
        closable: false,
        onClose,
        open,
        width: 250,
        children: /* @__PURE__ */ jsx(RenderSider, {})
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "desktop-all-prod-filters p-0", style: { width: "250px", marginRight: "10px" }, children: /* @__PURE__ */ jsx(RenderSider, {}) }),
    /* @__PURE__ */ jsxs(Layout, { children: [
      /* @__PURE__ */ jsx(Header, { className: "z-[1] bg-white p-3 hidden mobile-all-prod-filters", children: /* @__PURE__ */ jsx(Button, { className: "p-3 border text-dark", onClick: showDrawer, icon: /* @__PURE__ */ jsx(GrFilter, { size: 20, color: "black" }), children: "Filter" }) }),
      /* @__PURE__ */ jsx(Content, { children: /* @__PURE__ */ jsx("div", { className: "latest-products", children: /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white", style: { minHeight: "70vh" }, children: [
        loading && /* @__PURE__ */ jsx(ProductListSkeleton, {}),
        !loading && ((_b = (_a = state == null ? void 0 : state.filterProducts) == null ? void 0 : _a.products) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ jsx(Row, { gutter: [10], children: (_d = (_c = state == null ? void 0 : state.filterProducts) == null ? void 0 : _c.products) == null ? void 0 : _d.map((item, index) => /* @__PURE__ */ jsx(
          Col,
          {
            xs: 12,
            sm: 10,
            md: 8,
            lg: 8,
            xl: 6,
            xxl: 6,
            span: 8,
            className: "mb-4",
            children: /* @__PURE__ */ jsx(ProductComponent, { prod: item })
          },
          index
        )) }) : /* @__PURE__ */ jsx(Empty, {})
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer$1, { children: /* @__PURE__ */ jsx(Pagination, { current: page, onChange: (current) => setPage(current), pageSize: 16, total: (_e = state == null ? void 0 : state.filterProducts) == null ? void 0 : _e.total }) })
    ] })
  ] }) });
};
const AllProducts$1 = AllProducts;
function ContactPage() {
  return /* @__PURE__ */ jsxs("div", { id: "about", className: "about  ", children: [
    /* @__PURE__ */ jsx("div", { class: "container-fluid page-header m-0 p-0", style: { height: "100%", background: `url(/images/about-banner.jpg) center center/cover` }, children: /* @__PURE__ */ jsx("div", { class: "container-fluid page-header-inner py-5", children: /* @__PURE__ */ jsxs("div", { class: "container text-center", children: [
      /* @__PURE__ */ jsx("h1", { class: "display-3 text-white mb-3 animated slideInDown", children: "Contact Us" }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { class: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
        /* @__PURE__ */ jsx("li", { class: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-light", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { class: "breadcrumb-item text-white active", "aria-current": "page", children: "Contact" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container flex flex-col gap-4 ", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row lg:justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { className: "container newsletter mt-3  wow fadeIn  lg:pt-0 lg:pr-4 ", children: [
      /* @__PURE__ */ jsx("h3", { "data-aos": "fade-up", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("p", { className: "py-2", "data-aos": "fade-up", "data-aos-delay": "100", children: "We would love to hear from you! Whether you have questions about our products, need support, or want to provide feedback, our team is here to assist you. Reach out to us through the contact form or by the information provided below. We are committed to providing you with prompt and helpful responses." })
    ] }) }) }),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
function ProductType() {
  var _a, _b, _c, _d;
  const { state, methods, dispatch } = useContext(HomeContext);
  const prod_type = location.pathname.split("/").pop();
  useEffect(() => {
    methods.loadBrandsAndCats({ slug: prod_type });
    methods.filterProducts({ prod_type, page: 1 });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "sm-p-0 container pt-5 p-3 sm:p-0 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "brands-container p-3 bg-white py-5 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 py-5 pb-5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Brands" }),
        /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-semibold", children: "Explore By Brands" })
      ] }),
      /* @__PURE__ */ jsx(Row, { gutter: [], style: { gap: "30px" }, children: (_a = state == null ? void 0 : state.brands) == null ? void 0 : _a.map((brand, index) => {
        var _a2;
        return /* @__PURE__ */ jsx(
          Col,
          {
            xs: 10,
            sm: 10,
            md: 8,
            lg: 10,
            xl: 6,
            xxl: 4,
            children: /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/products/${prod_type}/search?brands=${brand.id}&page=1&price=&type=${prod_type}`, className: " product-card", style: { height: "100%" }, "data-aos": "zoom-in", "data-aos-delay": "100", children: /* @__PURE__ */ jsxs("div", { className: "product-item w-full", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  style: { height: "100px", width: "100%", objectFit: "contain" },
                  src: `${(_a2 = brand == null ? void 0 : brand.logo) == null ? void 0 : _a2.replace("public", "/storage")}`,
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-dark font-medium text-primary text-center", children: brand == null ? void 0 : brand.name })
            ] }) })
          },
          index
        );
      }) })
    ] }),
    prod_type != "electric-bikes" && /* @__PURE__ */ jsxs("div", { className: "categories-container p-3 py-5 bg-white  ", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 py-5 pb-5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Categories" }),
        /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-semibold", children: "Explore By Categories" })
      ] }),
      /* @__PURE__ */ jsx(Row, { gutter: [], style: { gap: "30px" }, children: (_b = state == null ? void 0 : state.categories) == null ? void 0 : _b.map((cat, index) => {
        var _a2;
        return /* @__PURE__ */ jsx(
          Col,
          {
            xs: 10,
            sm: 10,
            md: 8,
            lg: 10,
            xl: 6,
            xxl: 4,
            children: /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/products/${prod_type}/search?categories=${cat.id}&page=1&price=&type=${prod_type}`, className: " product-card", style: { height: "100%" }, "data-aos": "zoom-in", "data-aos-delay": "100", children: /* @__PURE__ */ jsxs("div", { className: "product-item w-full flex  flex-col align-center gap-1", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  style: { height: "200px", width: "100%", objectFit: "cover" },
                  src: `${(_a2 = cat == null ? void 0 : cat.image) == null ? void 0 : _a2.replace("public", "/storage")}`,
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-dark font-medium text-primary text-center", children: cat == null ? void 0 : cat.name })
            ] }) })
          },
          index
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "latest-products my-5 bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 py-5 pb-5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Products" }),
        /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-semibold", children: "Explore Products" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-3 sm-p-0", style: { minHeight: "70vh" }, children: [
        /* @__PURE__ */ jsx(Row, { gutter: [], children: (_d = (_c = state == null ? void 0 : state.filterProducts) == null ? void 0 : _c.products) == null ? void 0 : _d.map((prod, index) => index <= 11 && /* @__PURE__ */ jsx(
          Col,
          {
            xs: 12,
            sm: 10,
            md: 8,
            lg: 8,
            xl: 5,
            xxl: 5,
            children: /* @__PURE__ */ jsx(ProductComponent, { prod, index })
          },
          index
        )) }),
        /* @__PURE__ */ jsx(Button, { type: "link", href: location.pathname + "/search", className: "primary-btn my-3 mx-auto !px-10 w-fit !py-5", children: "View All Products" })
      ] })
    ] })
  ] });
}
const { Step } = Steps;
const { Title, Text } = Typography;
const steps = [
  { title: "Pending", description: "Order received", date: "2024-06-01", emoji: "🕐" },
  { title: "Processing", description: "Order is being processed", date: "2024-06-02", emoji: "🔄" },
  { title: "Shipping", description: "Order is on the way", date: "2024-06-03", emoji: "🚚" },
  { title: "Shipped", description: "Order has been shipped", date: "2024-06-04", emoji: "📦" },
  { title: "Delivered", description: "Order delivered to customer", date: "", emoji: "📬" }
];
function Track() {
  var _a, _b, _c;
  const { state, dispatch, methods } = useContext(HomeContext);
  useEffect(() => {
    if (state == null ? void 0 : state.auth)
      methods == null ? void 0 : methods.loadUserOrders();
  }, [state == null ? void 0 : state.auth]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-whtite p-3 container", children: [
    /* @__PURE__ */ jsx("div", { class: "container-fluid page-header m-0 p-0", style: { height: "100%", background: `url(https://img.freepik.com/free-vector/tiny-man-ordering-products-online-via-smartphone_74855-15542.jpg?w=1380&t=st=1718950111~exp=1718950711~hmac=7b69e587a309e610e48395c3c73deca1d1c46ad7a25ef71b)center center/cover` }, children: /* @__PURE__ */ jsx("div", { class: "container-fluid page-header-inner py-5", children: /* @__PURE__ */ jsxs("div", { class: "container text-center", children: [
      /* @__PURE__ */ jsx("h1", { class: "display-3 text-white mb-3 animated slideInDown", children: "Track" }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { class: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
        /* @__PURE__ */ jsx("li", { class: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { class: "breadcrumb-item text-white active", "aria-current": "page", children: "Track" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container order-tracking-container container bg-white p-3", children: (state == null ? void 0 : state.auth) ? /* @__PURE__ */ jsxs("div", { style: { padding: "20px" }, children: [
      !((_a = state == null ? void 0 : state.orders) == null ? void 0 : _a.lenght) < 1 ? /* @__PURE__ */ jsx(
        Empty,
        {
          className: "pt-5",
          imageStyle: {
            height: "100%",
            width: "300px"
          },
          image: "/images/emtycart.png",
          description: /* @__PURE__ */ jsxs(Flex, { align: "center", className: "flex-col", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold mt-4 text-gray", children: "Oops! No pending order found" }),
            /* @__PURE__ */ jsx("a", { href: "/products", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-home-primary", children: "View Products" }) })
          ] })
        }
      ) : "",
      (_c = (_b = (state == null ? void 0 : state.orders) && (state == null ? void 0 : state.orders[0])) == null ? void 0 : _b.orders) == null ? void 0 : _c.map((o, index) => {
        var _a2;
        return /* @__PURE__ */ jsxs(Card, { title: `Order ID: ${o == null ? void 0 : o.id}`, bordered: true, children: [
          /* @__PURE__ */ jsx(Fragment, { children: (_a2 = o == null ? void 0 : o.order_details) == null ? void 0 : _a2.map((prod, index2) => {
            return /* @__PURE__ */ jsx("div", {});
          }) }),
          /* @__PURE__ */ jsx(Steps, { current: Number(o == null ? void 0 : o.status), children: steps == null ? void 0 : steps.map((step, index2) => /* @__PURE__ */ jsx(
            Step,
            {
              title: /* @__PURE__ */ jsxs("div", { children: [
                step.emoji,
                " ",
                step.title
              ] }),
              description: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Text, { children: step.description }),
                step.date && /* @__PURE__ */ jsxs(Text, { type: "secondary", children: [
                  " (",
                  step.date,
                  ")"
                ] })
              ] })
            },
            index2
          )) })
        ] }, index);
      })
    ] }) : /* @__PURE__ */ jsx(
      "div",
      {
        className: "not-login-user-container",
        style: { background: "url('/images/not-login.png') center center/cover" },
        children: /* @__PURE__ */ jsx(Flex, { className: "py-20", justify: "center", align: "center", children: /* @__PURE__ */ jsx("a", { href: "/login", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-home-primary", children: "Login" }) }) })
      }
    ) })
  ] });
}
function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const iframeRef = useRef(null);
  const { methods } = useContext(HomeContext);
  async function fetchBlog() {
    setLoading(true);
    const blogId = location.pathname.split("/").pop();
    let fetchedBlog = await (methods == null ? void 0 : methods.loadBlogs(blogId));
    let recentBlogs2 = await (methods == null ? void 0 : methods.loadBlogs());
    if (fetchedBlog && recentBlogs2) {
      setBlog(fetchedBlog);
      setRecentBlogs(recentBlogs2);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchBlog();
  }, []);
  useEffect(() => {
    if (blog && iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      Parser().parse(blog == null ? void 0 : blog.content);
      iframeDocument.body.innerHTML = blog.content;
      const styleElement = iframeDocument.createElement("style");
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
      iframeRef.current.style.width = "100%";
      iframeRef.current.style.height = `${iframeDocument.body.scrollHeight}px`;
      const resizeObserver = new ResizeObserver(() => {
        iframeRef.current.style.height = `${iframeDocument.body.scrollHeight}px`;
      });
      resizeObserver.observe(iframeDocument.body);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [blog]);
  if (loading || !blog) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "container-fluid page-header m-0 p-0", style: { height: "100%", background: `url(${blog.image.replace("public", "/storage")}) center center/cover` }, children: /* @__PURE__ */ jsx("div", { className: "container-fluid page-header-inner py-5", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "display-3 text-white mb-3 animated slideInDown", children: blog.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-white font-semibold", children: [
        "By Autopulse | ",
        new Date(blog.created_at).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
        /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-light", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { className: "breadcrumb-item text-white active", "aria-current": "page", children: blog.title })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "products my-5", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-12", children: /* @__PURE__ */ jsx("div", { className: "section-heading", children: /* @__PURE__ */ jsx("h2", { children: blog.title }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-10", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          ref: iframeRef,
          title: "Blog Content",
          style: {
            border: "0",
            overflow: "hidden",
            width: "100%",
            height: "auto !important"
          }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-md-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Recent Blogs" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-1 gap-4", children: recentBlogs.map((recentBlog) => /* @__PURE__ */ jsxs("div", { className: "rounded overflow-hidden shadow-lg", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full h-48 object-cover",
              src: recentBlog.image.replace("public", "/storage"),
              alt: recentBlog.title
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-xl mb-2", children: recentBlog.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-base", children: new Date(recentBlog.created_at).toLocaleDateString() })
          ] })
        ] }, recentBlog.id)) })
      ] })
    ] }) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "container-fluid bg-gray-800 text-light footer wow fadeIn", "data-wow-delay": "0.1s", style: { position: "static", marginTop: "0" }, children: [
    /* @__PURE__ */ jsx("div", { className: "container pb-5", children: /* @__PURE__ */ jsxs("div", { className: "row g-5", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-yellow-600 rounded p-4", children: [
        /* @__PURE__ */ jsx("a", { href: "index.html", children: /* @__PURE__ */ jsx("h1", { className: "text-white text-uppercase mb-3", children: "Autopulse" }) }),
        /* @__PURE__ */ jsx("p", { className: "mb-0 text-white", children: "Welcome to our business! We offer a comprehensive marketplace for heavy machinery including rollers, cranes, and bulldozers. Explore our extensive range of spare parts and products tailored for businesses in the heavy equipment industry. Enjoy a seamless and efficient purchasing experience with us." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-md-6 col-lg-3", children: [
        /* @__PURE__ */ jsx("h6", { className: "section-title text-start text-primary text-uppercase mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa fa-map-marker-alt me-3" }),
          "123 Street, New York, USA"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa fa-phone-alt me-3" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/13072950382?`, style: { fontWeight: "500" }, children: "+1307 2950382                        " })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa fa-envelope me-3" }),
          /* @__PURE__ */ jsx("a", { style: { fontWeight: "500" }, href: "mailto:autopulsetrading@gmail.com", children: "info@autopulsetrading.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex pt-2", children: [
          /* @__PURE__ */ jsx("a", { className: "btn btn-outline-light btn-social", href: "", children: /* @__PURE__ */ jsx("i", { className: "", children: /* @__PURE__ */ jsx(GrMastercard, { size: 20, color: "green" }) }) }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-outline-light btn-social", href: "", children: /* @__PURE__ */ jsx("i", { className: "fab fa-facebook-f" }) }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-outline-light btn-social", href: "", children: /* @__PURE__ */ jsx("i", { className: "fab fa-youtube" }) }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-outline-light btn-social", href: "", children: /* @__PURE__ */ jsx("i", { className: "fab fa-linkedin-in" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-lg-5 col-md-12", children: /* @__PURE__ */ jsxs("div", { className: "row gy-5 g-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ jsx("h6", { className: "section-title text-start text-primary text-uppercase mb-4", children: "Company" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "/about", children: "About Us" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "/contact", children: "Contact Us" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "/privacy-policy", children: "Privacy Policy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ jsx("h6", { className: "section-title text-start text-primary text-uppercase mb-4", children: "Services" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "", children: "Blogs" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "#products-container", children: "Products" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "", children: "Track" }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-link", href: "", children: "Contact" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "copyright", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-6 text-center text-md-start mb-3 mb-md-0", children: [
        "© ",
        /* @__PURE__ */ jsx("a", { h: true, className: "border-bottom", href: "/", children: "Autopulse" }),
        ", All Right Reserved by Autopulse                        "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-md-6 text-center text-md-end", children: /* @__PURE__ */ jsxs("div", { className: "footer-menu", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
        /* @__PURE__ */ jsx("a", { href: "/contact", children: "Help" }),
        /* @__PURE__ */ jsx("a", { href: "#faq-container", children: "FQAs" })
      ] }) })
    ] }) }) })
  ] });
}
const CheckoutForm = ({ cart_items_ids }) => {
  const createStripeSession = async () => {
    try {
      let formValues = new FormData();
      formValues.append("cart_items_ids", cart_items_ids);
      const response = await axios$1.post("/session", formValues);
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error creating Stripe session:", error);
    }
  };
  const handleCheckout = () => {
    createStripeSession();
  };
  return /* @__PURE__ */ jsx("div", { className: "checkout", children: /* @__PURE__ */ jsx(Button, { className: "btn btn-primary btn-home-primary", onClick: handleCheckout, children: "Checkout" }) });
};
const { Option } = Select;
const Cart = ({ open, onClose, auth }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const context = useContext(HomeContext);
  const { state, dispatch, methods } = context;
  let total_price = (_b = (_a = state == null ? void 0 : state.cart) == null ? void 0 : _a.cartItems) == null ? void 0 : _b.reduce((prev, curr) => {
    var _a2;
    const itemTotal = parseFloat((_a2 = curr == null ? void 0 : curr.product) == null ? void 0 : _a2.price) * (curr == null ? void 0 : curr.quantity);
    return prev + itemTotal;
  }, 0);
  let cart_items_ids = (_d = (_c = state == null ? void 0 : state.cart) == null ? void 0 : _c.cartItems) == null ? void 0 : _d.map((cart) => cart.id);
  const onFinish = async (values) => {
    if (!(values == null ? void 0 : values.is_shipping_same) && !(values == null ? void 0 : values.shipping_first_name)) {
      return alert("Shippng address is required.");
    }
    try {
      let formValues = new FormData();
      formValues.append("cart_items_ids", cart_items_ids);
      formValues.append("total_amount", total_price);
      for (const i in values) {
        formValues.append(i, values[i]);
      }
      const response = await axios.post("/checkout/product", formValues);
      if (response.data.success) {
        window.location.href = response.data.url;
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error("Error creating Stripe session:", error);
    }
  };
  const changeCheckoutStep = (step) => {
    if (step <= 2)
      methods == null ? void 0 : methods.proceedCart(step);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Drawer,
    {
      title: `Product Cart`,
      width: 1200,
      onClose,
      open,
      styles: {
        body: {
          paddingBottom: 80,
          background: "rgb(254, 248, 245)"
        }
      },
      extra: /* @__PURE__ */ jsxs(Space, { children: [
        ((_e = state == null ? void 0 : state.cart) == null ? void 0 : _e.checkout_step) > 0 && /* @__PURE__ */ jsx(Button, { onClick: () => {
          var _a2;
          changeCheckoutStep(((_a2 = state == null ? void 0 : state.cart) == null ? void 0 : _a2.checkout_step) - 1);
        }, children: "Previous" }),
        ((_f = state == null ? void 0 : state.cart) == null ? void 0 : _f.checkout_step) < 1 && (cart_items_ids == null ? void 0 : cart_items_ids.length) > 0 && /* @__PURE__ */ jsx(Button, { className: "btn btn-primary btn-home-primary", onClick: () => {
          var _a2;
          changeCheckoutStep(((_a2 = state == null ? void 0 : state.cart) == null ? void 0 : _a2.checkout_step) + 1);
        }, type: "primary", children: "Proceed" })
      ] }),
      children: /* @__PURE__ */ jsxs("div", { className: "container bg-white p-3", style: { minHeight: "100%" }, children: [
        /* @__PURE__ */ jsx(
          Steps,
          {
            className: "step-container",
            current: (_g = state == null ? void 0 : state.cart) == null ? void 0 : _g.checkout_step,
            items: [
              {
                title: "Cart",
                description: "Fil the cart with the selected products"
              },
              {
                title: "Billing Address",
                description: "complete form with billing address"
              },
              {
                title: "Payment",
                description: "process payment through cards"
              }
            ]
          }
        ),
        /* @__PURE__ */ jsx(Form, { className: "p-3 bg-white", style: { width: "100%", background: "rgb(254, 248, 245)" }, onFinish, initialValues: auth.user, layout: "vertical", children: /* @__PURE__ */ jsx(
          RenderCheckoutStep,
          {
            auth,
            state,
            methods,
            current_step: (_h = state == null ? void 0 : state.cart) == null ? void 0 : _h.checkout_step,
            cart_items_ids,
            total_price,
            dispatch
          }
        ) })
      ] })
    }
  ) });
};
function RenderCheckoutStep({ auth, state, methods, dispatch, current_step, total_price, cart_items_ids }) {
  var _a, _b, _c;
  const [displayShippingFrom, setDisplayShippingForm] = useState(false);
  const handleChangeQuantity = (e, id) => {
    if (e.target.value < 1) {
      return;
    }
    methods == null ? void 0 : methods.changeCartQuantity(e.target.value, id);
  };
  switch (current_step) {
    case 0: {
      return /* @__PURE__ */ jsx(CartComponent, { state, handleChangeQuantity, dispatch, removeFromCart: methods.removeFromCart });
    }
    case 1: {
      return /* @__PURE__ */ jsxs(Flex, { align: "top", gap: 30, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", style: { flexDirection: "column", width: "70%" }, children: [
          /* @__PURE__ */ jsx("h5", { className: "py-2 text-left", children: "Billing Address" }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs(Row, { className: "pt-4", gutter: 16, children: [
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_first_name",
                label: "First Name",
                rules: [
                  {
                    required: true,
                    message: "Please enter your first name"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { value: (_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.name, placeholder: "Please enter your first name" })
              }
            ) }),
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_last_name",
                label: "Last Name",
                rules: [
                  {
                    required: true,
                    message: "Please enter your last name"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your last name" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_phone",
                label: "Phone",
                rules: [
                  {
                    required: true,
                    message: "Please enter your phone number"
                  },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your phone number" })
              }
            ) }),
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_email",
                label: "Email",
                rules: [
                  {
                    required: true,
                    message: "Please enter your email address"
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your email address" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "billing_address_line1",
              label: "Address Line 1",
              rules: [
                {
                  required: true,
                  message: "Please enter your address"
                }
              ],
              children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your address" })
            }
          ) }) }),
          /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "billing_address_line2",
              label: "Address Line 2",
              children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your address (optional)" })
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_city",
                label: "City",
                rules: [
                  {
                    required: true,
                    message: "Please enter your city"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your city" })
              }
            ) }),
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_state",
                label: "State",
                rules: [
                  {
                    required: true,
                    message: "Please enter your state"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your state" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_postal_code",
                label: "Zip Code",
                rules: [
                  {
                    required: true,
                    message: "Please enter your zip code"
                  },
                  {
                    pattern: /^[0-9]{5}$/,
                    message: "Please enter a valid 5-digit zip code"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your zip code" })
              }
            ) }),
            /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "billing_country",
                label: "Country",
                rules: [
                  {
                    required: true,
                    message: "Please select your country"
                  }
                ],
                children: /* @__PURE__ */ jsxs(Select, { placeholder: "Please select your country", children: [
                  /* @__PURE__ */ jsx(Option, { value: "usa", children: "United States" }),
                  /* @__PURE__ */ jsx(Option, { value: "canada", children: "Canada" }),
                  /* @__PURE__ */ jsx(Option, { value: "other", children: "Other" })
                ] })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx("h5", { className: "py-2 text-left", children: "Shipping Address" }),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "is_shipping_same",
              valuePropName: "checked",
              children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  onChange: (e) => setDisplayShippingForm(!e.target.checked),
                  className: "py-2",
                  children: /* @__PURE__ */ jsx(Tooltip, { title: "Check this box, to make this product a business product", children: "Same As Billing Address?" })
                }
              )
            }
          ),
          displayShippingFrom && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(Row, { className: "pt-4", gutter: 16, children: [
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_first_name",
                  label: "First Name",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your first name"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { value: (_b = auth == null ? void 0 : auth.user) == null ? void 0 : _b.name, placeholder: "Please enter your first name" })
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_last_name",
                  label: "Last Name",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your last name"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your last name" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_phone",
                  label: "Phone",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your phone number"
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your phone number" })
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_email",
                  label: "Email",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your email address"
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your email address" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "shipping_address_line1",
                label: "Address Line 1",
                rules: [
                  {
                    required: true,
                    message: "Please enter your address"
                  }
                ],
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your address" })
              }
            ) }) }),
            /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "shipping_address_line2",
                label: "Address Line 2",
                children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your address (optional)" })
              }
            ) }) }),
            /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_city",
                  label: "City",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your city"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your city" })
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_state",
                  label: "State",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your state"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your state" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_postal_code",
                  label: "Zip Code",
                  rules: [
                    {
                      required: true,
                      message: "Please enter your zip code"
                    },
                    {
                      pattern: /^[0-9]{5}$/,
                      message: "Please enter a valid 5-digit zip code"
                    }
                  ],
                  children: /* @__PURE__ */ jsx(Input, { placeholder: "Please enter your zip code" })
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "shipping_country",
                  label: "Country",
                  rules: [
                    {
                      required: true,
                      message: "Please select your country"
                    }
                  ],
                  children: /* @__PURE__ */ jsxs(Select, { placeholder: "Please select your country", children: [
                    /* @__PURE__ */ jsx(Option, { value: "usa", children: "United States" }),
                    /* @__PURE__ */ jsx(Option, { value: "canada", children: "Canada" }),
                    /* @__PURE__ */ jsx(Option, { value: "other", children: "Other" })
                  ] })
                }
              ) })
            ] })
          ] })
        ] }),
        renderOrderSummary(
          {
            cart: (_c = state == null ? void 0 : state.cart) == null ? void 0 : _c.cartItems,
            total: total_price,
            cart_items_ids
          }
        )
      ] });
    }
    case 2: {
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Cart" }),
        /* @__PURE__ */ jsx(CheckoutForm, { amount: total_price, cart_items_ids })
      ] });
    }
    default:
      return /* @__PURE__ */ jsx(CartComponent, { state, handleChangeQuantity, dispatch, removeFromCart: methods.removeFromCart });
  }
}
function renderOrderSummary({ cart, total, cart_items_ids }) {
  var _a;
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => {
        var _a2;
        return /* @__PURE__ */ jsx("span", { children: (_a2 = record == null ? void 0 : record.product) == null ? void 0 : _a2.name });
      },
      align: "left"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => /* @__PURE__ */ jsxs("span", { children: [
        "X",
        record == null ? void 0 : record.quantity
      ] }),
      align: "left"
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text, record) => {
        var _a2;
        return /* @__PURE__ */ jsx("span", { children: Number(record.quantity) * Number((_a2 = record == null ? void 0 : record.product) == null ? void 0 : _a2.price) });
      },
      align: "right"
    }
  ];
  const data2 = (_a = cart ?? []) == null ? void 0 : _a.map((item, index) => {
    var _a2;
    return {
      key: index,
      product: item.product,
      quantity: item.quantity,
      total: Number(item.quantity) * Number((_a2 = item == null ? void 0 : item.product) == null ? void 0 : _a2.price)
    };
  });
  return /* @__PURE__ */ jsxs("div", { style: { width: "30%" }, className: "order-summay p-3 bg-white ", children: [
    /* @__PURE__ */ jsx("h5", { className: "text-left py-2", children: "Order Summary" }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("div", { className: "heading mt-4", children: [
      /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", className: "header py-3", children: [
        /* @__PURE__ */ jsx("h6", { children: "PRODUCT" }),
        /* @__PURE__ */ jsx("h6", { children: "TOTAL" })
      ] }),
      /* @__PURE__ */ jsx(
        Table,
        {
          className: "cart-table",
          columns,
          dataSource: data2,
          pagination: false,
          rowClassName: (record, index) => index % 2 === 0 ? "even-row" : "odd-row"
        }
      ),
      /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", className: "header py-3", children: [
        /* @__PURE__ */ jsx("strong", { children: "SUBTOTAL" }),
        /* @__PURE__ */ jsx("strong", { children: total })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", className: "header py-3", children: [
        /* @__PURE__ */ jsx("strong", { children: "SHIPPING" }),
        /* @__PURE__ */ jsx("strong", { children: "$0" })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", className: "header py-3", children: [
        /* @__PURE__ */ jsx("strong", { children: "DISCOUNT" }),
        /* @__PURE__ */ jsx("strong", { children: "$0" })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", className: "header py-3", children: [
        /* @__PURE__ */ jsx("h6", { children: "TOTAL" }),
        /* @__PURE__ */ jsx("h6", { children: total })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "py-3 bg-white", children: /* @__PURE__ */ jsx(Radio, { checked: true, value: "highToLow", children: /* @__PURE__ */ jsx("span", { style: { fontWeight: "500" }, children: "Credit / Debit Card" }) }) }),
      /* @__PURE__ */ jsx(Tooltip, { title: "Proceed to payment", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary btn-home-primary", children: "Proceed Checkout" }) })
    ] })
  ] });
}
const CartComponent = ({ state, dispatch, handleChangeQuantity, removeFromCart }) => {
  var _a;
  const cartItems = ((_a = state == null ? void 0 : state.cart) == null ? void 0 : _a.cartItems) || [];
  if (cartItems.length < 1) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center pt-5", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/emtycart.png",
          alt: "Empty Cart",
          className: "h-60 w-auto"
        }
      ),
      /* @__PURE__ */ jsx(Typography.Text, { className: "mt-4", children: "Oops, You have no product in your cart!" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          href: "/products",
          className: "mt-4",
          type: "primary",
          icon: /* @__PURE__ */ jsx(CiShoppingCart, { size: 20, color: "white", stroke: "2" }),
          children: "View Products"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: cartItems.map((item, index) => {
    var _a2, _b, _c, _d, _e, _f;
    return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-4 border rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(Avatar, { size: "large", src: (_b = (_a2 = item == null ? void 0 : item.product) == null ? void 0 : _a2.image) == null ? void 0 : _b.replace("public", "/storage") }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-gray-800", children: (_c = item == null ? void 0 : item.product) == null ? void 0 : _c.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
            "Added: ",
            formatDate((_d = item == null ? void 0 : item.product) == null ? void 0 : _d.created_at)
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-semibold text-gray-800", children: [
            "$",
            (_e = item == null ? void 0 : item.product) == null ? void 0 : _e.price
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "number",
            defaultValue: item == null ? void 0 : item.quantity,
            min: 1,
            max: Number((_f = item == null ? void 0 : item.product) == null ? void 0 : _f.stock),
            onChange: (e) => handleChangeQuantity(e, item == null ? void 0 : item.id),
            className: "w-20"
          }
        ),
        /* @__PURE__ */ jsx(
          Popconfirm,
          {
            title: "Remove Item",
            onConfirm: () => {
              var _a3;
              return removeFromCart.call(dispatch, (_a3 = item == null ? void 0 : item.product) == null ? void 0 : _a3.id);
            },
            okText: "Yes",
            cancelText: "No",
            placement: "topRight",
            children: /* @__PURE__ */ jsx(MdDelete, { title: "Remove Item", className: "text-red-500 cursor-pointer", size: 20 })
          }
        )
      ] })
    ] }, item.id);
  }) });
};
function ProductSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const performSearch = async (value) => {
    setLoading(true);
    try {
      const response = await axios$1.get(`/search-products`, { params: { search_term: value } });
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
    setLoading(false);
    setSearchPerformed(true);
  };
  const debouncedSearch = useCallback(
    debounce((value) => performSearch(value), 300),
    []
  );
  useEffect(() => {
    if (searchValue) {
      debouncedSearch(searchValue);
    } else {
      setFilteredProducts([]);
      setSearchPerformed(false);
    }
  }, [searchValue, debouncedSearch]);
  const handleIconClick = () => {
    if (searchValue) {
      performSearch(searchValue);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container m-auto above-search-container d-block m-0 p-0 ml-auto", style: { marginLeft: "auto", position: "relative", maxWidth: "700px", width: "100%" }, children: [
    /* @__PURE__ */ jsx("div", { className: "p-0", children: /* @__PURE__ */ jsx(
      Input,
      {
        style: {
          height: "40px",
          borderRadius: "30px",
          border: "1.2px solid black",
          width: isFocused && isMobile ? "98vw" : "100%",
          zIndex: isFocused && isMobile ? 1e3 : "auto",
          position: isFocused && isMobile ? "relative" : "static",
          transition: "all 0.3s ease"
        },
        value: searchValue,
        onChange: (e) => setSearchValue(e.target.value),
        placeholder: "Search products",
        suffix: /* @__PURE__ */ jsx(SearchOutlined, { onClick: handleIconClick, style: { cursor: "pointer" } }),
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false)
      }
    ) }),
    loading ? /* @__PURE__ */ jsx("div", { className: "filtered-product-list", style: { display: "flex", justifyContent: "center", position: "relative" }, children: /* @__PURE__ */ jsx(Skeleton, { className: "bg-white p-3", style: { position: "absolute", top: "10px", background: "white", zIndex: "100000" }, active: true, size: "large" }) }) : searchPerformed && (filteredProducts.length > 0 ? /* @__PURE__ */ jsx(
      List,
      {
        className: "filtered-product-list",
        bordered: true,
        dataSource: filteredProducts,
        renderItem: (item) => /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/product/${item == null ? void 0 : item.slug}`, children: /* @__PURE__ */ jsx(List.Item, { children: /* @__PURE__ */ jsx(
          List.Item.Meta,
          {
            avatar: /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                height: 40,
                width: 40,
                src: `${item == null ? void 0 : item.image.replace("public", "/storage")}`,
                style: { width: 50, height: 50, objectFit: "cover" }
              }
            ),
            title: /* @__PURE__ */ jsx("a", { style: { fontSize: "16px", fontWeight: "500" }, href: `/product/${item == null ? void 0 : item.slug}`, children: item == null ? void 0 : item.name })
          }
        ) }) })
      }
    ) : /* @__PURE__ */ jsx(Empty, { className: "empty-product-container", description: "No Products Found", style: { marginTop: "10px" } }))
  ] });
}
const ProfileDropdown = ({ auth, hideIcon = false }) => {
  var _a, _b;
  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "profile":
        location.href = `/profile`;
        break;
      case "signOut":
        location.href = "/logout";
        break;
      case "admin_dash":
        location.href = "/dashboard/home";
        break;
    }
  };
  const menu = /* @__PURE__ */ jsxs(Menu, { onClick: handleMenuClick, children: [
    /* @__PURE__ */ jsx(Menu.Item, { icon: /* @__PURE__ */ jsx(GrUserSettings, { size: 15 }), children: ((_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.name) ?? "Guest" }, "profile"),
    ((_b = auth == null ? void 0 : auth.user) == null ? void 0 : _b.email) == "admin@autopulse.com" && /* @__PURE__ */ jsx(Menu.Item, { icon: /* @__PURE__ */ jsx(GrDashboard, { size: 15 }), children: "Dashboard" }, "admin_dash"),
    /* @__PURE__ */ jsx(Menu.Item, { icon: /* @__PURE__ */ jsx(GrLocation, { size: 15 }), children: "Track Order" }, "trackOrder"),
    auth.user ? /* @__PURE__ */ jsx(Menu.Item, { icon: /* @__PURE__ */ jsx(GrLogout, {}), style: { color: "red" }, children: "Sign Out" }, "signOut") : /* @__PURE__ */ jsx(Menu.Item, { icon: /* @__PURE__ */ jsx(GrLogin, {}), style: { color: "green" }, children: "SignIn" }, "singIn")
  ] });
  return /* @__PURE__ */ jsx(Dropdown, { className: "p-0", overlay: menu, trigger: ["click"], children: /* @__PURE__ */ jsx(Button, { className: "primary-btn", icon: /* @__PURE__ */ jsx(FaRegUser, {}), children: "  " }) });
};
const items = [
  {
    key: 1,
    label: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2", rel: "noopener noreferrer", href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/products/machine`, children: [
      /* @__PURE__ */ jsx(GrServices, {}),
      "   Machines"
    ] })
  },
  {
    key: 3,
    label: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2", rel: "noopener noreferrer", href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/products/electric-vehicles`, children: [
      /* @__PURE__ */ jsx(GrCar, {}),
      " Vehicles"
    ] })
  },
  {
    key: 2,
    label: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2", rel: "noopener noreferrer", href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/products/electric-bikes`, children: [
      /* @__PURE__ */ jsx(GrBike, {}),
      " Bikes"
    ] })
  }
];
const ProdDropdown = () => /* @__PURE__ */ jsx(
  Dropdown,
  {
    menu: {
      items
    },
    children: /* @__PURE__ */ jsx("a", { onClick: (e) => e.preventDefault(), children: /* @__PURE__ */ jsx(Space, { className: "text-light", style: { color: "white", cursor: "pointer", fontWeight: "500" }, children: "Products" }) })
  }
);
const App$2 = ({ position = "left" }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { onClick: showDrawer, children: /* @__PURE__ */ jsx(Space, { className: "text-light", style: { color: "white", cursor: "pointer", fontWeight: "500" }, children: /* @__PURE__ */ jsx(GrMenu, { size: 20, color: "white" }) }) }),
    /* @__PURE__ */ jsx(
      Drawer,
      {
        title: /* @__PURE__ */ jsxs("div", { className: "flex justify-between ", children: [
          /* @__PURE__ */ jsx("h4", { children: "Menu" }),
          /* @__PURE__ */ jsx(GrClose, { onClick: onClose })
        ] }),
        placement: position,
        closable: false,
        onClose,
        open,
        width: 200,
        className: "text-light",
        style: { background: "#1F2937" },
        children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-dark", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "flex items-center gap-2 p-1", href: "", children: /* @__PURE__ */ jsx("span", { className: "text-light font-normal", children: "Home" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "flex flex-col gap-1", href: "", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2  p-1", children: /* @__PURE__ */ jsx("span", { className: "text-light font-normal", children: "Products" }) }),
            /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1 p-2 border-l", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2  p-1", href: "/products/machine", children: [
                /* @__PURE__ */ jsx(GrServices, { color: "#ceaa4d", size: 15 }),
                " ",
                /* @__PURE__ */ jsx("small", { className: "text-light text-bold", children: "Machines" })
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2  p-1", href: "/products/electric-vehicles", children: [
                /* @__PURE__ */ jsx(GrCar, { color: "#ceaa4d", size: 15 }),
                " ",
                /* @__PURE__ */ jsx("small", { className: "text-light text-bold", children: "Vehicles" })
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2  p-1", href: "/products/electric-bikes", children: [
                /* @__PURE__ */ jsx(GrBike, { color: "#ceaa4d", size: 15 }),
                " ",
                /* @__PURE__ */ jsx("small", { className: "text-light text-bold", children: "Electric Bikes" })
              ] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "flex items-center gap-2  p-1", href: "/about", children: /* @__PURE__ */ jsx("span", { className: "text-light font-normal", children: "About" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "flex items-center gap-2  p-1", href: "/contact", children: /* @__PURE__ */ jsx("span", { className: "text-light font-normal", children: "Contact" }) }) })
        ] })
      }
    )
  ] });
};
const Navbar = ({ auth }) => {
  var _a, _b, _c, _d, _e, _f;
  const [open, setOpen] = useState(false);
  const context = useContext(HomeContext);
  const { state, dispatch, methods } = context;
  const [scrollY, setScrollY] = useState(window.scrollY);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll2 = () => {
      const navFixElement = document.getElementById("nav-fix");
      if (navFixElement) {
        if (window.scrollY >= 40) {
          navFixElement.style.position = "fixed";
          navFixElement.style.top = "0";
          navFixElement.style.width = "100%";
          navFixElement.style.background = "transparent";
          navFixElement.style.borderRadius = "0px";
          navFixElement.classList.remove("container");
        } else {
          navFixElement.style.position = "static";
          navFixElement.style.background = "";
          navFixElement.classList.add("container");
          navFixElement.style.borderRadius = "30px";
        }
      }
    };
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);
  useEffect(() => {
    if (auth == null ? void 0 : auth.user) {
      methods.loadCart();
    }
  }, [state.loadingCart]);
  const menuItems = [
    { key: "3", label: /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/blogs`, children: "Blogs" }) },
    { key: "4", label: /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/about`, children: "About Us" }) },
    { key: "5", label: /* @__PURE__ */ jsx("a", { href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/contact`, children: "Contact" }) }
  ];
  const socialIcons = /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/autopulseglobaltrading/", children: /* @__PURE__ */ jsx(FaFacebookSquare, { size: 20, className: "text-light-500" }) }),
    /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx(FaSquareWhatsapp, { size: 20, className: "text-ligt-500" }) }),
    /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/autopulseglobaltrading/", children: /* @__PURE__ */ jsx(FaLinkedin, { size: 20, className: "text-light-500" }) }),
    /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/autopulseglobaltradingg/", children: /* @__PURE__ */ jsx(FaSquareInstagram, { size: 20, className: "text-light-500" }) }),
    /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@autopulseglobaltrading/", children: /* @__PURE__ */ jsx(FaYoutubeSquare, { size: 20, className: "text-light-500" }) })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 p-0 relative z-50 pb-1", children: [
    /* @__PURE__ */ jsx("a", { href: "https://wa.me/3072950382", className: "", style: { position: "fixed", bottom: "2vw", left: "2vw" }, children: /* @__PURE__ */ jsx(Tooltip, { title: "Contact US", className: "stick-whatsapp animate-bounce", children: /* @__PURE__ */ jsx("svg", { color: "#25D366", stroke: "currentColor", style: { fontSize: "60px" }, fill: "currentColor", "stroke-width": "0", viewBox: "0 0 448 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" }) }) }) }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-right" }),
    /* @__PURE__ */ jsx(Cart, { auth, open, onClose: () => setOpen(false) }),
    /* @__PURE__ */ jsxs("div", { className: "nav-up flex justify-between items-center  text-white", style: { padding: "0.5vw" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { gap: "3vw" }, className: "hidden flex items-center  unhide-750 mt-2 mx-1", children: [
        /* @__PURE__ */ jsx(App$2, {}),
        /* @__PURE__ */ jsx("a", { href: "/", className: "", children: /* @__PURE__ */ jsx("img", { loading: "lazy", width: 80, src: "/images/final_logo.png", alt: "Logo" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 hide-1200", children: [
        /* @__PURE__ */ jsxs(Tooltip, { title: "Phone number", className: "text-sm flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(FaWhatsapp, { size: 20 }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/13072950382?`, style: { fontWeight: "500" }, children: "+1307 2950382                        " })
        ] }),
        /* @__PURE__ */ jsxs(Tooltip, { title: "Email Us", className: "text-sm flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(GrMail, { size: 20 }),
          /* @__PURE__ */ jsx("a", { style: { fontWeight: "500" }, href: "mailto:autopulsetrading@gmail.com", children: "info@autopulsetrading.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 lg:flex justify-center d-none", children: /* @__PURE__ */ jsx(ProductSearch, {}) }),
      /* @__PURE__ */ jsx("div", { id: "home-nav-top", className: "px-4 py-2  lg:flex justify-center", children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-8 text-white", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "text-light", style: { fontWeight: "500" }, href: "/", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ProdDropdown, {}) }),
        menuItems == null ? void 0 : menuItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { style: { fontWeight: "500" }, className: "text-light", href: item.label.props.href, children: item.label.props.children }) }, item.key))
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 hide-750", children: socialIcons }),
      /* @__PURE__ */ jsxs("div", { className: "hidden unhide-1200 flex items-center gap-4 ", children: [
        /* @__PURE__ */ jsxs("div", { style: { gap: "3vw" }, className: "hidden flex items-center  icons-container unhide-750 hide-1200 mx-1", children: [
          location.pathname.split("/")[1] === "parts" && /* @__PURE__ */ jsx(
            Badge,
            {
              count: (_b = (_a = state == null ? void 0 : state.cart) == null ? void 0 : _a.cartItems) == null ? void 0 : _b.length,
              className: "flex items-center gap-3 hide-750",
              children: /* @__PURE__ */ jsxs("a", { className: "icon-container", onClick: () => setOpen(true), children: [
                /* @__PURE__ */ jsx(GrCart, { className: "text-xl cursor-pointer", onClick: () => setOpen(true) }),
                /* @__PURE__ */ jsx("span", { children: "Cart" })
              ] })
            }
          ),
          location.pathname.split("/")[1] === "parts" && /* @__PURE__ */ jsxs("a", { href: "/track", className: "text-gray-800 flex icon-container hide-1200 items-center gap-1", children: [
            /* @__PURE__ */ jsx(MdOutlineLocationOn, { size: 20, className: "text-lg" }),
            /* @__PURE__ */ jsx("span", { children: "Track" })
          ] }),
          !auth.user ? /* @__PURE__ */ jsx("a", { href: "/login", className: "text-light-800 icon-container flex items-center gap-1", children: /* @__PURE__ */ jsx("span", { className: "text-light", children: " Login" }) }) : /* @__PURE__ */ jsx("a", { href: "/logout", className: "text-light-800 icon-container flex items-center gap-1", children: /* @__PURE__ */ jsx("span", { className: "text-light", children: " Logout" }) }),
          !auth.user && /* @__PURE__ */ jsx("a", { href: "/register", className: "text-gray icon-container flex items-center gap-1", children: /* @__PURE__ */ jsx("span", { className: "text-light", children: "Register" }) }),
          /* @__PURE__ */ jsx("div", { className: "hide-1200", children: /* @__PURE__ */ jsx(ProfileDropdown, { auth }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden unhide-1200 hide-750 flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx(App$2, { position: "right" }),
          /* @__PURE__ */ jsx(ProfileDropdown, { auth })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "nav-fix", className: "container nav-down flex justify-between items-center gap-3 bg-white", style: { borderRadius: "30px", padding: "1.5vw" }, children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hide-750", children: /* @__PURE__ */ jsx("img", { loading: "lazy", width: 150, src: "/images/final_logo.png", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center justify-between sm-gap-3", style: { width: "100%" }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsx(ProductSearch, {}) }),
        /* @__PURE__ */ jsxs("div", { style: { marginRight: "3vw" }, className: "d-none unhide-750 sm-gap-3 flex gap-4 items-center hide-1200", children: [
          location.pathname.split("/")[1] === "parts" && /* @__PURE__ */ jsx(
            Badge,
            {
              count: (_d = (_c = state == null ? void 0 : state.cart) == null ? void 0 : _c.cartItems) == null ? void 0 : _d.length,
              className: "flex items-center gap-3",
              children: /* @__PURE__ */ jsx(Button, { className: "primary-btn", icon: /* @__PURE__ */ jsx(GrCart, { className: "text-xl cursor-pointer" }), onClick: () => setOpen(true) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "unhide-1200 unhide-750", children: /* @__PURE__ */ jsx(ProfileDropdown, { auth }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 icons-container hide-750 ", children: [
          location.pathname.split("/")[1] === "parts" && /* @__PURE__ */ jsx(
            Badge,
            {
              count: (_f = (_e = state == null ? void 0 : state.cart) == null ? void 0 : _e.cartItems) == null ? void 0 : _f.length,
              className: "flex items-center gap-3",
              children: /* @__PURE__ */ jsxs("a", { className: "icon-container", onClick: () => setOpen(true), children: [
                /* @__PURE__ */ jsx(GrCart, { className: "text-xl cursor-pointer", onClick: () => setOpen(true) }),
                /* @__PURE__ */ jsx("span", { children: "Cart" })
              ] })
            }
          ),
          location.pathname.split("/")[1] === "parts" && /* @__PURE__ */ jsxs("a", { href: "/track", className: "text-gray-800 flex icon-container hide-1200 items-center gap-1", children: [
            /* @__PURE__ */ jsx(MdOutlineLocationOn, { size: 20, className: "text-lg" }),
            /* @__PURE__ */ jsx("span", { children: "Track" })
          ] }),
          !auth.user ? /* @__PURE__ */ jsx("a", { href: "/login", className: "text-gray-800 primary-btn icon-container flex items-center gap-1", children: "Login" }) : /* @__PURE__ */ jsx("a", { href: "/logout", className: "primary-btn icon-container flex items-center gap-1", children: "Logout" }),
          !auth.user && /* @__PURE__ */ jsx("a", { href: "/register", className: " primary-btn \n                        text-gray icon-container flex items-center gap-1", children: "Register" }),
          /* @__PURE__ */ jsx("div", { className: "hide-1200", children: /* @__PURE__ */ jsx(ProfileDropdown, { auth }) })
        ] })
      ] })
    ] })
  ] });
};
const Navbar$1 = Navbar;
function HomeLayout({ auth, header, children }) {
  const { state } = useState();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen ", style: { background: "#fef8f5" }, children: [
    state == null ? void 0 : state.contextHolder,
    /* @__PURE__ */ jsx(Navbar$1, { auth }),
    /* @__PURE__ */ jsx("main", { id: "main", style: { background: "#fef8f5", minHeight: "200px" }, children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function PrivacyPolicy() {
  return /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { class: "container-fluid page-header m-0 p-0", style: { height: "100%", background: `url(/images/about-banner.jpg) center center/cover` }, children: /* @__PURE__ */ jsx("div", { class: "container-fluid page-header-inner py-5 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { class: " text-center", children: [
    /* @__PURE__ */ jsx("h1", { class: "display-3 text-white text-center mb-3 animated slideInDown", children: "Privacy Policy" }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", style: { background: "transparent" }, children: /* @__PURE__ */ jsxs("ol", { class: "breadcrumb justify-content-center text-uppercase", style: { background: "transparent" }, children: [
      /* @__PURE__ */ jsx("li", { class: "breadcrumb-item", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-light", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { class: "breadcrumb-item text-white active", "aria-current": "page", children: "Privacy Policy" })
    ] }) })
  ] }) }) }) });
}
function BusinessProd({ header = true }) {
  var _a;
  const context = useContext(HomeContext);
  const { state, dispatch, methods } = context;
  const sliderRef = React.useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  useEffect(() => {
    methods.loadBusinessprods();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "latest-products container p-3 bg-white mt-3", style: { padding: "30px 12px" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 py-2 pb-4 flex align-center justify-between px-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-secondary text-lg font-semibold", children: "Related Products" }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-home-primary", children: "View All" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-0", style: { position: "relative" }, children: [
      /* @__PURE__ */ jsxs(Flex, { align: "center", style: { position: "absolute", right: "0", top: "-40px" }, justify: "end", gap: 10, className: "flex  justify-between mb-2 mr-auto", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => sliderRef.current.slickPrev(), icon: /* @__PURE__ */ jsx(LeftOutlined, {}) }),
        /* @__PURE__ */ jsx(Button, { onClick: () => sliderRef.current.slickNext(), icon: /* @__PURE__ */ jsx(RightOutlined, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: " pr-0", style: { paddingRight: "0px !important" }, children: /* @__PURE__ */ jsx(Slider$1, { ref: sliderRef, ...settings, children: (_a = state == null ? void 0 : state.relatedProducts) == null ? void 0 : _a.map((prod, index) => /* @__PURE__ */ jsx(ProductComponent, { prod, index })) }) })
    ] })
  ] });
}
const ImageViewer = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3e3
  };
  return /* @__PURE__ */ jsxs("div", { className: "image-previewer relative", children: [
    /* @__PURE__ */ jsx(Slider$2, { ref: (slider) => setNav1(slider), ...settings, children: images == null ? void 0 : images.map((image, index) => {
      var _a;
      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Image,
        {
          loading: "lazy",
          alt: `Product ${index}`,
          src: `${(_a = image == null ? void 0 : image.image_path) == null ? void 0 : _a.replace("public", "/storage")}`,
          className: "w-full object-cover h-full w-full"
        }
      ) }, index);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-gray-200 hover:bg-gray-300 text-white font-bold p-1 rounded-full",
          onClick: () => nav1 == null ? void 0 : nav1.slickPrev(),
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "white",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15 19l-7-7 7-7"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-gray-200 hover:bg-gray-300 text-white font-bold p-1 rounded-full",
          onClick: () => nav1 == null ? void 0 : nav1.slickNext(),
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "white",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 5l7 7-7 7"
                }
              )
            }
          )
        }
      )
    ] })
  ] });
};
const App = () => {
  var _a, _b, _c, _d, _e, _f;
  useState(1);
  const [selectedTab, setSelectedTab] = useState("description");
  const [reviewData, setReviewData] = useState([]);
  const context = useContext(HomeContext);
  const { state, methods } = context;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    methods.getProductDetails(location.pathname.split("/").pop());
  }, []);
  async function fetchReviews() {
    var _a2;
    let reviews = await methods.loadReviews((_a2 = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _a2.id);
    if (reviews) {
      setReviewData(reviews);
    }
  }
  useEffect(() => {
    fetchReviews();
  }, [state.selectedProduct]);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto  py-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "single-product-container", children: [
      /* @__PURE__ */ jsx("div", { className: "product-images-container", children: /* @__PURE__ */ jsx(ImageViewer, { images: (_a = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _a.images }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col md:flex-row ", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 md:p-6 w-full", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: (_b = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _b.name }),
        ((_c = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _c.features) && /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4 flex flex-col gap-3", children: Parser().parse((_d = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _d.features) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://wa.me/13072950382?text=${encodeURIComponent("Hey, Im intrested in " + ((_e = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _e.name))}`,
            className: "bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx(MdWhatsapp, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Chat to Buy" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6  bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
        "strong",
        {
          className: `py-2 px-3 text-secondary text-lg font-semibold ' : ''}`,
          onClick: () => setSelectedTab("description"),
          style: { fontWeight: "500" },
          children: "Description"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "py-4 px-0", children: selectedTab === "description" && /* @__PURE__ */ jsx("div", { className: "text-gray-700", children: Parser().parse((_f = state == null ? void 0 : state.selectedProduct) == null ? void 0 : _f.description) }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx(BusinessProd, {})
  ] });
};
const App$1 = App;
!function($) {
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function(e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        if ($("#header").length) {
          scrollto -= $("#header").outerHeight();
        }
        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }
        $("html, body").animate({
          scrollTop: scrollto
        }, 1500, "easeInOutExpo");
        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none"
    });
    $("body").append($mobile_nav);
    $("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $("body").append('<div class="mobile-nav-overly"></div>');
    $(document).on("click", ".mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
      $(".mobile-nav-overly").toggle();
    });
    $(document).on("click", ".mobile-nav .drop-down > a", function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1500, "easeInOutExpo");
    return false;
  });
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });
}(jQuery);
export {
  AboutPage as A,
  ContactPage as C,
  HomeLayout as H,
  ProductType as P,
  SingleBlog as S,
  Track as T,
  AllProducts$1 as a,
  App$1 as b,
  AllBlogs as c,
  PrivacyPolicy as d
};
