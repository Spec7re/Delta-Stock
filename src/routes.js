import Profile from "./components/Profile.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Market from "./components/market/Market.vue";

export const routes = [
    { path: '', component: Profile },
    { path: '/portfolio', component: Portfolio },
    { path: '/market', component: Market },
];