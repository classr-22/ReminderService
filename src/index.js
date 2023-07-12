const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');


const setupAndStartServer = () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    

    app.listen(PORT, () => {
        console.log('server is running on port :',PORT);

        sendBasicEmail(
            'support@admin.com',
            'raamitut@gmail.com',
            'This is a testing email',
            'Hey, how are you ,I hope you like the support'
        )
    });
}



setupAndStartServer();