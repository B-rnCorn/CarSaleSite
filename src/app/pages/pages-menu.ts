import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Menu',
    group: true
  },
  {
    title: 'Home page',
    icon: 'home-outline',
    link: '/pages/news',
    home: true,
  },
  {
    title: 'Store',
    icon:  'shopping-bag-outline', // 'shopping-cart-outline',
    link: '/pages/store',
    // home: true,
  },
  {
    title: 'Profile',
    icon:  'person-outline',
    // link: '/pages/store',
  },
  {
    title: 'Basket',
    icon: 'shopping-cart-outline',
    link: '/pages/basket',
  },
  {
    title: 'Settings',
    icon: 'settings-2-outline',
    // link: '/pages/iot-dashboard',
  },
  {
    title: 'Admin dashboard',
    icon: 'lock-outline',
    link: '/pages/admin-dashboard',
  },
  {
    title: 'Contact Us',
    icon: 'edit-outline',
    link: '/pages/contact-us',
  },
  {
    title: 'Auth',
    icon: 'arrow-circle-right-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      // смена пароля
      /*
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },*/
    ],
  },
];
