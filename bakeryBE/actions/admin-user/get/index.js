const refresh = (req,res, next) =>  {
  try {
    res.json([1, 2, 3])
  }
  catch(e){

  }
}

module.exports = refresh