// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search
var index = elasticlunr(function () {
  // this.addField('section')
  this.addField('title')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});


index.addDoc({
  // section: null,
  title: "p138",
  layout: "textoporpagina",
  content: "\n      \n      \n      \n      \n      CAPÍTULO I\n      \n      LA NAVEGACIÓN DE AMBERES Á ESPAÑA\n      \n      \n      En primer lugar después de haber partido de Andorf (Amberes) llegué á los 14 días á Hispania, á una ciudad que se llama Khalles (Cádiz), hasta allí  se  cuentan  400  millas (leguas) por mar. \n      \n      \n      En la costa de aquella ciudad ví una ballena ó cetáceo de 35 pasos de largo, de la que se sacaron unos 30 cascos llenos de aceite,\n         cascos como los de harenques.\n      \n      Cerca de la susodicha ciudad de Khalles (Cádiz) estaban surtos 14 grandes navíos bien provistos de toda munición y de cuanto\n         era necesario, que estaban por emprender viaje al Rieo delle Platta en Indiam (Indias). También se hallaban allí 2500 Españoles y 150 Alto-Alemanes, Neerlandeses y Sajones, junto con el capitán general de todos nosotros, que se llamaba tum Pietro Mandossa.\n      \n      \n      Entre estos 14 navíos estaba uno de propiedad de los señores Sewastian Neithart  y Jacoben Welser de Niremburgo, quienes mandaban á su factor\n      \n      \n   \n",
  id: 0
});
index.addDoc({
  // section: null,
  title: "p139",
  layout: "textoporpagina",
  content: "\n   \n      \n      Heinrich Paimen con mercaderías al Rieo  delle Platta. Con estos partimos al Rieo  delle Platta yo y otros Alto-Alemanes y Neerlandeses, más ó menos en número de 80 hombres armados\n         de arcabuces y ballestas. Después  de  esto salimos  de Sievilla en 14 navíos, con los susodichos caballeros y el capitán general en el susodicho\n         año, y día de Sannt Bartholomei y llegamos á una ciudad en Hispania llamada San Lucas (San Lucar de Barrameda), que está á 20 millas (leguas) de Sievilla. Allí tuvimos que demorar hasta el 1.º de Septiembre del susodicho año, por causa de los temporales que corrían.  \n      \n      \n      \n      CAPÍTULO II\n      \n      LA NAVEGACIÓN DE ESPAÑA Á LAS CANARIAS\n      \n      \n      Después de esto salimos de allí y arribamos á tres islas que están cerca unas de otras,\n         de las que la primera se llama Dennerieffe, la segunda, Cumero (Gomera) y la tercera, Polmant (Palma); y de la ciudad de S. Lucas (San Lucar) á las islas se cuentan más ó menos 200 millas (leguas). En estas islas se dispersaron los navíos. Las islas pertene-\n      \n      \n   \n",
  id: 1
});
index.addDoc({
  // section: null,
  title: "p140",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      cen á la Cesárea Majestad, y las habitan sólo los Españoles con sus mujeres é hijos.\n         Y allá descansamos. Arribamos también con 3 de los navíos á la Palma y allí permanecimos\n         unas 4 semanas haciendo provisión y reparando averías.\n      \n      \n      Mas después de ésto, mientras nuestro general, tum Pietro Manthossa se hallaba á unas 8 ó 9 millas (leguas) distante de nosotros, resultó que habíamos tenido á bordo de nuestro navío\n         á ton Jerg Manthossa primo del señor tonn Pietro Manthossa: este se había enamorado de la hija de un vecino en Palman (la Palma) y como estábamos por salir al día siguiente, el dicho thonn Jerg Manthossa bajó á tierra esa misma noche, á las 12, con 12 compañeros de los buenos, y sin ser\n         sentidos se robaron de la isla Palman á la dicha hija de aquel vecino, con la doncella, ropa, alhajas y algún dinero, volviendo\n         en seguida al navío muy ocultamente para no ser sentidos ni por nuestro capitán, Heinrich Paimen, ni por otra persona alguna de los del navío; sólo la guardia se apercibió de ello,\n         por ser la media noche.\n      \n      \n      Y cuando nos hicimos á la vela de mañana, antes de andar más de unas 2 ó 3 millas (leguas) se armó un fuerte temporal\n         que nos obligó á volver á entrar en el mismo puerto de donde acabábamos de salir.\n         Mas después que largamos nuestras anclas al agua, se le antojó á nuestro capitán, el dicho Heinrich Paimen, desembarcar en un pequeño\n      \n   \n",
  id: 2
});
index.addDoc({
  // section: null,
  title: "p141",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      esquife llamado pot (bote) ó podell (batel). Eso que se acercaba y estaba ya por poner pie en tierra, lo esperaban allí\n         más de 30 hombres armados con arcabuces, lanzas y alabardas, dispuestos á tomar preso á nuestro capitán Hainrich Paimen.        \n      \n      \n      En el mismo instante uno de su gente le advirtió que no saltase á tierra sino que\n         se volviese á bordo; entonces el capitán se dispuso regresar al navío, mas no le dieron\n         tiempo; porque los de tierra se le habían acercado demasiado en otras barquillas,\n         que estaban allí ya preparadas: con esto y todo logró escapárseles á otro navío que\n         se hallaba más cerca de la tierra. Como la gente no pudo tomarlo en seguida hicieron\n         tocar á rebato en la ciudad de Palman, cargaron 2 piezas de artillería gruesa, y con ellas hicieron 4 descargas contra nuestro navío, pues nos hallábamos\n         no muy distantes de la tierra. Con el primer tiro nos agujerearon el canjilón que estaba en la popa lleno de agua fresca, de la que se derramaron 5 ó 6 baldadas.\n         Después nos hicieron pedazos la mesana, que es el último mástil, el más inmediato á la popa. El tercero nos acertó abriéndonos un boquerón en el costado del navío, y nos mató\n         un hombre. El cuarto nos erró del todo.\n      \n      \n      Estaba también otro capitán presente que tenía su navío á la par del nuestro, con\n         rumbo á New Hispanien (Nueva España) (ó sea) Mechssekhen (México): este se hallaba en tierra con 150 hombres, y cuando supo de nuestro combate, trató\n         de hacer las paces entre nosotros y los de la ciudad,\n      \n      \n   \n",
  id: 3
});
index.addDoc({
  // section: null,
  title: "p142",
  layout: "textoporpagina",
  content: "\n           \n      bajo la condición de entregarles las personas de ton Jerg Manthossa, la hija del vecino y su sirvienta. No tardaron en presentarse el Stathalter (Regidor) y el Richter (Alcalde) en nuestro navío, pretendiendo llevarse presos á thon Jerg Manthossa y á sus cómplices. Al punto les contestó él que era ella su legítima mujer, y á ella\n         no se le ocurrió decir otra cosa, casándose en seguida, con gran disgusto del afligido\n         padre; y nuestro navío quedó muy estropeado de resultas de los balazos.\n      \n      \n      CAPÍTULO III\n      \n      VIAJE DE LA PALMA Á SANTIAGO\n      \n      \n      Después de todo esto dejamos en tierra á ton Jerg Manthossa y á su mujer, porque nuestro capitán no quería tenerlos más á su bordo.\n      \n      Volvimos á aprestar nuestro navío y navegamos hasta llegar á una isla ó tierra que\n         se llama de San Jacob, ó sea en español Augo (Santiago): es una ciudad que depende del rey de Portugal; los Portugueses mandan en el pueblo\n         y los Negros les sirven. Esta ciudad está á 300 millas (leguas) de la dicha isla de Polman (la Palma) de donde había- \n      \n      \n   \n",
  id: 4
});
index.addDoc({
  // section: null,
  title: "p143",
  layout: "textoporpagina",
  content: "\n   \n      \n      mos salido. Permanecimos allí 5 días, y de nuevo abastecimos el navío de provisiones\n         frescas y de mesa, como ser: pan, carne, agua y todo lo demás que se necesita en alta\n         mar.\n      \n      \n      CAPÍTULO IV\n      \n      VIAJAN POR ALTA MAR Y DESCRIBE SUS MARAVILLAS\n      \n      Así toda la flota, á saber los 14 navíos, se volvieron á reunir. Nuevamente salimos\n         mar afuera y navegamos por dos meses hasta que arribamos á una isla en que no había\n         más que aves que matábamos á garrotazos. En este lugar demoramos 3 días. La isla está\n         del todo despoblada; tiene de ancho y largo unas 6 millas (leguas) á todo viento y dista de la susodicha isla de San Augo (Santiago), de donde habíamos partido, 1.500 millas (leguas).\n      \n      En este mar hay peces voladores, y otros muy grandes de la especie de las ballenas; otros también grandes, llamados Ichaub-huet-fischs (pez sombrero de paja) en razón de que un disco extremadamente grande les tapa la cabeza, con el que pueden\n         ofender á los demás peces en sus\n      \n      \n   \n",
  id: 5
});
index.addDoc({
  // section: null,
  title: "p144",
  layout: "textoporpagina",
  content: "\n   \n      \n      peleas. Son peces de mucha fuerza y muy malos. Otros hay de cuyo lomo nace una especie\n         de cuchilla de hueso de ballena, y se llaman en castellano pes espade (pez espada); y más otros con un serrucho de hueso de ballena que también arranca del lomo; son\n         malos y grandes: se llaman pese de sere (pez sierra). Aparte de estos son muchos los peces raros que hay, cuya forma, tamaño y cualidades\n         no puedo describir yo en esta vez.\n      \n      \n      \n      CAPÍTULO V\n      LLEGADA Á RÍO DEL JANEIRO Y MUERTE DE OSORIO\n      \n      \n      Después navegamos de esta isla á otra que se llama Río Genna (Río Janeiro) á 500 millas de la anterior, dependencia del rey de Portugal: esta es la isla de Rio Genna (Río del Janeiro) en Inndia (Indias) y los Indios se llaman Thopiss (Tupís). Allí nos quedamos unos 14 días. Fué aquí que thonn Pietro Manthossa, nuestro capitán general, dispuso que Hanss Ossorio (Juan de Osorio), como que era su hermano adoptivo, nos mandase en calidad de su lugarteniente; porque\n         él seguía siempre sin acción, tullido y enfermo. Así las cosas él, Hans (Juan) Ossorio, no tardó en ser malquistado\n      \n      \n   \n",
  id: 6
});
index.addDoc({
  // section: null,
  title: "p145",
  layout: "textoporpagina",
  content: "\n   \n      \n      y calumniado ante thonn Pietro Manthossa, su hermano jurado, y la acusación era que trataba de sublevarle la gente á thonn Pietro Manthossa, el capitán general. Con este pretexto él, thonn Pietro Manthossa, ordenó á otros 4 capitanes llamados Joan Eyolas (Ayolas), Hanns Salesser (Juan Salazar), Jerg Luchllem (Jorge Luján) y Lazarus Sallvaischo que matasen al dicho Hanns Assario (Juan Osorio) á puñaladas, ó como mejor pudiesen, y que lo tirasen al medio de la plaza por traidor.\n         Más aún, hizo publicar por bando que nadie osase compadecerse de Assirio (Osorio) so pena de correr la misma suerte, fuere quien fuere. Se le hizo injusticia,\n         como lo sabe Dios el Todopoderoso, y que El lo favorezca; porque fué aquel un hombre\n         piadoso y recto, buen soldado, que sabía mantener el orden y disciplina entre la gente\n         de pelea.\n      \n      \n      CAPÍTULO VI\n      \n      LLEGAN AL RÍO DE LA PLATA Y PUERTO DE SAN GABRIEL. LOS CHARRÚA.\n      \n      De allí navegamos al Rio de le Platta y dimos con una corriente de agua dulce, que se llama \n      \n   \n",
  id: 7
});
index.addDoc({
  // section: null,
  title: "p146",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n       Parnau Wassu (Paraná Guazú), y tiene de ancho en la boca, donde deja de ser mar, una extensión de 42 millas (leguas) de camino, y desde Río Gena a esta agua se cuentan 500 millas (leguas) de camino.\n      \n      \n      En seguida arribamos á una bahía que se llama Sannt Gabriehel (San Gabriel) y allí en la susodicha agua corriente Parnau largamos las anclas de nuestros 14 navíos. Y como tuviésemos que hacer quedar los\n         navíos mayores á un tiro de arcabuz de la tierra, nuestro general Pietro Manthossa había ordenado y mandado que los marineros desembarcasen la gente en los pequeños\n         esquifes, que con este fin estaban ya dispuestos, y se llaman podel ó poet (batel ó bote). Así pues, con el favor de Dios llegamos al Rio de la Platta el año 1535.\n      \n      \n      Allí nos encontramos con un pueblo de Indios llamados Zechuruass (Charrúas) que constaba como de unos 2.000 hombres, y que no tenían más de comer que pescado\n         y carne. Estos al llegar nosotros, habían abandonado el pueblo huyendo con mujeres\n         é hijos, de suerte que no pudimos dar con ellos. Esta nación de Indios se anda en\n         cueros vivos, mientras que sus mujeres se tapan las ver-\n         \n      \n   \n",
  id: 8
});
index.addDoc({
  // section: null,
  title: "p147",
  layout: "textoporpagina",
  content: "\n   \n      \n      güenzas con un paño de algodón que les cubre desde el ombligo hasta la rodilla.\n      \n      \n      Entonces el general thon Pietro Manthossa mandó que se vuelva á embarcar la gente, y que la hagan pasar á la otra banda del\n         agua Pernaw (Paraná), que allí no tiene más anchura que 8 millas (leguas) de camino.\n      \n      \n      CAPÍTULO VII\n      \n      LA CIUDAD DE BUENOS AIRES Y LOS INDIOS QUERANDÍ\n      \n      \n      Allí levantamos una ciudad que se llamó Bonas Ayers (Buenos Aires), esto es en alemán — gueter windt (buen viento). También traíamos de España, en los 14 navíos, 72 caballos y yeguas.\n      \n      \n      En esta tierra dimos con un pueblo en que estaba una nación de Indios llamados Carendies, como de 2.000 hombres con las mujeres é hijos, y su vestir era como el de los Zechurg (Charrúa), \n         \n          \n      \n   \n",
  id: 9
});
index.addDoc({
  // section: null,
  title: "p148",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       del ombligo á las rodillas; nos trajeron de comer, carne y pescado. Estos Carendies (Querandí) no tienen habitaciones propias, sino que dan vueltas á la tierra, como\n         los Gitanos en nuestro país; y cuando viajan en el verano suelen andarse más de 30\n         millas (leguas) por tierra enjuta sin hallar una gota de agua que poder beber. Si logran\n         cazar ciervos ú otras piezas del campo, entonces se beben la sangre. También hallan á veces una\n         raíz que llaman Cardes (Cardos) la que comen por la sed. Se entiende que lo de beberse la sangre sólo se acostumbra\n         cuando les falta el agua ó lo que la suple; porque de otra manera tal vez tendrían\n         que morir de sed.\n      \n      \n      Estos Carendies traían á nuestro real y compartían con nosotros sus miserias de pescado y de carne\n         por 14 días sin faltar más que uno en que no vinieron. Entonces nuestro general thonn Pietro Manthossa despachó un alcalde llamado Johann Pabón, y él y 2 de á caballo se arrimaron á los tales Carendies, que se hallaban á 4 millas (leguas) de nuestro real. Y cuando llegaron adonde esta-\n         \n      \n   \n",
  id: 10
});
index.addDoc({
  // section: null,
  title: "p149",
  layout: "textoporpagina",
  content: "\n   \n      \n      ban los Indios, acontecióles que salieron los 3 bien escarmentados, teniéndose que\n         volver en seguida á nuestro real.\n      \n      \n      Pietro Manthossa, nuestro capitán, luego que supo del hecho por boca del alcalde, (quien con este\n         objeto había armado cierto alboroto en nuestro real) envió á Diego Manthossa, su propio hermano, con 300 lanskenetes y 30 de á caballo bien pertrechados: yo iba con ellos, y las órdenes eran bien apretadas\n         de tomar presos ó matar á todos estos Indios Carendies y de apoderarnos de su pueblo. Mas cuando nos acercamos á ellos había ya unos 4.000\n         hombres, porque habían reunido á sus amigos. \n      \n      \n      \n      CAPÍTULO VIII\n      \n      LA BATALLA CON LOS INDIOS QUERANDÍ\n      \n      \n      Y cuando les llevamos el asalto se defendieron con tanto brío que nos dieron harto\n         que hacer en aquel día. Mataron también á nuestro capitán thon Diego Manthossa y con él á 6 hidalgos de á pie y de á caballo. De los nuestros cayeron unos 20 y\n         de los de ellos como mil. Así, pues, se batieron tan furiosamente que salimos nosotros\n         bien escarmentados.\n      \n   \n",
  id: 11
});
index.addDoc({
  // section: null,
  title: "p150",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Estos Carendies usan para la pelea arcos, y unos dardes (dardos), especie de media lanza con punta de pedernal en forma de trisulco. También emplean\n         unas bolas de piedra aseguradas á un cordel largo; son del tamaño de las balas de plomo que usamos en\n         Alemania. Con estas bolas enredan las patas del caballo ó del venado cuando lo corren\n         y lo hacen caer. Fué también con estas bolas que mataron á nuestro capitán y á los\n         hidalgos, como que lo vi yo con los ojos de esta cara, y á los de á pie los voltearon\n         con los dichos dardes.\n      \n      \n      Así, pues, Dios, que todo lo puede, tuvo á bien darnos el triunfo, y nos permitió\n         tomarles el pueblo; mas no alcanzamos á apresar uno sólo de aquellos Indios, porque\n         sus mujeres é hijos ya con tiempo habían huido de su pueblo antes de atacarlos nosotros.\n         En este pueblo de ellos no hallamos más que mantos de nuederen (nutrias) ó ytteren como se llaman, iten harto pescado, harina y grasa del mismo; allí nos detuvimos 3 días y recién nos volvimos\n         al real, dejando unos 100 de los nuestros en el pueblo para que pescasen con las redes\n         de los Indios y con ello abasteciesen á\n      \n      \n      \n   \n",
  id: 12
});
index.addDoc({
  // section: null,
  title: "p151",
  layout: "textoporpagina",
  content: "\n   \n      \n      nuestra gente; porque eran aquellas aguas muy abundantes de pescado; la ración de\n         cada uno era de 6 onzas de harina de trigo por día y al tercero un pescado. La tal\n         pesquería duró dos meses largos; el que quería aumentar un pescado á la ración se\n         tenía que andar 4 millas (leguas) para conseguirlo.\n      \n      \n      CAPÍTULO IX\n      \n      SE FORTIFICA BUENOS AIRES Y SE PADECE HAMBRE\n      \n      \n      Y cuando volvimos al real se repartió la gente en soldados y trabajadores, así que\n         no quedase uno sin qué hacer. Y se levantó allí una ciudad con un muro de tierra como de media lanza de alto á la vuelta, y adentro de ella\n         una casa fuerte para nuestro general; el muro de la ciudad tenía de ancho unos 3 pies;\n         mas lo que un día se levantaba se nos venía abajo al otro; á esto la gente no tenía\n         qué comer, se moría de hambre, y la miseria era grande; por fin llegó á tal grado\n         que ya ni los caballos servían, ni alcanzaban á prestar servicio alguno. Así aconteció que llegaron á tal\n         punto la necesidad y la miseria que por razón de la hambruna ya\n      \n   \n",
  id: 13
});
index.addDoc({
  // section: null,
  title: "p152",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      no quedaban ni ratas, ratones, ni culebras, ni sabandija alguna que nos remediase en nuestra gran necesidad é inaudita miseria; llegamos hasta\n         comernos los zapatos y cueros todos.\n      \n      \n      Y aconteció que tres Españoles se robaron un rocín y se lo comieron sin ser sentidos; mas cuando se llegó á saber los mandaron prender\n         é hicieron declarar con tormento; y luego que confesaron el delito los condenaron\n         á muerte en horca, y los ajusticiaron á los tres. Esa misma noche otros Españoles\n         se arrimaron á los tres colgados en las horcas y les cortaron los muslos y otros pedazos\n         de carne y cargaron con ellos á sus casas para satisfacer el hambre. También un Español\n         se comió al hermano que había muerto en la ciudad de Bonas Ayers.\n      \n   \n",
  id: 14
});
index.addDoc({
  // section: null,
  title: "p153",
  layout: "textoporpagina",
  content: "\n   \n      CAPÍTULO X\n      EXPEDICIÓN DE JORGE LUJÁN\n      Ahora, pues, nuestro capitán general thon Pietro Manthossa vió que no podía mantener la gente por más tiempo allí, así ordenó y mandó él á una\n         con sus capitanes, que se aprontasen cuatro pequeñas embarcaciones que habían de navegar\n         á remo, y se llaman parckhadiness (Bergantines), en que entraban hasta 40 hombres ; como también otras tres menores á que llaman\n         podel (batel) ó potht (bote), y cuando los 7 navíos estuvieron listos y provistos hizo que el capitán nuestro\n         reuniese toda la gente y envió á Jerg Lichtenstein con 350 hombres armados río Parnau arriba, á que descubriesen Indios, que nos proporcionasen comida y víveres. Pero\n         ni bien nos sintieron los Indios nos jugaron una de las peores, porque empezando por\n         quemar y destruir su pueblo, y cuanto tenían de comer, en seguida huyeron todos de\n         allí; y así tuvimos que pasar adelante sin más de comer que tres onzas de pan al día\n         en pischgosche (biscocho).\n   \n   \n",
  id: 15
});
index.addDoc({
  // section: null,
  title: "p154",
  layout: "textoporpagina",
  content: "\n     \n      \n      La mitad de la gente se nos murió en este viaje de esta hambre sin nombre, y la otra\n         mitad hubo que hacerla volver al susodicho pueblo, do se hallaba nuestro Capitán General.\n         Thonn Pietro Manthossa quiso tomar razón á Jergen Lichtensteinen, nuestro capitán en este viaje, porqué tan pocos habíamos vuelto siendo que la ausencia\n         sólo había durado 2 meses; á lo que le contestó éste que de hambre habían muerto,\n         porque los Indios habían quemado la comida que tenían y habían huido, como ya se dijo\n         antes en pocas palabras.\n      \n      \n      CAPÍTULO XI\n      \n      EL SITIO DE BUENOS AIRES\n      \n      \n      Después de esto seguimos un mes todos juntos pasando grandes necesidades en la ciudad\n         de Bonas Ayers hasta que pudieron aprestar los navíos. Por este tiempo los Indios con fuerza y gran\n         poder nos atacaron á nosotros y á nuestra ciudad de Bonas Ayers en número hasta de 23.000 hombres; constaban de cuatro naciones llamadas, Carendies, Barenis (Guaranís), Zechuruas, (Charrúas),\n      \n   \n",
  id: 16
});
index.addDoc({
  // section: null,
  title: "p155",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      y Zechenais Diembus (Chanás Timbús). La mente de todos ellos era acabar con nosotros; pero Dios, el Todopoderoso, nos\n         favoreció á los más; á él tributemos alabanzas y loas por siempre y por sécula sin\n         fin; porque de los nuestros solo cayeron unos 30 con los capitanes y un alférez.\n      \n      \n      Y eso que llegaron á nuestra ciudad Bonas Ayers y nos atacaron, los unos trataron\n         de tomarla por asalto, y los otros empezaron á tirar con flechas encendidas sobre nuestras casas, cuyos techos eran de paja, (menos la de nuestro capitán general\n         que tenía techo de teja), y así nos quemaron la ciudad hasta el suelo. Las flechas\n         de ellos son de caña y con fuego en la punta; tienen también cierto palo del que las\n         suelen hacer, y éstas una vez prendidas y arrojadas no dejan nada; con las tales nos\n         incendiaron, porque las casas eran de paja.\n      \n      \n      A parte de esto nos quemaron también cuatro grandes navíos que estaban surtos á media\n         milla (legua) de nosotros en el agua. La tripulación que en ellos estaba, y que no tenía\n         cañones, cuando sintieron el tumulto de Indios, huyeron de estos 4 navíos á otros 3, que\n         no muy distante \n         \n      \n      \n   \n",
  id: 17
});
index.addDoc({
  // section: null,
  title: "p156",
  layout: "textoporpagina",
  content: "\n   \n      \n      de allí estaban y artillados. Y al ver que ardían los 4 navíos que incendiaron los\n         Indios, se prepararon á tirar y les metieron bala á éstos; y luego que los Indios\n         se apercibieron, y oyeron las descargas, se pusieron en precipitada fuga y dejaron\n         á los Cristianos muy alegres. Todo esto aconteció el día de San Juan, año de 1535.\n      \n      \n      CAPÍTULO XII\n      \n      PADRÓN DE LA GENTE Y PREPARATIVOS\n      \n      \n      Habiendo sucedido todo ésto, la gente no tuvo más remedio que volverse á meter en\n         los navíos, y thonn Pietro Manthossa, nuestro capitán general, entregó la gente á Joann Eyollas y lo puso en su lugar, para que fuese nuestro capitán y nos mandase. En seguida Eyollas pasó revista de la gente y halló que, de 2500 hombres que habían sido, no quedaban\n         con vida más de 560; los demás habían muerto y perecido de hambre. ¡Dios el Todopoderoso\n         se apiade [de ellos] y nos favorezca!\n      \n      \n      Después de esto, Juan Eyollas, nuestro capitán, hizo aprestar 8 navíos pequeños, parckhadines (bergantines) y potteles (bateles) y se sacó 400\n         \n      \n      \n   \n",
  id: 18
});
index.addDoc({
  // section: null,
  title: "p157",
  layout: "textoporpagina",
  content: "\n   \n      \n      hombres de los 560; los otros 160 dejó él en los 4 grandes navíos, para que ellos\n         se cuidasen, y les puso de capitán un tal Joann Romero, y les dejó provisiones para un año, [de suerte que á cada soldado le tocase por\n         día de á 8 onzas de pan] ó harina; y si más quería comer que se lo buscase.\n      \n      \n      CAPÍTULO XIII\n      \n      VIAJE DE MENDOZA CON AYOLAS Á FUNDAR BUENA ESPERANZA\n      \n      \n      Más tarde partió él, Joann Eyollas con los 400 hombres en los parckhadienes (bergantines) ó wasserbuegen (buques) aguas arriba del Paanaw, y thon (don) Pietro Manthossa, el capitán general de todos, iba también con nosotros. Y en 2 meses llegamos á los\n         Indios, á 84 millas (leguas) de distancia; esta gente llámase Tiembus, se ponen en cada lado de la nariz una estrellita de piedrecillas blancas y celestes,\n         los hombres son altos y bien formados, pero las mujeres, por el con-\n         \n      \n   \n",
  id: 19
});
index.addDoc({
  // section: null,
  title: "p158",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      trario, viejas y mozas, son horribles, porque se arañan la parte inferior de la cara\n         que siempre está ensangrentada.\n      \n      \n      Esta nación no come otra cosa, ni en su vida ha tenido otra comida, ni otro alimento\n         que carne y pescado. Se calcula que esta nación es fuerte de 15.000 ó más hombres.\n         Y cuando llegamos como á 4 millas (leguas) de esta nación, nos vieron y salieron á recibirnos de paz en 400 kanneonn (canoas) ó barquillas con 16 hombres en cada una. Las tales barquillas se labran de un solo palo, son de\n         80 pies de largo por 3 de ancho y se boga como en las barquillas de los pescadores en Alemania, sólo que los remos no tienen los refuerzos de hierro.\n      \n      \n      Cuando nos juntamos en el agua (el río) nuestro capitán, Joann Eyollas, mandó al Indio principal de los Tiembú, que se llamaba Rochera Wassú, una camisa, un gabán, un par de calzas y varias otras cosas más de reschat (rescate). Después de esto el dicho Zchera Wassú nos condujo á su pueblo y nos dió de comer carne y pescado hasta hartarnos. Pero\n         si el susodicho viaje durara unos 10 días más á buen seguro que todos de hambre pereciéramos;\n         y con todo, en este viaje, de los\n         \n      \n   \n",
  id: 20
});
index.addDoc({
  // section: null,
  title: "p159",
  layout: "textoporpagina",
  content: "\n   \n      \n      400 hombres, 50 sucumbieron; en esta vez nos socorrió Dios el Todopoderoso, y á El\n         se tributen loas y gracias.\n         \n      \n      CAPÍTULO XIV\n      \n      REGRESA DON PEDRO DE MENDOZA Á ESPAÑA Y MUERE EN EL VIAJE\n      \n      \n      En este pueblo permanecimos por espacio de 4 años. Mas nuestro capitán general, thonn Pietro Mantossa, agobiado de sus dolencias, ya no podía mover ni manos ni pies, y había gastado en\n         este viaje 4.000 ducados en oro; ya no podía quedarse más tiempo con nosotros en este pueblo y se volvió con dos\n         pequeños parckhadienes (bergantines) á Bonas Ayers á juntarse con los 4 navíos grandes [de los que tomó dos] con 50 hombres y partió\n         para Hispanien. Mas cuando llegaron como á medio camino, la mano de Dios, que todo lo puede, cargó\n         sobre él, así que murió miserablemente. ¡Dios le tenga misericordia!\n      \n      \n      El, empero, nos había prometido, antes de dejar-\n      \n      \n      \n      \n   \n",
  id: 21
});
index.addDoc({
  // section: null,
  title: "p160",
  layout: "textoporpagina",
  content: "\n   \n      \n      nos, que al punto de llegar él ó los navíos á España, mandaría otros 2 al Rio della Plata, lo que también se consignó fielmente en su testamento y se cumplió. Así, pues, luego\n         que los 2 navíos arribaron á Hispania y que lo supieron los del consejo de la Cesárea Majestad, sin demora y en nombre\n         de Su Majestad hicieron aprestar y despacharon al Río della Platta otros navíos con gente, comida y rescates y lo demás que podría faltarles.\n      \n      \n      CAPÍTULO XV\n      \n      ALONSO CABRERA LLEGA AL RÍO DE LA PLATA\n      \n      \n      El capitán de estos 2 navíos se llamaba Aluiso Gabrero (Alonso Cabrera), y se traía 200 Españoles y víveres como para 2 años; llegó á Bonas Ayers, á donde los otros 2 navíos habían quedado, con los 160 hombres, el año 1538.\n      \n      \n      Y cuando llegó el capitán Aluiso Gabrero á la isla de los Tyembús á verse con nuestro capitán Johan Eyollas se dispuso á despachar un navío\n         \n      \n   \n",
  id: 22
});
index.addDoc({
  // section: null,
  title: "p161",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      nuevamente á Hispienia, porque así era la voluntad y mandamiento del Concejo de la Cesárea Majestad, que\n         se le haga saber al dicho Concejo cómo eran los arreglos en aquella tierra y en qué\n         estado se hallaba.\n      \n      \n      Después de todo esto, Joann Eyollas, nuestro capitán general, hizo junta con Aluiso Gabrero y con Mart[i]no Thoming[o] Ayona (Domingo Martínez de Irala) y otros de sus capitanes. También se resolvió que se pasase revista de la gente,\n         y se halló que con los nuestros y los otros recién llegados de Hispanien, había 550 hombres; se separó, pues, 400 hombres para sí, y los restantes 150 los\n         dejaron en los Tiembús, porque no alcanzaban los navíos; á éstos les nombraron un capitán llamado Carollus Doberin para que los mande y gobierne: éste\n         \n      \n   \n",
  id: 23
});
index.addDoc({
  // section: null,
  title: "p162",
  layout: "textoporpagina",
  content: "\n   \n      \n      en otro tiempo había sido paje de Su Cesárea Majestad.\n      \n      \n      CAPÍTULO XVI\n      \n      PARTEN EN BUSCA DEL PARAGUAY Y LLEGAN Á LOS CORONDAS\n      \n      \n      Después de esto, pasado el acuerdo de los capitanes, partimos con los 400 hombres en 8 pequeños navíos\n         (ó) parchadines (bergantines) aguas arriba del Paranaw, en busca de otra agua corriente llamada Paraboe (Paraguay), adonde viven los Caríos que tienen trigo turco (maíz), y una raíz con el nombre de manteochade (mandioca) y otras raíces como padades (batatas) y manteoch propie y mandeoch mandepore. La raíz padades (batatas), se parece á la manzana y es del mismo sabor; mandeoch propie sabe á castaña; de man-\n          \n      \n      \n   \n",
  id: 24
});
index.addDoc({
  // section: null,
  title: "p163",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      deoch poere se hace vino, que beben los Indios. Estos Caríos tienen pescado y carne, y unas ovejas muy grandes como las mulas de esta tierra (Alemania); iten más tienen chanchos del monte, avestruces y otras salvajinas; iten más gallinas y gansos en gran abundancia.\n      \n      \n      Así, pues, partimos del puerto Bon Esperainso (Buena Esperanza) con los dichos 8 navíos parckhadienes, y el primer día, á las 4 leguas de camino, llegamos á una nación con el nombre de\n         Karendos (Corondas). Ellos se mantienen de carne y pescado, son fuertes de 12.000 hombres, todos aptos\n         para la pelea. Esta nación se parece á la anterior, es decir, á los Tiembú usan estrellitas en las narices, y son bien formados de cuerpo; iten las mujeres son horrorosas, viejas y mozas, con las caras arañadas y siempre ensangrentadas;\n         iten visten, como los Tiembú, un corto paño de algodón que las cubre del ombligo á las rodillas, como ya \n      \n      \n   \n",
  id: 25
});
index.addDoc({
  // section: null,
  title: "p164",
  layout: "textoporpagina",
  content: "\n   \n      \n      se dijo antes. Estos Indios tienen gran copia de pieles de nutria; iten muchas cannaon (canoas) ó esquifes. Ellos se compartieron con nosotros de su pobreza, como ser, carne, pescado [y pieles];\n         nosotros les dimos abalorios, rosarios, espejos, peines, cuchillos [y anzuelos]; 2\n         días permanecimos con ellos, y nos dieron 2 Caríos cautivos que eran de ellos: éstos\n         deberían servirnos de baqueanos y ayudarnos con la lengua. \n      \n      \n      CAPÍTULO XVII\n      \n      LLEGAN Á LOS GULGAISES Y MACHKUERENDES\n      \n      \n      De allí, seguimos nosotros adelante hasta llegar á otra nación, que se llaman Gulgeissen, que alcanzan á ser unos 40.000 hombres de pelea, se mantienen de pescado y carne,\n         también tienen 2 estrellitas en las narices; iten más se hallan á unas 30 millas (leguas) de camino de los Carendes (Corondas); hablan una sola lengua con los Tiembú y Carendes; viven en una laguna que mide de largo 6 millas (leguas) por cuatro de ancho\n         \n      \n   \n",
  id: 26
});
index.addDoc({
  // section: null,
  title: "p165",
  layout: "textoporpagina",
  content: "\n   \n      del lado izquierdo del Parnau; 4 días nos quedamos con ellos; compartieron también con nosotros de su pobreza,\n         como igualmente nosotros de la nuestra con ellos.\n      De allí seguimos adelante sin encontrar más Indios por 18 días; después dimos con\n         un agua que corre tierra adentro, y allí encontramos mucha gente llamada Machkuerendes. Estos no tienen más comida que pescado y algo de carne; son fuertes como de unos\n         18.000 hombres de pelea, tienen muchas canaen (canoas) ó esquifes; nos recibieron bien á su modo haciéndonos parte de su miseria. Ellos viven del otro\n         lado del Parnaw, esto es, á la derecha; hablan otra lengua, se ponen 2 estrellitas en las narices.\n         Altos y bien formados los hombres, las mujeres empero son horrorosas, como se dijo\n         ya. Están á 64 meil (leguas) de los Gulgaises.\n      Y cuando se cumplieron los 4 días de estar con ellos, hallamos estirada en la tierra\n         una serpiente extremadamente grande, que medía 25 pies de largo y gruesa como un hombre, overa de negro y amarillo; y\n         la matamos con un arcabuz. Y eso que la vieron los Indios se maravillaron de su tamaño,\n         \n         \n   \n   \n",
  id: 27
});
index.addDoc({
  // section: null,
  title: "p166",
  layout: "textoporpagina",
  content: "\n   \n      \n      porque jamás habían visto otra igual. Esta serpiente, según nos contaron, los tenía mal á los Indios; porque cuando se bañaban en el agua\n         siempre solía estar oculta en el agua, envolvía á los Indios con la cola y zambulliendo\n         con ellos se los tragaba; así que muchas veces Indios desaparecían sin que se supiese\n         la suerte que habían corrido. Yo mismo medí esta serpiente con carne y todo, así que\n         me doy cabal cuenta de como era de larga y gruesa. Esta serpiente después los Indios\n         la despedazaron, la asaron, la hicieron hervir y se la comieron en sus casas.\n      \n      \n      \n      CAPÍTULO XVIII\n      \n      LLEGAN Á LOS ZECHENNAUS SALUAISCHCO Y MEPENES\n      \n      \n      De allí navegamos el Paranaw arriba y después de 4 días de viaje llegamos á una nación que se llama Zechennaus Saluaischco (Chaná-Salvajes), [son] gente petiza y gruesa, no tienen más de comer que pescado y miel. Esta gente,\n         tanto hombres como mujeres, mozos como viejos, andan en cueros vivos, así como fueron\n         lanzados al mundo,\n      \n   \n",
  id: 28
});
index.addDoc({
  // section: null,
  title: "p167",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      de suerte que no visten ni un trapillo ni cosa alguna que les sirva para tapar las\n         vergüenzas; están de guerra con los Machueradeiss; y su carne es la de ciervos, chanchos del monte, avestruces y conejos, que parecen ratones, pero sin la cola.\n      \n      Esta nación está á 18 millas (leguas) de los Machueradeis. Esta jornada la hicimos en 4 días. Permanecimos sólo una noche con ellos, porque\n         ni para ellos tenían de comer; es una nación que se parece á los salteadores de caminos\n         de nuestro país. Viven ellos á unas 20 millas (leguas) del agua (el río), para evitar que los tomen de sorpresa sus enemigos. Pero en esta ocasión\n         habían bajado al agua 5 días antes de llegar nosotros para proveerse de pescado y\n         para pelear con los Machurades; son fuertes de unos 2.000 hombres.\n      \n      \n      De allí partimos y llegamos á una nación que se llaman Mapenuss (Mepenes). Estos son fuertes como de 100.000 hombres, viven en todas partes de aquella tierra,\n         que se extiende por unas 40 millas (leguas) á uno y otro viento, pero se los puede reunir á todos por tierra y agua\n         en 2 días; tienen más canoas ó esquifes que cualquier otra\n         \n      \n   \n",
  id: 29
});
index.addDoc({
  // section: null,
  title: "p168",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      nación de las que hasta allí habíamos visto; en cada una de estas canoas ó esquifes\n         cabían hasta 20 personas.\n      \n      \n      Esta gente nos salió al encuentro por agua en son de guerra, con 500 canoas ó esquifes, pero sin sacarnos mayor ventaja, les matamos á muchos con nuestros arcabuces, porque hasta entonces no habían visto arcabuces ni cristianos. Mas cuando llegamos\n         á sus casas no les pudimos sacar ventaja alguna, porque el lugar distaba una milla (legua) de camino del agua Paranaw, donde teníamos los navíos, y sus pueblos estaban rodeados de agua muy profunda á\n         todos vientos, así que no les pudimos hacer mal alguno, ni quitarles nada; y como\n         hallamos 250 canoas, ó esquifes, las quemamos y destruimos. Tampoco nos pareció prudente\n         apartarnos demasiado de nuestros navíos, porque recelábamos que nos pudiesen atacar\n         por el lado opuesto; así, pues, nos volvimos á los navíos; porque la guerra que ellos\n         hacen es sólo por agua.\n      \n      \n      Hasta estos Mapenus, desde la antedicha nación que acabamos de dejar (se cuentan) 95 millas (leguas) de camino.\n      \n   \n",
  id: 30
});
index.addDoc({
  // section: null,
  title: "p169",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      CAPÍTULO XIX\n      \n      LLEGAN Á LOS KUEREMAGBEIS Y AGÁ\n      \n      \n      Desde allí á los 8 días llegamos á un agua corriente llamada Paraboe (Paraguay); por ella navegamos aguas arriba. Allí encontramos muchísima gente, (que se llaman)\n         Kueremagbeis, que no tienen más de comer que pescado y carne y pan de San Juan ó cuerno de cabra (algarrobo), de lo que hacen vino; esta gente nos trató muy bien y nos proporcionó cuanto nos\n         faltaba. Son altos y corpulentos, así hombres como mujeres. Estos hombres se horadan\n         las narices y en la aberturita meten una pluma de papagayo; las mujeres se pintan la parte inferior de la cara con unas rayas largas de azul,\n         que les duran por toda la vida; y se tapan las vergüenzas con un pañito de algodón desde el ombligo hasta las rodillas. Hay desde los dichos Mapenniss hasta estos Kurgmaibeis 40 millas (leguas) de camino; paramos 3 días con ellos.\n      \n      \n      De allí llegamos á una nación llamada Aigeiss (Agazes), tienen pescado y carne; iten son altos\n         \n      \n   \n",
  id: 31
});
index.addDoc({
  // section: null,
  title: "p170",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n       y bien formados, uno y otro sexo; las mujeres son lindas, se pintan y se tapan las\n         vergüenzas.\n      \n      \n      Eso que llegamos adonde ellos estaban, se presentaron de guerra dispuestos á pelearnos;\n         y con esto creían no dejarnos pasar adelante; cuando esto vimos y que no había más\n         remedio, nos encomendamos á Dios, el Todopoderoso, y nos preparamos en orden de batalla\n         por agua y por tierra, los peleamos y acabamos á muchísimos de los Aigas, y ellos nos mataron 15 hombres. Dios los favorezca á todos. Estos Aeiges son buenos guerreros, los mejores que hay, si es por agua, pero por tierra no lo\n         son tanto.\n      \n      \n      Con tiempo habían hecho huir á sus mujeres é hijos, del mismo modo habían ocultado\n         la comida y cuanto tenían, así que no les pudimos quitar ni aprovechar nada. Mas cómo\n         les fué al fin es lo que á su tiempo se dirá. \n      \n      \n      Su pueblo está cerca de un agua corriente (río) que se llama Jepedy (Ipiti), se halla en la otra banda del Paraboe, nace de la sierra del Perú, de una ciudad llamada Duchkameyen (Tucumán). A los Aeiges de los dichos Kuremagbeis son 35 milla (leguas) de camino.\n      \n   \n",
  id: 32
});
index.addDoc({
  // section: null,
  title: "p171",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      CAPÍTULO XX\n      \n      LOS PUEBLOS CARÍOS\n      \n      \n      Después de esto tuvimos que dejar á estos Aygass y llegamos á una otra nación, llamada Caríes (Caríos), están á 50 millas (leguas) de camino de los Aygas; allí Dios, él que todo lo puede, nos dió su santa bendición, porque estos Caríos\n         tenían trigo turco ó meys (maíz) y manndeochade (mandioca), padades (batatas), manndeos perroy, mandeporre, manduris (manduvis), vachgekhue, también pescado y carne, ciervos y chanchos del monte, avestruces, ovejas de la tierra (guanacos), conejillos, gallinas y gansos; también tienen miel, de la que se hace vino, en mucha abundancia, iten hay muchísimo algodón en la tierra.\n      \n      \n      La tierra de estos Caríos es de mucha extensión, casi 300 millas (leguas) de ancho y largo, son hombres petizos y gruesos y más capaces de ser-\n      \n   \n",
  id: 33
});
index.addDoc({
  // section: null,
  title: "p172",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      vir á otros. Iten los varones tienen en el labio un agujero pequeño en el que meten un cristal amarillo,\n         que en lengua de ellos se llama parabol (barbote), de dos jemes de largo y grueso como el canuto de una pluma. Esta gente,\n         hombres y mujeres, andan en cueros vivos, tal como Dios los echó al mundo. Entre estos\n         Indios el padre vende á la hija, iten el marido á la mujer, si esta no le gusta, también el hermano vende ó permuta á la\n         hermana; una mujer cuesta una camisa, ó un cuchillo de cortar pan, ó un anzuelo ó\n         cualquier otra baratija por el estilo.\n      \n      \n      Estos Caríos también comen carne humana, cuando se ofrece, es decir, cuando pelean y toman algún\n         enemigo, sea hombre ó mujer, y como se ceban los chanchos en Alemania, así ceban ellos\n         á los prisioneros; pero si la mujer es algo linda y joven, la conservan por un año\n         ó más, y si durante ese tiempo no alcanza á llenarles el gusto la matan y se la comen,\n         y con ella hacen fiesta solemne, ó como si fuese para una boda; mas si la persona\n         es vieja la hacen trabajar en la labranza hasta que se muere.\n      \n      \n      Esta gente es la más caminadora de cuantas naciones hay en el Río delle Plata; son grandes guerreros por tierra. Sus pueblos ó ciudades están en las alturas del\n         agua  (río) Paraboe.\n      \n   \n",
  id: 34
});
index.addDoc({
  // section: null,
  title: "p173",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      CAPÍTULO XXI\n      \n      DESCRIBE LA CIUDAD DE LAMBARÉ Y SU CAPTURA\n      \n      \n      Y este pueblo antes se llamó, en lengua de Indios, Lambere (Lambaré); la ciudad de ellos está rodeada con 2 pallersaide (palizadas) de madera, cada poste del grueso de un hombre; y la una pallersaide está á 12 pasos de la otra; los postes están enterrados ó clavados en hondura de\n         6 pies, y se levantan del suelo lo que puede alcanzar un hombre con la punta de su\n         tizona.\n      \n      \n      Iten habían cavado unos fosos, también á distancia de 15 pies del muro de esta su ciudad\n         habían dejado unos hoyos en que podían pararse 3 hombres, adentro habían clavado (como\n         para que no sobresaliesen) estacones de palo duro y puntiagudos como aguja; y habían\n         tapado estos hoyos con paja y ramas cubiertas de tierra y pasto, á fin de que cuando\n         nosotros los Cristianos persiguiésemos á los Caríos ó atacásemos su ciudad, cayésemos en estos hoyos; pero fueron tantos los hoyos cavados,\n         que al fin los mismos Indios se caían en ellos.\n         \n      \n   \n",
  id: 35
});
index.addDoc({
  // section: null,
  title: "p174",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      Como por ejemplo cuando nuestro capitán general Jann Eyollas puso en orden á toda nuestra gente menos 60 hombres que dejó de guardia en los par(k)adiennes (bergantines), y con ella llevó el ataque contra Lambore, la ciudad de ellos, y nos divisaron estando nosotros como á un tiro largo de arcabuz\n         de distancia, siendo ellos unos 40.000 bien armados con arcos y fleschen (flechas), y nos mandaron decir que nos retirásemos á los parckhadienes y nos volviésemos; porque así nos proveerían de comida y de lo demás que nos hacía\n         falta, y que con esto nos fuésemos en sana paz, que de no se convertirían en enemigos\n         nuestros; mas esto de ningún modo convenía á nuestro capitán general ni á nosotros;\n         porque la tierra y su gente nos parecía bastante bien con su abundancia de comida;\n         y sabido era que en los últimos 4 años no habíamos probado ni visto siquiera bocado\n         de pan, y sólo con pescado y carne nos habíamos alimentado.\n      \n      \n      Entonces empuñaron los Caríos sus arcos y sus rodelas, con ellos en las manos nos recibieron y ésta fué la bienvenida que nos dieron. Ni\n         aun así quisimos nosotros hacerles mal, y les rogamos por\n         \n      \n   \n",
  id: 36
});
index.addDoc({
  // section: null,
  title: "p175",
  layout: "textoporpagina",
  content: "\n   \n      tercera vez que se mantuviesen de paz [porque deseábamos ser sus amigos]; mas ellos\n         no quisieron hacer caso, porque no habían experimentado lo que eran las rodelas y\n         los arcabuces nuestros. Y cuando ya nos pusimos cerca de ellos les hicimos un descarga\n         con nuestras bocas de fuego; eso que la oyeron y vieron que su gente caía al suelo,\n         y, que no asomaban ni jara ni flecha alguna y sólo sí un agujero en el cuerpo, se llenaron de espanto, les entró\n         miedo y al punto huyeron en pelotón y se caían unos sobre otros como perros; y tanto\n         fué el apuro de meterse en su pueblo que como unos 200 Caríos cayeron ellos mismos\n         en sus ya dichos hoyos durante el descalabro.\n      Después de esto nosotros los Cristianos nos acercamos al pueblo de ellos y lo atacamos,\n         mas ellos se defendieron lo mejor que pudieron, hasta el tercer día. Como ya no podían\n         resistir más y temían por las mujeres é hijos, que también tenían consigo en la ciudad,\n         nos pidieron misericordia prometiendo complacernos en todo con tal que les perdonásemos\n         las vidas. También le trajeron á nuestro capitán Jann Eyollass 6 mujeres, de las que la mayor tendría unos 18 años; iten le presentaron también 8 venados, ciervos y otras salvajinas más. De ahí se empeñaron con nosotros para\n   \n   \n",
  id: 37
});
index.addDoc({
  // section: null,
  title: "p176",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      que nos quedásemos con ellos, y le regalaron á cada soldado 2 mujeres, para que nos\n         sirvan en el lavado y cocina. También nos dieron comida y de cuanto nos hacía falta.\n         Así de esta manera se hizo la paz entre nosotros.\n      \n      \n      \n      CAPÍTULO XXII\n      \n      LA ASUNCIÓN FUNDADA. GUERRA DE LOS AGÁ\n      \n      \n      Después de esto se vieron obligados los Caríos á levantarnos una gran casa de piedra, tierra y madera, para que si con el andar\n         del tiempo llegase á acontecer que se levantasen contra los Cristianos, tuviesen estos\n         un amparo y pudiesen defenderse. Tomamos este pueblo de los Caríos el día de Nostra Singnora de Sunsión [ganado el año 1536] y se llama todavía Nostra Singnora de Sunsión esta su ciudad; en esta escaramuza cayeron de los nuestros 16 hombres; y quedamos\n         allí 2 meses largos. A estos Caríos desde los Aygaysen (Agaces) hay\n         \n      \n   \n",
  id: 38
});
index.addDoc({
  // section: null,
  title: "p177",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      30 millas (leguas) y desde la isla Bon Esperainso, esto es, Guete Hofnung (Buena Esperanza) donde viven los Tiembus, cerca de 335 millas (leguas) de camino.\n      \n      \n      Así celebramos un contrato con los Caríos, por el que se obligaban y prometían acompañarnos á la guerra y auxiliarnos\n         con 8.000 hombres contra los antedichos Aygaissen (Agaces). \n      \n      \n      Después que nuestro capitán general hubo arreglado todo esto, sacó él 300 Españoles\n         con más los Caríos estos y navegó aguas abajo, y después por tierra las 30 millas (leguas), hasta donde los dichos Aigais vivían, de quienes y de cómo nos trataron se dijo ya en el Cap. XIX. Los encontramos en el mismo lugar en que los dejamos, y los sorprendimos, sin que\n         nos sintiesen, en sus casas, porque aun dormían, entre las 3 y 4 de la mañana; porque\n         los Caríos los habían descubierto ó espiado; allí matamos chicos y grandes dando muerte\n         á todos; porque es costumbre de los Caríos, cuando guerrean y salen ganando, que matan\n         á todos, y no se compadecen de nadie.\n      \n      \n      Después de esto tomamos nosotros 500 cannanon (canoas) ó esquifes y quemamos todos los pueblos que pudimos hallar é hicimos mucho daño. A los 4 meses\n         vinieron algunos de los Aygaissen,\n      \n      \n   \n",
  id: 39
});
index.addDoc({
  // section: null,
  title: "p178",
  layout: "textoporpagina",
  content: "\n   \n      \n      que no habían tomado parte en la tal escaramuza, por no haberse hallado en sus casas\n         y pidieron perdón. Este se lo tuvo que conceder nuestro capitán general según orden\n         de la Cesárea Majestad, que se había de perdonar á los Indios hasta la tercera vez;\n         pero había de ser así que si alguno se alzase por tercera vez, debería quedar preso\n         [ó de esclavo] por toda su vida.\n      \n      \n      CAPÍTULO XXIII\n      \n      LOS PAYAGUÁ. VIAJE DE DESCUBRIMIENTO\n      \n      \n      Después de esto permanecimos nosotros 6 meses más en esta ciudad Nostra Singnora de Sunsión, en Alemán — Unnser Trauen Himelfart (El Tránsito de N. S.),  y descansamos esa temporada. Por ese tiempo hizo nuestro\n         capitán Jann Eyollas que estos Caríos le contasen de una nación llamados Pienbaís (Payaguá); contestaron ellos, que de esta ciudad Sunsión hasta los Pienbas había 100 millas (leguas) de camino, aguas arriba del  Paraboe (Paraguay). Otra vez hizo preguntarles nuestro capitán á los Caríos, si también ellos, los\n      \n   \n",
  id: 40
});
index.addDoc({
  // section: null,
  title: "p179",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      Pienbass (Payaguá) tenían comida, y qué era lo que no les gustaba; iten, la clase de gente que era y cuáles sus defectos; así contestaron ellos, los Piembas no tienen más comida que pescado y carne, iten cuerno de cabra, ó algarabo (algarroba) ó pan de San Juan; de estos cuernos de cabra (vainas de algarroba) hacen ellos miel que comen con el pescado; también de esto\n         hacen vino, y es dulce como la hidromel en Alemania.\n      \n      \n      Y luego que nuestro capitán Jann Eyolias supo todo esto de los Caríos les mandó que cargasen 5 navíos con comida de trigo turco (maíz) y de lo demás que había en el país, lo que se había de hacer plazo de 2 meses, porque\n         en este tiempo también él y los suyos se prepararían para el viaje, y visitarían en\n         primer lugar una nación llamada Charchareis (¿Jarayes?), la primera después de los Paimbas (Payaguá).\n      \n      \n      Entonces se obligaron los Caríos á prestarse siempre y ser obedientes y á cumplir\n         en todo lo que el capitán mandase. Así consiguió también nuestro capitán de los marineros\n         que acabasen de aprestar los navíos para realizar este viaje.\n      \n      Cuando todo aquello quedó arreglado y lis-\n         \n      \n   \n",
  id: 41
});
index.addDoc({
  // section: null,
  title: "p180",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      \n      to, y cargado el bastimento en los navíos, hizo nuestro capitán que se reuniese toda\n         la gente y de los 400 hombres separó 300 bien armados, y á los 100 los dejó en la\n         antedicha ciudad Vordelesso (Fortaleza), esto es, Nostra Singnora de Sunssión, donde en aquel tiempo vivian los susodichos Caríos.\n      \n      \n      De ahí navegamos aguas arriba y encontramos á cada 5 millas (leguas) de camino un pueblo de los dichos Caríos, asentados sobre el agua (rio) Peroboe; [estos] nos trajeron á los Cristianos lo necesario y comida de pescado y carne,\n         gallinas, gansos, ovejas de los Indios [y] avestruces. Mas cuando al fin llegamos al pueblo de los Caríos que se llama Weybingon (Guayviaño) que cae á 80 millas (leguas) de la ciudad Nostra Singnora de Sunsión, allí tomamos nosotros de estos Caríos comida y todo lo demás que nos hacia falta\n         y de ellos pudimos conseguir.\n      \n   \n",
  id: 42
});
index.addDoc({
  // section: null,
  title: "p181",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      CAPÍTULO XXIV\n      \n      CERRO DE SAN FERNANDO Y VIAJE Á LOS PAYAGUÁ\n      \n      \n      De allí llegamos á un cerro llamado S. Ferdinannt, que se parece al Pogenperg (Bogenberg); allí encontramos á los susodichos Pienbas; á estos de Weibingen (Guayviaño) hay 12 millas (leguas) de camino; y nos salieron á recibir de paz, pero con mala intención, como\n         lo sabréis más tarde. Nos llevaron á sus casas y nos dieron de comer pescado y carne\n         y cuernos de cabra, ó pan de San Juan (algarroba). Así permanecimos nosotros 9 días con estos Pienbass.\n      \n      \n      Después de lo cual nuestro capitán hizo preguntar al principal de ellos lo que sabía\n         de una nación que se llama Carchkareisso; dijo él, que no sabía nada de cierto de la tal nación, no siendo lo que por casualidad\n         habían oído; que debían hallarse ó vivir lejos de allí tierra adentro, y que debían\n         tam-\n      \n   \n",
  id: 43
});
index.addDoc({
  // section: null,
  title: "p182",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      \n      bién tener mucho oro y plata; pero ellos, los Pienbas, no habían visto nada. También nos contaron que los Karkeis eran gente entendida, como nosotros los Cristianos, y que tenían mucho de comer,\n         trigo turco (maíz), mandeoch (mandioca), manduiss (maní), padades (batatas), wackekhue, mandeoch proprie, mandepore y otras raíces más, carne de las ovejas de los Indios, antas, esta una bestia como un burro, pero que tiene patas como una vaca, y el cuero grueso\n         y obscuro; ítem venados, conejillos, gansos y gallinas en gran cantidad. Pero ni uno solo de los Piembas lo había visto personalmente, y sólo lo sabía de oídas; mas nosotros experimentamos\n         como era la cosa.\n      \n      \n      Después de esto nuestro capitán general pidió algunos Pyenbas, para que fuesen con él tierra adentro; se prestaron de buen grado, y al punto el\n         principal Pyenbas separó 300 Indios para que lo acompañasen y cargasen la mantención, y lo demás que\n         les hacía falta, y mandó nuestro capitán que se aprestase la gente esta, porque él\n         partiría dentro de 4 días; en seguida hizo que de los 5 navíos los 3 zarpasen, y en\n         los 2 metió él 50 hombres de nosotros los Cristianos, desde que nosotros deberíamos\n         permanecer allí por 4 meses durante su\n      \n      \n   \n",
  id: 44
});
index.addDoc({
  // section: null,
  title: "p183",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      ausencia, y si llegase el caso que el capitán no se volviese á juntar con nosotros\n         dentro del plazo estipulado, deberíamos nosotros regresar con estos 2 navíos á la\n         ciudad Nostra Singnora de Sunsión. Aconteció, pues, que aunque nosotros permanecimos con los Payenbas durante 6 meses no supimos nada de nuestro capitán Jan Eyollas; ya no teníamos cosa que comer, así que nos vimos obligados á viajar con este nuestro\n         dicho capitán Marthin Thomingo Ayolla de vuelta á la ciudad Signora (Asunción), según lo mandado por nuestro capitán general.\n      \n      \n      CAPÍTULO XXV\n      \n      AYOLAS VIAJA POR TIERRA DE LOS PAYAGUÁ Y NAPERÚ\n      \n      \n      Y primero después que partió de los Pyembas, llegó él á una nación llamada Naperus, que son amigos de los Pyembas y no tienen más que pescado y carne; es una nación de mucha gente. De estos Naperus también nuestro capitán general se separó algunos que le sirviesen de baqueanos;\n         pa-\n      \n   \n",
  id: 45
});
index.addDoc({
  // section: null,
  title: "p184",
  layout: "textoporpagina",
  content: "\n   \n      saron en seguida por muchas naciones con grandes penas y trabajo, y se les hizo gran\n         resistencia; también murieron de hambre en este viaje la mitad del número de los Cristianos;\n         y en eso llegó á una nación llamada Payssenos (Payzunos); de allí no pudo pasar más adelante, sino que se vió obligado á retroceder con la\n         gente, menos tres españoles, que por estar enfermos tuvo que dejar atrás entre los\n         Paysennos. Así él, nuestro capitán Jann Eyollas salverende (sano y salvo) en cuanto á su persona, es decir gesunndt, regresó con la gente á los Naperus; allí quedaron y descansaron hasta el tercer día, porque la gente estaba muy cansada\n         y enferma, y ya no les quedaba más munición.\n      Estando las cosas así convinieron los Naperrus con los Payenbas y se obligaron entre sí que al capitán Jann Eyollas y á los suyos les darían muerte ó los acabarían, como que así más tarde también lo\n         cumplieron. Y eso que Jann Eyollas, el capitán, con los Cristianos, marchaban de los Naperrus á los Pyembas, á medio camino como estaban y al descuido fueron sorprendidos por los Naperrus y Pyembas con gran fuerza en un espeso bosque; porque los Naperrus y Pyennbas, según su convenio de sorprender[los] en la selva por donde tenían que pasar [los]\n         Cristianos, embistieron sin piedad al capitán y [á los] Cristianos, como si fuesen\n         perros rabiosos, y acabaron de matar y destruir á los debilitados Cristianos junto\n         con el capitán Jann\n         \n   \n   \n",
  id: 46
});
index.addDoc({
  // section: null,
  title: "p185",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      Eyollas de suerte que ni uno de ellos escapó. Dios se apiade de ellos y de todos nosotros\n         y nos tenga misericordia.\n      \n      \n      CAPÍTULO XXVI\n      \n      SE SABE DE LA MUERTE DE AYOLAS. ELIGEN Á IRALA\n      \n      \n      Ahora [pues] nosotros los 50 hombres, eso que fuimos al asiento Nostra Singnora de Sunsión y allí esperábamos á Jann Eyollas, el capitán, y á nuestros soldados, supimos como les había ido por un Indio, que era esclavo del finado Jann Eyollas y que él había traído de los Payse[n]os; este gracias á su lengua había escapado, nos contó todo de principio á fin como\n         había sucedido; sin embargo no nos fué posible creerle. Y durante el año que per-\n      \n   \n",
  id: 47
});
index.addDoc({
  // section: null,
  title: "p186",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n       manecimos en la dicha ciudad Nostra Singnora, y sin poder conseguir la menor noticia ni voz alguna de como les había ido á nuestra\n         gente, sólo los Caríos le anunciaban á nuestro capitán Domenigo Eyolla ser voz general que nuestros Cristianos tenían que haber perecido todos á manos de\n         los Peyenbass, como se decia. Pero nosotros no queríamos creer que fuese cierto mientras no lo\n         oyésemos declarar á un Payenbas que la tal cosa era así. A los 2 meses de este tiempo llegaron allí los Caríos y\n         le trajeron á nuestro capitán Marthin Domenigo Eyolla (Irala) 2 Payenbas, que habían tomado prisioneros; cuando nuestro capitán los vió les preguntó si ellos\n         habían tenido parte en la muerte de los Cristianos; aquí mintieron mucho y dijeron\n         que él, nuestro capitán general, y su gente aun no habían llegado de tierra adentro.\n         En seguida el capitán consiguió del justicia y del maestre de campo que se interrogase\n         á los Payenbas con apremio, porque así se averiguase la verdad; y se les dió tormento á tal punto que declararon y confesaron ser verdad que ellos habían muerto á los\n         Cristianos con su capitán. Después de esto nuestro capitán Marthin Eyolla hizo condenar á los dos Bayenbas y atarlos á un palo con una gran hoguera á la vuelta para quemarlos.\n      \n   \n",
  id: 48
});
index.addDoc({
  // section: null,
  title: "p187",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Mientras esto nos pareció bien á los Cristianos todos tomarlo á Marthin Domenigo Eyolla (Irala) para capitán general nuestro, por lo mismo que se había portado tan bien con los\n         soldados, hasta tanto que la Cesárea Majestad otra cosa proveyese.\n      \n      \n      CAPÍTULO XXVII\n      \n      BAJADA DE IRALA Á BUENOS AYRES EN 1541. TRAGEDIA DE CORPUS CHRISTI\n      \n      Así pues mandó él, Marthin Eyolla (Irala), y ordenó que se preparasen 4 navíos de los parckhadienes (bergantines) y tomó de los [soldados 150 hombres], á los demás los dejó él en la dicha ciudad\n         Nostra Singnora de Sunsión y nos dió á entender que quería reunir en la dicha ciudad, Nostra Singnora de Sunsión, á la demás gente que había dejado en los Tiembus, de qué se trató ya en la p. 12, ítem 160 Españoles, que habían quedado en Bonas Ayers en los 2 navíos, de los que se dijo ya en la p. 10.\n      \n      En seguida partió Marthin Domenigo Eyolla\n         \n      \n   \n",
  id: 49
});
index.addDoc({
  // section: null,
  title: "p188",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      (Irala) con los 4 navíos parckhadines aguas abajo del Paraboe y Paraneu. Y antes de esto, cuando él aun no había llegado á los Tienbus, se resolvió por los Cristianos, que allí nos esperaban, á saber, un capitán, que\n         se llamaba Francisco Riss (Ruiz), y también Jann Pabón, un sacerdote, y un secretario, que se llamaba Jann Eronandus (Hernández), como gobernadores sustitutos de los Cristianos, que se había de dar muerte al Indio Principal de los Tiembus, y á ciertos otros Indios con él, como que ellos así ejecutaron tamaño crimen, y\n         los Indios, que por tan largo tiempo los habían servido en toda cosa buena, fueron\n         pasados escandalosamente de la vida á la muerte, antes que llegáramos nosotros con\n         Marthin Domenigo Eyolla (Irala) nuestro capitán.\n      \n      Ahora pues, cuando Martín Domenigo Eyolla (Irala), nuestro capitán, llegó con nosotros del asiento Nostra Singnora de Sunsión á los dichos Tiembus [y Cristianos, mucho le pesó esta matanza y la\n      \n   \n",
  id: 50
});
index.addDoc({
  // section: null,
  title: "p189",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      huida de los Thyembus]; mas no halló qué hacerles y dejó bastimento y provisiones en Corporis Christi, también 20 hombres de los nuestros con un capitán Anthoni Manthossa y mandó, so pena de la vida, que no se fiase por nada de los Indios, sino que de\n         día y de noche se asegurase bien con guardias, y si sucediere que llegasen los Indios\n         y quisiesen volver á ser amigos que los tratasen bien y les mostrasen la vieja amistad;\n         pero que todo fuese sin descuidarse, mirando bien que no les pasase ningún perjuicio\n         ni á él ni á los Cristianos.\n      \n      Después de esto nuestro capitán general Marthin Doménigo Eyolla (Irala) se llevó consigo de allí las (3) personas, como causa efficiens de la matanza, á saber, el Francisco Reyss, el sacerdote, Jann Pabón y Jann Eronandus, que era el secretario; y cuando estaban por partir y hacerse á la vela, se presentó\n         allí un principal [de] los Tyembus, que se llamaba Zeiche Legemi, gran amigo que fué de los Cristianos, pero que á pesar de esto tenía que hacerles\n         el gusto á los Indios por causa de su mujer é hijos y amigos, y dijo á nuestro capitán\n         Marthin\n         \n      \n   \n",
  id: 51
});
index.addDoc({
  // section: null,
  title: "p190",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      Thoménigo Eyolla (Irala), que debería llevarse á todos los Cristianos consigo, porque toda la tierra\n         estaba alzada contra ellos y querían matarlos y expulsarlos del país; á esto te contestó\n         el capitán general Domenigo Eyolla (Irala), que no tardaría en volver, que su gente se bastaba para con los Indios;\n         y dijo más, que Zeiche Leymi debería mudarse con mujer é hijos, amigos también, y con toda su gente á los Cristianos;\n         á lo que dijo él, Zeiche Lyemi, que así lo haría.\n      \n      Al punto partió nuestro capitán general Marthin Doménigo Eyolla (Irala) aguas abajo y nos dejó solos allí.\n      \n      \n      CAPÍTULO XXVIII\n      \n      TRAICIÓN DE LOS TIMBÚ Y ASALTO Á CORPUS CHRISTI\n      \n      Unos 8 días después sucedió que el dicho Indio Tyembus, Zeiche Lyemi, envió á uno de sus hermanos, llamado Suelaba, con engaño, y rogó á nuestro capitán Annthoni Mannthossa que le mandase 6 Cristianos con arcabuces y otras armas, que\n      \n   \n",
  id: 52
});
index.addDoc({
  // section: null,
  title: "p191",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       quería con ellos traernos su familia con los suyos, y en adelante vivir con nosotros;\n         y además nos hizo saber, que él se recelaba de los Tiembús, y que sin esto no podría él llevar á cabo su propósito con seguridad. El se pronunció\n         de tal manera [que nos convenció de sus muy buenas intenciones y nos prometió también]\n         que él traería consigo comida y cuanto nos hacía falta; pero todo esto era picardía\n         y engaño. En su mérito le prometió nuestro capitán que no sólo 6 hombres le daría\n         sino 50 Españoles bien armados con armas de defensa y ofensa; lo que encargó nuestro\n         capitán á estos 50 hombres fué, que no se descuidasen y estuviesen bien prevenidos,\n         á fin de que no cayesen en alguna celada de los Indios.\n      \n      Pero no había más que un medio cuarto de milla (legua) de distancia entre nosotros los Cristianos y estos Tyembus, y cuando estos\n         50 hombres nuestros llegaron á las casas de ellos en la plaza se les acercaron los\n         Tyembus y les dieron un beso, como Judas el traidor al Señor Chriesto y les trajeron de comer pescado y carne; mientras comían los Cristianos se les fueron\n         encima estos amigos y otros Tyembus que estaban ocultos en las casas y en los rastrojos y les bendijeron la mesa de tal\n         suerte que ni uno de ellos salió de allí con vida, salvo un solo muchacho que se llamaba\n         Kalterón. Dios los favorezca y tenga misericordia de ellos y de todos nosotros. Amén.\n      \n      \n   \n",
  id: 53
});
index.addDoc({
  // section: null,
  title: "p192",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Una hora después marchó el enemigo, fuerte de 10.000 ó más hombres, contra nuestro\n         pueblo, nos asediaron y creyeron podernos vencer, mas esto no sucedió ¡Dios, el Señor\n         sea loado! y durante 14 días acamparon fuera de nuestro pueblo y nos asaltaban día\n         y noche. En esta ocasión ellos se habían fabricado lanzas largas con las espadas, como se lo habían aprendido á los Cristianos; con estas nos embestían y se defendían.\n         Y aconteció en el mismo día en que los Indios con toda la fuerza nos llevaron el ataque\n         nocturno y nos quemaron las casas, que al punto corrió nuestro capitán, Anthony Manthossa con un montante á un portón; allí estaban algunos Indios tan ocultos que no se los podía ver, y estos\n         ensartaron al capitán con las lanzas, de suerte que ni ¡ay! no dijo ¡La misericordia\n         de Dios le valga! Ya los Indios no podían estarse más tiempo, porque no tenían qué\n         comer, por lo que tuvieron que levantar campamento y mandarse mudar. Después de esto\n         nos llegaron 2 bergantincitos con provisiones de Bonas Ayers que nos mandaba nuestro capitán Marthin Doménigo Eyolla (Irala) para que nos sostuviésemos allí hasta la llegada del dicho capitán, con lo que nos\n         alegramos mucho, no así los que lle-\n      \n   \n",
  id: 54
});
index.addDoc({
  // section: null,
  title: "p193",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      garon con los 2 berg(en)tin (bergantines), que sentían la muerte de los Cristianos.\n         Así, pues, acordamos entre los dos bandos y tuvimos á bien no quedarnos más tiempo\n         allí en Corporis Chriesti, en los Tyembus, sino que nos fuimos todos juntos aguas abajo y llegamos á Bonas Ayers, donde estaba nuestro capitán Marthin Doménigo Eyolla (Irala); con esto se alarmó mucho y fué grande su pesar por la gente que se perdió;\n         porque no atinaba á saber qué sería de él [ni lo que haría con nosotros], porque ya\n         no teníamos víveres.\n      \n      \n      CAPÍTULO XXIX\n      \n      LLEGA LA CARABELA DE SANTA CATALINA Y VIAJE DEL AUTOR Á ENCONTRAR Á CABRERA\n      \n      Pero unos 5 días después de nuestro arribo á Bonas Ayers nos llegó de Hispanien una pequeña nao, llamada carabelle (carabela) y nos trajo buenas nuevas, á saber, que un navío más había arribado á Sannta Katarina, cuyo capitán, del mismo, llamado Aluiso Gabrero (Alonso Cabre-\n         \n      \n   \n",
  id: 55
});
index.addDoc({
  // section: null,
  title: "p194",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      ra), había traído consigo de Hispanien 200 hombres. Ni bien supo nuestro capitán las tales nuevas hizo aprestar de los 2\n         navíos uno, que era un galiber (galeón) y lo despachó con el primero á S. Katarina en Presael (Brasil), que está á 300 millas (leguas) de Bonas Ayers, y le nombró un capitán, llamado Consalto Manthossa (Gonzalo de Mendoza) para que mandase el navío, y le encargó que tan luego como llegase á S. Catarina, en Pressel (Brasil), donde estaba el navío, había de cargar su nao con víveres de arroz, mandeoch (fariña?) y otra comida más que le pareciese bien.\n      \n      Con esto el tal capitán Consaillo Mannthossa (Gonzalo Mendoza) pidió á nuestro capitán general Marthin Domenigo Eyolla (Irala) que le diese ó facilitase 6 compañeros de la gente de guerra, para que pudiese darse\n         vuelta; él se lo prometió; así pues nos llevó á mí y á 5 Españoles consigo, más 20\n         hombres de la gente de guerra y marineros.\n      \n      Eso que partimos de Bonas Ayers al mes lle-\n         \n      \n   \n",
  id: 56
});
index.addDoc({
  // section: null,
  title: "p195",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n         gamos á Sannt Katarina, allí nos encontramos con el susodicho navío, que de Hispania había llegado, y al capitán junto con toda su gente; nos alegramos en grande, y nos\n         quedamos 2 meses allí mismo, y cargamos nuestro galeón de arroz, mandeoch (fariña?) y trigo turco (maíz) en mucha cantidad, de suerte que ya no podíamos meter más en los 2 navíos; después\n         de esto nosotros y los 2 navíos y el capitán Aluiso (Cabrera) y toda su gente juntos salimos en viaje de S. Katarina á Bonas Ayers en Inndiam (Indias), y de allí llegamos como á las 20 millas (leguas) y dimos con un agua corriente Parnaw Wassu (Paraná Guazú). Esta agua tiene de ancho en la boca 40 millas (leguas) y sigue de este ancho por 80 millas (leguas) de camino, hasta que uno llega á un puerto llamado S. Gabriel; allí el agua Parnau tiene 8 millas (leguas) de ancho. Así pues llegamos, como se dijo, á 20 millas (leguas) en esta agua, la víspera de Todos Santos, y arribamos al anochecer á este punto con los dos navíos reunidos; y nos preguntamos\n         el uno al otro si estábamos ya en el agua corriente Pernau; y aunque aseguraba nuestro piloto, que habíamos llegado ya al agua corriente, el\n         otro piloto le decía á su capitán, que estábamos aun á 20 millas (leguas) de distancia de ese punto. Porque en el mar cuando 2, 3 ó más navíos andan\n         en com-\n         \n      \n   \n",
  id: 57
});
index.addDoc({
  // section: null,
  title: "p196",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      pañía, siempre se juntan á puestas de sol; entonces se averiguan entre sí cuanto han\n         caminado día y noche, y cual el rumbo á tomar en el siguiente, con arreglo á lo cual\n         poderse reunir.\n      \n      Después de esto el piloto nuestro volvió á preguntar al otro piloto, si quería seguirlo;\n         mas éste le dijo que ya era casi de noche, y que por eso se quedaría mar afuera hasta\n         la mañana de alba y que no estaba para tomar tierra á esas horas; este piloto era\n         algo más avisado que el nuestro, como se verá más tarde. Así nuestro navío siguió\n         su camino y se separó de la otra nao.\n      \n      \n      CAPÍTULO XXX\n      \n      NAUFRAGIO CERCA DE SAN GABRIEL. LOS SOBREVIVIENTES LLEGAN Á BUENOS AYRES Y PASAN A\n         LA ASUNCIÓN. \n      \n      \n      De este modo caminamos nosotros á obscuras y se levantó un recio temporal en la mar;\n         y fué el caso que á eso de las 12 de la noche vimos nosotros la tierra, pero antes\n         que pudiésemos largar nuestra ancla. Después encalló el navío, y nos faltaba una buena milla (legua) de distancia para llegar á tierra. Entonces comprendimos que no nos quedaba\n         más remedio que clamarle á Dios Todopoderoso que nos favorezca y nos tenga misericordia.\n         Y fué en el mismo instante que nuestro na-\n         \n      \n   \n",
  id: 58
});
index.addDoc({
  // section: null,
  title: "p197",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      vío se hizo cien mil pedazos y se ahogaron 15 hombres y 6 indios; algunos escaparon\n         sobre trozos de madera, yo y 5 compañeros más nos salvamos en el mástil; de las 15 personas no pudimos recoger un solo cuerpo. El Señor Dios nos favorezca,\n         á ellos y á nosotros todos.\n      \n      Después de esto nos vimos obligados á caminar á pie 10 millas (leguas); habíamos perdido toda nuestra ropa en el navío, y los víveres también;\n         y nos tuvimos que remediar con las raíces y frutillas que hallábamos en el campo, hasta que llegamos á un puerto ó ensenada llamada S. Gabrihel; allí, encontramos al susodicho navío con su capitán, que había llegado 3 días antes\n         que nosotros.\n      \n      Y se lo habían comunicado á nuestro capitán Marthín Domenigo Eyolla (Irala) en Bonas Ayers; él en persona se afligió sobremanera por nosotros y creyó que habíamos perecido,\n         y por ello mandó decirnos algunas misas.\n      \n      Y después que nosotros llegamos á Bonas Ayers, nuestro capitán Marthín Doménigo Eyolla (Irala) hizo llamar á nuestro capitán y al piloto ó timonel; y á no ser los grandes empeños\n         que por él se\n         \n      \n   \n",
  id: 59
});
index.addDoc({
  // section: null,
  title: "p198",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      hicieron, lo hubiese hecho ahorcar al piloto; así y todo tuvo que pasar 4 años largos\n         en la barquilla pergentin (bergantín).\n      \n      \n      Ahora ya que estaba toda la gente reunida en Bonas Ayers mandó en seguida nuestro capitán general, que se aprontasenlos pergantín (bergantines), y reunió toda la gente y quemó los navíos grandes y reservó la ferretería;\n         y después navegamos nosotros aguas arriba del Parnau y al antedicho asiento Nostra Singnora de Sunssión; allí permanecimos 2 años largos esperando que la Cesárea Majestad otra cosa proveyese.\n      \n   \n",
  id: 60
});
index.addDoc({
  // section: null,
  title: "p199",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XXXI\n      \n      LLEGA ALVAR NÚÑEZ CABEZA DE VACA Á SANTA CATALINA Y PASA Á LA ASUNCIÓN\n      \n      Mientras esto llegó un capitán general de Hispania, que se llamaba Albernuso Capesa de Wacha; al tal capitán lo había nombrado la Majestad Cesárea y venía con 400 hombres y 30\n         caballos en 4 navíos, de los que 2 eran mayores y 2 Karabella (carabelas); y cuando él arribó con esta gente á un puerto ó bahía en Presel, que se llama Wilsey (Mbiaça?), mas este puerto se llama también S. Katarinna;  allí quiso él cargar bastimento ó víveres; y cuando el capitán despachó 2 carabelas unas 8 millas (leguas) del dicho puerto á buscar víveres, les sobrevino tal tempestad, que las\n         2 tuvieron que quedar en el mar ó piélago y lo único que de ellas volvió fué la tripulación\n         que en ellas había; cuando el capitán general se impuso de la tal cosa, ya no se quiso\n         exponer con sus 2 navíos mayores al viaje por agua; acaso porque no sería mucha la\n         gana que tenía es que se recelaba\n         \n      \n   \n",
  id: 61
});
index.addDoc({
  // section: null,
  title: "p200",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       de la cosa; y pasó por tierra hasta el Río delle Platta, y llegó hasta nosotros en el asiento Nostra Singnora en El Paraboe y lo condujeron 300 de los 400 hombres; los demás habían perecido de hambre y de\n         enfermedad.\n      \n      Este capitán demoró 8 meses de tiempo en el camino y hay 500 millas (leguas) de la ciudad Nostra Singnora hasta este pueblo ó bahía de S. Katarina. Traía pues consigo de Hispania su gubernazión (provisión?) de la Cesárea Majestad, y decía que Marthín Domenigo Eyolla (Irala), nuestro capitán, tenía que entregarle su gubernazión (gobernación) y que toda la gente había de acatarlo.\n      \n      A todo esto el capitán Marthín Domenigo Eyolla (Irala) y toda la gente se declaró estar pronta y obediente, pero con esta salvedad,\n         que él Albernuso Capossa d[e] Wacha le mostrase algo como que él había obtenido y recibido la tal provisión de la susodicha\n         Cesárea Majestad; misterio este que el común de la gente no pudo esclarecer, sino\n         que los sacerdotes y 2 ó 3 de los oficiales lo verificaron y con ellos él, Albernuss Capossa etc., mandó y gobernó. Pero de cómo le fué es lo que se contará más tarde.\n      \n   \n",
  id: 62
});
index.addDoc({
  // section: null,
  title: "p201",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XXXII\n      \n      CABEZA DE VACA MANDA UNA EXPEDICIÓN A LOS SURUCHACUISS Y OTROS INDIOS\n      \n      Ahora este dicho Capessa etc. hizo pasar revista de toda la gente; y así halló él que eran 800 hombres por\n         toda cuenta; también por este tiempo hizo él hermandad con Marthín Domenigo Eyolla (Irala) y se juraron fraternidad, así que este tenía que hacer y que entender con la gente\n         no menos que antes.\n      \n      En seguida él, Albernuso Capessa de Wacha mandó aprestar 9 navecillas pergentin (bergantines) y quiso navegar el Paraboe aguas arriba, hasta donde se pudiese; y así por este tiempo, mientras se alistaban\n         los navíos, envió 3 bergentín (bergantines) con 115 hombres, que deberían subir hasta donde pudiesen y hallasen\n         Indios que por allí tuviesen manndeoch (mandioca ó fariña) y algo de trigo turco, esto es, maíz; y nombró para que los mandasen á 2 capitanes llamados Anthoni Gabrero (Antonio Cabrera) y Tigo Tobellino (Diego Tabellino?); y llegaron primero á una nación\n      \n   \n",
  id: 63
});
index.addDoc({
  // section: null,
  title: "p202",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      que se llaman Suruchakuiss; (Cacocies Chaneses?) estos tienen algo de trigo turco (maíz) y mandeoch (fariña) y otras raíces, como manduies (maní) que se parece á las avellanas, ítem pescado y carne. Los hombres usan en los labios una piedra lisa y grande como\n         ficha de damas; las mujeres andan con las vergüenzas por adorno.\n      \n      \n      Con los de esta nación dejamos nuestras navecillas y algunos de nuestros compañeros\n         en ellas para su resguardo, y en seguida nosotros nos metimos tierra adentro  unos\n         4 días de camino; así hallamos un pueblo que era de los Caríos, los que más ó menos eran fuertes de 300 hombres; también tomamos nosotros noticia\n         de la tierra y ellos nos dieron buenos informes. Después de esto volvimos nosotros\n         á las navecillas y navegamos el Paraboe aguas abajo y llegamos á una nación llamada los Acherery; allí encontramos una carta de nuestro capitán general Albernuso Capessa de Bacha; esta carta decía, que había que ahorcar al indio Principal de allí, Achere. Nuestro capitán obedeció la tal orden sin perder un momento; por ello y en seguida\n         se armó una guerra grande, como se oirá después. Ya que esto    \n      \n   \n",
  id: 64
});
index.addDoc({
  // section: null,
  title: "p203",
  layout: "textoporpagina",
  content: "\n   \n      \n       se había cumplido, á saber que el dicho Indio había tenido que recibir la muerte\n         de esta manera, emprendimos nosotros viaje aguas abajo al asiento Nostra Singnora de Sunssión, y anunciamos á nuestro capitán general Albernuiso Capessa de Bacha lo que nosotros en este viaje habíamos hecho y visto. \n      \n      CAPÍTULO XXXIII\n      \n      GUERRA CONTRA TABARÉ. ÉSTE ES VENCIDO\n      \n      \n      Después de ésto, dijo él al principal de los Indios que estaba en el asiento Nostra Singnora que tenía que facilitarle 2.000 Indios y marchar con los Cristianos aguas arriba;\n         los Indios se ofrecieron de buena gana y prometieron obedecerle, y agregaron esto\n         más, que él, nuestro capitán general, debería pensarlo bien primero y no lanzarse\n         así no más tierra adentro; porque toda la provincia Dabre (Tabaré) de los Caríos estaba alzada con todo su poder y se disponían á marchar contra los Cristianos; porque\n         este Dabre (Tabaré) era hermano del Acheres (Aracaré) que había sido ahorcado, por eso quería él vengar aquella muerte.\n      \n   \n",
  id: 65
});
index.addDoc({
  // section: null,
  title: "p204",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Así pues, nuestro capitán general tuvo que dejarse de este viaje y á causa de esto\n         prepararse y marchar contra sus enemigos. En seguida mandó de acuerdo con su hermano\n         de adopción Marthin Domenigo Eyolla (Irala), que tomase 400 hombres y 2.000 Indios y marchase contra los susodichos Daberes (Tabarés) ó Caríos y que á todos ellos juntos los expulsase ó destruyese. Marthin Doménigo Eyolla (Irala) obedeció la tal orden y marchó con esta gente de la ciudad Nostra Singnora y avanzó contra los enemigos, y primero hizo requerir al Dabero (Tabaré) de parte de la Cesárea Majestad. Mas este Dabere (Tabaré) no quiso ceder ni prestarse; tenía mucha gente reunida y su pueblo bien\n         fortificado con palizadas que es un muro hecho de maderos; de estos muros tenía el pueblo 3 á la redonda y\n         zanjas muy anchas, como consta en el capítulo XXI; mas nosotros ya desde antes sabíamos qué valor darles á las tales cosas.\n      \n      Así acampamos hasta el cuarto día en que ganamos la primera ventaja, y 3 horas antes\n         de amanecer entramos al pueblo y matamos á todos los que encontramos y tomamos á muchas\n         mujeres; que nos sirvieron de mucho después. En la tal escaramuza 18 Cristianos murieron\n         y muchísimos de los nuestros fueron heridos; ítem sucumbieron\n         \n      \n   \n",
  id: 66
});
index.addDoc({
  // section: null,
  title: "p205",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       muchos de nuestros Indios; pero no nos llevaron mucha ventaja, porque de la parte\n         de ellos los muertos de los Canibelless (antropófagos) alcanzaron á los 3.000.\n      \n      No se pasó mucho tiempo sin que viniesen Dabere (Tabaré) con su gente á pedirnos perdón y nos rogaron que les quisiésemos devolver\n         sus mujeres é hijos, porque así también él, Dabere (Tabaré), y su gente nos servirían á los Cristianos y serían nuestros súbditos. Lo\n         cual tuvo que prometerle nuestro Capitán según las instrucciones de la Cesárea Majestad.\n      \n      \n      \n      CAPÍTULO XXXIV\n      \n      CABEZA DE VACA SUBE Á SAN FERNANDO Á LOS PAYAGUÁ, GUASARAPOS Y SACOCÍES\n      \n      Después que estas paces se ajustaron volvimos á tomar aguas abajo del Paraboe (Paraguay) á reunimos con el capitán general de todos A[l]bernuso de Bacha y le hicimos relación de como nos había ido; así pues, resolvió él realizar su ya\n         pensado viaje de marras, y pidió á Dabere (Tabaré), que ya estaba pacificado, 2.000 Indios arma-\n         \n      \n   \n",
  id: 67
});
index.addDoc({
  // section: null,
  title: "p206",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      dos que marchasen con él; y manifestaron su buena voluntad, y prometieron que siempre\n         la tendrían; también mandó él que ellos, [los] Caríos cargasen 9 navecillas bergentin (bergantines). Eso que todo estuvo dispuesto, de los 800 hombres Cristianos tomó él 500 y á los\n         300 los dejó él, en la ciudad Nostra Singnora de Sunssión, nombró un capitán llamado Jan Salleysser (Juan de Salazar), en seguida emprendió la marcha aguas arriba del Paraboe con los 500 Cristianos y 2.000 Indios.\n      \n       Los Caríos tenían 83 conanen (canoas) ó esquifes y nosotros los Cristianos teníamos 9 navíos bergentin (bergantines), y en cada uno de ellos 2 caballos, pero á estos se los hizo caminar por tierra 100 millas (leguas), y nosotros marchamos por agua hasta llegar á un cerro llamado Sannt Ferdinandt, allí se embarcaron los caballos y de allí caminamos y llegamos á los Payenbas (Payaguá), enemigos nuestros; mas ellos no se dejaron estar sino que huyeron presto de allí\n         con mujeres é hijos después de haber quemado sus casas. En seguida caminamos unas\n         100 millas (leguas) más de marcha, en que no encontramos gente alguna;\n         \n      \n   \n",
  id: 68
});
index.addDoc({
  // section: null,
  title: "p207",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      y después llegamos á una nación llamada Baschereposs (Guaxarapos) tienen pescado y carne; es una gran nación y se extiende por unas 100 millas (leguas) y tienen hartas khannean (canoas), y baste con lo dicho de esto; sus mujeres se tapan las vergüenzas, no quisieron\n         saber nada con nosotros, sino que huyeron de allí. De estos llegamos á otra nación,\n         llamada de los Sueruekuessis (Sacocíes), donde en aquella ocasión estuvieron los 3 antedichos navíos; está á las 90 millas (leguas) de los Basherepass (Guaxarapos); nos recibieron muy de á buenas, cada cual tiene casa sola para sí con\n         su mujer é hijos. Los hombres tienen una rodelita de madera como ficha de damero colgada\n         en el lóbulo de la oreja; las mujeres tienen una piedra gris de cristal que les cuelga\n         de los labios, es del largo y grueso de un dedo, son hermosas y andan en cueros vivos\n         como nacieron. Item tienen algo de trigo turco (maíz), manndeoch (mandioca ó fariña), manduiss (maní), padades (batatas), pescado y carne en abundancia; es una gran nación; nuestro capitán les hizo preguntar\n         de una nación llamada\n         \n      \n   \n",
  id: 69
});
index.addDoc({
  // section: null,
  title: "p208",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Karkhareiss, Carcará, iten más de los Caríos; pero ellos no le pudieron dar noticias de los Karckhareiss, pero en cuanto á los Caríos dijeron ellos, que estos estaban aun en sus casas; mas\n         esto no era asi.\n      \n      Después de lo cual nuestro capitán mandó que se aprestasen; él quería marchar tierra\n         adentro y dejó 150 hombres allí con los navíos y víveres para 2 años y se llevó los\n         350 hombres Cristianos más los 18 caballos y los 2.000 Caríos, que con nosotros salieron\n         de la ciudad de Nostra Singnora de Sunssión, y se metió tierra adentro; pero poco fué el provecho que él sacó, porque no era\n         el hombre para tanta empresa; á esto se agregaba que los capitanes y caballeros todos\n         eran sus enemigos; á tal grado de demasía había llegado él en su modo de portarse\n         con la gente de guerra.\n      \n      Así pues, caminamos durante 18 días, en que no hallamos ni Caríos ni otra población\n         alguna y no eran muchos los víveres [que nos quedaban], así que por eso nuestro capitán\n         tuvo que contra-\n         \n      \n   \n",
  id: 70
});
index.addDoc({
  // section: null,
  title: "p209",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      marchar á los navíos, y cuando dimos la vuelta nosotros envió él á un Español llamado\n         Francisco Rieffere (Ribera) con otros 10 Españoles armados para que pasasen adelante un buen trecho, les encargó\n         que caminasen por 10 días, y si fuese el caso que durante este tiempo no diesen con\n         gente alguna habían de volver atrás á buscarnos en los navíos, donde nosotros los\n         esperaríamos. Allí encontraron ellos una gran nación de los Indios, que también tienen\n         algo de trigo turco (maíz), manderoch, (mandioca) y otras raíces más. Los Españoles no se atrevieron á dejarse ver y se\n         volvieron á nuestro real y dieron relación de ello al capitán general. Así pues, no\n         hubo más sino que él en persona había de marchar tierra adentro, y se vió obligado\n         á desistir por causa de las aguas que se lo impedían.\n      \n      \n      CAPÍTULO XXXV\n      \n      VIAJE DE HERNANDO RIBERA Á LOS OREJONES \"SUERUCHUESSIS\" Y Á LOS \"ACHARÉS\"\n      \n      Mandó empero y ordenó disponer un navío con 80 hombres y nos nombró un capitán, lla-\n         \n      \n   \n",
  id: 71
});
index.addDoc({
  // section: null,
  title: "p210",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      mado Ernando Rieffere (Ribera) y nos despachó aguas arriba del Paraboe á descubrir una nación llamada Scheruess (Xarayes), de allí precisamente [deberíamos] meternos tierra adentro unos 2 días de camino,\n         y no más, trayéndole en seguida relación de la tierra y de los mismos Indios. Y fué\n         que en el primer día que nos separamos de ellos, á las 4 millas (leguas), llegamos nosotros á otra nación llamada de los Sueruckuessis (Orejones) y situada en la otra tierra; ellos viven en una isla, [de] casi 30 millas (leguas)\n         de ancho y la rodea el agua corriente Paraboe, tienen para comer mannderoch (mandioca), meiss (maíz), manduischs (maní), padat[e]s (patatas), mandepore [mandeoch], porpy, buchakhu y otras raíces más, ítem pescado y carne, son los hombres y las mujeres precisamente\n         como entre los antedichos Sueruekuissy (Sacocíes). Nos quedamos este día con ellos y al otro volvimos á partir; y nos llevamos\n         10 Kannanen (canoas) ó esquifes de estos Indios para que nos mostrasen el camino, cazaban salvajinas del campo dos\n         veces por día, como también pescaban, y con ello nos obsequiaban. En este viaje demoramos\n         nosotros 9 días de tiempo y en seguida llegamos á una nación llamada de los Acheress (Ya- \n         \n      \n   \n",
  id: 72
});
index.addDoc({
  // section: null,
  title: "p211",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      caré) Hay muchas poblaciones unas cerca de otras; es gente alta y gruesa, hombres\n         y mujeres, que los iguale nada he visto en todo el Río delle Plata. Estos Achares (Yacarés) están á 36 millas (leguas) de los dichos Sueruekuessis más inmediatos; no tienen más de comer que pescado y carne; las mujeres no se tapan\n         las vergüenzas. Con estos Acheress nos quedamos un día entero. Aquí los dichos Sueruekuessis se volvieron otra vez con sus 10 Cannanen (canoas) á su pueblo. En seguida Ernando Rieffere (Ribera), nuestro capitán, les hizo saber á los Acheres (Yacaré) que tenían que mostrarnos\n         el camino á los Scherues (Jarayes), y se prestaron ellos gustosos, y nos acompañaron de su pueblo con 8 cananen (canoas) y nos procuraban, dos veces por día, pescado y carne, con lo que nosotros\n         teníamos de comer en abundancia.\n      \n      Por qué esta nación se llama Acheres (Yacaré), es la razón (esta): achere es un pez que tiene el cuero tan duro que uno no lo puede herir con un cuchillo,\n         ni menos penetrarle una flecha de los Indios; es un pez grande, y les hace mucho mal\n         á los demás peces; item sus huevas ú ovas, que de suyo pone en tierra, á unos dos\n         ó tres pasos del agua, saben como á almizcle; es bueno para co-\n         \n      \n   \n",
  id: 73
});
index.addDoc({
  // section: null,
  title: "p212",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      mer, la cola es lo mejor; lo demás también no es dañoso; vive siempre en el agua.\n         Item aquí en nuestra Alemania se lo tiene por una bestia dañosa y asquerosa y lo llaman basiliesckh (basilisco) y se cuenta, que si uno lo mira á este pescado de suerte que éste le haga llegar\n         el aliento, por fuerza tiene él que morir, lo que es una verdad sin vuelta, porque\n         el hombre tiene que morir y nada es más sabido. También se cuenta que si uno de éstos\n         se cría y es visto en un pozo, que no hay más medio de acabar con este pez que el\n         de mostrarle un espejo y tenérselo por delante, para que allí él mismo se mire, porque\n         así al ver allí su propia fealdad tendrá que caer muerto al punto. Pero las tales\n         consejas del dicho pez son pura fábula y sin valor; porque de ser verdad, cien veces\n         debería haberme muerto, porque más de 3.000 de estos peces he cogido y comido yo;\n         no hubiese escrito tanto acerca de este pez si yo no hubiese tenido una razón conocida:\n         en Munich, en la casa de campo del duque Alberto, nuestro finado señor........\n      \n   \n",
  id: 74
});
index.addDoc({
  // section: null,
  title: "p213",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XXXVI\n      \n      LLEGAN Á LOS \"SCHERUESS\" Y SON BIEN RECIBIDOS POR ELLOS\n      \n      Después de esto llegamos á los Scheruess (Xarayes), hasta donde de los Acheres se cuentan 38 millas (leguas), que las hicimos en 9 días; es una nación grande, pero no era esta justamente\n         la nación en que vivía el rey; mas estos Scherues (Xarayes) con quienes habíamos dado usan bigote y llevan un redondel de palo colgado\n         en el lóbulo de las orejas y la oreja abraza el redondel de palo, cosa que maravilla\n         de ver.\n      \n      Item más los hombres tienen en el labio una piedra ancha de cristal azul muy parecida\n         á una dama. Item más se pintan el cuerpo de azul desde arriba hasta las rodillas,\n         y la cosa se parece á algo como calzas pintadas. \n      \n      Pero las mujeres se embijan de otra manera, también de azul desde los pechos hasta las vergüenzas, tan artísticamente,\n         que así no más, fuera de allí, no se hallaría un pintor que lo imitase; ellas andan\n         como las echó al mundo la madre, y son hermo-\n         \n      \n   \n",
  id: 75
});
index.addDoc({
  // section: null,
  title: "p214",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      sas á su manera, y muy bien que saben pecar estando á obscuras.\n      \n      Con estos Scherues (Xarayes) nos quedamos un día y navegamos desde allí hasta llegar en 3 días á lo\n         de un rey, que está á 14 millas (leguas) de allá [su gente]. Se llaman también Scherues (Xarayes), pero su tierra no tiene más que 4 millas (leguas) de camino de ancho; también tiene él un pueblo situado á orillas del agua\n         Paraboe. Allí dejamos nuestro navío con 12 Españoles, que lo cuiden, para que cuando llegásemos\n         nos sirviese de amparo; les encargamos también á estos Scherues (Xarayes) en el propio pueblo, que tenían que portarse como buenos amigos con los\n         Cristianos, como que también así lo hicieron.\n      \n      Así pues nos quedamos 2 días enteros en el pueblo y nos aprestamos para el viaje y\n         nos tomamos cuanto nos hacía falta; después cruzamos el agua Paraboe y llegamos á lo del rey, allá donde vive en persona. Y allí cuando llegamos nosotros\n         como á una milla (legua) de distancia, entonces nos salió al encuentro el rey de los  Scherues (Xarayes) con 12.000 hombres y tal vez más, en una pampa y en son de paz. El camino\n         por donde andaban ellos era de 8 pasos de ancho; el tal camino estaba entapizado con\n         puras flores y pasto hasta el pueblo, así que no se podía dar con una piedra, palo\n         ó\n         \n      \n   \n",
  id: 76
});
index.addDoc({
  // section: null,
  title: "p215",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      paja alguna; también el rey se traía su música consigo, tal y como el caramillo entre nosotros; también había mandado el rey que\n         para esta ocasión se corriesen venados y otras salvajinas, á uno y otro lado del camino; así por suerte ellos habían cogido\n         30 venados y 20 abestraussen (avestruces), ó nandú (ñandú); y era cosa de alegrarse de ver.\n      \n      Y cuando nosotros hubimos ya llegado á su pueblo, hizo el rey que cada 2 Cristianos\n         entrasen en una casa, y que nuestro capitán junto con su servidumbre pasase á la casa\n         real; después de esto el rey de los Scherues encargó á sus súbditos, que nos diesen lo que nos hacía falta. También el rey reunió\n         su corte á su manera como el más poderoso señor de la tierra; hay que hacerle música\n         á la mesa cuantas veces se le antoja; entonces los hombres y las mujeres más hermosas\n         tienen por obligación que bailarle; el tal baile de ellos es cosa de verse como maravilla,\n         en especial para nosotros los Cristianos, de suerte que uno tiene que olvidarse hasta\n         de su boca.\n      \n      Esta gente se parece á los Scherues (Xarayes), de los que se dijo ya más atrás. Sus mujeres\n         \n      \n   \n",
  id: 77
});
index.addDoc({
  // section: null,
  title: "p216",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      hacen unas mantas grandes de algodón, tan sutiles como tela de Arlas (Arles), en las que ellas después bordan varias figuras como ser venados, avestruces, ovejas de Indias (llamas ó guanacos), ó lo que sea que se puede. En las tales mantas duermen cuando hace frío, ó se sientan\n         sobre ellas, según la necesidad ó el antojo del momento. Estas mujeres son muy hermosas\n         y grandes enamoradas; muy corrientes y de naturaleza muy ardiente á mi modo de ver.\n      \n      Allí nos demoramos unos 4 días, y en ese tiempo el rey preguntó á nuestro capitán\n         cual era nuestro deseo é intención, y hacia donde queríamos marchar. A esto contestó\n         nuestro capitán que él buscaba oro y plata. También le dió el rey una corona de oro\n         que pesaba casi un marco y medio, ítem una plenschen (plancha) de oro, que alcanzaba á jeme y medio de largo y á medio jeme de ancho;\n         también un prusseleh (brazalete) esto es, un medio harnischs (arnés) y otras cosas más de plata, y dijo después á nuestro capitán, que él ya no\n         tenía más oro ni plata y que estas susodi-\n      \n   \n",
  id: 78
});
index.addDoc({
  // section: null,
  title: "p217",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      chas piezas las había tomado de los Amossenes (Amazones) en la guerra en tiempos atrás. Y entonces él se hizo oir acerca de los Amossenes (Amazones) y nos dio á entender cuán grande era su riqueza, así que nos alegramos\n         mucho; y luego al punto preguntó nuestro capitán al rey si podríamos nosotros llegar\n         allí por agua con nuestros navíos y qué distancia habría hasta los dichos Amossenes (Amazones) A lo que contestó el rey, que no podríamos nosotros llegar allí por agua,\n         sino que tendríamos que marchar por tierra y habría que andar 2 meses de tiempo uno\n         en seguida de otro. Así resolvimos nosotros caminar á los dichos Amossenes (Amazones), como se pasará á contar.\n      \n   \n",
  id: 79
});
index.addDoc({
  // section: null,
  title: "p218",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XXXVII\n      \n      BUSCAN Á LOS AMOSENES Y PASAN POR LOS SYEBERIS Y ORTUESES\n      \n      Las mujeres de estos Amossenes no tienen más que un pecho y sólo se juntan con sus maridos 3 ó 4 veces en el año,\n         y si de este contacto con el marido quedan preñadas de varón, se lo mandan ellas á\n         que se esté con el marido; mas si resulta mujer, la conservan á su lado y ellas no\n         más le queman el pecho derecho, para que no pueda criarse más. Pero la razón es esta,\n         para hacerse diestras y poder manejar sus armas, los arcos; porque son mujeres de\n         pelea y hacen guerra contra sus enemigos.\n      \n      También estas mujeres viven en una isla que está rodeada de agua á la vuelta y es\n         una isla grande; si se quiere llegar allá hay que ir en cannaen (canoas); pero en esta isla los Amossenes (Amazones) no tienen ni oro ni [plata], sino en Terra ferma (tierra firme), esto es, tierra adentro, allí donde viven los maridos, ellos son los que tienen\n         grandes riquezas. Es una nación grande y [un] rey poderoso que parece llamarse Jegiuss como también lo demuestra el lugar.\n      \n      \n   \n",
  id: 80
});
index.addDoc({
  // section: null,
  title: "p219",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Ahora nuestro capitán Ernando Rieffiro (Ribera) pidió al dicho rey de los Scherueses (Xarayes) que nos facilitase algunos hombres de su gente, porque él quería marchar tierra adentro\n         y buscar á los susodichos Amossenes (Amazones), para que así los Scherues (Xarayes) cargasen nuestro botín y nos mostrasen el camino; de su parte el rey se\n         hallaba dispuesto, mas demostró á las claras, que la tierra en este tiempo estaba\n         anegada y que no era bueno por ahora viajar tierra adentro; mas nosotros no quisimos\n         creer, sino que le exigimos los Indios, así pues él le dió á nuestro capitán para\n         su persona 20 hombres, que debían cargarle el botín y los víveres, y á cada uno de\n         nosotros 5 Indios para que nos sirviesen y cargasen lo que hacía falta, porque teníamos\n         que caminar 8 días en que no encontraríamos más Indios.\n      \n      Así llegamos á una nación llamada de los Syeberiss (Paresis?); se parecen á los Scherues (Xarayes) en la lengua y en otras cosas. Estos 8 días caminamos nosotros siempre\n         y siempre en el agua hasta la cintura y la rodilla, día y noche, así que de allí no\n         podíamos ni sabíamos como salir. Si se nos ofrecía hacer fuego, teníamos que amontonar\n         trozos grandes unos sobre otros y hacer el fuego encima; y aconteció muchas veces,\n         que la olla en que teníamos la comida junto con el fuego\n      \n      \n   \n",
  id: 81
});
index.addDoc({
  // section: null,
  title: "p220",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      se caían al agua y nos quedábamos por lo tanto sin comer; tampoco teníamos descanso,\n         ni de día ni de noche, á causa de las pequeñas moscas (mosquitos), que no nos dejaban dormir.\n      \n      Así preguntamos nosotros á los Syeberís si aun nos quedaba agua más adelante; dijeron ellos, que teníamos que andar aun 4\n         días enteros por el agua y de ahí todavía más de 5 por tierra, y que así llegaríamos\n         á una nación llamada Ortthuessen (Urtueses); y nos dieron también á entender que éramos nosotros muy pocos, y que convenía nos\n         volviésemos. Mas nosotros no quisimos hacer tal cosa por considerar á los Scherues (Xarayes), antes bien estuvimos por despachar de vuelta á sus casas y su pueblo á\n         los Scherues (Xarayes) que nos acompañaban, mas ellos, los dichos Scherues se negaron á hacerlo, porque su rey les había encargado, que no nos dejasen\n         sino que nos sirviesen mientras no regresásemos nosotros otra vez de tierra adentro.\n         Así pues los dichos Syeberís nos dieron 10 hombres para que junto con los Scherues (Xarayes) nos mostrasen el camino á los Ortheuesen (Urtueses). Así marchamos nosotros 7 días más por el agua que nos daba á la cintura\n         ó á la rodilla. La tal agua estaba tan caldeada como si hubiese estado al fuego; esta\n         agua también teníamos que beber, visto que con otra no contábamos. Pero era cosa como\n         para creer que se trataba de un agua corriente lo que no era así, sino que\n      \n   \n",
  id: 82
});
index.addDoc({
  // section: null,
  title: "p221",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      por aquel tiempo mismo había llovido tanto que la tierra estaba llena de agua, porque\n         la tierra es una planicie llana; con el tiempo quedamos bien escarmentados de la tal\n         agua, como oiréis más tarde.\n      \n      Después de esto el día 9 entre 10 y 11 del día llegamos al pueblo de los Orttheueser (Urtueses), y eso que fueron ya las 12 recien llegamos á la plaza en el pueblo, allí\n         donde estaba la casa del principal de los Ortteuesen.\n      \n      Pero casualmente por ese tiempo había una peste grande entre los Ortthuessen, de pura\n         hambre, porque no tenían qué comer; á causa de que los duckhuss (Tucus) ó langosta por segunda vez y casi por completo les había comido y destruido el maíz y el fruto de los árboles. Cuando nosotros los Cristianos tal cosa comprendimos y\n         vimos nos alarmamos mucho y nos convencimos que no podíamos quedar mucho tiempo en\n         la tierra, porque nosotros tampoco teníamos mucho de comer. Así pues nuestro capitán\n         le averiguó al principal de ellos acerca de los Amosenes (Amazones), y él le contó, que necesitábamos un mes entero hasta llegar á los Amossenes (Amazones), y más aun, que toda la tierra estaba llena de agua, como que al fin y\n         al cabo así se dejaba ver.\n      \n      Aquí fué que el principal de los Ortheueses dió á nuestro capitán 4 plenschen (planchas) de oro y,\n      \n      \n   \n",
  id: 83
});
index.addDoc({
  // section: null,
  title: "p222",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      4 argollas de plata, que se ponen en los brazos; pero las plenschen (planchas) las usan los Indios en la frente como adorno, así como en esta tierra\n         (Alemania) los grandes señores usan ricas cadenas en los cuellos. En cambio de estas cosas nuestro\n         capitán dio á este Indio principal hacha, cuchillo, rosario, tijera y otras baratijas\n         más, de las que se fabrican en Niremberga; de buena gana les hubiésemos sacado más cosas, pero no nos atrevimos, porque nosotros\n         los Cristianos éramos muy pocos, y por lo mismo había que desconfiar; los Indios eran\n         muchos, al grado que yo jamás en todas las Indias he visto pueblo más grande ni más gente junta, y eso que he andado la ceca y la meca.\n         Esta peste de los Indios, por lo que tantos morían de hambre, fué, á no dudarlo, nuestra\n         salvación, porque de lo contrario lo probable es que los Cristianos no hubiesen salido\n         de allí con vida.\n      \n      \n      CAPÍTULO XXXVIII\n      \n      REGRESO DE HERNANDO DE RIBERA. SUBLEVACIÓN DE LA GENTE\n      \n      Después de esto contramarchamos á los antedichos Syeborís y Scherues (Xarayes). Nosotros los Cristianos también estábamos mal provistos de ví-\n      \n      \n   \n",
  id: 84
});
index.addDoc({
  // section: null,
  title: "p223",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      veres, no teníamos otra cosa de comer que una pämb (palma) llamada palmides (palmitos) y cardes (cardos) y otras raíces del campo que se crían bajo de tierra.\n      \n      Cuando llegamos nosotros á los Scherues estaba nuestra gente á la muerte de enferma por causa del agua, y de las necesidades\n         que en este viaje habíamos sufrido; porque por 30 días y noches seguidas habíamos\n         estado en el agua, y de la misma habíamos bebido. Así nos quedamos allí entre los\n         Scherues, donde vive el Rey, unos 4 días; nos trataron muy bien y nos sirvieron al pensamiento,\n         y el Rey encargó á sus súbditos que nos cuidasen y nos diesen cuanto nos hacía falta.\n      \n      Así en este viaje cada uno de nosotros se había ganado un valor como de 200 ducados sólo en mantas de algodón de Indias y plata, que les habíamos comprado á ocultas,\n         y sin que se sepa, por cuchillos, rosarios, tijeras y espejos.\n      \n      Después de todo esto volvimos á navegar aguas abajo á juntarnos con nuestro capitán\n         general Alwiso Capessa de Bacha [Luego que llegamos á los navíos, ordenó él, Albernunzo Capessa de Bacha] que so pena de la vida ni uno de nosotros\n      \n      \n   \n",
  id: 85
});
index.addDoc({
  // section: null,
  title: "p224",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      se moviese de los navíos, y se vino á vernos, él mismo in personâ, é hizo prender á nuestro capitán Ernando Rieffira (Hernando de Ribera), y nos quitó [á los soldados cuanto] habíamos traído de tierra adentro, y por último\n         y para colmo de todo, quería hacer ahorcar en un árbol á nuestro capitán Ernando Rieffere. Mas nosotros, que aun estábamos en el navío bergentin (bergantín) cuando supimos de la tal cosa, armamos un gran alboroto, juntándonos con otros buenos\n         amigos, con que contábamos en tierra, contra nuestro capitán dicho general Alberniso (Alvar Núñez) Capessa de Bacha, es decir, para obligarlo á que soltase y dejase libre á nuestro capitán Ernando Rieffere, como también que nos devolviese íntegramente lo nuestro que nos había robado y quitado,\n         y que si nó, otro tanto le haríamos á él.\n      \n      Cuando él, Aluiso Capessa de Bacha se apercibió del alboroto nuestro, y se dió cuenta de nuestras malas intenciones,\n         tuvo á bien, porque ello no pasase de ahí, poner en libertad á nuestro capitán, nos\n         devolvió también todo lo que nos había quitado y nos habló con buenas palabras, y\n         sólo así quedamos satisfechos. Mas como le fué después bien se enteró él: va en seguida.\n      \n      \n   \n",
  id: 86
});
index.addDoc({
  // section: null,
  title: "p225",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      Y después de todo esto, cuando ya todo había sosegado, pidió él á nuestro capitán\n         Ernando Rieffire (Ribera) y á nosotros que le diésemos una relación de la tierra y que le contásemos\n         como había sucedido que tanto nos habíamos demorado, como que en seguida le dimos\n         una relación, con la que quedó muy contento. Que él así nos había recibido, prendiendo\n         á nuestro capitán, y quitándonos lo nuestro, sólo se debía á que nosotros no habíamos\n         obedecido su mandato; porque él no nos había dado más orden, que la de no pasar más\n         allá de los Scheruyes (Xarayes), y de allí 4 días de viaje la tierra adentro; de todo lo cual debíamos\n         traerle relación y de allí volvernos. Én lugar de lo cual anduvimos 18 días de los\n         Scherues tierra adentro.\n      \n      \n      CAPÍTULO XXXIX\n      \n      IMPOPULARIDAD DE CABEZA DE VACA. MATANZA DE LOS SUERUCUESIS\n      \n      \n      Pero ahora se le antojó al dicho nuestro capitán general, por la relación que le habíamos\n         hecho, marchar con toda la gente á la tierra que nosotros\n      \n      \n   \n",
  id: 87
});
index.addDoc({
  // section: null,
  title: "p226",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      habíamos visitado. Mas nosotros los soldados por nada quisimos consentirlo, ni menos\n         en esta estación en que la tierra está anegada; por otro lado la mayor parte de la\n         gente no solo estaba muy enferma y cansada, sino que tampoco tenía ya mayor respecto\n         por el dicho capitán Aluiso Capessa de Bacha; algo más, era cosa bien sabida entre el común de la gente ó soldados, que se trataba\n         de un hombre que jamás en la vida había tenido idea propia ni habilidad para mandar.\n      \n      Así permanecimos nosotros unos 2 meses entre los susodichos Syeberis (Suruchakuiss?). Por este tiempo una fiebre lo tomó al capitán general Aluiso Capessa de Bacha, así que cayó gravemente enfermo; acaso no se hubiese perdido gran cosa si en esta\n         vez hubiese fallecido; porque lo que era él bien poco valía para con nosotros. En\n         esta tierra de los Suerachkuesys no he visto Indio alguno que alcanzase á los 40 ó 50 años de edad, porque en mi vida\n         he visto tierra más mal sana, por hallarse en una región en que el sol se eleva más;\n         es casi tan apestada como Santo Tomé. Allá entre los Suerukhues ví yo la constelación Ursa Major; porque nosotros habíamos echado menos á\n         \n      \n   \n",
  id: 88
});
index.addDoc({
  // section: null,
  title: "p227",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      las tales estrellas en el cielo desde que pasamos la isla Sant Augo, como se dijo en la foja 4.\n      \n      Pero en esto, nuestro capitán general, con ser que estaba tan enfermo, mandó á 150\n         hombres Cristianos y á 2.000 Indios Caríos, á quienes envió con 4 navios bergentín (bergantines), distancia de 4 millas (leguas) á la isla Sueruekues y les ordenó que matasen y tomasen prisioneros á esta gente Sueruekues, y que cuidasen de acabar con todo el que tuviese 50 ó 40 años de edad. De como los\n         dichos Sueruekues nos habían hospedado antes de esto, ya lo he contado en la foja 33, mas como les correspondimos nosotros y las gracias que les dimos es lo que tengo\n         que recordar. Dios sabe que les obramos injusticia.\n      \n      Y cuando llegamos al pueblo de ellos, que no sospechaban tal cosa, salieron de sus\n         casas á encontrarnos de paz, armados con sus armas, arcos y flechas; mas como en seguida se armase un alboroto entre los Caríos y los Sueruekues, al punto nosotros los Cristianos disparamos nuestros arcabuces y volteamos á muchos; también tomamos hasta unos 2.000 prisioneros, hombres y mujeres,\n         chicos y chicas, después quemamos sus pueblos y les quitamos cuanto tenían: en esa\n         vez se llevó á\n      \n      \n   \n",
  id: 89
});
index.addDoc({
  // section: null,
  title: "p228",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      cabo el pillaje como suele ser de práctica en tales malones.\n      \n      En seguida volvimos á bajar adonde estaba nuestro capitán Aluiso Capessa de Bacha, quien quedó muy contento con esto que habíamos hecho. Después de lo cual, en vista\n         de que la más de la gente nuestra se hallaba enferma, y que le tenía poca ley al capitán\n         general, comprendió él con esto que no remediaría nada con ellos; así pues dispuso,\n         é hizo que preparasen los navíos y juntos navegaron de allí aguas abajo del Paraboe y llegaron á la ciudad Nostra Singnora de Sunsión, donde nosotros más antes habíamos dejado á los otros Cristianos. Allí se enfermó\n         nuestro capitán general de fiebre y se estuvo 14 días metido en su casa: era más por\n         pretexto, y por darse importancia, y no tanto por enfermedad, que no se comunicaba\n         con la gente, pero se había portado con ella de una manera muy impropia; porque un\n         señor ó capitán que pretende gobernar un país ha de dar buena salida á todos, á los\n         más chicos como á los más grandes, y mostrarse bien inclinado á todos los hombres.\n      \n      Iten más, á tal persona le ha de convenir que él se porte y obre según y como ha de\n         ser él acatado y respetado, ser más discreto y saber más que los otros que él manda;\n         porque sienta mal y es bochornoso que un hombre acreciente honores y no\n         \n      \n   \n",
  id: 90
});
index.addDoc({
  // section: null,
  title: "p229",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      también saber; tampoco deberá andar pavoneándose por su alto puesto, despreciando\n         á los demás, como el muy fatuo y orgulloso soldadote Traso en Terencio. Porque cada capitán se nombra para bien de sus lansquenetes y no se recluta la tropa para bien de su capitán.\n      \n      \n      CAPÍTULO XL\n      \n      PRISIÓN DE CABEZA DE VACA. SU DEPORTACIÓN Á ESPAÑA. ELECCIÓN DE MARTÍNEZ DE IRALA\n      \n      \n      Mas en este caso no se guardó respeto alguno á la persona, sino que este nuestro capitán\n         en todas las cosas quiso obedecer á su propia inspiración lleno de humos y de arrogancia.\n      \n      Entonces resolvió todo el común, nobles y plebeyos, hacer junta y asamblea; pretendían prender á este capitán general\n         Aluiso Capessa de Bacha y mandárselo á la Cesárea Majestad, haciéndole saber á Su Majestad las bellas cualidades\n         de aquél, cómo se había portado con nosotros, y cómo había entendido él que debía\n         gobernar, con muchos otros cargos más. En seguida, según lo convenido,\n      \n      \n   \n",
  id: 91
});
index.addDoc({
  // section: null,
  title: "p230",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      se buscaron á estos 4 señores, á saber: el veedor, tesorero y escribano, puestos por la Cesárea Majestad, cuyos nombres eran Aluiso Gabrero (Alonso Cabrera), thonn Francisco Manthossa, Gartzo Hannego (García Benegas), Pfielogo de Gastro (Felipe de Cáceres) y tomaron consigo 200 soldados ó lanskenetes, y después se apoderaron de la persona de Aluiso Capessa de Bacha, nuestro capitán general, cuando él de tal cosa nada sospechaba. Y esto sucedió el\n         día de San Marcos (Abril 25), año de 1553 (1543). Tuvieron preso al dicho Aluisso Capessa de Bacha un año entero hasta que se dispuso un navío llamado Carabela, provisto de víveres y de marineros y de lo que éstos podían necesitar en la mar,\n         en la que en seguida despacharon al tantas veces nombrado Aluiso Capessa de Bacha á Spania junto con dos señores más de los de la Cesárea Majestad.\n      \n      Después de esto no hubo más que elegir á otro que rigiese y gobernase en la tierra,\n         hasta tanto la Cesárea Majestad misma proveyese alguno á la vacante; y en seguida\n         tuvimos á bien, de acuerdo con el parecer y voluntad del común que se eli-\n         \n      \n   \n",
  id: 92
});
index.addDoc({
  // section: null,
  title: "p231",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      giese á Marthin Doménigo Eyolla de capitán, en la misma capacidad con que antes había gobernado la tierra, muy particularmente\n         porque la gente de pelea se llevaba bien con él, y los más estaban contentos con él;\n         esto no obstante, entre ellos había algunos, que habían sido amigos del ya dicho capitán\n         general nuestro que fué Aluiso Capessa de Bacha; á éstos no les hizo mucha gracia la cosa, mas no hicimos mucho caso de ello.\n      \n      Por este tiempo me sentí mal y enfermo de hidropesía que yo y mis camaradas conmigo\n         habíamos sacado de los Orthueses, allí donde por tanto tiempo anduvimos en el agua, como se dijo ya, y fué tan grande\n         la miseria porque pasamos; en esa ocasión enfermaron 80 de los nuestros y sólo unos\n         30 escaparon con vida de sus dolencias.\n      \n   \n",
  id: 93
});
index.addDoc({
  // section: null,
  title: "p232",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XLI\n      \n      DISCORDIA ENTRE LOS CRISTIANOS. ALZAMIENTO DE LOS CARÍOS. YAPIRÚS Y BATATÁES AYUDAN\n         Á LOS ESPAÑOLES.\n      \n      \n      Y cuando ya lo habían despachado á Aluiso Capessa de Bacha á Hispaniam nosotros mismos los Cristianos entramos en tal discordia que ya no podíamos avenirnos,\n         uno con otro nos peleábamos día y noche, de suerte que parecía como si el mismo diablo\n         metido entre nosotros nos mandaba, y nadie se creía seguro con los demás. La tal guerra\n         entre nosotros mismo duró dos años largos por causa de Aluiso Capessa de Bacha; y cuando en este estado de cosas vieron los Caríos, nuestros amigos de marras, que nosotros los mismos Cristianos andábamos desunidos,\n         y cómo nos traicionábamos y dividíamos, no quedaron con muy buena idea de nosotros,\n         sino que se sacaron la cuenta que todo reino que está dividido y se desune tiene que\n         perderse. Por esto entre ellos se arreglaron y convinieron é hicieron reunión al objeto\n         de matarnos á los Cristianos y arrojarnos de la tierra. Mas Dios, el Todopoderoso,\n         ¡loado sea siempre y eternamente! no condescendió con estos Caríos hasta dejar-\n      \n      \n   \n",
  id: 94
});
index.addDoc({
  // section: null,
  title: "p233",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      los que se saliesen con la suya. Porque toda la provincia de los Carios, y otras naciones más, los Aigaiss (Agaces) [también] estaban alzados contra nosotros los Cristianos. Mas cuando esto comprendimos\n         tuvimos que hacer las paces entre nosotros los Cristianos; hicimos también alianza\n         con otras dos naciones llamadas, la primera de los Jheperus (Yapirus), y la segunda de los Batatheiss, (Guatatas); entre las dos serían fuertes como de 5.000 hombres, no tienen más comida que pescado\n         y carne; es gente buena para la pelea por tierra y por agua, pero los más por tierra.\n         Sus armas son tardes (dardos) del largo de media lanza, sin ser tan gruesos, y para puntas les hacen unas como de arpón ó de centella de un pedernal; y bajo del cinto llevan una clava, de 4 jemes de largo con una porra en la punta. Cada indio de éstos de pelea carga 10 ó 12 palillos [ó sea, tantos]\n         como quiere, y de un buen jeme de largo, y adelante una punta, que es el diente ancho\n         y largo de un pescado, llamado en español polmeda (palometa), se parece á una tenca; este diente corta como una navaja de afeitar. Pero ahora\n         les contaré lo que con los palillos hacen ó para qué les sirven.\n      \n      \n   \n",
  id: 95
});
index.addDoc({
  // section: null,
  title: "p234",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      En primer lugar, pelean con los susodichos tardes (dardos), y es así que si triunfan de sus enemigos, y éstos tratan de huir, entonces\n         se dejan de los tardes (dardos) y corren en pos de ellos, y en seguida arrojan aquéllos las macanas á los pies de éstos, que tienen que caer al suelo; y una vez que los han volteado,\n         poco cuidado se les da, si los tales aun están medio vivos ó muertos del todo, sino\n         que al instante les siegan la cabeza con el dicho diente de pescado; y á la tal degollatina\n         la hacen con tal rapidez, que en un instante puede uno acabar ó pasar de una vida\n         á la otra; después meten el diente bajo del cinto ó lo que sea con que se ciñen.\n      \n      Pero ahora véase lo que después hace él con la cabeza del hombre y para qué le sirve.\n         Pues es el caso, si la ocasión se ofrece, después de una escaramuza como ésta, toma\n         él la cabeza humana y la desuella, cabello y todo, de las orejas arriba, en seguida\n         toma este pellejo, tal como se ha dicho, lo rellena y deja que se endurezca, en seguida\n         toma el pellejo ya duro y lo arregla sobre una pértiga y lo planta en su casa ó habitación para recuerdo, tal y como un caballero, ó capitán,\n         en este país (Alemania) que tiene un pendón lo cuelga en las iglesias.\n      \n      Pero con esto vuelvo yo al asunto principal, y de estas cosas trataré muy en breve;\n         este ejército de Jeperuss y Batateiss se nos juntó en número de unos 1.000 hombres de pelea; y con esto nos alegramos mucho.\n      \n   \n",
  id: 96
});
index.addDoc({
  // section: null,
  title: "p235",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XLII\n      \n      LOS CRISTIANOS, CON AUXILIO DE LOS YEPERÚ Y BATATÁ, GANAN LOS PUEBLOS DE LA FRONTERA\n         Y CARAYEBÁ\n      \n      \n      En seguida salimos de la ciudad Nostra Singnora de Sunssión, con nuestro capitán general, 350 Cristianos y estos 1.000 Indios, con los que á\n         cada Cristiano le tocaban de á 3 Indios que le sirvan, como lo había dispuesto y ordenado\n         nuestro capitán; y después de esto llegamos á 3 millas (leguas) de donde nuestros enemigos estaban acampados en la pampa fuertes de unos\n         15.000 hombres de los Caríos y se habían colocado muy bien; cuando nosotros nos pusimos como á una media legua\n         de ellos no quisimos hacer nada en ese mismo día, porque estábamos muy cansados y\n         también llovía, por eso hicimos alto en el bosque, adonde acampamos esa misma noche;\n         y al otro día les llevamos el ataque, como á las 6, y como á las 7 nos encontrámos\n         con ellos, los Caríos enemigos, y nos batimos como hasta las 10, hora en que tuvieron\n         que disparar y tomaron hacia un pueblo á 4 millas (leguas) de distancia que ellos habían fortificado y se llamaba Frondiere (Frontera); su ca-\n      \n      \n      \n   \n",
  id: 97
});
index.addDoc({
  // section: null,
  title: "p236",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      pitán Indio se llamaba Machkaria. En esta escaramuza murieron de parte de los enemigos, es decir, de los que nosotros\n         matamos, unos 2.000 hombres, cuyas cabezas allí no más se las llevaron los Geberus (Yapirú); también de nuestra parte sucumbieron 10 hombres de los Geberus (Yapirú) y Batatheis (Batatá) como unos 40 hombres, sin contar los que habían sido heridos por los enemigos, que\n         nosotros [despachamos] á la ciudad Nostra Singnora de Sunssión. Mas nosotros con nuestras fuerzas [perseguimos] á nuestros enemigos hasta su pueblo\n         Froendiere (Frontera), donde se hallaba el principal Marchkayrio de los Caríos. Pero sucedía que estos mismos Caríos habían defendido su pueblo con\n         3 palizadas construídas de madera, en forma de muro; estos postes eran del grueso\n         de la cintura de un hombre ó más, y desde el suelo se levantaban unas 3 brazadas y\n         lo enterrado sería como del alto de un hombre.\n      \n      Iten más tenían de aquellos hoyos en que habían clavado 5 ó 6 estacas pequeñas, afiladas\n         como agujas, y plantadas en cada hoyo, de las que ya se dijo algo en el capítulo XXI; ahora este pueblo de ellos era muy fuerte, y en él había mucha chusma, para no decir\n         nada de la gente de pelea. Aunque los asediamos durante 3 días, no Ies pudimos hacer\n         nada, ni sacarles ventaja alguna hasta que Dios Todopoderoso nos prestó su Divina\n      \n      \n   \n",
  id: 98
});
index.addDoc({
  // section: null,
  title: "p237",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      ayuda contra ellos, con la que pudimos más que ellos. Con apuro fabricamos unas grandes\n         rodelas ó paveses con cueros de venado ó de annda (anta): esta es una gran bestia, como mula de cuenta, es obscura, los pies como de vaca,\n         pero en todo lo demás se parece á un burro; son buenos para comer, y los hay en gran\n         cantidad en la tierra; el cuero es de medio dedo de grueso. Repartimos nosotros los\n         tales paveses. Paveses como éstos dimos á cada un Indio de los Geberas (Yapirú), y también una buena hacha á cada otro Indio; para cada dos Indios se dispuso también un arcabucero; paveses\n         como éstos se habían preparado en número de 400.\n      \n      En seguida volvimos á atacar el pueblo enemigo por tres puntos, entre las 2 y 3 del\n         día; y antes que pasasen 3 horas ya estaban las 3 pallasaitenn (palizadas) del todo destruídas y franqueadas; después de esto llegamos con toda\n         la gente al pueblo y dimos muerte á mucha gente, hombres, mujeres y niños, pero los\n         más de la gente se escaparon de allí, porque huyeron á otro pueblo que estaba á 20\n         millas (leguas) de este pueblo Froendere (Frontera) y se llamaba Kharaieba. A este pueblo también lo habían fortificado ellos en toda regla y á\n      \n   \n",
  id: 99
});
index.addDoc({
  // section: null,
  title: "p238",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      más una gruesa suma de gente reunida de los Caríos éstos. Y estaba este pueblo situado muy cerca de la\n         ceja de un espeso bosque, al objeto de que si llegase el caso de que nosotros los\n         Cristianos ganásemos también este pueblo, pudiesen los Caríos contar con el bosque de amparo, como se oirá más tarde.\n      \n      Ahora después nosotros los Cristianos con nuestro capitán Marthin Doménigo Eyolla (Irala) y los antedichos Geberus y Batatheis alcanzamos á nuestros enemigos los Caríos, en este pueblo Karaieba á eso de las 5 de la tarde, y emprendimos el sitio para atacar por tres costados\n         del pueblo, dejamos también un pelotón (de soldados) escondidos en el bosque esa noche;\n         á la noche también nos llegó refuerzo de la ciudad Nostra Singnora de Sunssión, 200 Cristianos y 500 Geberus y Bathadeis; porque era el caso que mucha gente de la nuestra, Cristianos é Indios habían sido\n         heridos delante del susodicho pueblo, así que los tuvimos que hacer volver, por eso\n         nos venía esta gente de refresco, así que éramos nosotros 450 Cristianos y 1.300 Geberus y Bathadeis.\n      \n      Pero á esto nuestros enemigos habían fortificado y asegurado tan bien este su pueblo\n         Karaiba, tal vez como jamás antes se había hecho, es decir con palasaiten (palizadas) y muchos fosos. Item más, habían ellos preparado unas cuevas de\n      \n   \n",
  id: 100
});
index.addDoc({
  // section: null,
  title: "p239",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      maderos en forma de trampas de ratones; si éstas hubiesen salido al colmo de sus deseos,\n         cada una de ellas nos hubiese muerto hasta 20 ó 30; de las tales se habían construido\n         muchas cerca de este su pueblo. Mas Dios el Todopoderoso nada de esto permitió; ¡sea\n         El alabado y loado eternamente!\n      \n      Delante de este su pueblo Karayeba estuvimos acampados 4 días, sin poderles sacar ventaja alguna, y al cabo por traición,\n         que nunca falta en el mundo, allá vino un Indio de los enemigos Caríos durante la noche á nuestro real á ver á nuestro capitán Marthin Doménigo Eyolla; era aquél un principal de los Caríos y á él obedecía el pueblo. Este pidió que no le quemásemos ni destruyésemos su pueblo,\n         que él nos mostraría cómo y de qué manera era de tomarlo; así le prometió nuestro\n         capitán que no permitiría que le hiciesen mal. Después de lo cual este Caríos nos mostró un camino escusado en el bosque por el que deberíamos nosotros llegar\n         al pueblo, y dijo que él encendería fuego en el dicho pueblo cuando llegase el momento\n         de meternos en él. Como que todo sucedió tal cual se había arreglado y mucha gente\n         pereció á manos de nosotros los Cristianos y fué destruída; y los que á la fuga se\n         dieron cayeron en manos de sus enemigos los Geberus (Yapirú) que destruyeron y mataron á los más; pero á las mujeres y á los niños no\n         los tenían esta vez consigo,\n      \n      \n   \n",
  id: 101
});
index.addDoc({
  // section: null,
  title: "p240",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      sino á 4 millas (leguas) de allí en un bosque muy extenso.\n      \n      Pero la gente de los Caríos que logró salvarse de esta escaramuza huyó á lo de otro principal de los Indios que\n         se llamaba Thabere (Tabaré) y su pueblo Juberich Sabye (Yeruquihaba) que estaba á 140 millas (leguas) de este pueblo Kharayeba. Allá no pudimos ni perseguirlos ni seguirlos nosotros, porque todo lo que estaba\n         en el camino se había talado y destruído, así que nosotros no pudiésemos hallar qué\n         comer; con todo nos quedamos allí en el pueblo Karayeba 14 días enteros, mientras\n         sanaban los que estaban heridos y descansaban esos días.\n      \n      \n      CAPÍTULO XLIII\n      \n      TOMA DEL PUEBLO JUERICH SABAYÉ. PERDÓN DE THABERÉ\n      \n      Entonces regresamos á nuestra ciudad, Nostra Singnora de Sunssión, con miras de navegar aguas arriba á buscar el susodicho pueblo Juerich Sabaje (Hieruquizaba) donde vivía el principal\n      \n   \n",
  id: 102
});
index.addDoc({
  // section: null,
  title: "p241",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      de los Thabere. Cuando nosotros ya hubimos llegado á nuestra ciudad Nostra Singnora, nos quedamos allí 14 días mientras nos proveíamos para el viaje de toda clase de\n         municiones y víveres. Así, pues, volvió á tomar nuestro capitán gente de refresco de los Cristianos\n         y de los Indios, porque muchos estaban heridos y enfermos, y en seguida navegó aguas\n         arriba del Paraboe á lo de nuestros enemigos Juerich Sabaoe con 9 navíos pergentin (bergantines) y 200 canaen (canoas); y había los 400 Cristianos nuestros y 1.500 Indios de los Geberus. Hay 46 millas (leguas) de la ciudad Nostra Singnora de Sunssión á los Jeruich Saboe donde se habían refugiado nuestros enemigos los Karaeba. El mismo día nos salió al encuentro el antedicho principal de los Caríos, el que nos había entregado el pueblo á traición, y se trajo consigo 1.000 Caríos\n         para ayudarnos contra los dichos Thaberes (Tabarés).\n      \n      Luego que nuestro capitán hubo reunido toda esta gente por tierra y agua, y como á\n         2 millas (leguas) de distancia de los enemigos Juerich Sabie, al punto envió nuestro capitán Marthin Doménigo Eyolla (Irala) dos Indios de los Caríos á sus enemigos en el pueblo para anunciarles, que estos\n         Cristianos estaban otra vez por allá, y les hizo de-\n      \n      \n   \n",
  id: 103
});
index.addDoc({
  // section: null,
  title: "p242",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      cir que debían volverse á su tierra, cada cual á su mujer y á sus hijos, y que debían\n         estar sujetos á los Cristianos y volverles á servir, como lo habían hecho antes de\n         eso; pero que si ellos no querían á todos los arrojaría de la tierra. A lo que contestó\n         el caudillo Caríos, el Thaberé (Tabaré), que le anunciasen al capitán de los Cristianos que no querían saber nada con los\n         Cristianos y que se atreviese no más á venir que ellos nos habían de dar la muerte\n         con huesos; también castigaron á nuestros dos Indios malamente con palos y les dijeron\n         que se mandasen mudar presto del real de ellos, porque de nó los habían de matar.\n      \n      Ahora pues estos dos mansseschere (mensajeros) se presentaron á nuestro capitán y le dieron el manssache (mensaje), de cómo les había ido, con esto nuestro capitán Marthín Domenigo Eyolla (Irala) se alzó, y nosotros con él, y marchamos contra nuestro enemigo Thabere y los Caríos, en seguida nos formamos y repartimos la gente en 4 divisiones.\n      \n      Así llegamos nosotros á un agua corriente, que en su lengua India se llama Schueschíeu (Xexuy) es tan ancha como el Danubio aquí en este país (Baviera), y como hasta la cintura de un hombre de\n      \n      \n   \n",
  id: 104
});
index.addDoc({
  // section: null,
  title: "p243",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       hondura, ó más en algunas partes; pero la tal agua se aumenta mucho en su tiempo,\n         y causa grandes perjuicios en la tierra, así que no se puede viajar por ella.\n      \n      Y como nosotros teníamos que pasar esta agua, estaba el enemigo con su real del otro\n         lado de ella y por eso nos hicieron gran resistencia y daño al pasar, así que creo\n         yo que esta vez, (el favor de Dios mediante, se entiende) á no ser los arcabuces no hubiese escapado uno de nosotros con vida del lance. Y tanto nos favoreció Dios\n         el Todopoderoso que nosotros pasamos al otro lado del agua, mediante su Divina bendición\n         y pisamos tierra. Cuando los enemigos la tal cosa vieron, al punto huyeron á su pueblo,\n         que estaba á media milla (legua) del agua. Luego que nosotros lo vimos los perseguimos con toda nuestra gente\n         y llegamos al pueblo al mismo tiempo que ellos y le pusimos cerco, así que nadie podía\n         salir ni entrar, nos armamos también después sin perder un momento con nuestros pawessen (paveses) y hachas, tal y como antes se dijo. Así no estuvimos más tiempo acampados delante del dicho\n         pueblo que desde la mañana hasta la noche, en que Dios el Todopoderoso nos favoreció,\n         de suerte que los derrotamos y salimos vencedores; tomamos el pueblo y matamos mucha\n         gente. Pero ya antes de entrar en pelea nos había encargado nuestro capitán que no\n         matásemos ni á mujeres ni á niños, sino que los tomásemos prisio-\n      \n      \n   \n",
  id: 105
});
index.addDoc({
  // section: null,
  title: "p244",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      neros, como que así lo cumplimos nosotros y obedecimos su encargo. Los hombres, empero,\n         cuantos pudimos alcanzar, tuvieron todos que morir. También nuestros amigos los Geberus se trajeron unas 1.000 cabezas de nuestros enemigos Caríos.\n      \n      Ahora, después que todo esto había sucedido, llegaron por aquel tiempo aquellos Caríos, que habían salvado de allí junto con su principal Thabere (Tabaré) y otros de sus principales y pidieron perdón á nuestro capitán, con tal\n         que les devolviese sus mujeres é hijos, que así volverían á ser los buenos amigos\n         de antes y que nos servirían con toda humildad. Así, pues, nuestro capitán les prometió\n         perdón y entró á favorecerlos; y después de esto se hicieron buenos amigos, hasta\n         que yo salí de la tierra. Año y medio duró esta guerra con los Caríos, así que durante\n         este tiempo no hubo paz con nosotros y no podíamos estar seguros á causa de ellos.\n         Esta campaña y guerra con los Caríos acaeció el año 1546.\n      \n   \n",
  id: 106
});
index.addDoc({
  // section: null,
  title: "p245",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XLIV\n      \n      ENTRADA DE IRALA AL CHACO BOREAL POR LOS PAYAGUÁ Y MBAYÁ\n      \n      Después de esto regresamos á la ciudad Nostra Singnora de Sunssión y permanecimos dos años largos en aquella ciudad. Pero en todo este tiempo no había\n         llegado ni navío ni correo alguno de Hispanienn; entonces nuestro capitán Marthin Domenigo Eyolla (Irala) hizo consultar á la gente á ver si le parecía bien que él con alguna parte de ellos\n         marchase tierra adentro y averiguase si había oro ó plata que rescatar. A ello le\n         contestó la gente, que marchase no más en nombre de Dios.\n      \n      Así por ese tiempo hizo reunir unos 350 de los Españoles y les preguntó si querían\n         marchar con él, que él les proporcionaría todo lo necesario para este viaje, es á\n         saber, en Indios, rocines ó ropa; y ellos se prestaron de muy buena gana á marchar con él. Después también\n         hizo llamar á junta á los principales ó caudillos de los Caríos y pregun-\n      \n      \n   \n",
  id: 107
});
index.addDoc({
  // section: null,
  title: "p246",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      tó si ellos querían acompañarlo con fuerza de 2.000 hombres; y ellos contestaron que\n         de muy buena gana y á su llamado marcharían con él.\n      \n      Con este tan buen y tan amistoso acuerdo de ambas partes se aprestó dicho nuestro\n         capitán general Marthín Domenigo Eyolla en poco más de 2 meses después, y emprendió la marcha con esta gente el año 1548\n         aguas arriba del Paraboe con 7 navíos bergenntín y con 200 canaon (canoas). La gente que no podía caber ni en los navíos ni en las canaen (canoas) caminaron de á pie por tierra con los 130 caballos. Y cuando nosotros los\n         hubimos reunido á todos por tierra y por agua cerca de un cerro alto y redondo llamado\n         S. Ferdinando, donde en aquel tiempo vivían los antedichos Peyenbas (Payaguá), allí envió nuestro capitán los 5 navíos bergenntín (bergantines) y las canaen (canoas) de vuelta á la ciudad Nostra Singnora de Sunssión.\n      \n      A los otros 2 navíos pergentin (bergantines) los dejó allí cerca de S. Fernando, con 50 Españoles, á quienes nombró él un capitán llamado Petter Diess (Pedro Díaz); les entregó también víveres y lo demás necesario para dos años, y tenían que esperar\n         allí hasta que él volviese de tierra adentro, porque no le sucediese á él y á su gente\n         como le\n      \n      \n   \n",
  id: 108
});
index.addDoc({
  // section: null,
  title: "p247",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      había sucedido al buen señor Joann Eyollas (Ayolas) y á los compañeros con él, á quienes los Pyenbass (Payaguá) habían asesinado tan cruelmente. ¡Dios los favorezca á todos! De ello se\n         dijo ya en la f. [22].\n      \n      Después de esto marchó adelante nuestro capitán con 300 Cristianos y 130 caballos\n         y 3.000 Caríos unos 8 días enteros sin que nosotros hallásemos nación alguna. A los\n         9 días dimos con una llamada Naperus, no tienen más de comer que pescado y carne, es una gente alta y fuerte, sus mujeres\n         andan con las vergüenzas destapadas; no son lindas.\n      \n      Del dicho cerro S. Ferdinando hasta aquí hay 38 millas (leguas); allí nos quedamos esa noche y de allí proseguimos la marcha, viaje de 7\n         días, y llegamos á una nación llamada Maieaiess (Mbayá) es una gran muchedumbre de gente; sus súbditos tienen que pescarles y cazarles y\n         hacer lo que se les ofrece, tal y como aquí los paisanos se someten al que es noble.\n      \n      \n   \n",
  id: 109
});
index.addDoc({
  // section: null,
  title: "p248",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      Esta nación tiene mucha provisión de trigo turco (maíz), mandeochade (mandioca), mandepoere, mandeos propys, padades (batatas), mannduiss (maní), bachakhue y otras raíces más, que son aparentes para servir de comida. Iten más tienen venados, ovejas de Indias (guanacos), avestruces, ennten (antas), gansos, y muchas otras aves. También los bosques están llenos de miel, de la que se hace\n         vino y lo demás que les hace falta; cuanto más adentro se busca en la tierra, tanto\n         más feraz se la encuentra. Item año redondo cosechan en el campo trigo turco (maíz) y las demás\n         plantas ya citadas. Estas ovejas, de las que tienen mansas y ariscas, las usan como\n         nosotros aquí á los rocines para los cargar y montar; yo mismo también una vez en el viaje anduve más de 40 millas (leguas) montado en una oveja de estas, á saber cuando estuve enfermo de un pie;\n         en el Perú las cargan con mercaderías como si fuesen acémilas.\n      \n      Estos Mayeaiess (Mbayá) son altos, gallardos y\n      \n      \n   \n",
  id: 110
});
index.addDoc({
  // section: null,
  title: "p249",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      gente guerrera, cuya única ocupación es la guerra. Las mujeres son lindas y no se\n         tapan las vergüenzas; ellas no trabajan en el campo, sino que el hombre tiene que\n         buscarse la mantención; en la casa no hacen ellas más que hilar y tejer cosas de algodón; también preparan la comida y cualquier otra cosa que se le antoja al marido de ellas,\n         y á otros buenos aparceros más, pedirles, cuando se ofrece; y baste con lo dicho del\n         asunto. Quien verlo quiera que allá vaya, y si de otra suerte se niega á creerlo,\n         yendo se convencerá que la cosa es así.\n      \n      Cuando llegábamos á esta nación, como á una media milla (legua) de distancia nos salieron á encontrar en el camino, donde había una pequeña\n         aldehuela, y dijeron ellos á nuestro capitán que debíamos nosotros reposar esa noche\n         allí en el dicho pueblo, y que ellos nos traerían todo cuanto nos faltaba; pero esto\n         lo hacían ellos con mala intención, y para asegurarse más en seguida mandaron [ellos]\n         á nuestro capitán 4 coronas de plata, que se ponen en la cabeza; también le dieron\n         6 plennschen (planchas), de plata, de las que cada una media 1 1/2 jemes de largo y medio jeme\n         de ancho; las tales planchas se las atan á la frente por lujo y como adorno, como\n         también ya se dijo antes. Iten más mandaron ellos á nuestro capitán 3 lindas doncellas,\n         ó mujeres, que no eran viejas.\n      \n      \n   \n",
  id: 111
});
index.addDoc({
  // section: null,
  title: "p250",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      Durante el tiempo que descansamos en este pueblo, después de la merienda, distribuimos\n         nosotros la guardia, para que así estuviese la gente preparada contra los enemigos,\n         y en seguida nos acostamos á dormir en paz. Más tarde, como á la media noche, sucedió\n         que se le perdieron á nuestro capitán sus 3 doncellas; acaso no pudo satisfacer á\n         todas 3, porque era un hombre de unos 60 años; si nos las hubiese entregado á nosotros\n         los soldados, tal vez no hubiesen disparado; en suma, causa de esto se armó gran alboroto en el real.\n      \n      Y tan luego como amaneció, nuestro capitán hizo tocar generala y mandó á saber, que cada cual se estuviese en su puesto con sus armas.\n      \n      \n      \n      CAPÍTULO XLV\n      \n      VISITAN Á LOS MBAYÁ, CHANÉ, THOHANNES, PAYHONOS, MAYEHONAS, MORRONNOS, PERRONOSS\n      \n      Así vinieron los antedichos Mayaiess (Mbayá) en número de 20.000 hombres y pretendieron sorprendernos, mas no nos sacaron mayor\n         ventaja, sino que en esta misma escaramuza quedaron unos 1.000 muertos de la gente\n         de ellos; en seguida huyeron ellos de allí y nosotros los perseguimos hasta\n      \n      \n   \n",
  id: 112
});
index.addDoc({
  // section: null,
  title: "p251",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      su pueblo, mas no encontramos nada allí, ni mujeres ni hijos.\n      \n      Entonces mandó nuestro capitán y tomó unos 150 arcabuceros y 2.500 Indios Caríos y marchó en pos de los Mayaiedess (Mbayá) 3 días seguidos y 2 noches [á todo apurar], así que no descansábamos nosotros\n         sino sólo para comer á medio día y dormir 4 ó 5 horas cada noche.\n      \n      Y al tercer día dimos con los Mayaeides (Mbayá) todos juntos, hombres, mujeres y niños en un bosque; mas no eran ellos los\n         Maiaies (Mbayá) que buscábamos, sino sus amigos. Ni cuidado que se les daba á ellos de nuestra\n         llegada allí. Así tienen que pagar justos por pecadores; porque cuando nosotros llegamos\n         á los Mayaiess (Mbayá) estos, matamos y apresamos hombres, mujeres y niños en número como de 3 mil\n         personas, y si hubiese sido de día, así como fué de noche, no se escapa uno de ellos;\n         porque había mucha gente junta en un cerro, en que había un bosque muy grande. Yo\n         saqué de esta escaramuza más de 19 personas, hombres y mujeres, que no eran viejas;\n         porque siempre me ha gustado más la gente moza que la vieja; también la parte que\n         me tocó de las mantas de los Indios y otras cosas más. Después de esto nos volvimos\n         á nuestro real, allí nos quedamos 8 días, porque había\n      \n      \n   \n",
  id: 113
});
index.addDoc({
  // section: null,
  title: "p252",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      toda clase de buen bastimento. A esta nación de los Mayaiess (Mbayá) desde S. Ferdinando, donde dejamos los navíos, hay 70 millas (leguas) de camino.\n      \n      Después de esto volvimos á marchar hasta una nación llamada Zchennte (Chañé), son vasallos ó súbditos de los antedichos Mayaiess (Mbayá), como en esta tierra (Baviera) los paisanos son siervos de sus señores. Nosotros encontramos en este camino muchos\n         rastrojos sembrados con trigo turco (maíz), raíces, y otras frutas más, allí se tiene esta comida año redondo; cuando se recoge\n         una cosecha, ya está la otra madura también, y cuando esta misma también está recogida,\n         ya tienen una otra en berza. Con esto en todo tiempo del año están en vísperas de\n         la mies. Entonces llegamos á un pequeño pueblo que pertenecía á los Zchenne (Chañé) y cuando nos vieron todos huyeron de allí. Así nos quedamos 2 días allá y\n         hallamos en el tal pueblo (que está á 4 millas) (leguas) de los Mayaie (Mbayá) más que de sobra de comer.\n      \n      De allí marchamos nosotros 2 días 6 millas (leguas) hasta una nación llamada de los Tohannes;\n                     \n      \n   \n",
  id: 114
});
index.addDoc({
  // section: null,
  title: "p253",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      allí no hallamos gente alguna, pero de comer bastante; están también sometidos á los\n         Mayaies (Mbayá).\n      \n      De allí marchamos nosotros 6 días enteros sin encontrar gente por el camino, y al\n         7.° día llegamos á una nación llamada de los Payhonos donde había mucha Indiada reunida. El caudillo de ellos salió á recibirnos de paz\n         con mucha gente. Este le rogó á nuestro capitán que no entrásemos á su pueblo, sino\n         que nos quedásemos allí afuera en el mismo lugar; mas nuestro capitán no quiso consentir\n         en nada de eso, sino que se metió derecho en el pueblo de ellos, quieran que nó; allí\n         hubimos lo muy bastante que comer de carne, y gallinas, gansos, venados, ovejas, avestruces, papagayos, conejillos. Mas ahora dejo yo de lado lo de trigo turco (maíz) y otras raíces y frutas [sin\n         mencionar], de lo que hay una superabundancia en la tierra; pero agua no hay mucha,\n         casi nada de plata y oro; así que de eso nada preguntamos tampoco, porque las otras\n         naciones que más adelante estaban por esto mismo no huyesen. Nos quedamos 3 días enteros\n         entre estos Payhonas; allí se impuso nuestro capitán por ellos de la manera de tierra que era; y de los\n         Thohanas hasta ellos hay 24 millas (leguas) de camino; y de allí salimos y llevamos un «lengua» de los Payha-            \n      \n   \n",
  id: 115
});
index.addDoc({
  // section: null,
  title: "p254",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      nas que nos mostrase el camino, porque así tuviésemos agua que beber; desde que hay largos\n         trechos en esta tierra sin agua.\n      \n      Así llegamos nosotros á las 4 millas (leguas) á una nación llamada de los Maiehonas (Mayecuna?) donde nos quedamos un día, y de estos volvimos á tomar un «lengua», que nos mostrase\n         el camino; estos se prestaron y nos dieron lo que necesitábamos. Desde allí marchamos\n         nosotros 8 millas (leguas) y llegamos á una nación llamada de los Morronos; es una gran multitud de gente; nos recibieron muy bien; quedamos 2 días enteros\n         entre ellos y tomamos relación de la tierra; de estos también sacamos nosotros un\n         «lengua», que nos enseñase el camino; en seguida marchamos 4 millas (leguas) desde allí hasta una pequeña nación llamada de los Perronoss; no tienen mucho que comer; son fuertes de unos 3 ó 4.000 hombres de pelea; quedamos\n         un día entre ellos.\n      \n      De allí marchamos nosotros 12 millas (leguas) á una nación llamada de los Sunennos, es una gran multitud de gente toda junta, y se halla sobre un cerrillo alto; el pueblo de ellos está rodeado de un bosque espinudo como muro; nos recibieron\n         con sus arcos y flechas [y nos dieron dardes (dar-            \n      \n   \n",
  id: 116
});
index.addDoc({
  // section: null,
  title: "p255",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      dos)] de comer; mas no las tuvieron mucho tiempo consigo; muy pronto tuvieron que\n         abandonar el pueblo, pero primero lo incendiaron al mismo; con todo hallamos nosotros\n         bastante que comer en el bosque; quedamos allí 3 días y los buscamos en los bosques\n         y en el campo.  \n      \n      \n      CAPÍTULO XLVI\n      \n      DE LOS BORKENES, LEICHONOS, KHARCHKONOS, SYEBERIS Y PEYSSENNOS.\n      \n      De allí marchamos en 4 días 24 millas (leguas) y llegamos á una nación llamada de los Borkenes, estos no esperaron nuestra llegada, sino que cuando ya estábamos nosotros muy cerca\n         de su pueblo, con tiempo emprendieron la fuga, mas no lograron escapársenos; les pedimos,\n         pues, de comer, y nos llevaron allá gallinas, gansos, ovejas, avestruces y venados, también lo demás que habíamos menester, con lo que quedamos bien satisfechos; permanecimos\n         4 días enteros entre ellos y tomamos razón de la tierra.\n      \n      De allí marchamos nosotros 3 días enteros, 12 millas (leguas) hasta una nación que se llama de los Leichonos. Estos no tenían mayor cosa de\n      \n      \n   \n",
  id: 117
});
index.addDoc({
  // section: null,
  title: "p256",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      comer, porque la langosta les había devorado el fruto. Allí no quedamos más que hasta el otro día y marchamos\n         de allí 4 días de viaje, 20 millas (leguas) hasta una nación llamada de los Kharchkonos entre ellos también había habido langosta, mas no había hecho tanto daño como en\n         otros lugares; [así] permanecimos nosotros sólo un día entre ellos y tomamos razón\n         de la tierra, y nos dijeron ellos, que en 30 millas (leguas) no hallaríamos una gota de agua hasta dar con una nación llamada de los\n         Sieberis.\n      \n      Así tomamos nosotros 2 Indios, que nos mostrasen el camino y llegamos en 6 días á\n         los Syeberís. Pero muchos de los nuestros murieron de sed, y eso que llevábamos agua con nosotros\n         sacada de los dichos Karckonos para el viaje. También encontramos nosotros en este viaje, y en algunos lugares,\n         una planta que sale de la tierra, tiene hojas gruesas y anchas, llámase Kardes; y eso que cuando le llueve á la planta ó á sus hojas, se conserva el agua en ellas\n         y no puede salir, y ni consumirse, tal y como si estuviese en una tinaja, y cabe casi\n         una media medida de agua adentro en estas plantas. Así llegamos nosotros á las 2 de\n         la mañana á los dichos Syeberís, que se preparaban á huir de allí con mujeres é hijos; mas nuestro capitán les hizo\n         anunciar por boca de un intérprete \n                     \n      \n   \n",
  id: 118
});
index.addDoc({
  // section: null,
  title: "p257",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      que se dejasen estar en sus casas en paz y toda seguridad, y que no había por qué\n         nos recelasen. Estos Syeberís también sufrían gran escasez de agua, y ni tenían otra cosa alguna que beber; hacía\n         3 meses que no les llovía, por eso se hacían una bebida de una raíz llamada manndopoere (mandioca) á saber, se toma la dicha planta, la machucan en un mortero; este jugo se parece\n         á una leche. Pero si hay agua, entonces se puede hacer también vino con ella. En este\n         pueblo solo había un manantial único, y había que ponerle guardia, para que se mirase\n         por el agua y se diese cuenta y razón de ella; [también tuvo á bien el capitán encargarme\n         del agua en ese tiempo] para que hasta el agua se arreglase y distribuyese según la\n         medida impuesta por el capitán en aquel momento y para este fin. Porque grande era\n         la escasez de agua, al grado que nadie averiguaba ni de oro, ni de plata, de comer\n         ni de otra cosa alguna, sino sólo de agua. Así me gané en esta vez entre nobles y\n         plebeyos, [y] de todos en general, la buena voluntad y favor, porque no les mezquinaba\n         en esa ocasión; al propio tiempo tuve buen cuidado, que á mí tampoco me faltase agua.\n         En todo el ancho y largo de esta tierra no se encuentra más agua que la que proporcionan\n         las represas. Más, los Syeberís hacen la guerra á otros Indios por interés del agua.\n      \n      Con esta nación nos quedamos 4 días, porque\n      \n      \n   \n",
  id: 119
});
index.addDoc({
  // section: null,
  title: "p258",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      nosotros no sabíamos lo que deberíamos hacer, sí teníamos que marchar para atrás ó\n         para adelante; entonces tiramos á la suerte sobre los dos caminos, por saber si habíamos\n         de marchar para atrás ó para adelante; y fué que tocó la suerte de marchar adelante.\n         A esto nuestro capitán pidió á los Syeberís informe de la tierra y razón de toda ella; entonces contestaron ellos, que teníamos\n         que marchar 6 días hasta llegar á una nación llamada Peysennes y que en el camino encontraríamos que beber de 2 arroyuelos y de los antedichos Kardes.\n      \n      Así pues nos preparamos para la marcha y nos llevamos algunos Syeberís para que nos\n         mostrasen el camino. Mas cuando hubimos llegado á los 3 días de camino del pueblo\n         de ellos, huyeron los dichos Syeberís esa noche de allí, así que no los vimos más; de suerte que nosotros mismos tuvimos\n         que dar con el camino y llegamos después de todo á los Peyssennos, que se prepararon á la defensa y no quisieron ser nuestros amigos, pero poco fué\n         lo que nos sacaron, antes bien, con el favor de Dios los vencimos y les conquistamos\n         el pueblo y ellos se dieron á la fuga; no obstante nosotros hicimos algunos prisioneros\n         en esta escaramuza, que nos contaron como habían tenido en su pueblo á 3 Españoles,\n         de los que uno, con el nombre de Jehronimus (Gerónimo), había sido trompa de thonn (don) Piettro Manthossa, los cuales 3 Españoles había dejado Jann Eyollas            \n      \n   \n",
  id: 120
});
index.addDoc({
  // section: null,
  title: "p259",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      (Ayolas) enfermos entre los Peyssennes de lo que se trató ya en la foja [22], en el tiempo que Jann Eyollas (Ayolas) marchó de regreso de esta nación; á estos 3 Españoles los habían asesinado\n         los Peysennos 4 días antes de nuestra llegada, es decir, después que se anoticiaron de nuestro\n         arribo por los Syeberis; por lo que más tarde recibieron buen escarmiento á manos nuestras. Así nos acampamos\n         14 días enteros en el pueblo de ellos, y los buscamos y hallamos todos juntos cerca\n         de un bosque, pero no á todos; á aquellos los matamos y tomamos prisioneros; ellos\n         nos avisaron de todas las ventajas de la tierra, sobre la que nuestro capitán sacó\n         muchas cosas de la relación de ellos, y nos dieron una buena noticia, á saber, que\n         nos faltaban 4 días de camino ó 1[6] millas (leguas) de camino para llegar á una nación llamada Maigenos.            \n      \n   \n",
  id: 121
});
index.addDoc({
  // section: null,
  title: "p260",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XLVII\n      \n      DE LOS MAYGENNOS Y KARCKHOKÍES Y DE LAS SALINAS\n      \n      Después de esto marchamos nosotros á los Maygennos y llegamos á su pueblo; que se dispusieron á la defensa y no quisieron ser nuestros\n         amigos. El pueblo de ellos se hallaba sobre un cerrillo que estaba rodeado por cerco de espinas, muy tupido y ancho y tan alto que se necesitaba\n         un hombre con un espadín para que alcance á la cima. Eso que nosotros los Cristianos junto con nuestros Caríos atacamos á este pueblo por los dos costados, ellos, los Maygennos, nos mataron 12 Cristianos junto con algunos otros de los Caríos nuestros que ellos\n         voltearon en la escaramuza, antes que nosotros ganamos el pueblo; cuando ya vieron\n         que nosotros estábamos bien adentro de su pueblo, ellos mismos lo incendiaron y á\n         toda prisa dispararon; allí tuvieron que dejar á algunos, como es de suponer.\n      \n      Después que ya todo esto se había concluido, á los 3 días, los Caríos se mandaron\n         mudar con tanto sigilo que nosotros no nos apercibimos de ello, y alzaron sus arcos y flechas, marcharon unas 2 ó 3 millas (leguas) de nuestro real, alcanzaron á los\n      \n      \n   \n",
  id: 122
});
index.addDoc({
  // section: null,
  title: "p261",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      fugitivos Maygennos, pelearon estas 2 naciones una con otra allí con tal encarnizamiento que de los Caríos\n         perecieron más de 300 hombres, y de los Meygennos, sus enemigos, innumerables personas, como para no escribirlo; eran ellos tantos\n         que llenaban una milla (legua) entera de camino. Entonces nuestros Caríos enviaron un correo á nuestro capitán en el pueblo y pidieron y suplicaron que fuésemos\n         en su ayuda, que ellos estaban acampados en un bosque, que no podían moverse ni para\n         atrás ni para adelante, y también que estaban rodeados por los Maygennos.\n      \n      Cuando nuestro capitán esto supo no perdió un momento é hizo reunir los caballos y 150 Cristianos y 1.000 Caríos de los nuestros; el resto de la gente tenía que quedarse\n         en el real y defenderlo, porque los Maygennos nuestros enemigos no lo sorprendiesen durante nuestra ausencia; en seguida marchamos\n         con los dichos caballos, 150 Cristianos y 1.000 Caríos ó Indios en auxilio de los susodichos Caríos nuestros. Después que los Maygennos nos vieron y observaron, abandonaron ellos su real y huyeron á prisa de allí; nosotros\n         también los perseguimos, pero sin poderlos alcanzar. Mas como les fué al fin y al\n         cabo, [eso que] marchábamos de regreso á nuestra ciudad, de donde habíamos salido,\n         será asunto para después. Así pues llegamos á los Caríos y dimos con muchos muertos de ellos y de los enemigos Maygennos, cosa que nos causó admiración; pero nuestros amigos los Caríos, que aun quedaban\n         con vida, se alegra-\n      \n      \n   \n",
  id: 123
});
index.addDoc({
  // section: null,
  title: "p262",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      ron mucho porque habíamos llegado nosotros para ayudarlos. Después marchamos juntos\n         con ellos de regreso á nuestro real y nos quedamos allí 4 días largos, y teníamos\n         en este pueblo de los Maygennos abundancia de comida y todo lo necesario.\n      \n      Allí nos pareció bien á todos juntos llevar á cabo nuestro proyectado viaje, ya que\n         se nos proporcionaba la ocasión de experimentar cómo era la tierra, por eso también\n         nos pusimos en camino y marchamos 13 días largos, hay más ó menos á nuestro juicio\n         72 millas (leguas) á una nación llamada Karckhokies, y cuando estábamos en los primeros 9 días de este viaje llegamos á una tierra que\n         tenía de largo y de ancho 6 millas (leguas) de camino, en que no había otra cosa que pura sal de buena calidad, tan\n         gruesa que parece que hubiese nevado; la tal sal se conserva invierno y verano.\n      \n      En esta tierra de salinas permanecimos 2 días de tiempo, porque no sabíamos por donde salir ni por qué camino\n         tomar para acabar con nuestro\n      \n      \n   \n",
  id: 124
});
index.addDoc({
  // section: null,
  title: "p263",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      ya emprendido viaje. Aquí nos favoreció Dios el Todopoderoso, así que tomamos el buen\n         camino y llegamos, pasados 4 días de viaje, á los Kharckhokies; y cuando nosotros estábamos como á 4 millas (leguas) del propio pueblo, mandó allá 50 Cristianos y 500 Caríos, para que preparasen\n         losament (alojamiento). Después que nosotros ya habíamos entrado en el pueblo, encontramos\n         allí una gran nación reunida, como no habíamos visto otra igual en este viaje, por\n         lo que nos pusimos en bastante cuidado. Pero en este apuro hicimos que uno de los\n         nuestros volviese atrás é hicimos saber al capitán el lance que nos esperaba para\n         que viniese á socorrernos lo más pronto posible; y tan luego como nuestro capitán\n         recibió el tal mensaje, se apareció esa misma noche con toda la gente y esa mañana\n         entre 3 y 4 estaba ya con nosotros. Mas los Karkhokhies ignoraban que tenían que habérselas con más gente que nosotros los de antes, y así\n         no pensaban en otra cosa que en la derrota segura que nos esperaba. Pero después que\n         ellos comprendieron y vieron que nuestro capitán había llegado con más gente allí,\n         quedaron muy pesarosos, en seguida nos manifestaron su buena voluntad y pacífica intención\n         en todo, porque otra cosa ya no podían hacer, sin exponer á sus mujeres, é hijos y\n         á su pueblo; mientras tanto nos traían carne de venados, gansos, gallinas, ovejas (guanacos) avestruces ennden (antas), conejillos y más otras \n      \n      \n   \n",
  id: 125
});
index.addDoc({
  // section: null,
  title: "p264",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      piezas de campo y aves, de que había gran abundancia en la tierra.\n      \n      Ellos los Indios se ponen una piedra redonda y azul del tamaño de una dama en los\n         labios. Sus defensas ó armas son dardes (dardos), arcos y flechas, y más, paveses hechos de annda (anta) ó sean rodelas. Pero sus mujeres tienen un canutillo asegurado á los labios en el que meten ellas\n         una piedra verde ó gris. También visten un dipoe (tipoy), que se teje de algodón, del tamaño de una camisa, pero no tiene mangas; y son mujeres hermosas, porque no\n         hacen otra cosa que coser y cuidar la casa; el hombre tiene que trabajar en el campo\n         y procurar todo lo necesario.  \n      \n      \n      CAPÍTULO XLVIII\n      \n      DE LOS MACHKAISÍES Y LLEGADA AL PERÚ\n      \n      De allí marchamos nosotros á los dichos Machkaisies y nos llevamos algunos de los Korchkaykies para que nos mostrasen el camino; y cuando estábamos á 3 días de viaje de este pueblo,\n         de allí los dichos Karchkokies nos dejaron callados, no por esto dejamos de viajar y llegamos á un agua corriente\n         llamada Machkaysies, que tiene milla (legua) y media de ancho, y cuando llegamos allá\n      \n      \n   \n",
  id: 126
});
index.addDoc({
  // section: null,
  title: "p265",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      no dábamos nosotros con un vado seguro para pasarlo; así pues, Dios, nuestro Señor,\n         nos concedió su Divino favor, mediante el cual logramos pasar esta agua, es decir,\n         en la forma que sigue: hicimos unas pequeñas balsas para cada 2, de palos y ramas, y nos dejamos llevar aguas abajo, esto mediante llegamos\n         á la banda del agua; y en el pasaje este se ahogaron de la gente nuestra 4 personas\n         de una de las balsas. ¡Dios nos favorezca [á ellos y] á nosotros! Esta agua da buen\n         pescado, iten fieras como tigres muchas, y está á no más de 4 millas (leguas) de camino de los Machkaysís.\n      \n      Después que nosotros ya nos acercábamos á algo más que una milla (legua) larga de camino de los dichos Machkaysis, allí nos salieron al encuentro y nos recibieron muy bien, y en seguida nos empezaron\n         á hablar en español; nos quedamos fríos donde estábamos y acto continuo les preguntamos\n         á quien estaban sometidos, ó á quien tenían por señor; contestaron ellos á nuestro\n         capitán y á nosotros, que eran súbditos de un caballero en España, llamado Peter Ansuless (Pedro Anzures) Entramos, pues, nosotros en el pueblo de ellos y encontramos que los chicos, como\n         también algunos hombres y mujeres, estaban todos comidos de un insecto, que se parece\n         á una pulga; éstos, si llegan á meterse entre los dedos de los pies de la\n      \n      \n   \n",
  id: 127
});
index.addDoc({
  // section: null,
  title: "p266",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      gente, salvando los respetos sea dicho, ó cualquier otra parte del cuerpo, allí comen\n         y penetran hasta que sale al fin un gusano allí, como los que se hallan en las avellanas; pero hay que sacarlos oportunamente, para que no se echen á perder las carnes; pero\n         si se deja pasar demasiado tiempo, acaban por comerse los dedos enteros: mucho se\n         podría contar sobre esto. De nuestra tantas veces citada ciudad Nostra Singnora de Sunssión á este pueblo Machkaysies, por tierra hay 377 millas (leguas) según la altnere (altura).\n      \n      Ahora, pues, unos 20 días de tiempo estuvimos acampados en este pueblo de los Machkaysies. Por esos días nos llegó una carta de una ciudad llamada Lyeme (Lima) en el Perú; allí en aquella sazón se hallaba el gobernador principal por la Cesárea Majestad\n         con el nombre de presente (Presidente) ó lizenziate (Licenciado) de Cascha (La Gasca), quien por aquel entonces había hecho cortar las cabezas á Connsulo Presero (Gonzalo Pizarro) y á otros nobles y plebeyos que hizo decapitar junto con él, ó condenar á galeras;\n         es decir, que así lo hizo, porque el dicho Consulo Piesiero (Gonzalo Pizarro), ya finado, no quiso sometérsele al licenciado de Cascha (La Gasca), sino que se alzó\n      \n      \n   \n",
  id: 128
});
index.addDoc({
  // section: null,
  title: "p267",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      con la tierra contra la Cesárea Majestad; por esto el dicho presente de Cascha (Presidente La Gasca), en nombre de la Cesárea Majestad, con demasiado rigor le dió su merecido; porque\n         muchas veces sucede que uno hace más que lo que el mandato de su superior le faculta\n         á hacer, y que lo que le ha encargado su señor, como suele suceder en el mundo. Yo\n         tengo para mí que la Cesárea Majestad le hubiese perdonado la vida al dicho Connsulo Piesiero (Gonzalo Pizarro), si él en persona imperial lo hubiese prendido; esto le dolía, que se le impusiese\n         señor en lo que eran bienes suyos; porque esta tierra del Perú era á todas luces delante\n         de Dios y del mundo, de él Consulo Piesiro, en razón de que él junto con sus hermanos Margose (el Marqués) y Ernando Piesieron (Hernando Pizarro), habían sido los primeros de todos que descubrieron y conquistaron la tierra del\n         tal reino. Esta tierra con razón se llama tierra rica; porque todas las riquezas que\n         posée la Cesárea Majestad salen del Perú y de Nove Hispaniam (Nueva España) y Terra firma (Tierra Firme). Pero la envidia y el odio son tan grandes en el mundo que el uno al otro no se quiere\n         el bien; así también le aconteció al pobre Connsulo Piesiero, que un rey había sido, y después se le había hecho cortar la cabeza. ¡Dios lo favorezca!\n         Mucho\n      \n      \n   \n",
  id: 129
});
index.addDoc({
  // section: null,
  title: "p268",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      habría que escribir sobre esto, pero el tiempo no lo permite.\n      \n      Ahora esto era lo que la antedicha carta decía, que, en nombre de la Cesárea Majestad,\n         nuestro capitán Marthín Domenigo Eyolla con su gente de guerra no se moviese de allí so pena de cuerpo y vida, sino que esperase\n         allí entre los Maygosís hasta nuevas órdenes. Mas lo cierto del caso es probable que fuese, que el gubernator (Gobernador) temía, que nosotros no hiciésemos algún alboroto contra él en la tierra\n         juntándonos con los que se habían escapado de allí y habían huído á los chacos y á\n         los cerros; y eso es precisamente lo que también hubiese sucedido al habernos juntado\n         los unos con los otros; lo hubiésemos corrido de la tierra nosotros al gubernator (Gobernador). Pero el dicho gubernator (Gobernador) hizo un convenio con nuestro capitán y le dedicó un gran regalo, con\n         lo que él lo tranquilizó y se aseguró la vida de aquel lance; nosotros la gente de\n         guerra no sabíamos nada de estas componendas, que de de haberlas sabido, lo habríamos\n         atado de pies y manos á nuestro capitán y llevado al Perú.\n      \n      Después de lo cual nuestro capitán envió al Perú, al gubernator (Gobernador), 4 mensajeros, y uno\n      \n      \n   \n",
  id: 130
});
index.addDoc({
  // section: null,
  title: "p269",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      capitán llamado Nufflo de Schaifess (Ñuflo de Chaves), el otro Unngate (Pedro de Oñate), el tercero Michel Pude (Miguel de Rutia), el cuarto Abai de Korthua (Rui García). Estos 4 compañeros llegaron al Perú en mes y medio, y primero á una ciudad llamada\n         Poduesies (Potosí), en seguida á otra llamada Kuesken (Cuzco), la tercera Bille de le Platte (Chuquisaca) y la cuarta capital llamada Lieme (Lima); estas 4 son las más principales ciudades y más ricas del Perú.\n      \n      Allá cuando estos 4 mensajeros llegaron á la primera ciudad Poduesis (Potosí) en el Perú, allí se quedaron los 2 llamados Michel Puedt (Miguel de Rutia) y Abaie por causa de debilidad, porque se habían enfermado en el viaje; y los otros dos Nueffle (Chaves) y Ungenade (Oñate) siguieron viaje por la posta y llegaron á Lieme (Lima) á lo del gubernator (Gobernador); los recibió pues muy bien y les tomó relación de todo, de como se habían\n         arreglado las cosas en la tierra del Río de le Platta, y mandó después que los alojasen bien y            \n      \n   \n",
  id: 131
});
index.addDoc({
  // section: null,
  title: "p270",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      los tratasen lo mejor posible, también les regaló á cada uno 2.000 ducados. Después\n         de esto el gubernator encargó á Nueffle Schaifies (Ñuflo de Chaves) que le escribiese á su capitán, para que se estuviese él con su\n         gente allá entre los Marchkaysies hasta nueva orden, pero que no les tomase nada ni hiciese mal, no siendo cosa de\n         comer que hubiese allí; porque nosotros sabíamos muy bien que había rescates de plata\n         entre ellos; pero como eran súbditos y vasallos de un Español no nos atrevíamos á\n         perjudicarlos.\n      \n      Pero este correo del gubernator estando en viaje fué descaminado por un Español, llamado Parnau que estaba en acecho por orden de nuestro capitán; porque éste desconfiaba que estuviese\n         por llegar otro capitán del Perú á gobernar su gente, como que también ya por ese\n         tiempo se había nombrado uno; por esta causa mandó él, nuestro capitán, al dicho Pernau al camino y le ordenó que si fuese cosa que se tratase de carta, la trajese él consigo\n         á los Caríos; lo que á su tiempo se cumplió.            \n      \n   \n",
  id: 132
});
index.addDoc({
  // section: null,
  title: "p271",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO XLIX\n      \n      DE LA TIERRA DE LOS MARCHKHAYSÍES. REGRESO AL RÍO DE LA PLATA. ALZAMIENTO DE DIEGO\n         DE ABREU.\n      \n      De tal modo se había manejado y tanto había hecho nuestro capitán allí con la gente,\n         que en razón de víveres ya no podíamos permanecer más entre los Marchkhaysies; porque los víveres que teníamos no alcanzaban para un mes; mas si nosotros hubiésemos\n         sabido, que se nos iba á proveer ó nombrar un [nuevo] gubernator, no nos hubiésemos movido de allí, hubiésemos hallado harta comida y remedi (remedio) (á la cosa); pero en el mundo todo es picardía. Después marchamos nosotros\n         de regreso á los Harchkokoes (Corocotoquis). Debía yo haberos contado también, á saber, que los dichos Machkaysis tienen una tierra tan fértil que no se había visto otra igual hasta entonces; por\n         ejemplo, cuando un Indio sale al monte ó selva, y en el primer árbol que allí\n                     \n      \n   \n",
  id: 133
});
index.addDoc({
  // section: null,
  title: "p272",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      encuentra abre un agujero con el hacha, de él saltan unas 5 ó 6 medidas de miel tan pura como almibar; las tales abejas son muy pequeñas y no pican. La tal miel, que [es] de la buena, se puede comer con\n         pan ó con cualquier otra comida, se hace también de ella buen vino, como en esta tierra\n         (Baviera) hidromiel; [es] aun mejor y más sabrosa al paladar.\n      \n      Cuando después de esto llegamos nosotros á los antedichos Worckhobosíes, todos ellos con mujeres é hijos habían huído de allí y se ponían á buen recaudo\n         de miedo de nosotros; pero mejor les hubiese estado quedarse en su pueblo; porque\n         al punto les envió nuestro capitán otros Indios y les hizo decir que debían volver\n         á sus pueblos y que se dejasen de tenernos miedo, que no se les irrogaría perjuicio\n         alguno; mas ellos no quisieron hacer caso de ello sino que por contestación nos mandaron\n         que despejásemos el pueblo, porque de no, nos arrojarían de allí á la fuerza.\n      \n      Después que nosotros nos hicimos cargo de la tal cosa, nos dispusimos á toda prisa\n         y marchamos contra ellos, no obstante que entre nosotros la gente de pelea había algunos\n         cuyo parecer y deseo era que se mandase al capitán y se le hiciece decir, que no debía\n         marchar contra aquellos, por\n                     \n      \n   \n",
  id: 134
});
index.addDoc({
  // section: null,
  title: "p273",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      que ello podría ser causa de una gran hambruna en la tierra, de suerte que si se ofreciere\n         pasar del Perú al Río delle Plata, no encontrarían allí nada de comer; mas nuestro capitán y la comunitett (comunidad) no quisieron entrar por ello, sino que siguieron el antedicho propósito\n         y marcharon contra los dichos Wockhhobosíes (Corocotoquis), y cuando ya estábamos nosotros como á 1/2 milla (legua) de camino de ellos ya habían sentado sus reales al abrigo de 2 cerros y bosques\n         á los 2 costados, porque, llegado el caso de que nosotros los venciésemos, pudiesen\n         ellos escaparse de nosotros con más facilidad. Pero la cuenta les salió mal parada:\n         aquellos que nosotros alcanzamos tuvieron que quedar allí ó ser nuestros esclavos;\n         así que en la tal escaramuza nos ganamos hasta unos 1.000, sin contarlos que matamos\n         hombres, mujeres y niños.\n      \n      Después de estos nos quedamos 2 meses largos en este pueblo que era tan grande como\n         serían cualesquiera 5 ó 6 de los otros. Así, pues, marchamos adelante hasta el pueblo\n         donde habíamos dejado los 2 antedichos navíos de que se trató en la f. (48) y estuvimos en el viaje año y medio, en que nosotros no hicimos más que guerrear\n         con los\n                     \n      \n   \n",
  id: 135
});
index.addDoc({
  // section: null,
  title: "p274",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      demás, y en este viaje nos hicimos de hombres, mujeres y niños hasta el número de\n         12.000 personas obligados á ser nuestros esclavos; también me tocaron por mi parte unas 50 personas\n         entre hombres, mujeres y niños.\n      \n      Y eso que nosotros llegamos á las naos nos avisó la gente que habíamos dejado en estos\n         navíos bergentín (bergantines) de como, en nuestra ausencia, un capitán llamado Diego Abriegenn (Diego de Abrego) natural de Sievilla en Hispania, por propia cuenta, y un capitán con el nombre de thonn Fran. Manthossa (don Francisco de Mendoza), que nuestro capitán general Domenigo Marthin Eyolla (Irala) había nombrado para capitán de los 2 navíos y de la gente misma, habian armado un\n         gran alboroto entre ellos, preten-\n                     \n      \n   \n",
  id: 136
});
index.addDoc({
  // section: null,
  title: "p275",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      diendo éste que él y no otro debería mandar y gobernar en la ciudad, durante la ausencia,\n         mientras que el dicho Diego de Abriego (Diego de Abreu ó Abrego) quería mandar sólo; mas thonn Francisco Manthossa, como capitán delegado y lugarteniente de Marthín Domenigo Eyolla (Irala), no quería consentírselo. A todo esto se armó una merienda de negros entre ellos, hasta que por fin Tiego de Abriego quedó dueño del campo, y derrotó y le cortó la cabeza á thonn Fran Manthossa.\n          \n      \n      \n      CAPÍTULO L\n      \n      MOTÍN DE ABREU. SCHMIDEL RECIBE CARTAS DE ESPAÑA.\n      \n      Entonces sin perder un instante puso á toda la tierra en alarma y quiso marchar contra\n         nosotros aquí, y primero se fortificó en la ciudad; mientras esto llegamos nosotros\n         con nuestro capitán Marthín Domenigo Eyolla (Irala), á las puertas de la ciudad, mas ni así quiso él dejarlo entrar á nuestro capitán,\n         ni tampoco entregarle la ciudad, ni mucho menos reconocerle por señor.\n      \n      Después que nuestro capitán se apercibió de la tal cosa, le pusimos nosotros cerco\n         á la ciudad\n              \n      \n   \n",
  id: 137
});
index.addDoc({
  // section: null,
  title: "p276",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      Nostra Signara de Sunssión; después de lo cual la gente de pelea que estaba en la ciudad, cuando vieron que\n         la cosa era de veras de parte nuestra, salían diariamente adonde nosotros estábamos\n         en el campo y le pedían perdón á nuestro capitán.\n      \n      Cuando el dicho Diego de Abriego (Abrego) conoció cuál era la conducta de su gente, y que no se podía fiar de ella, por otra\n         parte recelaba que cualquier noche de esas tomásemos la ciudad por traición, que era\n         lo más probable que allí aconteciese, se aconsejó él con sus mejores compañeros y\n         amigos, y averiguó cuáles eran los que estaban dispuestos á salir de la ciudad con\n         él; así se llevó consigo cerca de 50 hombres; los demás, tan luego como salieron de\n         la ciudad los que iban con el Diego, se plegaron á nuestro capitán y le entregaron la ciudad y le pidieron perdón; así\n         se los prometió el capitán y entró en la ciudad.\n      \n      Mas el dicho Diego de Abriego (Abreu) merodeó con los 50 Cristianos en unas 30 millas (leguas) de camino á la redonda, así que nosotros no pudimos vencerlos; y estos dos\n         caudillos se hicieron la guerra el uno al otro durante 2 años enteros, de suerte que\n         el uno por causa del otro no se contaba seguro; porque el Diego de Abriego (Abrego) no se quedaba mucho en lugar alguno; hoy allí, mañana en otra parte, y donde\n         nos podía perjudicar no se descuidaba él, porque hasta se parecía á un salteador de\n         caminos. En suma, si\n              \n      \n   \n",
  id: 138
});
index.addDoc({
  // section: null,
  title: "p277",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      quería nuestro capitán estar en tranquilidad tenía que buscar arreglo con el Diego,\n         y pactó un casamiento con sus 2 hijas que dio él á los 2 primos del Diego (Abreu), llamados el uno Aluiso Richkell (Alonso Riquelme de Guzmán), y el otro Francisco [Vergara] (Francisco Ortiz de Vergara), y recién cuando se concertaron los tales casamientos conseguimos estar en paz entre\n         nosotros.\n      \n      Por el mismo tiempo me llegó una carta de Hispania por Sevilla y del factor de Fuckher, llamado Chriestoff Reysser, á saber, de como á la misma persona le había escrito Sebastián Neithart, por pedido de mi finado hermano Thoma Schmidl, por si fuese posible que se me ayudase á regresar á mi tierra, lo cual él, el dicho\n         Chriestoff Reysser, con toda diligencia de su parte había solicitado y tratado de cumplir, á lo que\n         se debió que me llegó la carta, la cual recibí yo el año 1552, el día 25 de Julio,\n         ó sea el día de Santiago.     \n      \n   \n",
  id: 139
});
index.addDoc({
  // section: null,
  title: "p278",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      CAPÍTULO LI\n      \n      EL AUTOR EMPRENDE VIAJE DE VUELTA. BAJA POR EL RÍO DE LA PLATA Y SUBE POR EL PARANÁ\n      \n      Después que leí yo la carta, sobre la marcha pedí licencia á nuestro capitán Thomenigo Martín Eyolla (Irala), mas él al principio no quiso dármela; pero más tarde tuvo él que reconocer mi largo\n         servicio prestado, desde que yo por tantos años había servido fielmente á la Cesárea\n         Majestad en tierra, y que por él, capitán Eyolla (Irala) muchas veces había puesto en peligro cuerpo y vida y que jamás lo había abandonado;\n         de esto debió acordarse él y me dió licencia, me encomendó también carta para la Cesárea\n         Majestad, es decir, para que en ella hiciese él saber á Su Majestad cómo se estaba\n         en la tierra Rio delle Platta, y qué era lo que en ella había acontecido durante el tal tiempo. Las tales cartas\n         las entregué yo á los Consejeros de la Casárea Majestad en Sevilla, á quienes yo también de palabra hice relación y dí buena cuenta de la tierra.\n      \n      Y cuando yo ya tuve todas mis cosas dispuestas para el viaje, fué que me despedí amistosamente\n         del capitán Marthin Domenigo Eyolla (Irala) y de los demás buenos compañeros y amigos; me llevé también 20 Indios Caríos, que cargasen con lo\n                     \n      \n   \n",
  id: 140
});
index.addDoc({
  // section: null,
  title: "p279",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      necesario para un viaje tan lejos; porque cada uno tiene que calcular lo que puede\n         precisar para el camino.\n      \n      Y 8 días antes que yo debía partir, llegó uno del Presiel (Brasil); trajo noticia, de cómo precisamente debió haber llegado allí un navío de Liesebonna (Lisboa) en Portugal, el cual pertenecía al muy honorable y discreto señor Johann von Hielst allá en Lisabona (Lisboa), un comprador ó un factor del Erasmus Schezen en Amberes.\n      \n      Y cuando yo hube averiguado cuanto tenía que decirme me puse en marcha en nombre de\n         Dios el Todopoderoso el año 1552 á 26 de Diciembre y día de San Esteban, y abandoné\n         el Río delle Platta, partiendo de la ciudad Nostra Singnora de Sunssionn con 20 Indios y 2 cananen (canoas), y primero llegamos á las 26 millas (leguas) á un pueblo llamado Juegrichsaibe (Yeruquihaba); allá en ese pueblo se me juntaron 4 compañeros, 2 Españoles y 2 Portugueses, los\n         mismos que no traían licencia del capitán. De allí marchamos juntos y llegamos como\n         á las 15 millas (leguas) á un pueblo grande llamado Barey; de allí marchamos 4 días de viaje, 16 millas (leguas), hasta         \n      \n      \n   \n",
  id: 141
});
index.addDoc({
  // section: null,
  title: "p280",
  layout: "textoporpagina",
  content: "\n   \n      \n      llegar á un pueblo llamado Gebareche; de éste marchamos nosotros 9 días de viaje, 54 millas (leguas), hasta un pueblo llamado Barode. Allí nos quedamos 6 días largos, porque buscábamos víveres y cannanen (canoas); visto que teníamos nosotros que navegar 100 millas (leguas) aguas arriba del Parnau (Paraná); y llegamos á un pueblo llamado Gienge, allí quedamos 4 días. Hasta aquí en este pueblo todo obedece á la Cesárea Majestad,\n         y es tierra de Caríos.  \n      \n      \n      \n      CAPÍTULO LII\n      \n      PASAN POR LOS TUPÍ. SU DESCRIPCIÓN. LLEGAN AL PUEBLO DE JUAN KAIMUNNELLE (RAMALLO)\n      \n      Ahora empieza la tierra del Rey de Portugal, á saber, la de los Thopiss (Tupí); ahí tuvimos que dejar el Parnau (Paraná) y las cannanon (canoas), y marchar por tierra á los Thopis (Tupí), y caminamos 6 semanas largas por desiertos, cerros y valles, en que [por\n         miedo] de las fieras del campo no podíamos dormir tranquilos; y hay entre el susodicho\n         pueblo  Gienge y los Thopis 126 millas (le-\n         \n      \n   \n",
  id: 142
});
index.addDoc({
  // section: null,
  title: "p281",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      guas), de camino. Estas naciones Thopis se comen á la gente, cuando es enemiga; no hacen otra cosa que andar siempre en guerra, y cuando vencen\n         á sus enemigos, conducen ellos los prisioneros á su pueblo tal y como en la tierra\n         aquí (Baviera) se dispone una boda; y cuando es llegado el tiempo en que quieren acabar con los\n         prisioneros ó matarlos, se preparan ellos una gran ceremonia con este fin; pero hasta\n         tanto por lo que es el hombre prisionero, se le da cuanto se le antoja ó que puede\n         desear, como ser mujeres con quienes holgar ó cosas de comer, lo que el corazón le\n         pida, hasta que llega la hora en que tiene (de morir). Su gusto y su encanto está\n         en la guerra perpétua. Iten [ellos] beben, y comen y están día y noche borrachos; también son amigos del baile,\n         y llevan a tal extremo la vida de adulterio, que no es para contada; es una gente\n         fiera, ambiciosa y soberbia; hacen vino del trigo turco (maíz) con el que se llenan, tal como cualquiera aquí se toma el mejor de los vinos; tienen\n         idioma parecido [al de] los Caríos, con los que bien poca es la diferencia que hay.\n      \n      De allí llegamos nosotros a un pueblo llamado Karieseba, son también Thopis, están de guerra con los Cristianos, mas los anteriores son amigos de los Cristianos;\n         eso que llegamos el Domingo\n         \n      \n   \n",
  id: 143
});
index.addDoc({
  // section: null,
  title: "p282",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      de Palmas á 4 millas (leguas) de un pueblo, nos convencimos que teníamos que guardarnos bien de los Karieseba; y esta vez, con ser que estábamos en tanta escasez de bastimento, tuvimos sin embargo\n         que caminar un poco más en busca de comida, pero no pudimos contener á 2 de nuestros\n         compañeros, que á pesar de nuestro buen consejo se metieron en el pueblo; les prometimos\n         pues esperarlos, lo que allí también se cumplió. Pero ni bien entraron ellos al pueblo\n         fueron muertos y comidos en seguida. ¡Quiera Dios apiadarse de ellos! Amén. \n      \n      Después de esto se nos presentaron estos mismos Indios en número como de 50 hombres\n         á distancia de 30 pasos; traían puesta la ropa de los Cristianos y se pararon y platicaron\n         con nosotros; pero es costumbre entre estos Indios, que si alguno se para á pocos\n         pasos de su enemigo y platica con él, nada de bueno le está urdiendo. A esto cuando\n         lo advertimos, nos preparamos lo mejor que pudimos con nuestras armas y les preguntamos\n         a donde habían quedado nuestros compañeros, allí dijeron ellos que estaban en su pueblo\n         y que nosotros también deberíamos pasar allá; mas nosotros no lo quisimos hacer, porque\n         bien les conocimos la mala intención. En seguida nos hicieron disparos con sus arcos, pero no nos resistieron mucho tiempo, sino que dispararon á su pueblo y al punto\n         trajeron de allí hasta unos 6.000 contra \n         \n         \n      \n   \n",
  id: 144
});
index.addDoc({
  // section: null,
  title: "p283",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      nosotros; pero nosotros en tal apuro no teníamos más amparo que un bosque grande y\n         cuatro  arcabuces junto con 20 (60) Indios de los Caríos, que nos habíamos traído de la ciudad Nostra Singnora de Sunssión; así, pues, nos sostuvimos allí unos 4 días con sus noches, en que nos hacíamos continuas\n         descargas, y en la cuarta noche con todo sigilo abandonamos el bosque y marchamos\n         de allí, porque no teníamos mucho que comer, y los enemigos también empezaban á llevarnos\n         ventaja; como dice el refrán: porque son muchos los perros muere la liebre.\n      \n      De allí marchamos nosotros 6 días seguidos por bosques desamparados, como que en mis\n         días (y eso que he andado la seca y la meca) no he visto iguales, ni he viajado por\n         camino más enmarañado; tampoco teníamos que comer, y por eso había que remediarnos\n         con miel y raicecillas que encontrábamos; también se apoderó de nosotros desconfianza\n         de que el enemigo nos alcanzase, si nos permitíamos aunque no fuese más que el tiempo\n         para cazar alguna salvagina del campo.\n      \n      Así llegamos á una nación llamada Biessaie (Mbiaçá), allí paramos 4 días largos é hicimos bastimento, mas no nos atrevimos a entrar en\n         el pueblo, siendo nosotros los pocos que éramos. Cerca de esta nación está un agua (río) llamado Urquaie (Uruguay); allí vimos víboras o ser-\n         \n      \n   \n",
  id: 145
});
index.addDoc({
  // section: null,
  title: "p284",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      pientes, llamadas en su lengua de Indios schue éyba thuescha; es de 14 pasos de largo y 2 brazadas de grueso en el medio; hacen mucho daño, por\n         ejemplo, cuando se baña la gente, ó bebe una fiera de la misma agua ó se pone á nadar\n         sobre el agua, así se le arrima una serpiente de éstas debajo del agua, nada hasta donde está el hombre, ó la fiera, y\n         lo envuelve en la cola, zambulle en seguida bajo del agua y se lo come; porque siempre\n         se mantiene con la cabeza á flor de agua y observa á ver si se presenta algo que sea\n         hombre ó bestia, que pueda matar y envolver.\n      \n      De allí marchamos nosotros adelante un mes largo y seguido, 100 millas (leguas) de camino, y llegamos a un pueblo grande llamado Scherebethuebá, allí nos quedamos 3 días y estábamos muy rendidos; no nos había sobrado de comer,\n         porque nuestro principal alimento era miel, con lo que estábamos todos sin fuerzas;\n         así, pues, cualquiera puede con lo dicho hacerse cargo de los peligros y de la pobre\n         y mala vida que fué la nuestra en tan dilatado viaje, muy particularmente en lo tocante\n         á la comida, bebida y dormidas; la cama que cada uno traía consigo, pesaba 4 ó 5 libras,\n         (y) era de algodón; se hacen en forma de red, se atan á 2 árboles, y allí se echa encima cada uno; esto\n         se hace en el bosque bajo del azulado cielo; \n         \n         \n      \n   \n",
  id: 146
});
index.addDoc({
  // section: null,
  title: "p285",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      porque si no son muchos los que juntos marchan por tierra en Indiam (Indias), es más seguro sacarla bien en el bosque que en las casas ó pueblos de los Indios.\n      \n      Ahora marchamos nosotros á un pueblo que pertenece á los Cristianos, en que el principal\n         se llama Johann Kaimunnelle (Juan Ramallo) y por suerte nuestra no estaba en casa, porque este pueblo me pareció una cueva de\n         ladrones; fué que el dicho principal estaba en casa de otro Cristiano en Vincendo (San Vicente) y estos desde ya antes estaban por entrar en un arreglo entre sí; estos 800 Cristianos,\n         pues, en los 2 pueblos dependen del rey de Portugal, y del dicho Kaimunnelle (Ramallo), quien según él mismo lo asegura hace ya 40 años largos que ha vivido,\n         mandado, peleado y conquistado en tierra de Indias, razón por la que quiere seguir\n         mandando en la misma con preferencia á cualquier otro, cosa que el otro tal no se\n         la consiente, y por lo tanto se hacen entrambos la guerra; y este más nombrado Kaimunnelle (Ramallo) puede en un día reunir 50.000 Indios, mientras que el rey no reúne 2.000;\n         tanto es el poder y el prestigio de que él goza en la tierra.\n      \n      Pero sucedió que el hijo del tantas veces nombrado Kaimunnelle (Ramallo) había estado allí cuando llegamos nosotros al susodicho pueblo,       \n         \n         \n      \n   \n",
  id: 147
});
index.addDoc({
  // section: null,
  title: "p286",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      quien nos recibió bien, aunque nosotros teníamos que desconfiar más de él que de los\n         Indios; mas como aquí nos fué bien, demos siempre gracias á Dios el Creador por Cristo\n         Jesús, su único Hijo, que hasta aquí tanto nos ha favorecido y de todos modos nos\n         ha amparado. \n      \n      \n      \n      CAPÍTULO LIII\n      \n      LLEGADA A SAN VICENTE. VIAJE Á ESPAÑA. MARAVILLAS DEL MAR  \n      \n      Ahora marchamos algo más adelante á una pequeña ciudad llamada S. Vicendo (San Vicente), 20 millas (leguas) de camino; allá llegamos el año 1553 anno Domini, el 13 de junio, en día de San Antonio y dimos con un navío portugués, que estaba allí cargado con azúcar, palo de Brasil y algodón, y pertenecía al honorable Schezen; su factor está en Lisabonna (Lisboa), se llama Johann vonn Huessen, quien á más tiene otro factor allí en Vincendo (S. Vicente), llamado Petter Rosel.\n      \n      Iten los antedichos señores Schezenn y Johan von Halsen tienen allá en la tierra muchos pueblos y villorrios azucareros, en que se hace azúcar\n         año redondo. Así, pues, me recibió el susodicho Petter Rossel muy amistosamente y me trató muy en\n         \n      \n   \n",
  id: 148
});
index.addDoc({
  // section: null,
  title: "p287",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      grande; él también me recomendó á la tripulación con que tenía que navegar, y les\n         pidió que se quisiesen poner á mis órdenes, lo que después cumplió con exactitud el\n         capitán este, y [yo] confieso que es así; así nos quedamos aún 11 días en la ciudad\n         Vincendo (S. Vicente), para prepararnos y proveernos de todo lo necesario que puede á uno\n         hacerle falta en alta mar. Iten echamos 6 meses largos, de la ciudad Nostra Singnora de Sunssión hasta la ciudad S. Vicendo en Presiell (Brasil) y hay 476 millas (leguas) de camino.\n      \n      Después nos hicimos á la vela, en seguida de habernos despachado de lo que había que\n         hacer, y salimos de la ciudad S. Vincenndo el año 1553, anno Domini, el 24 de junio, día de San Juan; así mismo estuvimos nosotros 14 días largos en el piélago o mar, sin alcanzar un\n         viento favorable, antes al contrario tormentas y tiempo horrible sin tregua, así que\n         no podíamos atinar adonde estábamos; á todo esto se nos tronchó el mástil del navío, que empezó a hacer mucha agua, así que tuvimos que acercarnos á tierra\n         y llegamos á un puerto ó bahía llamada ciudad Spiritu Sanntto (Victoria), está en Presil (Brasil) en Inndia (Indias), pertenece al rey de Portugal, hay Cristianos en la ciudad, con sus mujeres é hijos\n         hacen azúcar, tienen algodón y palo de Brasil y de otras clases que por allí se encuentran.\n      \n      En estos lugares del mar entre S. Vincenndo y\n         \n         \n      \n   \n",
  id: 149
});
index.addDoc({
  // section: null,
  title: "p288",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      Spiritu Sannto es donde más se encuentra la ballena ó cetáceo; hacen mucho daño, por ejemplo, cuando se quiere navegar de un puerto al otro en\n         pequeños navíos, que al fin son algo mayores que los navíos grandes de aquí en esta\n         tierra (Baviera), allí se presentan estas ballenas en mesnada y arman batalla entre sí, y si en esto\n         se encuentran con el navío, allí lo hacen zozobrar con gente y todo. Estas ballenas\n         vomitan ó arrojan agua constantemente por la boca, y una que otra vez tanta cuanta\n         cabe en un buen tonel de Francia; y el tal golpe de agua lo produce ella cada y cuando\n         mete la cabeza bajo del agua y la vuelve á sacar: esto hace ella día y noche y quien\n         por primera vez lo ve se hace de cuenta que tiene un peñasco á la par. Mucho habría\n         que escribir del pez este.\n      \n      Iten hay también cantidad de otros peces raros y maravillas del mar, de las que todo\n         lo que se puede decir y contar, por más detallado que fuese, sería poco. Hay otro\n         pez muy grande, se llama en español sumere, esto es en alemán schnub-huet vischs (pez sombrerero de paja); es este un pez del que todo lo que se diga y escriba es poco; tal es de grande,\n         de fuerte y de poderoso el tal pez; en algunas partes perjudica mucho á los navíos;\n         porque siendo que no corra viento, y que por ello están los navíos encalmados sin\n         poder marchar ni para atrás ni para adelante; cuando el pez embiste\n      \n      \n      \n      \n   \n",
  id: 150
});
index.addDoc({
  // section: null,
  title: "p289",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      a navío con un golpe tan recio, que todo él tiembla y se estremece, entonces al punto\n         hay que arrojarle del navío una ó dos grandes pipas; y así el dicho pez se apodera\n         de las barricas, deja al navío y juega con ellas.\n      \n      Iten más otro pez muy grande, llamado pesche spaide (pez spaide), esto es en alemán vischsmesser ó schwertmesser, hace gran daño á los demás peces, y cuando aquellos se pelean entre sí, es la cosa\n         como cuando en tierra se juntan 2 caballos bellacos y se acometen uno al otro: lo\n         cual es divertido ver en la mar; mas cuando los peces pelean entre sí, por lo general\n         sobreviene mal tiempo en la mar. Ítem más hay otro pez grande y malo, que supera á\n         todos en aquello de pelear ó batirse; se llama en español serre pesche (pez sierra), en alemán sägvischs. Hay otros peces más cuyos nombres no los sé. Iten peces voladores y otros peces grandes llamados doninnen (toninas).\n      \n      \n      CAPÍTULO LIV\n      \n      LLEGADA Á LISBOA Y SEVILLA. PASA Á CÁDIZ. ESCAPADA DE UN NAUFRAFIO\n      \n       Así pues navegamos 4 meses largos seguidos en la mar, sin que viésemos tierra alguna,\n         y conducíamos mercaderías del dicho puerto Spíritu Sancto.\n      \n   \n",
  id: 151
});
index.addDoc({
  // section: null,
  title: "p290",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n       Después llegamos á una isla llamada Iesle de Terzero (Isla Terceira), allí volvimos á tomar víveres, pan, carne y agua y lo demás que nos faltaba y nos\n         quedamos allí 2 días enteros; pertenece al rey de Portugal. \n      \n      De allí navegamos á Lisebonna (Lisboa) a los 14 días, año 1553, anno domini, Setiembre 30; el día de Sannt Jerónimo arribamos allí y nos quedamos 14 días largos en la ciudad de Lisebonna. Allí se me murieron 2 indios que traía yo conmigo de la tierra (el Paraguay). De allí viajé per postman (por la posta) á Sevilla en 6 días -son 72 millas (leguas); y me quedé unas 4 semanas largas hasta que estuviesen listos los navíos;\n         después salí de Sevilla por agua y llegué en 2 días á la ciudad de S. Lucas (San Lúcar de Barrameda) donde me quedé hasta el otro día. De allí viajé yo un día de camino por tierra y\n         llegué á una ciudad llamada Portta S. Marie (Puerto de Santa María), de donde anduve 8 millas (leguas) de camino por agua y llegué á la ciudad Calles (Cádiz), allí á la sazón estaban los navíos holandeses, que debían partir para los Países Bajos; los mismos que eran unos 25, todos navíos grandes, que se llaman hulckhenn (urcas).\n      \n       Entre estos 25 navíos había uno nuevo, grande y muy lindo, que sólo había hecho un\n         viaje de Andorff (Amberes) á Hispaniam; así pues me aconsejaron los comerciantes que debía yo embarcarme\n      \n   \n",
  id: 152
});
index.addDoc({
  // section: null,
  title: "p291",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      \n        en este navío nuevo; y el patrón se llamaba Heinrich Ses; era un hombre honorable y capaz, con él traté yo y arreglé mi pasage, también la\n         comida y las demás cosas que faltaban para este viaje, por todo esto cerré yo trato\n         con él. Esa misma noche acabé yo de aprestarme de todo, é hice llevar mi botín, vino,\n         pan y cosas por el estilo, también los papagayos que había yo traído de India (Indias), todo al navío; y por último convine con el patrón que para complacerme me haría\n         anunciar la hora de partir, lo que el patrón me prometió, y que no se iría sin mí,\n         sino que con toda seguridad me haría avisar. Ahora sucedió que el dicho patrón esa\n         misma noche tomó algo de más, así que (por suerte mía) se olvidó y me dejó en la posada,\n         sucedió que 2 horas antes de amanecer, el timonel, que era quien manejaba el navío,\n         hizo que se levase el ancla, y allí se hizo a la vela. Y cuando yo de mañana fui á buscar el navío, ya estaba\n         este una milla (legua) larga de camino distante de tierra; en seguida tuve que buscarme otro navío\n         y cerrar trato con otro capitán, al que tuve que darle lo mismo que al anterior; así\n         partimos al punto de allí con los otros 24 navíos y tuvimos viento favorable los primeros\n         3 días, mas después nos vino un viento fuerte y contrario, de suerte que no podíamos\n         seguir navegando; estuvimos, pues, 5 días largos siempre en\n      \n   \n",
  id: 153
});
index.addDoc({
  // section: null,
  title: "p292",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      gran peligro esperando bonanza; pero cuanto más nos demorábamos más brava se ponía\n         la mar, hasta que ya no nos fue posible esperar más mar afuera, sino que tuvimos que\n         regresar para atrás por el camino que habíamos traído.\n      \n       Ahora es costumbre en práctica de la mar, que los marineros y patrones hagan un capitán\n         general entre ellos, que en español se llama almerando (almirante); este manda a todos los navíos, y lo que él quiere eso se ha de hacer,\n         eso se ha de cumplir, en alta mar; y ellos, los marineros y patrones, tienen que jurarle\n         que ninguno de ellos se ha de querer separar de los demás; porque la Cesárea Majestad\n         había ordenado y mandado que menos de 20 navíos no deberían emprender viaje de España\n         á los Países Bajos, por causa del Rey de Francia, mientras duraba la guerra entre\n         ellos. Fuera de esta hay otra costumbre más en alta mar, que un navío no ha de navegar\n         á más de una milla (legua) de distancia del otro, y cuando se pone ó entra el sol, también los navíos\n         tienen de juntarse y los patrones han de saludar al miranndo (almirante) con 3 ó 4 tiros, y todos los días 2 veces; también por la otra parte\n         el miranndi (almirante) ha de colgar del navío suyo 2 linternas hechas de hierro, que se llaman\n         farall (faroles), [y] las ha de dejar prendidas toda la noche, así los demás han de seguir\n         al navío, en que está la luz, y no se han de separar por nada.\n      \n      \n   \n",
  id: 154
});
index.addDoc({
  // section: null,
  title: "p293",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      \n      Iten más el mirando (almirante) les avisa cada noche á los navegantes el rumbo que piensa tomar, porque\n         si llega el caso de sobrevenir un temporal en alta mar puedan ellos saber el rumbo\n         ó viento que ha seguido [el] mirannd (almirante), y así no se aparten los unos de los otros.\n      \n      Y eso que tuvimos que regresar y volvernos atrás, como se dijo, allí estaba el navío\n         del susodicho Ha[i]nrich Schezen, en que tenía yo todo mi botín, el mismo me había dejado en Calless (Cádiz), el postrero de los demás navíos, y cuando ya nos aproximamos como á una\n         milla (legua) de camino de la ciudad de Calless (Cádiz) allí se nos hizo obscuro y anocheció; así que el almirandos (almirante) tuvo que mostrar un farol, mediante el cual se le arrimasen los navíos.\n         Y cuando ya hubimos llegado á la ciudad Calless (Cádiz), cada patrón largó su ancla al agua y el mirando (almirante) también retiró su farol. Mientras esto se hizo una lumbre en tierra sin\n         dañada intención, mas le fué funesta para la suerte de Hainrich Schezen y su navío; ahora la lumbre procedía de cerca de un molino, como a un tiro de arcabuz\n         de la ciudad de Calless (Cádiz), y así el antedicho Hainrich Schez se encaminó derecho á ella, porque se le puso que era el farol del miranndo (almirante), y cuando él con su navío estaban ya muy cerca de la luz, dio con toda\n         fuerza sobre un peñasco, que estaba allí dentro del agua, y su navío se hizo cien\n      \n      \n   \n",
  id: 155
});
index.addDoc({
  // section: null,
  title: "p294",
  layout: "textoporpagina",
  content: "\n   \n      \n       mil pedazos y se fueron á pique gente y carga, en menos de un medio cuarto de hora,\n         y no quedó un palo sobre otro; también de 22 almas solo se salvaron el patrón y el\n         timonel, que escaparon sobre un madero grueso; también se perdieron 6 baules con oro\n         y plata perteneciente a la Cesárea Majestad y gran cantidad de mercancías más de propiedad\n         de los comerciantes. Por lo cual doy yo á Dios mi Redentor y Salvador por Cristo Jesús\n         alabanzas, honor, loas y gracias por siempre, porque esta vez más tan misericordiosamente\n         me dirigió, defendió y amparó por cuanto yo en la primera vez no alcancé el navío.\n      \n      \n      CAPÍTULO LV\n      \n      VUELVE Á EMBARCARSE EL AUTOR EN CÁDIZ. LLEGAN Á INGLATERRA Y DE ALLÍ Á AMBERES\n      \n       Después de esto paramos 2 días quietos en Khalliss (Cádiz), y el día de San Andrés volvimos á emprender viaje para Anntorff (Amberes), tuvimos en este viaje tan mal tiempo y tan terribles vendabales, que los mismos\n         patrones decían que en 20 años, ó sea en todo el tiempo que habían navegado por los\n         mares, no habían visto ni oído\n      \n   \n",
  id: 156
});
index.addDoc({
  // section: null,
  title: "p295",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      \n      decir de tormenta tan horrible ni que dure tanto tiempo.\n      \n      Así ahora arribamos á Inglaterra, á un puerto llamado Viedt (Isla de Wight), no nos quedaba en nuestros navíos una sola Welle (vela), esto es, una lona que se extiende en el palo, ni tampoco velamen, ni aparejo, ni la menor cosa á bordo de los navíos; y si el tal viaje hubiese durado un poco\n         más, no se hubiese salvado uno de estos 24 navíos; sólo Dios el Señor nos sacó bien\n         por otro lado.\n      \n      Ahora para colmo de todo lo demás, siendo ya el día de año nuevo del año 1554, el\n         día de los 3 Santos Reyes, 8 navíos se perdieron desgraciadamente con vidas y haciendas, cosa que daba pena\n         de ver; porque lo cierto es que no salvó uno solo de allí.\n      \n      Esto aconteció entre Francia é Inglaterra. Dios el Todopoderoso quiera favorecerlos y á nosotros con su misericordia,\n         por Cristo su único Hijo. Amen.\n      \n      Así nos quedamos 4 días en el dicho puerto Viedt (Wight) en Inglaterra y de allí navegamos á Probannt (Brabante), y a los 4 días arribamos á Arnmu[id]a que es una ciudad en Sehelandt, adonde están surtos los navíos grandes; está á 74 millas (leguas) de camino de Viede (Wight), y de allí navegamos á Anntdorff (Amberes), que está á\n         \n      \n   \n",
  id: 157
});
index.addDoc({
  // section: null,
  title: "p296",
  layout: "textoporpagina",
  content: "\n   \n      \n      \n      24 millas de camino. Y llegamos allí el 26 de enero, año 1554.\n      \n      Sí. ¡Alabado y loado sea Dios por siempre, porque tan misericordiosamente me deparó\n         tan próspero viaje! Amen.\n      \n   \n",
  id: 158
});
console.log( jQuery.type(index) );

