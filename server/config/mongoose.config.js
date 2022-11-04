const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/SweetFlour", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> console.log("Established a connection to the database"))
.catch((err)=> console.log("Failed to establish a connection to the database", err))