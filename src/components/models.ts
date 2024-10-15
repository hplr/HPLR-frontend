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
    label: string,
    value: string
  },
  gameDeployment: {
    label: string,
    value: string
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
  'armyType': { label: string, value: string },
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

export interface LoginForm {
  'email': string,
  'passwordPlain': string
}

export interface RegisterForm {
  'name': string,
  'nickname': string,
  'email': string,
  'motto': string,
  'password': string,
  'repeatedPassword': string
}

export interface SecurityResponse {
  'token': string;
}

export interface JWTToken {
  'id': string,
  'role': string,
  'sub': string,
  'iat': number,
  'exp': number
}

export interface GameSnapshotLocationGeoMapPoint {
  'longitude': number,
  'latitude': number
}

export interface GameSnapshotLocationGeoData {
  'country': string,
  'city': string,
  'street': string,
  'houseNumber': string,
  'locationMapPoint': GameSnapshotLocationGeoMapPoint
}

export interface GameSnapshotLocation {
  'location': {
    'locationId': {
      'locationId': string
    },
    'name': string,
    'privateLocation': boolean,
    'locationGeoData': GameSnapshotLocationGeoData
  };
}

export interface GameSnapshotScore {
  'turnNumber': number,
  'scoreValue': number,
  'table': boolean
}

export interface GameSnapshotArmy {
  'army': {
    'name': string
  },
  'name': string,
  'pointValue': number
}

export interface GameSnapshotSidePlayer {
  'player': PlayerSnapshot,
  'currentELO': {
    'ELOValue': number
  },
  'armyPrimary': GameSnapshotArmy,
  'allyArmyList': GameSnapshotArmy [] | null

}

export interface GameSnapshotSide {
  'sideId': {
    'sideId': string
  },
  'allegiance': Allegiance,
  'gameSidePlayerDataList': GameSnapshotSidePlayer [],
  'isFirst': boolean,
  'scorePerTurnList': GameSnapshotScore[] | null[] | null
}

export interface GameSnapshot {
  'gameId': {
    'gameId': string
  },
  'gameLocation': GameSnapshotLocation
  'gameData': {
    'gameMission': {
      'name': string
    },
    'gameDeployment': {
      'name': string
    },
    'gamePointSize': number,
    'gameTurnLength': number,
    'gameTimeLength': {
      'seconds': number,
      'zero': boolean,
      'nano': number,
      'negative': boolean,
      'positive': boolean,
      'units': [
        {
          'durationEstimated': boolean,
          'timeBased': boolean,
          'dateBased': boolean
        }
      ]
    },
    'gameStartTime': string,
    'gameEndTime': string,
    'ranking': boolean
  },
  'gameELOChangeValue': number,
  'gameStatus': GameStatus,
  'firstGameSide': GameSnapshotSide,
  'secondGameSide': GameSnapshotSide | null
}

export interface SaveScoreForGameSideDto {
  gameId: string,
  gameSideId: string,
  turnNumber: number,
  score: number,
  table: boolean
}

// ENUMS
export enum Allegiance {
  LOYALIST = 'LOYALIST',
  TRAITOR = 'TRAITOR',
}

export enum GameStatus {
  CREATED,
  AWAITING,
  IN_PROGRESS,
  FINISHED,
  CANCELLED,
  ARCHIVED
}

