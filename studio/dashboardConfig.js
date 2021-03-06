export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6044002bbc9af9dc2e35e6b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tegqfffy',
                  apiId: '44bbd288-c6d2-4e93-a87c-6f35e2145f0c'
                },
                {
                  buildHookId: '6044002b93462cb65767f640',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n5z3mkug',
                  apiId: 'f3392027-3d63-445a-813e-bc36d23ca737'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liteit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n5z3mkug.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
