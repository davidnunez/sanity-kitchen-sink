export default {
  widgets: [
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
                  buildHookId: '600ab311c91b4b034593a977',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fvg4e5it',
                  apiId: '075d4fd5-02bd-4cdb-a0ce-d3593ac3a782'
                },
                {
                  buildHookId: '600ab311c91b4bff6c93aa0b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xbbfrsh6',
                  apiId: 'a38836b6-f751-44dd-a2cd-232086d01381'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidnunez/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xbbfrsh6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
