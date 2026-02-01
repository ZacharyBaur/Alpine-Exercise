function nameGenerator() {
    return {
        names: [
            "Zachary",
            "Jack",
            "Nolan",
            "Suzy",
            "Sarah",
            "Roxy",
            "Joe",
            "Eric",
            "Karli",
            "Amelia"
        ],
        currentName: "",

        getRandomName() {
        const randomIndex = Math.floor(Math.random() * this.name.length);
        this.currentName = this.names[randomIndex];
        }
    };
}