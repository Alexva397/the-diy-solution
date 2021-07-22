const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");

router.post('/upload', async (req, res) => {
    console.log(req);
    try {
        const fileStr = req.body.data;
        console.log(fileStr);
        const uploadedResponse = await cloudinary.v2.uploader.upload(fileStr, {
            folder: 'dev_setups'
        });
        console.log(uploadedResponse);
        res.json({ msg: "Yay!" })
    } catch (error) {
        console.log(error);
        res.json(500).json({ err: "something went wrong" })
    }
});

module.exports = router;