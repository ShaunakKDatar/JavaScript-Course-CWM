
// Create a blogPost object having properties : 
// title
// body
// author
// views(number)
// comments
//   (author, body) {properties of comment}
// isLive -> true or false
// object literal syntax

const blogPost = {
    title: 'lambda',
    body: 'alpha',
    author: 'theta',
    views: 73,
    comments: [
        {author: 'beta', body: 'delta'},
        {author: 'epsilon', body: 'kappa'}
    ],
    isLive: true
}

console.log(blogPost);