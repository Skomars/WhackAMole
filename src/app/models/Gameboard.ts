import { Tile } from './Tile';

export type Gameboard = {
  tiles: Tile[];
  gameActive: boolean;
  gameTimer: number;
  totalGametime: number;
  points: number;
};
