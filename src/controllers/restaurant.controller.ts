import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import morgan from 'morgan';
import { MemberInput, LoginInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restaurantController : T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try{
        console.log("Go home");
        res.send("Home Page");
    } catch(err){
        console.log("Error, goHome", err);
    }
}

restaurantController.getLogin =(req: Request, res: Response) => {
    try{
        console.log("Go Login");
        res.send("Done");
    } catch(err){
        console.log("Error, getLogin", err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("Go Signup");
        res.send("Signup Page");
    } catch(err){
        console.log("Error, getSignup", err);
    }
}

restaurantController.processLogin = async(req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;
    
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        res.send(result);
      } catch (err) {
        console.log("Error, on Login Page", err);
        res.send(err);
      }
}

restaurantController.processSignup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body: ",req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch(err){
        res.send(err);
        console.log("Error, processSignup", err);
    }
}

export default restaurantController;