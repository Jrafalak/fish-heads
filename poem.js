                                       const english =`
                          he says swim big river desert walk okay                                                               my
                  spanish not the best toes brush cold bones bloated disembodied                                            backpack
              all that way for the land of the whale killers from the maya valley of                                    what was to
          this dirty city of what used to be gangs of fishing boats the winches of each                              assassin wait
      in a bay  (of)  bad omen a canopy of impaling rust biding time what history whose grandfather               he’s just a boy
  arranging piles of guts make a slit oozing     fish blood factory     boy welcome to the home of the          whalers  scales 
like gold teet embroidery under nails for    the coyote make back what    he owes uses his other name makes me a promise he’ll 
get to school where’s his mother do not    be late where’s his mother     miss the bus take the test pretends he understands a
   fish’s head is caught in an old black     knife dull blade too poor    for lucky strikes where’s his        mother    she’s 
      at the border she’s at home which home     she’s dead waiting    for the mail he’s a pile of                guts a dream 
           caught in a dream hooked in a dream    tongue-tied       sinking deeper in the                              swinging
              waters he signs here (you chatter from       the deck the population’s in                                 decline)
                i’ll make a nice verse when it’s plain the surface won’t come                                              and you
                             your hands, tongue they should be burning `
                             
                             
                                          const spanish = `
                       dice  nadar  río  grande  desierto  caminar  bien                                                                 mi 
              español no es el mejor dedos del pie cepillo huesos fríos hinchados mochila sin                                        cuerpo
          todo  ese  camino  por  la  tierra  de  los  asesinos  de  ballenas  del  valle  maya  de  lo                          que era a 
      esta (X) ciudad sucia de lo que solía ser pandillas de barcos de pesca los tornos de cada asesino esperar             en una bahía 
   de mal augurio un dosel de tiempo    de espera de     óxido empalado que historia cuyo abuelo él es solo un niño arreglando montones 
de tripas hacer una hendidura que       supura sangre de      pescado chico de fábrica bienvenido a la casa de los balleneros escamas 
como dientes de oro bordado debajo de      las uñas para el       coyote recuperar lo que debe usa su otro nombre me hace una promesa él 
llegará a la escuela donde esta su madre no     llegues tarde donde      esta su madre perder el autobús tomar el            examen finge 
 que entiende la cabeza de un pez queda atrapada     en un viejo     cuchillo negro cuchilla sin filo demasiado                 pobre para 
     golpes de suerte donde esta su madre ella esta en         la frontera ella está en casa que                                  casa ella 
      esta muerta esperando el correo él es un montón de agallas que un sueño atrapó en un                                              sueño 
         enganchado en un sueño lengua hundida hundiéndose más profundo en las aguas 
             oscilantes él firma aquí (charlas desde la cubierta la población está 
               en declive) haré un buen verso cuando está claro, la superficie 
                    no vendrá y tú tus manos lengua deben estar ardiendo `



         function log20(){for(let i=0; i<20; i++)             {
      console.log()}}setInterval(function()                 {
   console.log(english);log20()},500)                      ;
  setTimeout(function()                                 {
   setInterval(function() {
         console.log(spanish);
         log20()
      }, 500)
   }, 250)




// function log20() {
//    for(let i=0; i<20; i++) {
//       console.log()
//    }
// }

// setInterval(function(){
//    console.log(english);
//    log20()
// },500);

// setTimeout(function(){
//    setInterval(function() {
//       console.log(spanish);
//       log20()
//    }, 500)
// }, 250)


function wave1(){
   log20()
   console.log("   _.====.._    ")
}

function wave2(){
   log20()
   console.log("     _.====.._")
   console.log("   _~-      _.:,")
}

function wave3(){
   log20()
   console.log("      _.====.._")
   console.log("    _~-      _.:,")
   console.log("   /   /  / (")
}

function wave4(){
   log20()
   console.log("       _.====.._")
   console.log("     _~-      _.:,")
   console.log("    /   /  / (")
   console.log("   /           `.   ")
}

function wave5(){
   log20()
   console.log("          _.====.._")
   console.log("        _~-      _.:,")
   console.log("       /   /  / (")
   console.log("      /           `.   ")
   console.log("    ,/ /  / /      ~-_ ")
}

function wave6(){
   log20()
   console.log("            _.====.._")
   console.log("          _~-      _.:,")
   console.log("         /   /  / (")
   console.log("        /           `.   ")
   console.log("      ,/ /  / /      ~-_ ")
   console.log("    ..__..-''~~--..__...-._")
}

function wave7(){
   log20()
   console.log("            _.====.._");
   console.log("          _~-      _.:,")
   console.log("         /   /  / (")
   console.log("       /           `.")
   console.log("     ,/ /  / /      ~-_")
   console.log("  ..-''  \_ \_\ `_       ._")
}

function wave8(){
   log20()
   console.log("            __. -- .__");
   console.log("          _~~      _..,")
   console.log("         /   /  ( (")
   console.log("       /           `.")
   console.log("     ,/ /  / /      ~-_")
   console.log(" ..-''  \_ \_\ `_       ._")
}

function wave9(){
   log20()
   console.log("             ____");
   console.log("         _~~      _")
   console.log("        /   /     _..,")
   console.log("      ,/ /  / /      ~-_")
   console.log("  ..-''  \_ \_\ `_       ._")
}

function wave10(){
   log20()
   console.log("         _~~~==~~_")
   console.log("       /   /     _..,")
   console.log("   ..- \_ \_\ `_     .")
}

function wave11(){
   log20()
   console.log("      _~~~==~~_")
   console.log("   ...-       -...")
}

function wave12(){
   log20()
   console.log("       _~~~==~~_")
}

function wave13(){
   log20()
   console.log("          ;")
}

function wave14(){
   log20()
   console.log()
}

function waves() {
   setTimeout(wave1, 100)
   setTimeout(wave2, 200)
   setTimeout(wave3, 300)
   setTimeout(wave4, 400)
   setTimeout(wave5, 500)
   setTimeout(wave6, 600)
   setTimeout(wave7, 700)
   setTimeout(wave8, 800)
   setTimeout(wave9, 900)
   setTimeout(wave10, 1000)
   setTimeout(wave11, 1100)
   setTimeout(wave12, 1200)
   setTimeout(wave13, 1300)
   setTimeout(wave14, 1400)
}

// setInterval(waves, 1500);

