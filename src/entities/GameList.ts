import { Column, Entity } from "typeorm";

@Entity("GameList", { schema: "gamedb" })
export class GameList {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "imageURL", nullable: true })
  imageUrl: string | null;

  @Column("text", { name: "descp", nullable: true })
  descp: string | null;

  @Column("text", { name: "providerId", nullable: true })
  providerId: string | null;

  @Column("text", { name: "LastUpdateTime", nullable: true })
  lastUpdateTime: string | null;

  @Column("text", { name: "gameId", nullable: true })
  gameId: string | null;
}
