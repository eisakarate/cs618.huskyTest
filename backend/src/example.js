import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

//wait for the database connection
await initDatabase()

//instantiate a new post
const post = new Post({
  title: 'Corgis',
  author: 'Pickles and Duck',
  contents: 'All about the Potato',
  tags: ['corgi', 'food', 'cute', 'potato', 'pogo'],
})

//write to the database
const newPost = await post.save()

//update the post
await Post.findByIdAndUpdate(newPost._id, {
  $set: { ttile: 'Potato Sack' },
})

//read form the database
const posts = await Post.find()

console.log(posts)
