// ref: https://umijs.org/config/
export default {
  treeShaking: true,
/*  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/user/user',
          component: './user/user',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],*/
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'umijs01',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
