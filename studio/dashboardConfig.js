export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6342fb86fbdff14184e4b27e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wf8tmhg1',
                  apiId: '4b77097e-30d7-4518-ae43-478cd7c2044f'
                },
                {
                  buildHookId: '6342fb868975e33ce85f3887',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ymtbimpt',
                  apiId: '41101c33-66ae-4675-b537-64aeb2a900f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RichGriff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ymtbimpt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
