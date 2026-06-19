export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short preview shown on cards'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Travel', value: 'Travel'},
          {title: 'Food', value: 'Food'},
          {title: 'Lifestyle', value: 'Lifestyle'},
          {title: 'Business', value: 'Business'},
          {title: 'Entertainment', value: 'Entertainment'},
          {title: 'Arts', value: 'Arts'},
          {title: 'Politics', value: 'Politics'},
          {title: 'Tech', value: 'Tech'},
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show in Featured Posts section'
    },
    {
      name: 'banner',
      title: 'Show in Banner',
      type: 'boolean',
      description: 'Show in top banner slider'
    },
    {
      name: 'readTime',
      title: 'Read Time (mins)',
      type: 'number',
      description: 'Auto-calculated if you use plugins, or set manually'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `Category: ${author}`
      })
    },
  },
}