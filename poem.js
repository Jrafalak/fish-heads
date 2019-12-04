                                       const english =`
                          he says swim big river desert walk okay                                                               my 
                  spanish not the best toes brush cold bones bloated disembodied                                            backpack 
              all that way for the land of the whale killers from the maya valley of                                    what was to 
          this dirty city of what used to be gangs of fishing boats the winches of each                              assassin wait 
      in a bay     of bad omen a canopy of impaling rust biding time what history whose grandfather               he’s just a boy 
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
      esta     ciudad sucia de lo que solía ser pandillas de barcos de pesca los tornos de cada asesino esperar             en una bahía 
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


   //                  function 
   //          c(t){t?console.log(t):console.log()                    }
   //       function redact(){var t=spanish.split(                " ")
   //    .filter(   function(t){return""!=t&&"\n"!=t&&"\t"   !=t&&" "
   // !=t});let e=Math.floor(Math.random()*t.length),l=t[e],n="";for(
   //    let t=0;t<l.length;t++)n+="-";let o=spanish.replace(l,n);l=t[e
   //       =Math.floor(Math.random()*t.length)],n="";for(let     t=0;t<
   //          l.length;t++)n+="-";c(o.replace(l,n)),                 c()}
   //             setInterval(()=>{redact()},300);

function c(p) {
   p ? console.log(p) : console.log()
}

function redact(language) {
   var words = language.split(" ")
   var filtered = words.filter(function (el) {
      return ((el != "") && (el != "\n") && (el != "\t") && (el != " "));
   });

   let rand = Math.floor((Math.random()*filtered.length))
   let word = filtered[rand]
   let redacted = "";
   for (let i = 0; i < word.length; i++) {
      redacted += "-"  
   }
   let firstRedacted = language.replace(word, redacted)

   rand = Math.floor((Math.random()*filtered.length))
   word = filtered[rand]
   redacted = "";
   for (let i = 0; i < word.length; i++) {
      redacted += "-"  
   }
   let secondRedacted = firstRedacted.replace(word, redacted)
   c(secondRedacted)

   c()
}

setInterval(() => {
   redact(english)
   c()
   c()
   redact(spanish)
}, 300);

