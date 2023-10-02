
export default {
    name: 'communicate',
    title: 'Communicate',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: {type: 'user'},
        },

    ]
}