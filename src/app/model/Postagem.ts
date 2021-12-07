import { Tema } from "./Tema";
import { UserModel } from "./UserModel";

export class Postagem{
  public id : number;
  public titulo: string;
  public texto: string;
  public date: Date;
  public usuario: UserModel;
  public tema: Tema
}