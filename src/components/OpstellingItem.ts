import { PlayerItem } from "./PlayerItem";

export type OpstellingItem = {
    id: number;
    opOverzicht: number;
    name: string;
    image: string;
    likes: number;
    share:string,
    liked:boolean,
    players: PlayerItem[]
  };