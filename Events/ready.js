module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "S'occuper des commandes ! 📦"
        }
    });
};