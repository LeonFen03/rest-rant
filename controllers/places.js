const router = require('express').Router();

router.get('/',(req,res)=> {
    res.render('places/index');
})
router.get('/:id/edit', (req, res) => {
    res.render('places/edit')
  })
  
module.exports = router;