var store = [{
  // "section": null,
  "title": "p138",
  "layout": "textoporpagina",
  "link": "/p138",
},
{
  // "section": null,
  "title": "p139",
  "layout": "textoporpagina",
  "link": "/p139",
},
{
  // "section": null,
  "title": "p140",
  "layout": "textoporpagina",
  "link": "/p140",
},
{
  // "section": null,
  "title": "p141",
  "layout": "textoporpagina",
  "link": "/p141",
},
{
  // "section": null,
  "title": "p142",
  "layout": "textoporpagina",
  "link": "/p142",
},
{
  // "section": null,
  "title": "p143",
  "layout": "textoporpagina",
  "link": "/p143",
},
{
  // "section": null,
  "title": "p144",
  "layout": "textoporpagina",
  "link": "/p144",
},
{
  // "section": null,
  "title": "p145",
  "layout": "textoporpagina",
  "link": "/p145",
},
{
  // "section": null,
  "title": "p146",
  "layout": "textoporpagina",
  "link": "/p146",
},
{
  // "section": null,
  "title": "p147",
  "layout": "textoporpagina",
  "link": "/p147",
},
{
  // "section": null,
  "title": "p148",
  "layout": "textoporpagina",
  "link": "/p148",
},
{
  // "section": null,
  "title": "p149",
  "layout": "textoporpagina",
  "link": "/p149",
},
{
  // "section": null,
  "title": "p150",
  "layout": "textoporpagina",
  "link": "/p150",
},
{
  // "section": null,
  "title": "p151",
  "layout": "textoporpagina",
  "link": "/p151",
},
{
  // "section": null,
  "title": "p152",
  "layout": "textoporpagina",
  "link": "/p152",
},
{
  // "section": null,
  "title": "p153",
  "layout": "textoporpagina",
  "link": "/p153",
},
{
  // "section": null,
  "title": "p154",
  "layout": "textoporpagina",
  "link": "/p154",
},
{
  // "section": null,
  "title": "p155",
  "layout": "textoporpagina",
  "link": "/p155",
},
{
  // "section": null,
  "title": "p156",
  "layout": "textoporpagina",
  "link": "/p156",
},
{
  // "section": null,
  "title": "p157",
  "layout": "textoporpagina",
  "link": "/p157",
},
{
  // "section": null,
  "title": "p158",
  "layout": "textoporpagina",
  "link": "/p158",
},
{
  // "section": null,
  "title": "p159",
  "layout": "textoporpagina",
  "link": "/p159",
},
{
  // "section": null,
  "title": "p160",
  "layout": "textoporpagina",
  "link": "/p160",
},
{
  // "section": null,
  "title": "p161",
  "layout": "textoporpagina",
  "link": "/p161",
},
{
  // "section": null,
  "title": "p162",
  "layout": "textoporpagina",
  "link": "/p162",
},
{
  // "section": null,
  "title": "p163",
  "layout": "textoporpagina",
  "link": "/p163",
},
{
  // "section": null,
  "title": "p164",
  "layout": "textoporpagina",
  "link": "/p164",
},
{
  // "section": null,
  "title": "p165",
  "layout": "textoporpagina",
  "link": "/p165",
},
{
  // "section": null,
  "title": "p166",
  "layout": "textoporpagina",
  "link": "/p166",
},
{
  // "section": null,
  "title": "p167",
  "layout": "textoporpagina",
  "link": "/p167",
},
{
  // "section": null,
  "title": "p168",
  "layout": "textoporpagina",
  "link": "/p168",
},
{
  // "section": null,
  "title": "p169",
  "layout": "textoporpagina",
  "link": "/p169",
},
{
  // "section": null,
  "title": "p170",
  "layout": "textoporpagina",
  "link": "/p170",
},
{
  // "section": null,
  "title": "p171",
  "layout": "textoporpagina",
  "link": "/p171",
},
{
  // "section": null,
  "title": "p172",
  "layout": "textoporpagina",
  "link": "/p172",
},
{
  // "section": null,
  "title": "p173",
  "layout": "textoporpagina",
  "link": "/p173",
},
{
  // "section": null,
  "title": "p174",
  "layout": "textoporpagina",
  "link": "/p174",
},
{
  // "section": null,
  "title": "p175",
  "layout": "textoporpagina",
  "link": "/p175",
},
{
  // "section": null,
  "title": "p176",
  "layout": "textoporpagina",
  "link": "/p176",
},
{
  // "section": null,
  "title": "p177",
  "layout": "textoporpagina",
  "link": "/p177",
},
{
  // "section": null,
  "title": "p178",
  "layout": "textoporpagina",
  "link": "/p178",
},
{
  // "section": null,
  "title": "p179",
  "layout": "textoporpagina",
  "link": "/p179",
},
{
  // "section": null,
  "title": "p180",
  "layout": "textoporpagina",
  "link": "/p180",
},
{
  // "section": null,
  "title": "p181",
  "layout": "textoporpagina",
  "link": "/p181",
},
{
  // "section": null,
  "title": "p182",
  "layout": "textoporpagina",
  "link": "/p182",
},
{
  // "section": null,
  "title": "p183",
  "layout": "textoporpagina",
  "link": "/p183",
},
{
  // "section": null,
  "title": "p184",
  "layout": "textoporpagina",
  "link": "/p184",
},
{
  // "section": null,
  "title": "p185",
  "layout": "textoporpagina",
  "link": "/p185",
},
{
  // "section": null,
  "title": "p186",
  "layout": "textoporpagina",
  "link": "/p186",
},
{
  // "section": null,
  "title": "p187",
  "layout": "textoporpagina",
  "link": "/p187",
},
{
  // "section": null,
  "title": "p188",
  "layout": "textoporpagina",
  "link": "/p188",
},
{
  // "section": null,
  "title": "p189",
  "layout": "textoporpagina",
  "link": "/p189",
},
{
  // "section": null,
  "title": "p190",
  "layout": "textoporpagina",
  "link": "/p190",
},
{
  // "section": null,
  "title": "p191",
  "layout": "textoporpagina",
  "link": "/p191",
},
{
  // "section": null,
  "title": "p192",
  "layout": "textoporpagina",
  "link": "/p192",
},
{
  // "section": null,
  "title": "p193",
  "layout": "textoporpagina",
  "link": "/p193",
},
{
  // "section": null,
  "title": "p194",
  "layout": "textoporpagina",
  "link": "/p194",
},
{
  // "section": null,
  "title": "p195",
  "layout": "textoporpagina",
  "link": "/p195",
},
{
  // "section": null,
  "title": "p196",
  "layout": "textoporpagina",
  "link": "/p196",
},
{
  // "section": null,
  "title": "p197",
  "layout": "textoporpagina",
  "link": "/p197",
},
{
  // "section": null,
  "title": "p198",
  "layout": "textoporpagina",
  "link": "/p198",
},
{
  // "section": null,
  "title": "p199",
  "layout": "textoporpagina",
  "link": "/p199",
},
{
  // "section": null,
  "title": "p200",
  "layout": "textoporpagina",
  "link": "/p200",
},
{
  // "section": null,
  "title": "p201",
  "layout": "textoporpagina",
  "link": "/p201",
},
{
  // "section": null,
  "title": "p202",
  "layout": "textoporpagina",
  "link": "/p202",
},
{
  // "section": null,
  "title": "p203",
  "layout": "textoporpagina",
  "link": "/p203",
},
{
  // "section": null,
  "title": "p204",
  "layout": "textoporpagina",
  "link": "/p204",
},
{
  // "section": null,
  "title": "p205",
  "layout": "textoporpagina",
  "link": "/p205",
},
{
  // "section": null,
  "title": "p206",
  "layout": "textoporpagina",
  "link": "/p206",
},
{
  // "section": null,
  "title": "p207",
  "layout": "textoporpagina",
  "link": "/p207",
},
{
  // "section": null,
  "title": "p208",
  "layout": "textoporpagina",
  "link": "/p208",
},
{
  // "section": null,
  "title": "p209",
  "layout": "textoporpagina",
  "link": "/p209",
},
{
  // "section": null,
  "title": "p210",
  "layout": "textoporpagina",
  "link": "/p210",
},
{
  // "section": null,
  "title": "p211",
  "layout": "textoporpagina",
  "link": "/p211",
},
{
  // "section": null,
  "title": "p212",
  "layout": "textoporpagina",
  "link": "/p212",
},
{
  // "section": null,
  "title": "p213",
  "layout": "textoporpagina",
  "link": "/p213",
},
{
  // "section": null,
  "title": "p214",
  "layout": "textoporpagina",
  "link": "/p214",
},
{
  // "section": null,
  "title": "p215",
  "layout": "textoporpagina",
  "link": "/p215",
},
{
  // "section": null,
  "title": "p216",
  "layout": "textoporpagina",
  "link": "/p216",
},
{
  // "section": null,
  "title": "p217",
  "layout": "textoporpagina",
  "link": "/p217",
},
{
  // "section": null,
  "title": "p218",
  "layout": "textoporpagina",
  "link": "/p218",
},
{
  // "section": null,
  "title": "p219",
  "layout": "textoporpagina",
  "link": "/p219",
},
{
  // "section": null,
  "title": "p220",
  "layout": "textoporpagina",
  "link": "/p220",
},
{
  // "section": null,
  "title": "p221",
  "layout": "textoporpagina",
  "link": "/p221",
},
{
  // "section": null,
  "title": "p222",
  "layout": "textoporpagina",
  "link": "/p222",
},
{
  // "section": null,
  "title": "p223",
  "layout": "textoporpagina",
  "link": "/p223",
},
{
  // "section": null,
  "title": "p224",
  "layout": "textoporpagina",
  "link": "/p224",
},
{
  // "section": null,
  "title": "p225",
  "layout": "textoporpagina",
  "link": "/p225",
},
{
  // "section": null,
  "title": "p226",
  "layout": "textoporpagina",
  "link": "/p226",
},
{
  // "section": null,
  "title": "p227",
  "layout": "textoporpagina",
  "link": "/p227",
},
{
  // "section": null,
  "title": "p228",
  "layout": "textoporpagina",
  "link": "/p228",
},
{
  // "section": null,
  "title": "p229",
  "layout": "textoporpagina",
  "link": "/p229",
},
{
  // "section": null,
  "title": "p230",
  "layout": "textoporpagina",
  "link": "/p230",
},
{
  // "section": null,
  "title": "p231",
  "layout": "textoporpagina",
  "link": "/p231",
},
{
  // "section": null,
  "title": "p232",
  "layout": "textoporpagina",
  "link": "/p232",
},
{
  // "section": null,
  "title": "p233",
  "layout": "textoporpagina",
  "link": "/p233",
},
{
  // "section": null,
  "title": "p234",
  "layout": "textoporpagina",
  "link": "/p234",
},
{
  // "section": null,
  "title": "p235",
  "layout": "textoporpagina",
  "link": "/p235",
},
{
  // "section": null,
  "title": "p236",
  "layout": "textoporpagina",
  "link": "/p236",
},
{
  // "section": null,
  "title": "p237",
  "layout": "textoporpagina",
  "link": "/p237",
},
{
  // "section": null,
  "title": "p238",
  "layout": "textoporpagina",
  "link": "/p238",
},
{
  // "section": null,
  "title": "p239",
  "layout": "textoporpagina",
  "link": "/p239",
},
{
  // "section": null,
  "title": "p240",
  "layout": "textoporpagina",
  "link": "/p240",
},
{
  // "section": null,
  "title": "p241",
  "layout": "textoporpagina",
  "link": "/p241",
},
{
  // "section": null,
  "title": "p242",
  "layout": "textoporpagina",
  "link": "/p242",
},
{
  // "section": null,
  "title": "p243",
  "layout": "textoporpagina",
  "link": "/p243",
},
{
  // "section": null,
  "title": "p244",
  "layout": "textoporpagina",
  "link": "/p244",
},
{
  // "section": null,
  "title": "p245",
  "layout": "textoporpagina",
  "link": "/p245",
},
{
  // "section": null,
  "title": "p246",
  "layout": "textoporpagina",
  "link": "/p246",
},
{
  // "section": null,
  "title": "p247",
  "layout": "textoporpagina",
  "link": "/p247",
},
{
  // "section": null,
  "title": "p248",
  "layout": "textoporpagina",
  "link": "/p248",
},
{
  // "section": null,
  "title": "p249",
  "layout": "textoporpagina",
  "link": "/p249",
},
{
  // "section": null,
  "title": "p250",
  "layout": "textoporpagina",
  "link": "/p250",
},
{
  // "section": null,
  "title": "p251",
  "layout": "textoporpagina",
  "link": "/p251",
},
{
  // "section": null,
  "title": "p252",
  "layout": "textoporpagina",
  "link": "/p252",
},
{
  // "section": null,
  "title": "p253",
  "layout": "textoporpagina",
  "link": "/p253",
},
{
  // "section": null,
  "title": "p254",
  "layout": "textoporpagina",
  "link": "/p254",
},
{
  // "section": null,
  "title": "p255",
  "layout": "textoporpagina",
  "link": "/p255",
},
{
  // "section": null,
  "title": "p256",
  "layout": "textoporpagina",
  "link": "/p256",
},
{
  // "section": null,
  "title": "p257",
  "layout": "textoporpagina",
  "link": "/p257",
},
{
  // "section": null,
  "title": "p258",
  "layout": "textoporpagina",
  "link": "/p258",
},
{
  // "section": null,
  "title": "p259",
  "layout": "textoporpagina",
  "link": "/p259",
},
{
  // "section": null,
  "title": "p260",
  "layout": "textoporpagina",
  "link": "/p260",
},
{
  // "section": null,
  "title": "p261",
  "layout": "textoporpagina",
  "link": "/p261",
},
{
  // "section": null,
  "title": "p262",
  "layout": "textoporpagina",
  "link": "/p262",
},
{
  // "section": null,
  "title": "p263",
  "layout": "textoporpagina",
  "link": "/p263",
},
{
  // "section": null,
  "title": "p264",
  "layout": "textoporpagina",
  "link": "/p264",
},
{
  // "section": null,
  "title": "p265",
  "layout": "textoporpagina",
  "link": "/p265",
},
{
  // "section": null,
  "title": "p266",
  "layout": "textoporpagina",
  "link": "/p266",
},
{
  // "section": null,
  "title": "p267",
  "layout": "textoporpagina",
  "link": "/p267",
},
{
  // "section": null,
  "title": "p268",
  "layout": "textoporpagina",
  "link": "/p268",
},
{
  // "section": null,
  "title": "p269",
  "layout": "textoporpagina",
  "link": "/p269",
},
{
  // "section": null,
  "title": "p270",
  "layout": "textoporpagina",
  "link": "/p270",
},
{
  // "section": null,
  "title": "p271",
  "layout": "textoporpagina",
  "link": "/p271",
},
{
  // "section": null,
  "title": "p272",
  "layout": "textoporpagina",
  "link": "/p272",
},
{
  // "section": null,
  "title": "p273",
  "layout": "textoporpagina",
  "link": "/p273",
},
{
  // "section": null,
  "title": "p274",
  "layout": "textoporpagina",
  "link": "/p274",
},
{
  // "section": null,
  "title": "p275",
  "layout": "textoporpagina",
  "link": "/p275",
},
{
  // "section": null,
  "title": "p276",
  "layout": "textoporpagina",
  "link": "/p276",
},
{
  // "section": null,
  "title": "p277",
  "layout": "textoporpagina",
  "link": "/p277",
},
{
  // "section": null,
  "title": "p278",
  "layout": "textoporpagina",
  "link": "/p278",
},
{
  // "section": null,
  "title": "p279",
  "layout": "textoporpagina",
  "link": "/p279",
},
{
  // "section": null,
  "title": "p280",
  "layout": "textoporpagina",
  "link": "/p280",
},
{
  // "section": null,
  "title": "p281",
  "layout": "textoporpagina",
  "link": "/p281",
},
{
  // "section": null,
  "title": "p282",
  "layout": "textoporpagina",
  "link": "/p282",
},
{
  // "section": null,
  "title": "p283",
  "layout": "textoporpagina",
  "link": "/p283",
},
{
  // "section": null,
  "title": "p284",
  "layout": "textoporpagina",
  "link": "/p284",
},
{
  // "section": null,
  "title": "p285",
  "layout": "textoporpagina",
  "link": "/p285",
},
{
  // "section": null,
  "title": "p286",
  "layout": "textoporpagina",
  "link": "/p286",
},
{
  // "section": null,
  "title": "p287",
  "layout": "textoporpagina",
  "link": "/p287",
},
{
  // "section": null,
  "title": "p288",
  "layout": "textoporpagina",
  "link": "/p288",
},
{
  // "section": null,
  "title": "p289",
  "layout": "textoporpagina",
  "link": "/p289",
},
{
  // "section": null,
  "title": "p290",
  "layout": "textoporpagina",
  "link": "/p290",
},
{
  // "section": null,
  "title": "p291",
  "layout": "textoporpagina",
  "link": "/p291",
},
{
  // "section": null,
  "title": "p292",
  "layout": "textoporpagina",
  "link": "/p292",
},
{
  // "section": null,
  "title": "p293",
  "layout": "textoporpagina",
  "link": "/p293",
},
{
  // "section": null,
  "title": "p294",
  "layout": "textoporpagina",
  "link": "/p294",
},
{
  // "section": null,
  "title": "p295",
  "layout": "textoporpagina",
  "link": "/p295",
},
{
  // "section": null,
  "title": "p296",
  "layout": "textoporpagina",
  "link": "/p296",
},
]

var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
  // get the index of the parameter, add three (to account for length)
  var stringloc = url.lastIndexOf("?q=") + 3;
  // get the substring (query) and decode
  var searchquery = decodeURIComponent(url.substr(stringloc));
}

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No se encontraron resultados.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  } else {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/revistasitio'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (searchquery) {
    $('input#search').val(searchquery);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
