const app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Ciao sono un titolo con VueJS :)',
            imageUrl: 'img/milano.jpg',
            number: 1
        },
        methods: {
            increase: function() {
                this.number++;
            }
        }
    }
); 