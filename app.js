const app = Vue.createApp({
    data() {
        return {
            todoText: null,
            todoList: [],
            title: "Ekle",
        };
    },
    methods: {
        addTodo() {
            this.todoList.push(this.todoText)
        },
    },
}).mount("#app")