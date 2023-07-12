const { response } = require('express');
const TicketService = require('../services/email-service');

const create = async (req,res) => {
    try {
        //console.log("this is body................",req.body);
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: "successfully registered an email reminder"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "unable to register an email reminder"
        })
    }
}

module.exports={
    create
}