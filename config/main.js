module.exports = {
    // Secret key - JWT
    'secret': 'super secret passphrase',
    //Database Mongo
    'database': 'mongodb://localhost:27017/battleship',
    //Port
    'port': process.env.PORT || 3000
}
