const { Op } = require('sequelize');
const {NotificationTicket} = require('../models/index');

class TicketRepository {
    async getAll(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets
        } catch (error) {
           throw error 
        }
    }

    async create(data){
        try {
            // console.log("this is daataaaa...........",data);
            const ticket = await NotificationTicket.create(data);
            // console.log(ticket);
            return ticket;
        } catch (error) {
           throw error 
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }  
                }
            });
            return tickets;
        } catch (error) {
            throw error 
        }
    }

    async update(ticketId,data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status)
                ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = TicketRepository;
