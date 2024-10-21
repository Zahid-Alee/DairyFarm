import { j as jsx } from "./assets/jsx-runtime-B5WjVc0P.js";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "react/jsx-runtime";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Autopulse";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-BHi5fMh_.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-CjqYBZUd.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-gwFYX3rN.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-DuQZAZXo.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-D6J5Gkg2.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-BNtMdtLr.js"), "./Pages/DashRoot.jsx": () => import("./DashRoot.js"), "./Pages/OrderSuccess.jsx": () => import("./assets/OrderSuccess-DdFC9bR5.js").then((n) => n.d), "./Pages/Preloader.jsx": () => import("./assets/Preloader-YUeXDK-_.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-C7uzJOsk.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-C6Pv9Vuy.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-BTSFSyRP.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-D0u1QRLJ.js"), "./Pages/SpareParts.jsx": () => import("./assets/SpareParts-CcvMFuh3.js"), "./Pages/Table.jsx": () => import("./assets/Table-B_D4CVMg.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-CjQuXH4c.js") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
