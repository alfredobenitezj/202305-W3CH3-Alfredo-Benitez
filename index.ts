/* eslint-disable no-new */
import { Footer } from './src/components/footer';
import { Header } from './src/components/header';
import { Main } from './src/components/main';
import { Menu } from './src/components/main';
import { TasksList } from './src/components/tasks.list';
import { MenuOptions } from './/src/types/menu.options';

const menuOptions: MenuOptions = [
  { url: 'index.html', label: 'Home' },
  { url: 'about.html', label: 'Nosotros' },
];

new Header('#app', 'Learning TypeScript - Day2');
new Menu('header', menuOptions);
new Main('#app');
new TasksList('main');
new Footer('#app', 'ISDI - Coders');
