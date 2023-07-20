
export const postBlogPost = (req,res) => {
    res.send({ message: 'Blogpost erfolgreich erstellt.', data: req.body });
}