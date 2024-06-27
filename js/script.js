//Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
const { createApp } = Vue ;

createApp( {   
    data() {   
        return {
            mailToGenerate : 10,
            mailCheck: false,
            emails:[

            ],
        }
    },
    methods: {
    },
    mounted() {
        console.log("the component is now mounted");
        for (let i = 0; i < this.mailToGenerate; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => { 
                const result = response.data.response; 
                this.emails.push(result);
                console.log(result);
                //Cambio stato variabile caricamento
                if(i === 9){
                    this.mailCheck = true;
                }
            });
        }
    }   
}).mount('#app')  