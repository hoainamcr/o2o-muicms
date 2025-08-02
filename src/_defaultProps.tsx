import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from "@ant-design/icons";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/welcome",
        name: "Welcome",
        icon: <SmileFilled />,
        // component: "./Welcome",
      },
      {
        path: "/admin",
        name: "Admin",
        icon: <CrownFilled />,
        // component: "./Admin",
        routes: [
          {
            path: "/admin/sub-page1",
            name: "Level 1 Page",
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
            // component: "./Welcome",
            children: [
              {
                path: "/admin/sub-page1/sub-sub-page1",
                name: "SUB Level 1 List Page",
                icon: <CrownFilled />,
                // component: "./Welcome",
              },
            ],
          },
          {
            path: "/admin/sub-page2",
            name: "Level 2 Page",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page3",
            name: "Level 3 Page",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
        ],
      },
      {
        name: "List Pages",
        icon: <TabletFilled />,
        path: "/list",
        component: "./ListTableList",
        routes: [
          {
            path: "/list/sub-page",
            name: "List Page",
            icon: <CrownFilled />,
            routes: [
              {
                path: "sub-sub-page1",
                name: "Level 1 List Page",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page2",
                name: "Level 2 List Page",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page3",
                name: "Level 3 List Page",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "Secondary List Page",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
          {
            path: "/list/sub-page3",
            name: "Tertiary List Page",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
        ],
      },
      {
        path: "https://ant.design",
        name: "Ant Design Official Website",
        icon: <ChromeFilled />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
  // appList: [
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  //     title: "Ant Design",
  //     desc: "Hangzhou's most well-known UI design language",
  //     url: "https://ant.design",
  //   },
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
  //     title: "AntV",
  //     desc: "Ant Group's new generation data visualization solution",
  //     url: "https://antv.vision/",
  //     target: "_blank",
  //   },
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
  //     title: "Pro Components",
  //     desc: "Professional UI component library",
  //     url: "https://procomponents.ant.design/",
  //   },
  //   {
  //     icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
  //     title: "umi",
  //     desc: "Plugin-based enterprise-level frontend application framework.",
  //     url: "https://umijs.org/zh-CN/docs",
  //   },

  //   {
  //     icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
  //     title: "qiankun",
  //     desc: "Probably the most complete micro-frontend solution you've ever seen🧐",
  //     url: "https://qiankun.umijs.org/",
  //   },
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
  //     title: "Yuque",
  //     desc: "Knowledge creation and sharing tool",
  //     url: "https://www.yuque.com/",
  //   },
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
  //     title: "Kitchen ",
  //     desc: "Sketch toolset",
  //     url: "https://kitchen.alipay.com/",
  //   },
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
  //     title: "dumi",
  //     desc: "Documentation tool born for component development scenarios",
  //     url: "https://d.umijs.org/zh-CN",
  //   },
  // ],
};
