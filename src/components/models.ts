export interface Game{
  'firstSide': GameSide
  'secondSide': GameSide
  'gameData': GameData
}

export interface GameSide{
  'allegiance': Allegiance,
  'playerDataList': PlayerData[]
}

export interface GameLocation{
  'name': string,
  'country': string,
  'city': string,
  'street': string,
  'houseNumber': string,
  'isPrivate': boolean
}

export interface PlayerData{
  'playerId': string,
  'primaryArmy': ArmyData
  'allyArmyList': ArmyData[]
}

export interface ArmyData{
  'armyType': string,
  'armyName': string,
  'pointValue': number
}

enum Allegiance {
  LOYALIST = 'LOYALIST',
  TRAITOR = 'TRAITOR',
}

export interface GameArmyType {
  name:string;
}

export interface GameData {
  'ranking': boolean,
  'gamePointSize': number,
  'gameTurnLength': number,
  'gameTime': number,
  'gameStartTime': string | undefined | null ,
  'gameMission': string,
  'gameDeployment': string,
  'locationSaveDto': GameLocation | undefined
}
