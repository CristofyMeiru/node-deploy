import { Request, Response } from "express";

export type RouteFn = (req: Request, res: Response) => void;

class AdminController {
    
   public home: RouteFn = async (req, res) => {
    try {
        return res.status(200).json({message: "Usando nova sintax!"})
    } catch(err) {
        return res.status(400).json({message: "Algo deu errado, tente novamente mais tarde."})
    }
   }
    
}

export const adminController = new AdminController()