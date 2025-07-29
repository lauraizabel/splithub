export class UserEntity {
  private id!: string;
  public name!: string;
  public email!: string;
  private password!: string;
  public createdAt!: Date;
  public updateAt!: Date;

  constructor(user: Partial<UserEntity>) {
    Object.assign(this, user);
  }

  getId(): string {
    return this.id;
  }

  getPassword(): string {
    return this.password;
  }
}