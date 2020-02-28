  var express = require('express');
  var router = express.Router();
  
  const prizes = [{
  		id: 1,
  		name: "Cordoba C5",
  		description: "The Cordoba C5 Classical Guitar is perfect for any aspiring classical guitarist or steel-string/electric wizard looking to take a walk on the wild nylon-string side. The solid cedar top produces amazingly rich tone while the wide string placement, easy string tension, and low action make it a breeze to play.",
  		image_url: "c5Cor.png",
  		quantity: 5
  	},
  	{
  		id: 2,
  		name: "Merano MC400 Cello",
  		description: "Established in 2000, Merano have made it their mission to create affordable, beautifully crafted instruments. They offer brass, wind and stringed instruments all at reasonable prices. They have a large team of artisans who look over every instrument to ensure it maintains high standards. Many of their instruments are aimed at the beginner market but they also offer some fine examples of professional equipment as well.",
  		image_url: "cello.png",
  		quantity: 3
  	},
  	{
  		id: 3,
  		name: "Guarneri del Gesu",
  		description: "A repreduction of the most expensive violin in the world, selling for an estimated $16million. The owner of the original anonymously donated the historic instrument to violinist Anne Akiko Meyers, on loan for the rest of her life.",
  		image_url: "gesu.png",
  		quantity: 7
  	},
  	{
  		id: 4,
  		name: "Japanese Shamisen",
  		description: "The shamisen or samisen, also sangen, is a three-stringed traditional Japanese musical instrument derived from the Chinese instrument sanxian. It is played with a plectrum called a bachi. The Japanese pronunciation is usually shamisen but sometimes jamisen when used as a suffix, according to regular sound change.",
  		image_url: "shamisen.png",
  		quantity: 2
  	},
  	{
  		id: 5,
  		name: "Descant Lacewood Lute",
  		description: "One of the most popular lutes is the Descant Lute. This lute has 7-course style with a lovely short neck. It features 13 strings with the scale length of 19.75 inches. The overall length of the Descant Lute is 25 inches.",
  		image_url: "lute.png",
  		quantity: 2
  	},
  	{
  		id: 6,
  		name: "Russian Balalaika",
  		description: "The balalaika is a Russian stringed musical instrument with a characteristic triangular wooden, hollow body, fretted neck and three strings. Two strings are usually tuned to the same note and the third string is a perfect fourth higher.",
  		image_url: "balalaika.png",
  		quantity: 9
  	},
  	{
  		id: 7,
  		name: "Pyrophone",
  		description: "A pyrophone is a musical instrument in which notes are sounded by explosions, or similar forms of rapid combustion, rapid heating, or the like, such as burners in cylindrical glass tubes, creating light and sound.",
  		image_url: "pyrophone.png",
  		quantity: 3
  	}
  ];

  router.get("/:id?", (req, res) => {
  	if (req.params.id) {
  		// Send one by id
  		const result = prizes.find(prize => prize.id === +req.params.id);
  		res.status(200).send(result);
  	} else {
  		// Send all
  		res.status(200).send(prizes);
	}

	router.post("./:id", (req,res) => {
		if(req.params.id) {
          let idx = prizes.findIndex(prize => prize.id === req.params.id)
          prizes[idx].quantity = req.body.quantity > 0 ? req.body.quantity : 1
          res.status(200).send(prizes[idx])
		}
	})
  });



  module.exports = router;