export const notFound = (req, res) => {
  res.status(404).send(`Path ${req.originalUrl} not found`);
};
