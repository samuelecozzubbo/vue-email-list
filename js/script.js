//Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
const { createApp } = Vue ;

createApp( {   
    data() {   
        return {
        }
    },
    methods: {
    },
    mounted() {
        console.log("the component is now mounted");
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => { 
                const result = response.data.response; 
                console.log(result);
            });
    }
}).mount('#app')  