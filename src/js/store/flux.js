const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api",
			characters: undefined,
			planets: undefined,
			descipcionCharacter: [
				``,
				`Luke Skywalker es un personaje ficticio y el protagonista de la trilogía original de la saga de ciencia ficción Star Wars. Procedente de la colonia de asteroides de Polis Massa, es el único hijo varón de Anakin Skywalker y la senadora Padmé Amidala (antigua reina del planeta Naboo). Tiene una hermana melliza llamada Leia Organa, de la cual fue separado al nacer con el objetivo de ocultarlo y protegerlo del emperador Palpatine (Darth Sidious) y del Imperio Galáctico. Su cuñado y compañero de batallas se llama Han Solo, famoso contrabandista y miembro de la Alianza Rebelde. Tras el rodaje de los primeros 6 episodios de la saga de películas de Star Wars, la vida de Luke como de los demás personajes se basaban en una serie canónica de cómics lanzada por George Lucas, las cuales pasaron a formar parte del Universo expandido de Star Wars, hoy conocido como "Legends" y excluido del Canon por Disney.`,
				`C-3PO es un personaje ficticio del universo de la Guerra de las Galaxias. Se trata de un androide, diseñado para el servicio de los humanos para llevar a cabo dichas tareas, para lo que domina seis millones de formas de comunicación. El personaje aparece en los nueve episodios de la saga, además de ser uno de los personajes más importantes de la serie animada Droids y aparece en Rogue One: A Star Wars Story y Star Wars: The Clone Wars. También hace apariciones frecuentes en cómics, novelas y videojuegos del Universo Expandido. En las tres primeras películas rodadas de la saga, C-3PO suele aparecer acompañado de otro droide, R2-D2. Es uno de los pocos personajes en aparecer en todas las películas y dibujos animados.`,
				`R2-D2 es un personaje de ficción del Universo de Star Wars. Es un droide astromecánico, contraparte y amigo de C-3PO. Según dice George Lucas "R2-D2 surgió cuando estábamos doblando American Graffiti. Una noche nos quedamos a trabajar hasta tarde y estábamos buscando el Rollo 2, Diálogo 2 (en inglés, Reel 2, Dialogue 2). De repente alguien gritó “R2-D2”. Tanto a Walter Murch, que estaba mezclando la película, como a mí, nos gustó tantísimo ese nombre que decidimos quedarnos con él”.`,
				`Darth Vader (Tatooine, 41 ABY - Estrella de la Muerte, 4 DBY), también conocido por su nombre de nacimiento Anakin Skywalker, es un personaje de ficción en la franquicia de Star Wars. Vader aparece en la trilogía original como un antagonista cuyas acciones dirigen la trama, mientras que su pasado como Anakin Skywalker y la historia de su corrupción por Darth Sidious y su paso al Lado Oscuro son centrales en la narrativa de la trilogía de la precuela. El personaje fue creado por George Lucas y ha sido retratado por numerosos actores. Sus apariciones abarcan las primeras seis películas de Star Wars, así como Rogue One, y su personaje está fuertemente referenciado en Star Wars: Episodio VII - El despertar de la Fuerza. También es un personaje importante en el universo expandido de Star Wars de series de televisión, videojuegos, novelas, literatura y cómics. Darth Vader se ha convertido en uno de los villanos más emblemáticos de la cultura popular, y ha figurado entre los más grandes villanos y personajes ficticios de la historia. Vader a pesar de ser de una maldad tan pura, aún conserva sus sentimientos a su fallecido esposa Padme Amidala, cómo después a su hijo Luke. También tiene una extraña y desconocida obsesión por el orden y en menor medida la justicia en la galaxia sea por intenciónes benévolas o lo contrario. Al principio de llevar portar su armadura biónica odiaba su personalidad de Darth Vader tanto como la armadura propia hasta el punto de dudar si había elegido un camino correcto, aunque después unos cinco años después de la fundación del Imperio Galáctico acepta la retorcida ideología del lado oscuro de La Fuerza hasta el punto de aceptar su armadura y purgar casi todo lo que quedaba de su luz interior.`,
				`La Princesa Leia Organa de Alderaan (nacida como Leia Skywalker y más tarde llamada Leia Organa) es un personaje de ficción de la saga Star Wars. Es hija de la senadora Padmé Amidala y del Caballero Jedi Anakin Skywalker, hermana melliza de Luke Skywalker y esposa de Han Solo. Adoptada por el senador Bail Organa y su esposa Breha después del fallecimiento de su madre en el parto y la transformación de su padre en Darth Vader, fue separada de su hermano Luke al nacer, con el objetivo de ocultarlos y protegerlos del emperador Palpatine (Darth Sidious) y del Imperio Galáctico. Al crecer se volvió la líder de la Alianza Rebelde. Pero treinta años después, se volvió la general de La Resistencia después de que su hijo, Ben Solo se unió a la Primera Orden, al destruir todo a su paso, y al querer traerlo de vuelta. Pero por la mala noticia de Rey, al saber Kylo Ren mató a Han Solo, esa esperanza se rompe, hasta que finalmente encuentra a su hermano Luke Skywalker, y con la ayuda de Rey, emprende el viaje para encontrarlo. Hasta que finalmente,en la tercera trilogía, muere después de ayudar a Rey a traer a su hijo de vuelta al camino jedi.`,
				`Owen Lars era un granjero de humedad humano del planeta desertico Tatooine. Era el hijo de Aika y Cliegg Lars, y se convirtió en el hermanastro del Caballero Jedi Anakin Skywalker cuando Cliegg se volvió a casar con la madre de Anakin, Shmi Skywalker, una antigua esclava. En el 22 ABY, Shmi fue asesinada por Incursores Tusken y Cliegg falleció poco después, convirtiéndose Owen en el responsable de la granja de su familia. Por esa época, Lars se casó con su novia, Beru Whitesun, y trabajaron duro para mantener la casa.`,
				`Beru Whitesun Lars, nacida Beru Whitesun, fue una mujer humana del planeta Tatooine. Estaba casada con Owen Lars, el hermanastro del Caballero Jedi Anakin Skywalker, cuyo hijo, Luke Skywalker, criaron durante el reinado del Imperio Galáctico. Lars fue asesinada junto con su esposo por soldados de asalto Imperiales, quienes también incendiaron la granja de humedad de los Lars. Con sus muertes, Skywalker dejó su mundo natal y se unió a la Alianza para Restaurar la República.`,
				`R5-D4 pertenecía a los Jawas de Tatooine que capturaron a R2-D2 y C-3PO cuando estos se perdieron en el desierto tras escapar de la Tantive IV con los planes de la Estrella de la Muerte, y así comerciar con ellos. R5-D4 fue ofrecido a la familia de acogida de Luke Skywalker, Owen y Beru Lars, pero un fallo en el impulsor de este acabó con el negocio, decidiendo Owen quedarse con R2-D2, gracias al consejo dado por C-3PO, también vendido a estos por los Jawas.`,
				`Biggs Darklighter era un piloto masculino que luchó por la Alianza para Restaurar la República durante los primeros días de la Guerra Civil Galáctica. Creció en el planeta desértico Tatooine, donde se convirtió en un amigo íntimo de Luke Skywalker. Los dos se convirtieron en pilotos y soñaron con abandonar Tatooine. Darklighter dejó su planeta natal para ir a la Academia Imperial, pero desertó del Imperio Galáctico después de graduarse para unirse a la Alianza Rebelde. Regresó a Tatooine por última vez para contarle a Skywalker sus planes.`,
				`Obi-Wan Kenobi, también conocido como Ben Kenobi, es un personaje ficticio de la saga Star Wars. Kenobi es un maestro jedi de la antigua República Galáctica, y maestro de Anakin y Luke Skywalker. Obi-Wan es una figura clave en las Guerras Clon, donde fue conocido como "El Negociador"; en la práctica extinción de los Jedi, en la caída de la República Galáctica y en la lucha de la Alianza Rebelde contra el posterior Imperio Galáctico. Obi-Wan Kenobi es considerado como uno de los mejores, más populares y carismáticos de los personajes del universo Star Wars.`,
			],
				descipcionPlanet: [
				``,
				`Tatooine era un planeta desértico circunvolucional escasamente habitado ubicado en los Territorios del Borde Exterior de la galaxia. Servio como el planeta natal de los influyentes Anakin y Luke Skywalker, que le darían forma a la historia galáctica. Parte de un sistema estelar binario, el planeta era oprimido por los soles abrasadores, lo que provocó que el mundo careciera de las aguas superficiales necesarias para sostener grandes poblaciones. Como resultado, muchos residentes del planeta sacaron agua de la atmósfera a través de granjas de humedad.`,
				`Alderaan, ubicado en los Mundos del Núcleo, era un planeta terrestre cubierto de montañas. Durante las últimas décadas de la República Galáctica, fue gobernado por la Reina Breha Organa y representado en el Senado Galáctico por su marido, el Senador Bail Organa. Después del surgimiento del Imperio Galáctico de Sheev Palpatine, Alderaan desempeñó un papel fundamental en el establecimiento de la Alianza Rebelde, un movimiento que buscaba restaurar los valores de la Antigua República. Debido a sus lazos con la Alianza, el planeta fue destruido cuando el Gran Moff Wilhuff Tarkin decidió probar el superláser de la Estrella de la Muerte, una estación de batalla de tamaño lunar desarrollada por el Imperio, con toda su fuerza. Entre los pocos sobrevivientes de ese desastre estaba la princesa Leia Organa, hija adoptiva de Bail y Breha Organa y heredera de la casa real de Alderaan.`,
				`Yavin IV fue la cuarta luna en órbita del gigante gaseoso Yavin Prime, cubierta de junglas. En algún momento durante la Guerra Civil Galáctica, albergó la base principal de la Alianza Para Restaurar la República, un grupo de luchadores de la resistencia que se oponían a la tiranía del Imperio Galáctico. Tras una gran batalla que tuvo lugar alrededor de Yavin, la Alianza trasladó su base a Hoth.`,
				`Hoth era un helado y remoto planeta que fue el sexto planeta del sistema estelar del mismo nombre. En particular, albergó la Base Eco, sede temporal de la Alianza para Restaurar la República, hasta que el Imperio Galáctico localizó a los rebeldes, iniciando una gran confrontación conocida como la Batalla de Hoth.`,
				`Dagobah era un planeta en el sistema Dagobah, y uno de los lugares más puros de la galaxia dentro de la Fuerza. Un mundo lejano lleno de pantanos y bosques, sirvió como refugio para el Gran Maestro Jedi Yoda durante su exilio tras la destrucción de la Orden Jedi. Fue allí donde Luke Skywalker recibió un entrenamiento avanzado en los caminos de la Fuerza bajo la tutela del Maestro Jedi Yoda y más tarde sería testigo de su muerte y transformación en la Fuerza.`,
				`Bespin era un inmenso gigante gaseoso ubicado en las proximidades del sistema Anoat, un sector desolado de la galaxia. Bespin tenía varias lunas, y su masa gaseosa contenía un estrato delgado de atmósfera habitable. Sus capas eran una fuente rara de gas tibanna, que era cosechado y refinado en varios complejos mineros, como Ciudad Nube, una metrópoli opulenta suspendida en las enormes nubes ondulantes del planeta. La ciudad ugnaught de Ugnorgrad también estaba ubicada sobre el planeta, siendo gobernada por el Rey Ozz en el tiempo posterior a la Batalla de Endor. Durante la Guerra Civil Galáctica, Bespin permaneció sin afiliación, pero eso no impidió que el Imperio Galáctico acuartelara el planeta y se apoderara de Ciudad Nube. Sin embargo, con la derrota del Imperio en Endor, el gigante gaseoso y su próspera colonia minera terminaron recuperando su libertad.`,
				`Endor (también conocido como la Luna Boscosa de Endor o la Luna Santuario) era una pequeña luna boscosa que orbitaba el planeta del Borde Exterior de su mismo nombre y era el mundo naral de las especies inteligentes Ewoks y de Yuzzums.`,
				`Naboo era un planeta abundante en el Borde Medio, cerca de la frontera de los Territorios del Borde Exterior. Fue el hogar de la especie gungan y de una población de humanos conocida como los Naboo.`,
				`Coruscant (pronunciado /'kɔɹəsant/), también conocido como Centro Imperial durante el reinado del Imperio Galáctico, fue una ecumenópolis—un planeta cubierto de ciudad, colectivamente conocida como Ciudad Galáctica— en el sistema Coruscant de los Mundos del Núcleo. Aunque era asunto de debate entre los historiadores, en general se creía que Coruscant era el planeta natal original de la humanidad. Destacado por su cultura cosmopolita y sus enormes rascacielos, la población de Coruscant consistía en aproximadamente un billón de ciudadanos pertenecientes a un amplio abanico de especies humanoides y alienígenas. Además, la ubicación estratégica de Coruscant al final de varias grandes rutas hiperespaciales permitió que creciera en poder e influencia, haciendo que el planeta-ciudad superara a sus rivales iniciales y se convirtiera en un núcleo galáctico de cultura, educación, finanzas, artes, política y tecnología. Albergaba varios puntos de gran interés, incluido el Templo Jedi, la Plaza de los Monumentos y el Edificio del Senado Galáctico.`,
				`Kamino (pronunciado /kə'minoʊ/) era un planeta acuático ubicado en un sistema estelar extragaláctico que se encontraba al sur de la galaxia satélite Laberinto Rishi y más allá de la galaxia conocida. Estaba habitado por los kaminoanos, una raza de seres altos y esbeltos que eran considerados como una especie misteriosa con tendencia al hermetismo. También eran conocidos por su tecnología de clonación que finalmente condujo a la creación de un ejército clon para la República Galáctica.`,
				],

				favorites: [],



		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				try{
					const store = getStore()
					const response = await fetch(store.API_URL+"/people")
					if (!response.ok) throw new Error (`invalid response. Response status: ${response.status}`)
					const body = await response.json()
					
					setStore({ characters: body.results })
				}catch(error){
					console.log(error)
				}
			},
			getPlanets: async () => {
				try{
					const store = getStore()
					const response = await fetch(store.API_URL+"/planets")
					if (!response.ok) throw new Error (`invalid response. Response status: ${response.status}`)
					const bodyP = await response.json()
					
					setStore({ planets: bodyP.results })
				}catch(error){
					console.log(error)
				}
			},

			setFav: (favName, favUid, favURL) => {
				const store = getStore()
				setStore({favorites: [...store.favorites, {name: favName, type: favURL, uid: favUid }]})
			},

			setNewFav: (newFav) => {
				setStore({favorites: [...newFav]})
			},

			loadSomeData: () => {
			
			}
		}
	};
};

export default getState;
