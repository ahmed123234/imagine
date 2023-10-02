
export default {
    name: 'teamMembers',
    title: 'TeamMembers',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
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
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string',
        },

    ]
}