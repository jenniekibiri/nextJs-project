import {blogs} from "../../../data.js";
export default function handler(req, res) {
    const {id} = req.query;
    const blog = blogs.find(blog => blog.id === Number(id));
  res.status(200).json(blog);
}
