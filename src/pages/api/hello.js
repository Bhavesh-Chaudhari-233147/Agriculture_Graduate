// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const url = req.url;
  
  const params = url.searchParams.get('url')
  res.status(200).json({ name: "John Doe",url,params});
  console.log("res",res);
}