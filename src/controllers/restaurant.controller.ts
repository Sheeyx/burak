import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import morgan from 'morgan';
import { MemberInput, LoginInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const memberService = new MemberService();

const restaurantController : T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try{
        console.log("Go home");
        res.render("home");
    } catch(err){
        console.log("Error, goHome", err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("Go Signup");

        // TODO: SESSIONS

        res.render("signup");
    } catch(err){
        console.log("Error, getSignup", err);
    }
}

restaurantController.getLogin =(req: Request, res: Response) => {
    try{
        console.log("Go Login");

        // TODO: SESSIONS

        res.render("login");
    } catch(err){
        console.log("Error, getLogin", err);
    }
}


restaurantController.processSignup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body: ",req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch(err){
        res.send(err);
        console.log("Error, processSignup", err);
    }
}

restaurantController.processLogin = async(req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
    
        const result = await memberService.processLogin(input);
        res.send(result);
      } catch (err) {
        console.log("Error, on Login Page", err);
        res.send(err);
      }
}

export default restaurantController;