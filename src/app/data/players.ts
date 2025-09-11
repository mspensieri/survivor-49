export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  ALEX = "ALEX",
  ANNIE = "ANNIE",
  JAKE = "JAKE",
  JASON = "JASON",
  JAWAN = "JAWAN",
  JEREMIAH = "JEREMIAH",
  KRISTINA = "KRISTINA",
  MATT = "MATT",
  MC = "MC",
  NATE = "NATE",
  NICOLE = "NICOLE",
  RIZO = "RIZO",
  SAGE = "SAGE",
  SAVANNAH = "SAVANNAH",
  SHANNON = "SHANNON",
  SOPHI = "SOPHI",
  SOPHIE = "SOPHIE",
  STEVEN = "STEVEN",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
  eliminatedWeek?: number;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.ALEX]: {
    key: PlayerKeys.ALEX,
    name: "Alex",
    status: "eliminated",
    eliminatedWeek: 0,
  },
  [PlayerKeys.ANNIE]: {
    key: PlayerKeys.ANNIE,
    name: "Annie",
    status: "jury",
    eliminatedWeek: 11,
  },
  [PlayerKeys.JAKE]: {
    key: PlayerKeys.JAKE,
    name: "Jake",
    status: "eliminated",
    eliminatedWeek: 12,
  },
  [PlayerKeys.JASON]: {
    key: PlayerKeys.JASON,
    name: "Jason",
    status: "winner",
  },
  [PlayerKeys.JAWAN]: {
    key: PlayerKeys.JAWAN,
    name: "Jawan",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.JEREMIAH]: {
    key: PlayerKeys.JEREMIAH,
    name: "Jeremiah",
    status: "eliminated",
    eliminatedWeek: 6,
  },
  [PlayerKeys.KRISTINA]: {
    key: PlayerKeys.KRISTINA,
    name: "Kristina",
    status: "eliminated",
    eliminatedWeek: 12,
  },
  [PlayerKeys.MATT]: {
    key: PlayerKeys.MATT,
    name: "Matt",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.MC]: {
    key: PlayerKeys.MC,
    name: "MC",
    status: "jury",
    eliminatedWeek: 8,
  },
  [PlayerKeys.NATE]: {
    key: PlayerKeys.NATE,
    name: "Nate",
    status: "eliminated",
    eliminatedWeek: 3,
  },
  [PlayerKeys.NICOLE]: {
    key: PlayerKeys.NICOLE,
    name: "Nicole",
    status: "eliminated",
    eliminatedWeek: 1,
  },
  [PlayerKeys.RIZO]: {
    key: PlayerKeys.RIZO,
    name: "Rizo",
    status: "jury",
    eliminatedWeek: 6,
  },
  [PlayerKeys.SAGE]: {
    key: PlayerKeys.SAGE,
    name: "Sage",
    status: "eliminated",
    eliminatedWeek: 5,
  },
  [PlayerKeys.SAVANNAH]: {
    key: PlayerKeys.SAVANNAH,
    name: "Savannah",
    status: "eliminated",
    eliminatedWeek: 2,
  },
  [PlayerKeys.SHANNON]: {
    key: PlayerKeys.SHANNON,
    name: "Shannon",
    status: "eliminated",
    eliminatedWeek: 4,
  },
  [PlayerKeys.SOPHI]: {
    key: PlayerKeys.SOPHI,
    name: "Sophi",
    status: "jury",
    eliminatedWeek: 7,
  },
  [PlayerKeys.SOPHIE]: {
    key: PlayerKeys.SOPHIE,
    name: "Sophie",
    status: "jury",
    eliminatedWeek: 9,
  },
  [PlayerKeys.STEVEN]: {
    key: PlayerKeys.STEVEN,
    name: "Steven",
    status: "jury",
    eliminatedWeek: 10,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
