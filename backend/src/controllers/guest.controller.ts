import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Guest } from '../models/Guest';
import { GuestDTO } from '../dtos/GuestDTO';

export class GuestController {
    static async getAll(req: Request, res: Response) { 
        const guests = await AppDataSource.getRepository(Guest).find();

        // map to dto
        const guestDTOs = guests.map(guest => {
            const guestDTO = new GuestDTO();
            guestDTO.id = guest.id;
            guestDTO.name = guest.name;
            guestDTO.phone = guest.phone;
            return guestDTO;
        });

        return res
            .status(200)
            .json(guestDTOs);
    }

    static async create(req: Request, res: Response) { 
        const { name, phone } = req.body;

        const guest = new Guest();
        guest.name = name;
        guest.phone = phone;

        await AppDataSource.getRepository(Guest).save(guest);

        // map to dto
        const guestDTO = new GuestDTO();
        guestDTO.id = guest.id;
        guestDTO.name = guest.name;
        guestDTO.phone = guest.phone;

        return res
            .status(201)
            .json(guestDTO);
    }

    static async delete(req: Request, res: Response) { 
        const id = parseInt(req.params.id);

        await AppDataSource.getRepository(Guest).delete(id);

        return res
            .status(200)
            .send();
    }

    static async update(req: Request, res: Response) { 
        const id = parseInt(req.params.id);
        const guest = await AppDataSource.getRepository(Guest).findOne({
            where: {
                id
            }
        });

        if (!guest) {
            return res
                .status(404)
                .send();
        }

        const { name, phone } = req.body;
        const new_guest = new Guest();
        new_guest.id = id;
        new_guest.name = name;
        new_guest.phone = phone;

        await AppDataSource.getRepository(Guest).save(new_guest);

        // map to dto
        const guestDTO = new GuestDTO();
        guestDTO.id = new_guest.id;
        guestDTO.name = new_guest.name;
        guestDTO.phone = new_guest.phone;

        return res
            .status(200)
            .json(guestDTO);
    }
}