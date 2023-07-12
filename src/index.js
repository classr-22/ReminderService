const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverConfig');
//const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job'); 


const setupAndStartServer = () => {
    const app = express();
    
    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());
    
    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, () => {
        console.log('server is running on port :',PORT);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'raamitut@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you ,I hope you like the support'
        // )
    });
}



setupAndStartServer();