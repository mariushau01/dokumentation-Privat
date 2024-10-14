import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '794'),
    exact: true
  },
  {
    path: '/blog/2023/09/15/apr-swpp',
    component: ComponentCreator('/blog/2023/09/15/apr-swpp', '402'),
    exact: true
  },
  {
    path: '/blog/2023/09/19/exceptions',
    component: ComponentCreator('/blog/2023/09/19/exceptions', '2a8'),
    exact: true
  },
  {
    path: '/blog/2023/10/17/arbeitsauftrag',
    component: ComponentCreator('/blog/2023/10/17/arbeitsauftrag', '434'),
    exact: true
  },
  {
    path: '/blog/2023/10/24/null-werte',
    component: ComponentCreator('/blog/2023/10/24/null-werte', 'b30'),
    exact: true
  },
  {
    path: '/blog/2023/10/26/schnittstellen',
    component: ComponentCreator('/blog/2023/10/26/schnittstellen', 'c07'),
    exact: true
  },
  {
    path: '/blog/2023/11/04/skript',
    component: ComponentCreator('/blog/2023/11/04/skript', 'cdd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/mariushau-01',
    component: ComponentCreator('/blog/authors/mariushau-01', '012'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ef2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bfe'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '228'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/allgemeines/contenttable',
                component: ComponentCreator('/docs/allgemeines/contenttable', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/dummy',
                component: ComponentCreator('/docs/projects/dummy', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/ElfmeterProjekt',
                component: ComponentCreator('/docs/projects/ElfmeterProjekt', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/xml-book',
                component: ComponentCreator('/docs/projects/xml-book', 'e70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/xmlproject',
                component: ComponentCreator('/docs/projects/xmlproject', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/se/design-patterns',
                component: ComponentCreator('/docs/se/design-patterns', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/se/documents',
                component: ComponentCreator('/docs/se/documents', 'fc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/se/dummy',
                component: ComponentCreator('/docs/se/dummy', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/se/wasserfall-modell',
                component: ComponentCreator('/docs/se/wasserfall-modell', '0bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/softwareentwicklung/Anforderungsanalyse',
                component: ComponentCreator('/docs/softwareentwicklung/Anforderungsanalyse', '826'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/softwareentwicklung/contenttable',
                component: ComponentCreator('/docs/softwareentwicklung/contenttable', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/softwareentwicklung/wasserfallmodell',
                component: ComponentCreator('/docs/softwareentwicklung/wasserfallmodell', 'e4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/alternatives',
                component: ComponentCreator('/docs/theorie/alternatives', '3be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/practicalibility',
                component: ComponentCreator('/docs/theorie/practicalibility', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/project-init',
                component: ComponentCreator('/docs/theorie/project-init', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projecttypes',
                component: ComponentCreator('/docs/theorie/projecttypes', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projekt',
                component: ComponentCreator('/docs/theorie/projekt', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projekt-worthiness',
                component: ComponentCreator('/docs/theorie/projekt-worthiness', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektmanagement',
                component: ComponentCreator('/docs/theorie/projektmanagement', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektmanagement-instrumente',
                component: ComponentCreator('/docs/theorie/projektmanagement-instrumente', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/Projektumweltanalyse',
                component: ComponentCreator('/docs/theorie/Projektumweltanalyse', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektziele',
                component: ComponentCreator('/docs/theorie/projektziele', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/qualitätsmanagement',
                component: ComponentCreator('/docs/theorie/qualitätsmanagement', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/roles',
                component: ComponentCreator('/docs/theorie/roles', '905'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tipps-und-Tricks/GUID',
                component: ComponentCreator('/docs/Tipps-und-Tricks/GUID', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools/Allgemeines',
                component: ComponentCreator('/docs/tools/Allgemeines', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools/diagramme',
                component: ComponentCreator('/docs/tools/diagramme', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
