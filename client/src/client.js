import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource} from '@sanity/image-url/lib/types/types'

const client = createClient({
    projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID || 'uest3mnu',
    apiVersion: '2023-09-28',
    useCdn: true,
    dataset: 'production',
    token: import.meta.env.VITE_APP_SANITY_TOKEN || "sklXN8nxZk7C2Y460yOAwwuLRKK7qErG3EAGwHUd9nABQq47ljLUMUJZbkj8i66kDZtOUgmAr7kHauuE7pafTX95wENwUwdLXB8aR8TpgLWYL7LNbdotXxfUqqjli28BMjY6B1NhEypaiRuXqZiRnbeCgiDDhrKdZRkOQLLNEQ4WKk3st9qt"
    
});

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source).toString(); 

export { client, urlFor }