const { Router } = require('express');

const router = new Router();

const users = require('../users.json');


router.get('/', (req, res) => {
  //res.send('Hello World!')
  // res.json(users);//muestra los datos del json |show the date of Json
});


router.get('/:id', (req, res) => {
	const  id = req.param('id'); //permite obtener los datos de la url
	
	 res.send("El dato es =>>>"+id);
	
	
	
});


router.post('/', (req, res) => {
	const num = users.length + 1;
	const { id, name, username, password, email } = req.body;
	const data_post = { ...req.body, num };
	
	 if(num && name && username && password && email) {
			users.push(data_post);
			res.json(users);
    }
	else{
        res.status(500).json({error: 'There was an error.'});
    }
	
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
	const { name, username, password, email } = req.body;
     if(id && name && username && password && email) {
        _.each(users, (user, i) => {
            if (users.id === id) {
                user.title = title;
                user.director = director;
                user.year = year;
                user.rating = rating;
            }
        });
        res.json(user);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});



router.delete('/:id', (req, res) => {
	const {id} = req.params;
    if (id) {
        _.each(users, (user, i) => {
            if (user.id == id) {
                users.splice(i, 1);
            }
        });
        res.json(users);
    }
	
	
	
	
});



//http://localhost:8080/api/users?id=4&token=sdfa3&geo=us
// https://install.advancedrestclient.com/install
// https://github.com/FaztWeb/express-basic-restapi/blob/master/src/routes/movies.js



module.exports = router;