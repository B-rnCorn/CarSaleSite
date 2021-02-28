import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Menu',
    group: true
  },
  {
    title: 'Store',
    icon: 'shopping-cart-outline',
    link: '/pages/store',
    // home: true,
  },
  {
    title: 'Home page',
    icon: 'home-outline',
    link: '/pages/news',
  },
  {
    title: 'Settings',
    icon: 'settings-2-outline',
    // link: '/pages/iot-dashboard',
  },
  {
    title: 'Privacy settings',
    icon: 'lock-outline',
    // link: '/pages/iot-dashboard',
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
