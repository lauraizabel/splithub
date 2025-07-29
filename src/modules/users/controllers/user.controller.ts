import { Request, Response } from "express";
import { inject } from "inversify";
import { Controller, controller, httpDelete, httpGet, httpPost, httpPut, request, response } from "inversify-express-utils";
import { USER_TYPES } from "../di/types";
import { IUserService } from "../interfaces/user.service.interface";

@controller("/user")
export class UserController implements Controller {
  constructor(
    @inject(USER_TYPES.UserService) private userService: IUserService
  ) {}

  @httpGet("/:id")
  private async getUser(@request() req: Request, @response() res: Response) {
    const { id } = req.params;
    const user = await this.userService.getUser(id);
    return res.json(user);
  }

  @httpGet("/email/:email")
  private async getUserByEmail(@request() req: Request, @response() res: Response) {
    try {
      const { email } = req.params;
      const user = await this.userService.getUserByEmail(email);
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  @httpPost("")
  private createUser() {}

  @httpDelete("/:id")
  private async deleteUser(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  @httpPut("/:id")
  private updateUser() {}
}