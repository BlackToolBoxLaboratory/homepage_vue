import { createRouter, createWebHashHistory } from "vue-router";

import { ROUTE } from "@/assets/definitions/constants";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTE.HOME,
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/MainContainer.vue"),
      redirect: { name: ROUTE.ABOUT },
      children: [
        {
          path: "/about",
          name: ROUTE.ABOUT,
          component: () =>
            import(
              /* webpackChunkName: "about" */ "@/views/AboutContainer.vue"
            ),
        },
        {
          path: "/overview",
          name: ROUTE.OVERVIEW,
          component: () =>
            import(
              /* webpackChunkName: "overview" */ "@/views/OverviewContainer.vue"
            ),
        },
        {
          path: "packages",
          name: "packages",
          component: () =>
            import(
              /* webpackChunkName: "package" */ "@/views/packages/PackagesContainer.vue"
            ),
          redirect: {
            name: "packages.list.basic",
          },
          children: [
            {
              path: "list",
              name: "packages.list",
              component: () =>
                import(
                  /* webpackChunkName: "list" */ "@/views/packages/list/ListContainer.vue"
                ),
              redirect: {
                name: "packages.list.basic",
              },
              children: [
                {
                  path: "basic",
                  name: "packages.list.basic",
                  component: () =>
                    import(
                      /* webpackChunkName: "listBasic" */ "@/views/packages/list/BasicContainer.vue"
                    ),
                },
                {
                  path: "example/list",
                  name: "packages.list.exampleList",
                  component: () =>
                    import(
                      /* webpackChunkName: "listExampleList" */ "@/views/packages/list/ExampleListContainer.vue"
                    ),
                },
                {
                  path: "example/menu",
                  name: "packages.list.exampleMenu",
                  component: () =>
                    import(
                      /* webpackChunkName: "listExampleMenut" */ "@/views/packages/list/ExampleMenuContainer.vue"
                    ),
                },
                {
                  path: "example/style",
                  name: "packages.list.exampleStyle",
                  component: () =>
                    import(
                      /* webpackChunkName: "listExampleStyle" */ "@/views/packages/list/ExampleStyleContainer.vue"
                    ),
                },
                {
                  path: "example/slot",
                  name: "packages.list.exampleSlot",
                  component: () =>
                    import(
                      /* webpackChunkName: "listExampleSlot" */ "@/views/packages/list/ExampleSlotContainer.vue"
                    ),
                },
                {
                  path: "*",
                  redirect: {
                    name: "packages.list",
                  },
                },
              ],
            },
            {
              path: "table",
              name: "packages.table",
              component: () =>
                import(
                  /* webpackChunkName: "table" */ "@/views/packages/table/TableContainer.vue"
                ),
              redirect: {
                name: "packages.table.basic",
              },
              children: [
                {
                  path: "basic",
                  name: "packages.table.basic",
                  component: () =>
                    import(
                      /* webpackChunkName: "tableBasic" */ "@/views/packages/table/BasicContainer.vue"
                    ),
                },
              ],
            },
            {
              path: "popover",
              name: "packages.popover",
              component: () =>
                import(
                  /* webpackChunkName: "popover" */ "@/views/packages/popover/PopoverContainer.vue"
                ),
              redirect: {
                name: "packages.popover.basic",
              },
              children: [
                {
                  path: "basic",
                  name: "packages.popover.basic",
                  component: () =>
                    import(
                      /* webpackChunkName: "popoverBasic" */ "@/views/packages/popover/BasicContainer.vue"
                    ),
                },
                {
                  path: "example/position",
                  name: "packages.popover.example.position",
                  component: () =>
                    import(
                      /* webpackChunkName: "popoverExamplePosition" */ "@/views/packages/popover/ExamplePositionContainer.vue"
                    ),
                },
                {
                  path: "example/align",
                  name: "packages.popover.example.align",
                  component: () =>
                    import(
                      /* webpackChunkName: "popoverExampleAlign" */ "@/views/packages/popover/ExampleAlignContainer.vue"
                    ),
                },
              ]
            }
          ],
        },

        {
          path: "applications",
          name: "applications",
          component: () =>
            import(
              /* webpackChunkName: "applications" */ "@/views/applications/ApplicationsContainer.vue"
            ),
          redirect: {
            name: "applications.languages",
          },
          children: [
            {
              path: "languages",
              name: "applications.languages",
              component: () =>
                import(
                  /* webpackChunkName: "applicationsLanguages" */ "@/views/applications/LanguagesContainer.vue"
                ),
            },
            {
              path: "validator",
              name: "applications.validator",
              component: () =>
                import(
                  /* webpackChunkName: "applicationsValidator" */ "@/views/applications/ValidatorContainer.vue"
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/:catchUnknown(.*)",
      redirect: {
        name: "root",
      },
    },
  ],
});

export default router;
