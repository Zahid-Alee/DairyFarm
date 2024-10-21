import { j as jsx, a as jsxs, F as Fragment } from "./jsx-runtime-B5WjVc0P.js";
import React, { useReducer, useContext, useState, useEffect } from "react";
import { LeftOutlined, RightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { S as Slider } from "./Slider-DlNrtDXl.js";
import { a as ajaxRequest, S as ShowToast } from "./helpers-isL4n3oi.js";
import { FaCheck, FaEnvelope, FaWhatsapp, FaMinus, FaPlus, FaRegHandshake, FaGlobe, FaShoppingCart } from "react-icons/fa";
import axios$1 from "axios";
import { Form, Input, Spin, Alert, Flex, Image, Tooltip, Row, Col, Card, Skeleton, Button, Modal } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { Parser } from "html-to-react";
import { MdDirectionsCar, MdHighQuality, MdLanguage, MdPriceChange, MdWhatsapp } from "react-icons/md";
import Slider$1 from "react-slick";
import { RiWeightLine } from "react-icons/ri";
import { GrCalendar, GrCar } from "react-icons/gr";
function rootReducer(state, { type, payload }) {
  switch (type) {
    default: {
      return { ...state, ...payload };
    }
  }
}
async function loadBlogs(id = null) {
  try {
    const method = "get";
    let api = `/api/get/blogs${id ? `/${id}` : ""}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
  }
}
async function loadReviews(id) {
  try {
    const method = "get";
    let api = `/api/get/reviews/${id}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
  }
}
async function loadUserReviews() {
  try {
    const method = "get";
    let api = `/api/user/get/reviews`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
  }
}
async function loadSlides(view) {
  try {
    const method = "get";
    let api = `/api/get/slides/${view}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
  }
}
async function loadFaqs() {
  try {
    const method = "get";
    let api = `/api/user/get/faqs`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
  }
}
async function filterProducts({ prod_type, selectedCategories = [], selectedBrands = [], selectedPrice = "", page = 1, selectedWeights = [], selectedYears = [] }) {
  var _a;
  try {
    this.dispatch({ payload: { loading: true } });
    const queryParams = { page };
    if (selectedPrice) {
      queryParams.price = selectedPrice;
    }
    if (prod_type) {
      queryParams.prod_type_slug = prod_type;
    }
    if (selectedWeights.length > 0) {
      queryParams.weights = selectedWeights.join(",");
    }
    if ((selectedBrands == null ? void 0 : selectedBrands.length) > 0) {
      queryParams.brands = selectedBrands.join(",");
    }
    if (selectedCategories.length > 0) {
      queryParams.categories = selectedCategories.join(",");
    }
    if (selectedYears.length > 0) {
      queryParams.years = selectedYears.join(",");
    }
    const response = await axios.get(`/api/filter/product/type/${prod_type}`, { params: queryParams });
    if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.success) {
      this.dispatch({ payload: { filterProducts: response == null ? void 0 : response.data } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { loading: false } });
  }
}
async function loadCategories() {
  this.dispatch({ payload: { loading: true } });
  try {
    const method = "get";
    let api = "/api/get/categories";
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { categories: response == null ? void 0 : response.categories } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { category_modal: false, loading: false } });
  }
}
async function makeCall(type) {
  var _a;
  const queryParams = { page: 1, prod_type_slug: type };
  try {
    const response = await axios.get(`/api/filter/product/type/${type}`, { params: queryParams });
    console.log("res", response);
    if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.success) {
      return response.data.products;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
async function loadProductsWithTypes() {
  let home_prods = {};
  let e_bikes = [];
  let e_vehicles = [];
  let machines = [];
  const request_page_type = location.pathname.split("/")[1];
  const productMap = {
    parts: {
      machines: "machine-parts",
      e_bikes: "bike-parts",
      e_vehicles: "vehicle-parts"
    },
    "": {
      machines: "machine",
      e_bikes: "electric-bikes",
      e_vehicles: "electric-vehicles"
    }
  };
  try {
    if (productMap[request_page_type]) {
      const { machines: machineType, e_bikes: eBikeType, e_vehicles: eVehicleType } = productMap[request_page_type];
      machines = await makeCall(machineType);
      if (machines) {
        e_bikes = await makeCall(eBikeType);
        if (e_bikes) {
          e_vehicles = await makeCall(eVehicleType);
          home_prods = { machines, e_bikes, e_vehicles };
          this.dispatch({ payload: { home_prods } });
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { loadingProds: false } });
  }
}
async function loadBrandsAndCats({ slug }) {
  var _a, _b;
  this.dispatch({ payload: { loading: true } });
  try {
    const method = "get";
    let api = `/api/get/product-type/cats-brands/${slug}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    console.log("response", response);
    if (response.success) {
      this.dispatch({ payload: { brands: (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.brands, categories: ((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.categories) ?? [] } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { category_modal: false, loading: false } });
  }
}
async function loadProductsWithCategories() {
  this.dispatch({ payload: { loading: true } });
  try {
    const method = "get";
    let api = "/api/get/home/categories";
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { viewableCategories: response == null ? void 0 : response.categories } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { category_modal: false, loading: false } });
  }
}
async function loadBusinessprods() {
  var _a;
  try {
    const response = await axios.get("/api/filter/products?page=1&sort_order=desc&type=business");
    console.log("business", response);
    if (response.data.success) {
      this.dispatch({ payload: { business_products: (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.products } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function loadProducts() {
  try {
    const method = "get";
    let api = "/api/get/home/products";
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      console.log("prodcuts", response);
      this.dispatch({ payload: { products: response == null ? void 0 : response.prodcuts } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function loadUserOrders() {
  try {
    const method = "get";
    let api = "/api/get/home/orders";
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { orders: response == null ? void 0 : response.orders } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function loadProduct(id) {
  try {
    const method = "get";
    let api = `/api/get/products/${id}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function getRelatedProducs(slug) {
  try {
    const method = "get";
    let api = `/api/products/related/${slug}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { relatedProducts: response == null ? void 0 : response.data } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function getProductDetails(slug) {
  try {
    const method = "get";
    let api = `/api/get/product/${slug}`;
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts[0] } });
      getRelatedProducs.call(this, slug);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}
async function loadCart() {
  this.dispatch({ payload: { loading: true } });
  try {
    const method = "get";
    let api = "/api/cart/items";
    const config = {};
    const response = await ajaxRequest(method, api, {}, config);
    if (response) {
      console.log("response", response);
      this.dispatch({ payload: { cart: response.data } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    this.dispatch({ payload: { loading: true } });
  }
}
async function addToCart(id) {
  try {
    const method = "post";
    let api = `/api/cart/add`;
    const config = {};
    let formValues = new FormData();
    formValues.append("product_id", id);
    const response = await ajaxRequest(method, api, formValues, config);
    if (response.success) {
      ShowToast({ message: "Item added to cart", icon: /* @__PURE__ */ jsx(FaCheck, {}) });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loadCart.call(this);
    this.dispatch({ payload: { loading: true } });
  }
}
async function removeFromCart(id) {
  try {
    const method = "post";
    let api = `/api/cart/remove`;
    const config = {};
    let formValues = new FormData();
    formValues.append("product_id", id);
    const response = await ajaxRequest(method, api, formValues, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loadCart.call(this);
  }
}
async function changeCartQuantity(value, id) {
  try {
    const method = "post";
    let api = `/api/cart/change/quantity`;
    const config = {};
    let formValues = new FormData();
    formValues.append("id", id);
    formValues.append("quantity", value);
    const response = await ajaxRequest(method, api, formValues, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loadCart.call(this);
  }
}
async function proceedCart(step) {
  try {
    const method = "post";
    let api = `/api/update/checkout_step`;
    const config = {};
    let formValues = new FormData();
    formValues.append("checkout_step", step);
    const response = await ajaxRequest(method, api, formValues, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts } });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loadCart.call(this);
  }
}
async function updateUserProfile(formValues) {
  try {
    const method = "post";
    let api = `/api/update/user/details`;
    const config = {};
    const response = await ajaxRequest(method, api, formValues, config);
    if (response.success) {
      this.dispatch({ payload: { selectedProduct: response == null ? void 0 : response.prodcuts } });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loadCart.call(this);
  }
}
const HomeContext = React.createContext();
function HomeContextProvider({ children, auth }) {
  const initState = {
    loading: false,
    loadingProds: true,
    categories: [],
    products: [],
    isEdit: false,
    auth
  };
  const [state, dispatch] = useReducer(rootReducer, initState);
  const methods = {
    loadCategories: loadCategories.bind({ state, dispatch }),
    loadProductsWithTypes: loadProductsWithTypes.bind({ state, dispatch }),
    loadSlides: loadSlides.bind({ state, dispatch }),
    loadBlogs: loadBlogs.bind({ state, dispatch }),
    loadReviews: loadReviews.bind({ state, dispatch }),
    loadUserReviews: loadUserReviews.bind({ state, dispatch }),
    loadFaqs: loadFaqs.bind({ state, dispatch }),
    loadBrandsAndCats: loadBrandsAndCats.bind({ state, dispatch }),
    loadProducts: loadProducts.bind({ state, dispatch }),
    loadBusinessprods: loadBusinessprods.bind({ state, dispatch }),
    loadProductsWithCategories: loadProductsWithCategories.bind({ state, dispatch }),
    loadUserOrders: loadUserOrders.bind({ state, dispatch }),
    loadProduct: loadProduct.bind({ state, dispatch }),
    getProductDetails: getProductDetails.bind({ state, dispatch }),
    filterProducts: filterProducts.bind({ state, dispatch }),
    loadCart: loadCart.bind({ state, dispatch }),
    addToCart: addToCart.bind({ state, dispatch }),
    removeFromCart: removeFromCart.bind({ state, dispatch }),
    changeCartQuantity: changeCartQuantity.bind({ state, dispatch }),
    proceedCart: proceedCart.bind({ state, dispatch }),
    updateUserProfile: updateUserProfile.bind({ state, dispatch })
  };
  return /* @__PURE__ */ jsx(HomeContext.Provider, { value: { state, methods, dispatch }, children });
}
function Header() {
  const { state, dispatch, methods } = useContext(HomeContext);
  const [slides, setSlides] = useState([]);
  async function fetchSlides() {
    let slides2 = await methods.loadSlides("home_slider");
    if (slides2) {
      setSlides(slides2);
    }
  }
  useEffect(() => {
    fetchSlides();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "container-fluid container  p-0 mb-2", children: /* @__PURE__ */ jsx("div", { id: "header-carousel", className: "carousel slide", "data-bs-ride": "carousel", children: /* @__PURE__ */ jsx(Slider, { slides }) }) });
}
function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (values) => {
    setLoading(true);
    setErrorMessage("");
    setSentMessage("");
    try {
      const response = await axios$1.post("/api/queries", values);
      ShowToast({ message: `Your message has been sent. Thank you!`, icon: /* @__PURE__ */ jsx(FaCheck, { color: "green" }) });
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container !m-auto newsletter mt-3 bg-white wow fadeIn bg-white p-3 container py-5 my-5  !sm:p-0", style: { width: "100%" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 pb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Contact" }),
      /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-semibold", children: "Sumbit Your Queries" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flexjustify-content-center", children: /* @__PURE__ */ jsx("section", { className: "contact p-0", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { class: "col-lg-5 d-flex align-items-stretch aos-init aos-animate", "data-aos": "fade-up", "data-aos-delay": "100", children: /* @__PURE__ */ jsxs("div", { class: "info flex flex-col justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "phone flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaLocationDot, { className: "icofont-envelope", size: 30, color: "purple" }),
          /* @__PURE__ */ jsxs("div", { className: "p-0 m-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "p-0 m-0", children: "Location:" }),
            /* @__PURE__ */ jsx("p", { className: "p-0 m-0", children: "autopulsetrading center" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "phone flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaEnvelope, { className: "icofont-envelope", size: 30, color: "orangered" }),
          /* @__PURE__ */ jsxs("div", { className: "p-0 m-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "p-0 m-0", children: "Email:" }),
            /* @__PURE__ */ jsx("p", { className: "p-0 m-0", children: "info@autopulsetrading.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "phone flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FaWhatsapp, { className: "icofont-envelope", size: 30, color: "green" }),
          /* @__PURE__ */ jsxs("div", { className: "p-0 m-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "p-0 m-0", children: "Call:" }),
            /* @__PURE__ */ jsx("p", { className: "p-0 m-0", children: "+1307 2950382" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("iframe", { style: { width: "100%", height: "100%", marginTop: "30px" }, src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.185441233687!2d72.3141563!3d30.031537299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c95446603cf47%3A0xa4c7c9803430aee0!2sCOMSATS%20University%20Islamabad%2C%20Vehari%20Campus!5e0!3m2!1sen!2s!4v1721902981979!5m2!1sen!2s", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-lg-7 mt-5 mt-lg-0 d-flex  align-items-stretch", "data-aos": "fade-up", "data-aos-delay": "100", children: /* @__PURE__ */ jsxs(
        Form,
        {
          style: { width: "100%", padding: "20px", boxShadow: "none" },
          onFinish: handleSubmit,
          initialValues: formData,
          layout: "vertical",
          className: "php-email-form bg-white border",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "user_name",
                  label: "Your Name",
                  className: "form-group col-md-6",
                  rules: [{ required: true, message: "Please enter your name" }],
                  children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      value: formData.user_name,
                      onChange: handleChange
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Form.Item,
                {
                  name: "user_email",
                  label: "Your Email",
                  className: "form-group col-md-6",
                  rules: [{ required: true, message: "Please enter your email" }],
                  children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "email",
                      value: formData.user_email,
                      onChange: handleChange
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "subject",
                label: "Subject",
                rules: [{ required: true, message: "Please enter a subject" }],
                children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    value: formData.subject,
                    onChange: handleChange
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Item,
              {
                name: "message",
                label: "Message",
                rules: [{ required: true, message: "Please enter your message" }],
                children: /* @__PURE__ */ jsx(
                  Input.TextArea,
                  {
                    rows: 10,
                    value: formData.message,
                    onChange: handleChange
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              loading && /* @__PURE__ */ jsx(Spin, { tip: "Loading..." }),
              errorMessage && /* @__PURE__ */ jsx(Alert, { message: errorMessage, type: "error" }),
              sentMessage && /* @__PURE__ */ jsx(Alert, { message: sentMessage, type: "success" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("button", { className: "primary-btn", htmlType: "submit", disabled: loading, children: "Send Message" }) })
          ]
        }
      ) })
    ] }) }) }) })
  ] });
}
function AboutUs() {
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
  return /* @__PURE__ */ jsx("div", { className: "container p-3", style: { margin: "50px auto" }, children: /* @__PURE__ */ jsxs("div", { className: "flex  g-5 align-items-center flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-lg-6 px-0 my-3 ", style: { alignSelf: "flex-start" }, children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("h2", { className: "mt-1 text-gray-500 text-left text-2xl font-semibold", children: "WHAT IS AUTOPULSE" }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Autopulse Global Trading Company, with 15 years of experience, is your trusted partner in exporting high-quality used machinery, new and used vehicles, and new bikes from China. We pride ourselves on our fast shipping services and rigorous quality assurance processes, ensuring you receive top-notch products promptly and reliably. Our commitment to excellence and customer satisfaction sets us apart, making us a preferred choice for clients worldwide." }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-home-primary py-2 px-3 mt-2 ", style: { width: "fit-content" }, href: "/about", children: "Explore More" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-lg-6 pl-4 rm-pad-1000", style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx(Slider, { videos, slides, link: false }) })
  ] }) });
}
const FAQ = () => {
  const { state, methods } = useContext(HomeContext);
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  async function fetchFAqs() {
    let faqs2 = await methods.loadFaqs();
    setFaqs(faqs2);
  }
  useEffect(() => {
    fetchFAqs();
  }, []);
  return /* @__PURE__ */ jsx("section", { id: "faq-container", className: "bg-white p-3 container py-5 my-5 ", "data-wow-delay": 0.5, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-0 faq-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 pb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "FAQ's" }),
      /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-semibold", children: "Frequently Asked Questions" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 sm-gird-cols-1 gap-4", children: faqs && (faqs == null ? void 0 : faqs.map((faq) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: { height: "fit-content" },
        className: "border border-gray-200 bg-white  overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              style: { height: "55px", fontWeight: "500x", border: "none" },
              className: "faq-item w-full border-none px-4 py-2 text-left bg-white-100 hover:bg-white-200 focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-between",
              onClick: () => toggleCollapse(faq == null ? void 0 : faq.id),
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "faq-title",
                    style: { fontWeight: "500", fontSize: "18px" },
                    children: faq == null ? void 0 : faq.question
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: activeIndex === faq.id ? /* @__PURE__ */ jsx(FaMinus, { size: 16, color: "#c29d3d" }) : /* @__PURE__ */ jsx(FaPlus, { size: 16, color: "#c29d3d" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all  duration-300 overflow-hidden ${activeIndex === (faq == null ? void 0 : faq.id) ? "max-h-screen" : "max-h-0"}`,
              children: /* @__PURE__ */ jsx("div", { className: "px-4 py-2 bg-light-50", style: { letterSpacing: "1.1px" }, children: Parser().parse(faq == null ? void 0 : faq.answer) })
            }
          )
        ]
      },
      faq.id
    ))) })
  ] }) });
};
const servicesData = [
  {
    id: 1,
    icon: /* @__PURE__ */ jsx(MdDirectionsCar, { size: 25 }),
    title: "WHAT IS AUTOPULSE",
    description: "Autopulse Global Trading Company is a leader in exporting top-quality used machinery, vehicles, and bikes from China. Our mission is to provide affordable solutions without compromising on quality. We cater to a wide range of industries and individuals across the globe, ensuring that every product meets the highest standards of excellence.",
    delay: "0.1s",
    bgColor: "bg-blue-500",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    icon: /* @__PURE__ */ jsx(MdHighQuality, { size: 25 }),
    title: "QUALITY CONTROL",
    description: "Quality control is a cornerstone of our operations at Autopulse. We conduct thorough inspections at every stage of the sourcing and delivery process. Our commitment to quality ensures that every product we export meets stringent international standards, giving our clients peace of mind and confidence in their purchases.",
    delay: "0.2s",
    bgColor: "bg-green-500",
    textColor: "text-green-600"
  },
  {
    id: 3,
    icon: /* @__PURE__ */ jsx(FaRegHandshake, { size: 25 }),
    title: "MARKET EXPERTISE",
    description: "With over two decades of experience in the export industry, Autopulse has built a reputation for reliability and expertise. Our team of professionals brings deep industry knowledge and a commitment to excellence, ensuring that our clients receive expert advice and support throughout their business journey with us.",
    delay: "0.3s",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-600"
  },
  {
    id: 4,
    icon: /* @__PURE__ */ jsx(MdLanguage, { size: 25 }),
    title: "CLIENT SATISFACTION",
    description: "At Autopulse, client satisfaction is our ultimate goal. We measure our success by the positive feedback and ongoing partnerships we have with our clients. We go the extra mile to ensure that every client is satisfied with our products and services, building trust and long-term relationships along the way.",
    delay: "0.4s",
    bgColor: "bg-purple-500",
    textColor: "text-purple-600"
  },
  {
    id: 5,
    icon: /* @__PURE__ */ jsx(FaGlobe, { size: 25 }),
    title: "GLOBAL REACH",
    description: "Autopulse operates on a global scale, serving clients in over 50 countries. Our extensive network allows us to manage logistics efficiently and ensure timely delivery, no matter where our clients are located. Our global presence and experience make us a preferred partner for businesses around the world.",
    delay: "0.5s",
    bgColor: "bg-red-500",
    textColor: "text-red-500"
  },
  {
    id: 6,
    icon: /* @__PURE__ */ jsx(MdPriceChange, { size: 25 }),
    title: "COMPETITIVE PRICING",
    description: "We understand that pricing is a crucial factor for our clients. At Autopulse, we offer competitive pricing without sacrificing quality. Our flexible financing options and bulk purchase discounts make it possible for businesses of all sizes to access high-quality machinery and vehicles, enhancing their operations and profitability.",
    delay: "0.6s",
    bgColor: "bg-teal-500",
    textColor: "text-teal-600"
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white p-3 py-5 my-5 container", id: "services", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 pb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Why Us" }),
      /* @__PURE__ */ jsx("h3", { className: "text-secondary text-2xl font-semibold", children: "Explore Our Services" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-10 mt-10", children: servicesData == null ? void 0 : servicesData.map((service) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ jsx("span", { className: `bg-yellow-500/10  text-yellow-600 p-3 rounded-full`, children: service.icon }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-700", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-500", children: service.description })
      ] })
    ] }, service.id)) })
  ] }) });
}
function ProductComponent({ prod, index }) {
  var _a, _b, _c, _d, _e;
  const { methods, dispatch, state } = useContext(HomeContext);
  const handleAddToCart = () => {
    methods.addToCart(prod.id);
  };
  return /* @__PURE__ */ jsx("div", { className: "product-card", style: { height: "100%" }, "data-wow-delay": `0.${index + 2}s`, children: /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
    /* @__PURE__ */ jsx(Flex, { gap: 10, className: "prod-images-modal", children: /* @__PURE__ */ jsxs(Image.PreviewGroup, { children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          loading: "lazy",
          src: `${prod == null ? void 0 : prod.image.replace("public", "/storage")}`,
          alt: `Product Image ${index + 1}`,
          style: { width: "100%", maxHeight: "250px", marginBottom: "10px" }
        },
        index
      ),
      (_a = prod == null ? void 0 : prod.images) == null ? void 0 : _a.map((image, index2) => {
        var _a2;
        return /* @__PURE__ */ jsx(
          Image,
          {
            loading: "lazy",
            src: `${(_a2 = image == null ? void 0 : image.image_path) == null ? void 0 : _a2.replace("public", "/storage")}`,
            alt: `Product Image ${index2 + 1}`,
            style: { width: "0px !important", height: "auto", marginBottom: "10px", display: "none" }
          },
          index2
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "product-details", children: [
      /* @__PURE__ */ jsxs("div", { className: "down-content", children: [
        prod.is_business_product && /* @__PURE__ */ jsxs("div", { className: "flex text-cats flex-wrap align-center gap-3 pb-3 py-1", style: { lineHeight: "normal", fontSize: "12px" }, children: [
          ((_b = prod == null ? void 0 : prod.category) == null ? void 0 : _b.product_type_id) != 2 && /* @__PURE__ */ jsxs("div", { className: "flex align-center gap-2", children: [
            /* @__PURE__ */ jsx(GrCalendar, { color: "#ceaa4d", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-dark", children: prod == null ? void 0 : prod.make })
          ] }),
          ((_c = prod == null ? void 0 : prod.category) == null ? void 0 : _c.product_type_id) !== 2 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex align-center gap-2", children: [
            /* @__PURE__ */ jsx(GrCar, { color: "#ceaa4d", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-dark", children: (_d = prod == null ? void 0 : prod.category) == null ? void 0 : _d.name })
          ] }) }),
          ((_e = prod == null ? void 0 : prod.category) == null ? void 0 : _e.product_type_id) === 1 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex align-center gap-1", children: [
            /* @__PURE__ */ jsx(RiWeightLine, { color: "#ceaa4d", size: 20 }),
            /* @__PURE__ */ jsxs("span", { className: "text-dark", children: [
              prod == null ? void 0 : prod.weight,
              " Tons"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("a", { title: "View Product Details", className: "card-title-link", style: { height: "40px", display: "block" }, href: `${location.pathname.split("/")[1] == "parts" ? "/parts" : ""}/product/${prod == null ? void 0 : prod.slug}`, children: /* @__PURE__ */ jsx(Tooltip, { title: prod == null ? void 0 : prod.name, children: /* @__PURE__ */ jsx("h4", { className: "m-0", children: prod == null ? void 0 : prod.name }) }) }),
        !(prod == null ? void 0 : prod.is_business_product) && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("small", { children: /* @__PURE__ */ jsxs("div", { style: { color: "gray" }, className: "mb-2 text-zinc-400", children: [
          "Sotck: ",
          prod == null ? void 0 : prod.stock
        ] }) }) })
      ] }),
      (prod == null ? void 0 : prod.is_business_product) ? /* @__PURE__ */ jsx("a", { target: "_blank", style: { height: "60px" }, href: `https://wa.me/13072950382?text=${encodeURIComponent("I would like to investigate " + (prod == null ? void 0 : prod.name))}`, className: "card-footers py-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          style: { width: "100%" },
          className: "btn-whatsapp",
          href: "",
          children: [
            /* @__PURE__ */ jsx(MdWhatsapp, { size: 20, stroke: "3" }),
            "Chat Now"
          ]
        }
      ) }) : /* @__PURE__ */ jsxs(
        "button",
        {
          style: { width: "100%" },
          className: "primary-btn !gap-3 flex items-center mb-2",
          onClick: handleAddToCart,
          children: [
            /* @__PURE__ */ jsx(FaShoppingCart, { color: "white", size: 20, stroke: "3" }),
            "Add to Cart"
          ]
        }
      )
    ] })
  ] }) }, index);
}
const ProductCardSkeleton = () => {
  return /* @__PURE__ */ jsxs(Card, { className: "prod-card-skelton", style: { margin: "16px 0" }, children: [
    /* @__PURE__ */ jsx(Skeleton.Image, { style: { width: "100%", height: 200 } }),
    /* @__PURE__ */ jsx(Skeleton, { active: true, paragraph: { rows: 2 } })
  ] });
};
const ProductListSkeleton = ({ count = 12 }) => {
  return /* @__PURE__ */ jsx(Row, { gutter: [16, 16], children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx(
    Col,
    {
      xs: 24,
      sm: 12,
      md: 8,
      lg: 8,
      xl: 6,
      xxl: 6,
      children: /* @__PURE__ */ jsx(ProductCardSkeleton, {})
    },
    index
  )) });
};
const prod_types = {
  machines: "Machines",
  e_bikes: "Electornic Bikes",
  e_vehicles: "Vehicles"
};
const prod_links = {
  machines: "machine",
  e_bikes: "electric-bikes",
  e_vehicles: "electric-vehicles"
};
function ProductsList({ product_type_key = null, product_type = {} }) {
  const { state, dispatch, methods } = useContext(HomeContext);
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
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
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
  return /* @__PURE__ */ jsxs("div", { id: "products-container", className: "latest-products bg-white container bg-white p-3 mt-3 border", style: { padding: "30px 12px" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 py-2 pb-4 flex align-center justify-between px-1", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-secondary text-lg font-semibold", children: [
        "Explore ",
        prod_types[product_type_key]
      ] }),
      /* @__PURE__ */ jsx("a", { href: `/products/${prod_links[product_type_key]}`, className: "btn btn-primary btn-home-primary", children: "View All" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-0", style: { position: "relative" }, children: [
      /* @__PURE__ */ jsxs(Flex, { align: "center mt-3", style: { position: "absolute", right: "4px", top: "-40px" }, justify: "end", gap: 10, className: "flex  justify-between mb-2 mr-auto", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => sliderRef.current.slickPrev(), icon: /* @__PURE__ */ jsx(LeftOutlined, {}) }),
        /* @__PURE__ */ jsx(Button, { onClick: () => sliderRef.current.slickNext(), icon: /* @__PURE__ */ jsx(RightOutlined, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: " pr-0 mt-2", style: { paddingRight: "0px !important" }, children: (state == null ? void 0 : state.loadingProds) ? /* @__PURE__ */ jsx(ProductListSkeleton, { count: 4 }) : /* @__PURE__ */ jsx(Slider$1, { ref: sliderRef, ...settings, children: product_type == null ? void 0 : product_type.map((prod, index) => /* @__PURE__ */ jsx(ProductComponent, { prod, index })) }) })
    ] })
  ] });
}
function Latest({ header = true }) {
  var _a;
  const context = useContext(HomeContext);
  const { state, dispatch, methods } = context;
  useEffect(() => {
    methods == null ? void 0 : methods.loadProductsWithTypes();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: (state == null ? void 0 : state.home_prods) && ((_a = Object == null ? void 0 : Object.keys(state == null ? void 0 : state.home_prods)) == null ? void 0 : _a.map((key, index) => {
    return /* @__PURE__ */ jsx(ProductsList, { product_type_key: key, product_type: state == null ? void 0 : state.home_prods[key] }, index);
  })) });
}
function Testimonials() {
  const { state, methods } = useContext(HomeContext);
  const [userReviews, setUserReviews] = useState([]);
  const fetchReviews = async () => {
    let reviews = await (methods == null ? void 0 : methods.loadUserReviews());
    setUserReviews(reviews);
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 container py-5 my-5 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 pb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-semibold", children: "Reviews" }),
      /* @__PURE__ */ jsx("h2", { className: "text-secondary text-2xl font-bold", children: "User Reviews" })
    ] }),
    "            ",
    /* @__PURE__ */ jsx(Slider$1, { ...settings, children: userReviews == null ? void 0 : userReviews.map((review) => /* @__PURE__ */ jsxs("div", { class: "space-y-4 max-w-md mx-auto h-auto", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", class: "w-8 fill-amber-300", viewBox: "0 0 35 30", fill: "none", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { class: "md:text-lg leading-relaxed", children: Parser().parse(review == null ? void 0 : review.review_text) }),
      /* @__PURE__ */ jsx("p", { class: "md:text-lg leading-relaxed text-gray-500", children: review == null ? void 0 : review.review_date }),
      /* @__PURE__ */ jsxs("div", { class: "flex items-center gap-2", children: [
        (review == null ? void 0 : review.country) === "Guyana" ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("img", { alt: "Yifan testimonial for ShipFast", loading: "lazy", width: "48", height: "48", decoding: "async", "data-nimg": "1", class: "w-10 h-10 rounded-full object-cover", src: "/images/pngwing.com.png" }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("img", { alt: "Yifan testimonial for ShipFast", loading: "lazy", width: "48", height: "48", decoding: "async", "data-nimg": "1", class: "w-10 h-10 rounded-full object-cover", src: "/images/pngwing.com (1).png" }) }),
        /* @__PURE__ */ jsxs("p", { className: "flex flex-col items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { class: "font-bold", children: review == null ? void 0 : review.user_name }),
          /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: review == null ? void 0 : review.user_email })
        ] })
      ] })
    ] })) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "p-0", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(AboutUs, {}),
    /* @__PURE__ */ jsx(Latest, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(FAQ, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
const OrderSuccess = () => {
  const [popup, setPopup] = useState(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HomePage, {}),
    /* @__PURE__ */ jsx(
      Modal,
      {
        title: "Order Success",
        visible: popup,
        onCancel: () => {
          setPopup(false);
        },
        footer: null,
        children: /* @__PURE__ */ jsxs("div", { className: "flex  items-center justify-center bg-gray-100 ", style: { maxHeight: "550px" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "order-successfull-container container p-3 bg-white text-center ", children: [
            /* @__PURE__ */ jsx("div", { className: "animate-bounce", children: /* @__PURE__ */ jsx(CheckCircleOutlined, { style: { fontSize: "4rem", color: "#52c41a" } }) }),
            /* @__PURE__ */ jsxs("div", { className: "order-success-msg p-3", style: { borderRadius: "5px" }, children: [
              /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold mt-4 text-gray", children: "Order Successful Placed!" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg mt-2", children: "Thank you for your purchase." }),
              /* @__PURE__ */ jsx("a", { href: "/track", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-home-primary", children: "Track Order" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "fireworks-container" })
        ] })
      }
    )
  ] });
};
const OrderSuccess$1 = OrderSuccess;
const OrderSuccess$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrderSuccess$1
}, Symbol.toStringTag, { value: "Module" }));
export {
  Contact as C,
  HomeContextProvider as H,
  OrderSuccess$1 as O,
  ProductListSkeleton as P,
  HomePage as a,
  HomeContext as b,
  ProductComponent as c,
  OrderSuccess$2 as d
};
