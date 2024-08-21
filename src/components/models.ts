export interface Game {
  'firstSide': GameSide;
  'secondSide': GameSide;
  'gameData': GameData;
}

export interface GameRequest {
  'firstSide': GameSideRequest | null
  'secondSide': GameSideRequest | null
  ranking: boolean,
  gamePointSize: number,
  gameTurnLength: number,
  gameTime: number,
  gameStartTime: string | undefined,
  gameMission: string,
  gameDeployment: string
  locationSaveDto: GameLocation | undefined,
}

export interface GameSideRequest {
  'allegiance': Allegiance,
  'playerDataList': PlayerDataRequest[]
}

export interface PlayerDataRequest {
  playerId: string;
  primaryArmy?: ArmyDataRequest;
  allyArmyList: ArmyDataRequest[];
}

export interface ArmyDataRequest {
  'armyType': string,
  'armyName': string,
  'pointValue': number
}

export interface GameData {
  ranking: boolean,
  gamePointSize: number,
  gameTurnLength: number,
  gameTime: number,
  gameStartTime: string | undefined,
  gameMission: {
    label:string,
    value:string
  },
  gameDeployment: {
    label:string,
    value:string
  },
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
  'armyType': { label:string, value:string },
  'armyName': string,
  'pointValue': number
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

