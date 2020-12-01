// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


// Avvio e dichiaro vue nel container
var app = new Vue({
  el: "#root",
  data: {
    dischi: []
  },
  mounted: function () {

     axios.get('https://flynn.boolean.careers/exercises/api/array/music ')
     .then(risposta => {

       this.disc = risposta.data.response;
       console.log(risposta.data.response[0]);
       this.dischi.push(...this.disc)

      });

   }
});
