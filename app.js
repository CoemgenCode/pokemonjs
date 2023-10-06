
Vue.createApp({
    data() {
        return {
            viePlayer: 50,
            vieAdversaire: 100,
            progress: false,
            nbreTour: 0,
            bouton: false,
            winner: null,
            nomAdversaire: 'Pikachu',
            messageAttackPlayer: 'Pikachu attaque !',
            messageAttackAdversaire: 'Pikachu attaque !',
            nomPlayer: 'Mew',
            perdu: 'Vous avez perdu 😒 😥🙃😬!',
            gagne: 'Vous avez gagné 😍✌️🤩🥳!',
            egalite: 'Vous êtes à égalité 😘 ',
            abandonnera: 'Vous avez abandonné....loser 😂',
            pikachu: "./gif/pikachu.gif",
            disabledBtn: false,
            disabledBtn2: false,
            msg: "",
            msg2: ""
        };
    },
    methods: {

        attackAdversaire(num, num2) {
            if (this.viePlayer < num) {
                this.viePlayer = 0;

            } else if (this.vieAdversaire < num2) {
                this.vieAdversaire = 0;
            } else {

                setTimeout(() => this.viePlayer -= num, 700);
                this.vieAdversaire -= num2;
                this.progress = true;
                this.nbreTour++;
                this.msg = "Attaque Psycho !"
                setTimeout(() => this.msg2 = "Attaque éclair !", 700);
                setTimeout(() => this.msg2 = "", 1400);
                setTimeout(() => this.msg = "", 1000);
                // return 'maClasseProgress';
            }
        },





        attackMagique(num, num2) {
            if (this.viePlayer < num) {
                this.viePlayer = 0;

            } else if (this.vieAdversaire < num2) {
                this.vieAdversaire = 0;
            } else {
                this.msg = "Attaque magique utilisée !"
                this.viePlayer -= num;
                this.vieAdversaire -= num2;
                this.progress = true;
                this.nbreTour++;
                // return 'maClasseProgress';
            }
        },

        soins(num, num2) {
            if (this.viePlayer < 80) {
                this.viePlayer -= num2;
                this.viePlayer += num;
                this.progress = true;
                this.nbreTour++;

            }
        },

        affichage() {
            this.visible = !this.visible;
        },
        abandonner() {
            this.disabledBtn = true;
            this.disabledBtn2 = true;
            return this.abandonnera
        },



    },


    computed: {
        classDynamique() {
            console.log(this.nbreTour);
            if (this.nbreTour === 3) {
                this.nbreTour = 0;
                return 'btn btn-warning active';

            } else {

                return 'btn btn-warning disabled';
            }
        },

        progressPlayer() {
            if (this.viePlayer >= 50) {

                return ', bg-success';

            } else if (this.viePlayer < 50 && this.viePlayer > 30) {

                return ', bg-warning';
            } else {
                return ', bg-danger';
            }
        },

        progressAdverse() {
            if (this.vieAdversaire >= 50) {

                return ', bg-success';

            } else if (this.vieAdversaire < 50 && this.vieAdversaire > 30) {

                return ', bg-warning';

            } else {
                return ', bg-danger';
            }
        },

        classSoin() {
            console.log(this.nbreTour);
            if (this.viePlayer < 80 && this.viePlayer > 0) {
                return 'btn btn-success active';
            } else {

                return 'btn btn-success disabled';
            }
        },


        progressAdverse() {
            if (this.vieAdversaire > 50) {

                return ', bg-success';

            } else if (this.vieAdversaire < 50 && this.vieAdversaire > 30) {

                return ', bg-warning';
            } else {
                return ', bg-danger';
            }
        },

        msgFin() {
            if (this.vieAdversaire === 0) {
                this.disabledBtn = true;
                return this.gagne;
            } else if (this.viePlayer === 0) {
                this.disabledBtn = true;
                return this.perdu;
            }
        }

    },

    watch: {

    }

}).mount('#monApp');