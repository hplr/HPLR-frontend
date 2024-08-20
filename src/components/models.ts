export interface Game {
  'firstSide': GameSide;
  'secondSide': GameSide;
  'gameData': GameData | undefined;
}

export interface GameRequest {
  'firstSide': GameSide
  'secondSide': GameSide | null
  ranking: boolean,
  gamePointSize: number,
  gameTurnLength: number,
  gameTime: number,
  gameStartTime: string | undefined,
  gameMission: string,
  gameDeployment: string
  locationSaveDto: GameLocation | undefined,
}

export interface GameData {
  ranking: boolean,
  gamePointSize: number,
  gameTurnLength: number,
  gameTime: number,
  gameStartTime: string | undefined,
  gameMission: string,
  gameDeployment: string
  locationSaveDto: GameLocation | undefined,
}

export interface GameSide {
  'allegiance': Allegiance,
  'playerDataList': PlayerData[]
}

export interface GameLocation {
  'name': string,
  'country': string,
  'city': string,
  'street': string,
  'houseNumber': string,
  'isPrivate': boolean
}

export interface PlayerData {
  playerId: string;
  playerName: string;
  primaryArmy?: ArmyData; // Optional property
  allyArmyList: ArmyData[];
}

export interface ArmyData {
  'armyType': string,
  'armyName': string,
  'pointValue': number
}

export interface GameArmyType {
  name: string;
}


export interface PlayerSnapshot {

  'userId': {
    'id': string
  },
  'userData': {
    'name': string,
    'nickname': string,
    'email': string,
    'motto': string
  },
  'playerRanking': {
    'score': number
  },
  'playerSecuritySnapshot': {
    'registrationTime': Date,
    'lastLogin': Date
  }

}

// ENUMS
export enum Allegiance {
  LOYALIST = 'LOYALIST',
  TRAITOR = 'TRAITOR',
}

