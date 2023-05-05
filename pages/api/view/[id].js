export default (req, res) => {
  res.statusCode = 200;
  res.json({ id: `dynamic routing example ${req.query.id}` });
};
