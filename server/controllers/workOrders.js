import workOrder from "../models/workOrder.js";
// https://www.restapitutorial.com/httpstatuscodes.html

export const getOrders = async (req, res) =>  {
    try {
        const workOrders = await workOrder.find();
        
        res.status(200).json(workOrders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createOrder = async (req, res) => {
    const order = req.body;

    const newOrder = workOrder(order);

    try {
        await newOrder.save();
        
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}