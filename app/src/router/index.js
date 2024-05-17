import { createRouter, createWebHistory } from "vue-router";
import { HomeView, AboutView, ContactView, RegisterView, TCsView, FindMore, NotFoundView, PrivacyPolicyView } from "../views";


const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/tcs", name: "terms&conditions", component: TCsView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/register", name: "register", component: RegisterView },
  { path: "/find-more", name: "find-more", component: FindMore },
  { path: '/:pathMatch(.*)*', name: 'page-not-found', component: NotFoundView },
  { path: "privacypolicy", name: 'privacy-policy', component: PrivacyPolicyView },
];

/**Initialize here */
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes
})



// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   /**add function to check if user is logged in */

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/login";
//   }
// });

export default router;
