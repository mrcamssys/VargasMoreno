export default async function handler(req, res) {
  const response = await fetch("https://proyectoselectronicaitc.rf.gd/wp-json/wp/v2/posts");
  const text = await response.text();
  res.setHeader("Content-Type", "application/json");
  res.send(text);
}
