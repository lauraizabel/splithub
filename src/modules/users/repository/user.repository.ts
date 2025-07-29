import { injectable } from "inversify";
import { prisma } from "@/shared/infra/db/db";
import { UserEntity } from "@/modules/users/entities/user.entity";
import { IUserRepository } from "../interfaces/user.repository.interface";

@injectable()
export class UserRepository implements IUserRepository {
  async findOne(id: string) {
    return prisma.user.findUnique({ where: { id }});
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email }});
  }

  async delete(id: string) {
    return prisma.user.delete({ where: { id }});
  }

  async update(user: UserEntity) {
    return prisma.user.update({
      where: { id: user.getId() },
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }
  async create(userData: Partial<UserEntity>, password: string): Promise<UserEntity> {
    const createdUser = await prisma.user.create({
      data: {
        name: userData.name!,
        email: userData.email!,
        password: password
      },
    });

    return new UserEntity(createdUser);
  }
}