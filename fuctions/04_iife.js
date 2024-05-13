// Imediately Invoked function expresion (IIFE)

(function chai () {
    // Named IIFE
    console.log(`Db connected`);
})();    // Added semicolon to end this

( (name) => {
    console.log(`2nd Db connected, ${name}`);
})("devv")


//  