const app = Vue.createApp({
    data() {
        return {
            name: "Tej",
            age: 20,
            imgUrl: "https://static.onecms.io/wp-content/uploads/sites/6/2016/10/dr-strange.jpg"
        }
    },
    methods: {
        updatedAge(num) {
            return this.age + num;
        },
        randomOutput() {
            return Math.random();
        }
    }
});

app.mount("#assignment1");