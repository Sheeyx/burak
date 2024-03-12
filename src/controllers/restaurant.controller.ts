import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import morgan from 'morgan';
import { MemberInput, LoginInput, AdminRequest } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import session from 'express-session';
import Errors, { Message } from '../libs/Errors';

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


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processSignup");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        req.body.member = result;
        req.session.save(function(){
            res.send(result);
        });

    } catch(err){
        res.send(err);
        console.log("Error, processSignup", err);
    }
}

restaurantController.processLogin = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("processLogin");
      const input: LoginInput = req.body;
  
      const result = await memberService.processLogin(input);
      ///// TODO: SESSION AUTHENTICATION
  
      ///// TODO: SESSION AUTHENTICATION
  
      req.session.member = result;
      req.session.save(function () {
        res.send(result);
      });
    } catch (err) {
      console.log("Error, on Login Page", err);
      const message =
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
        `<script>alert(${message}); window.location.replace('admin/login')<script>`
      );
    }
  };


restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("checkAuthSession");
      if (req.session?.member)
        res.send(` <script>alert("Hi ${req.session.member.memberNick}")<script>`);
      else res.send(`<script>alert("${Message.NOT_AUTHENTIFICATED}")<script>`);
    } catch (err) {
      console.log("Error, checkAuthSession", err);
      res.send(err);
    }
  };

  restaurantController.logout = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("logout");
      req.session.destroy(function(){
        res.redirect("/admin")
      });
      
    } catch (err) {
      console.log("Error, on logout", err);
      res.send(err);
    }
  };

export default restaurantController;