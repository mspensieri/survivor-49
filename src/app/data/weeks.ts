import { PlayerKeys, Points } from "./types";

export const airDates = [
  "Sept 24",
  "Oct 1",
  "Oct 8",
  "Oct 15",
  "Oct 22",
  "Oct 29",
  "Nov 5",
  "Nov 12",
  "Nov 19",
  "Nov 26",
  "Dec 3",
  "Dec 10",
  "Dec 17",
];

interface Week extends Partial<Record<PlayerKeys, Points>> {
  eliminated?: Array<PlayerKeys>;
  jury?: Array<PlayerKeys>;
}

const {
  ALEX,
  ANNIE,
  JAKE,
  JASON,
  JAWAN,
  JEREMIAH,
  KRISTINA,
  MATT,
  MC,
  NATE,
  NICOLE,
  RIZO,
  SAGE,
  SAVANNAH,
  SHANNON,
  SOPHI,
  SOPHIE,
  STEVEN,
} = PlayerKeys;

export const weeks: Array<Week> = [
  {
    [ALEX]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Abysmal challenge",
          points: 2,
        },
      ],
    },
    [ANNIE]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JAKE]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JASON]: {
      teamImmunity: 1,
    },
    [JAWAN]: {
      teamImmunity: 1,
      upsideDown: [
        {
          reason: "Random crying",
          points: 4,
        },
      ],
    },
    [JEREMIAH]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      teamImmunity: 1,
    },
    [MATT]: {
      teamImmunity: 1,
    },
    [MC]: {
      teamImmunity: 1,
    },
    [NATE]: {
      teamImmunity: 1,
    },
    [NICOLE]: {
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Vomit",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Blindsided at tribal",
          points: 6,
        },
        {
          reason: "Voted off first",
          points: 6,
        },
      ],
    },
    [RIZO]: {
      teamImmunity: 1,
      upsideDown: [
        {
          reason: "Abysmal challenge",
          points: 2,
        },
        {
          reason: "Random crying",
          points: 4,
        },
      ],
    },
    [SAGE]: {
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      teamImmunity: 1,
    },
    [SHANNON]: {
      teamImmunity: 1,
    },
    [SOPHI]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      teamImmunity: 1,
    },
    [STEVEN]: {
      teamImmunity: 1,
    },
  },
];
