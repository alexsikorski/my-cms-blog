import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
        query GetPosts {
          postsConnection(orderBy: createdAt_DESC) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        createdAt
                        slug
                        title
                        brief
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
  const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          brief
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
          codeBlockType
        }
      }
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getRecentPosts = async () => {
  const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: createdAt_DESC
                first: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
                categories{
                  name
                }
            }
        }
    `

  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
        query GetPostDetails($slug: String!,  $categories: [String!]){
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                orderBy: createdAt_DESC
                first: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
                categories{
                  name
                }
            }
        }    
    `

  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
      query GetGategories {
          categories {
            name
            slug
            headerContent
          }
      }
    `;

  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const getHeaderCategories = async () => {
  const query = gql`
        query GetHeaderGategories {
          categories(where: {headerContent: true}) {
            name
            slug
          }
        }
    `;

  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
        query GetComments($slug: String!) {
            comments(where: {post: {slug: $slug}}){
                name
                createdAt
                comment
            }
        }
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(
          where: {categories_some: {slug: $slug}}
          orderBy: createdAt_DESC
          ) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              brief
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
      query GetFeaturedPost() {
        posts(
          where: {featuredPost: true}
          orderBy: createdAt_DESC
          ) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getSearchedPosts = async (titleContains) => {
  const query = gql`
          query GetPosts($titleContains : String!) {
            postsConnection(
              where: { title_contains: $titleContains}
              orderBy: createdAt_DESC
              ) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        createdAt
                        slug
                        title
                        brief
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
  `

  const result = await request(graphqlAPI, query, { titleContains });

  return result.postsConnection.edges;
}