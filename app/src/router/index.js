import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Gallery from '../views/Gallery';
import Life from '../views/Life';
import Painting from '../views/Painting';

const env = process.env.NODE_ENV;
export const basePath = env === 'production' ? '/iiif-exploration/' : '/';

const routes = [
  { name: 'home', path: basePath, component: Home },
  { name: 'about', path: basePath + 'about', component: About },
  { name: 'gallery', path: basePath + 'gallery', component: Gallery },
  { name: 'life', path: basePath + 'life', component: Life },
  { name: 'painting', path: basePath + 'painting/:id', component: Painting }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
