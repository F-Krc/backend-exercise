import express from 'express';
import { blogPostSchema } from './schema/postSchema.js';
import { postBlogPost } from './controller/postController.js';
import { validateSchema } from './middleware/validateSchema.js';

const app = express();
app.use(express.json());

app.post("/blogpost", blogPostSchema, validateSchema, postBlogPost);

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
