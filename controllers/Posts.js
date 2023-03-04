const { Router, json } = require("express"); // import Router from express

const router = Router(); // create router to create route bundle

router.get("/", async (req, res) => {
    const { Post } = req.context.models;
    try {
        let posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json(err)
    }
});


router.post("/post", async (req, res) => {
    console.log(req.body)
    const { Post } = req.context.models;
  
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (error) {
      res.status(400).json({ error });
    }
});

module.exports = router;