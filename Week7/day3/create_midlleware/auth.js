const auth = (req, res, next) => {
    console.log('auth midlleware');
    const user = req.query.user;
    console.log(user);
    if(user == 'admin'){
      return res.sendFile(__dirname+'/public/about.html');
      // return res.redirect('/register');
    }
    next();
  }
  // app.use(auth); // all
  // app.use('/login', auth) // just for login route
  app.get('/login', auth, (req,res)=>{
    res.send('Welcome');
  })