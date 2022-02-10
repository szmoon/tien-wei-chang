import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Gallery from '../views/Gallery';
import Painting from '../views/Painting';

const env = process.env.NODE_ENV;
export const basePath = env === 'production' ? '/iiif-exploration/' : '/';

const routes = [
  { path: basePath, component: Home },
  { path: basePath + 'about', component: About },
  { path: basePath + 'gallery', component: Gallery },
  { path: basePath + 'painting', component: Painting }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
