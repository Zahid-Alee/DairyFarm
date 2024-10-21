import { j as jsx, a as jsxs } from "./jsx-runtime-B5WjVc0P.js";
import { H as HomeLayout, T as Track, A as AboutPage, C as ContactPage, a as AllProducts, b as App, P as ProductType, S as SingleBlog, c as AllBlogs, d as PrivacyPolicy } from "./main-Noogh5fa.js";
import { H as HomeContextProvider, a as HomePage, O as OrderSuccess } from "./OrderSuccess-DdFC9bR5.js";
import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login-gwFYX3rN.js";
import Register from "./Register-DuQZAZXo.js";
import "react/jsx-runtime";
import "react-icons/fa";
import "./Slider-DlNrtDXl.js";
import "antd";
import "react-player";
import "react-icons/md";
import "react-icons/gr";
import "html-to-react";
import "react-hot-toast";
import "./helpers-isL4n3oi.js";
import "axios";
import "react-icons/ci";
import "lodash.debounce";
import "@ant-design/icons";
import "react-icons/fa6";
import "react-slick";
import "react-slick/lib/slider.js";
import "react-icons/ri";
import "@inertiajs/react";
import "./TextInput-B6lQlW2Q.js";
import "./InputLabel-BbJGG6HL.js";
function SpareParts({ auth, laravelVersion, phpVersion }) {
  return /* @__PURE__ */ jsx(HomeContextProvider, { auth, children: /* @__PURE__ */ jsx(HomeLayout, { auth, children: /* @__PURE__ */ jsx(BrowserRouter, { basename: "parts", children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/track", element: /* @__PURE__ */ jsx(Track, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/products", element: /* @__PURE__ */ jsx(AllProducts, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/product/:slug", element: /* @__PURE__ */ jsx(App, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/products/:slug/search", element: /* @__PURE__ */ jsx(AllProducts, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/products/:slug", element: /* @__PURE__ */ jsx(ProductType, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blogs/:slug", element: /* @__PURE__ */ jsx(SingleBlog, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blogs", element: /* @__PURE__ */ jsx(AllBlogs, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/payment/successfull", element: /* @__PURE__ */ jsx(OrderSuccess, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Login, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/register", element: /* @__PURE__ */ jsx(Register, {}) })
  ] }) }) }) });
}
export {
  SpareParts as default
};
