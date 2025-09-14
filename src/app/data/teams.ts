import { PLAYERS } from "./players";
import { Team } from "./types";

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
} = PLAYERS;

export const teams: Array<Team> = [
  {
    captain: "Alex",
    name: "Wendy's Chickens",
    players: [JAWAN, JAKE, JASON, KRISTINA, SOPHIE, STEVEN],
    winner: JAWAN,
  },
  {
    captain: "Kara",
    name: "Here's Your Headstone",
    players: [STEVEN, KRISTINA, SOPHI, JAWAN, NATE, JEREMIAH],
    winner: STEVEN,
  },
  {
    captain: "Joanne",
    name: "TEAM JO",
    accolades: {
      third: [47],
    },
    players: [ANNIE, JAWAN, JAKE, KRISTINA, SAVANNAH, NICOLE],
    winner: ANNIE,
  },
  {
    captain: "Renee",
    name: "Renee's Pack",
    players: [KRISTINA, JAWAN, JASON, ANNIE, STEVEN, SOPHI],
    winner: KRISTINA,
  },
  {
    captain: "Spen",
    name: "Come On In Guys",
    players: [JAKE, SOPHI, JASON, SAVANNAH, SAGE, SHANNON],
    winner: JAKE,
  },
  {
    captain: "Andrea and Susan",
    name: "Fresh Japow",
    players: [SAVANNAH, JAKE, STEVEN, ANNIE, JASON, KRISTINA],
    winner: SAVANNAH,
  },
  {
    captain: "Diego",
    name: "Operation Italy",
    players: [SAVANNAH, JAKE, ANNIE, JASON, JAWAN, ALEX],
    winner: SAVANNAH,
  },
  {
    captain: "Elizabeth",
    name: "Play Your Idol",
    players: [STEVEN, MATT, SOPHI, JAWAN, NICOLE, ANNIE],
    winner: STEVEN,
  },
  {
    captain: "Mikey",
    name: "First Time in Fiji",
    players: [NATE, JASON, JAKE, SAVANNAH, SAGE, ALEX],
    winner: NATE,
  },
  {
    captain: "Alec",
    name: "The Ghost of Andy",
    players: [JASON, ANNIE, KRISTINA, SOPHI, NICOLE, STEVEN],
    winner: JASON,
  },
  {
    captain: "Leila",
    name: "Got Nothin' For Ya",
    players: [SOPHI, NATE, ANNIE, JAWAN, JAKE, RIZO],
    winner: SOPHI,
  },
  {
    captain: "Katie",
    name: "Truth Kamikazee",
    accolades: {
      second: [45],
    },
    players: [JAWAN, NICOLE, NATE, KRISTINA, JEREMIAH, JAKE],
    winner: JAWAN,
  },
  {
    captain: "Danny",
    name: "pioppi (all lower case)",
    players: [ANNIE, SOPHI, SAVANNAH, SAGE, NICOLE, JAWAN],
    winner: ANNIE,
  },
  {
    captain: "Stanley",
    name: "UNDERDOGS",
    accolades: {
      second: [44],
    },
    players: [SOPHIE, MC, MATT, RIZO, JEREMIAH, ALEX],
    winner: SOPHIE,
  },
  {
    captain: "Ryan Lemay",
    name: "Q's 6",
    accolades: {
      first: [47],
    },
    players: [MATT, RIZO, ALEX, JASON, JAKE, NATE],
    winner: MATT,
  },
  {
    captain: "Sandy",
    name: "Sandy's Spynest",
    accolades: {
      second: [46],
    },
    players: [ANNIE, SOPHI, STEVEN, JAWAN, JAKE, SHANNON],
    winner: ANNIE,
  },
  {
    captain: "Colleen",
    name: "Team Scrappy",
    players: [ANNIE, NATE, JASON, SOPHI, SAGE, JAKE],
    winner: ANNIE,
  },
  {
    captain: "Brendan",
    name: "NOT PENNYS BOAT",
    accolades: {
      third: [45],
    },
    players: [STEVEN, KRISTINA, ANNIE, JAKE, MATT, SAGE],
    winner: STEVEN,
  },
  {
    captain: "Kevin",
    name: "Jeff's Dimples",
    players: [NICOLE, JASON, SOPHI, JAKE, JAWAN, SAGE],
    winner: NICOLE,
  },
  {
    captain: "Carrie",
    name: "4blackcats",
    players: [ALEX, JASON, JAKE, ANNIE, SAVANNAH, STEVEN],
    winner: ALEX,
  },
  {
    captain: "Sean",
    name: "Leafs Nation",
    accolades: {
      third: [46],
    },
    players: [ALEX, JAKE, ANNIE, KRISTINA, SAGE, SHANNON],
    winner: ALEX,
  },
  {
    captain: "Kelly",
    name: "Outwit, Outlast, OutSLAY",
    players: [NATE, JASON, JAKE, MATT, SAGE, KRISTINA],
    winner: NATE,
  },
  {
    captain: "Sarah",
    name: "Voldemort",
    players: [NICOLE, JAKE, SHANNON, KRISTINA, JAWAN, STEVEN],
    winner: NICOLE,
  },
  {
    captain: "Frank",
    name: "Muscle Mania",
    players: [KRISTINA, MC, SOPHI, SOPHIE, STEVEN, NICOLE],
    winner: KRISTINA,
  },
  {
    captain: "Glaser",
    name: "Cheeseburger (with bacon)",
    players: [STEVEN, JAKE, KRISTINA, NICOLE, JASON, ALEX],
    winner: STEVEN,
  },
  {
    captain: "Thomas",
    name: "Chicken Dinner",
    players: [SOPHI, ANNIE, JASON, JEREMIAH, KRISTINA, SAGE],
    winner: SOPHI,
  },
  {
    captain: "Vanesa",
    name: "Latte to the Party",
    players: [JASON, JAKE, MC, KRISTINA, ALEX, MATT],
    winner: JASON,
  },
  {
    captain: "Erick",
    name: "Did I Stutter?",
    accolades: {
      second: [47],
    },
    players: [JAWAN, NATE, SHANNON, STEVEN, RIZO, SAVANNAH],
    winner: JAWAN,
  },
  {
    captain: "Andrea Roulet",
    name: "Here For Friendship",
    players: [MATT, SHANNON, SAGE, STEVEN, JAKE, KRISTINA],
    winner: MATT,
  },
  {
    captain: "Menard",
    name: "Fight or Flight",
    players: [SAGE, SAVANNAH, ALEX, JAKE, JASON, SOPHI],
    winner: SAGE,
  },
  {
    captain: "Leigh",
    name: "LIVIN'",
    players: [JASON, SAGE, NICOLE, NATE, KRISTINA, JAKE],
    winner: JASON,
  },
  {
    captain: "Elana",
    name: "Papaya?",
    players: [STEVEN, KRISTINA, SHANNON, SOPHI, SOPHIE, NATE],
    winner: STEVEN,
  },
  {
    captain: "Alyssa and Adam",
    name: "AA Tribe",
    players: [SAVANNAH, STEVEN, SOPHI, KRISTINA, JASON, JAKE],
    winner: SAVANNAH,
  },
  {
    captain: "Greg",
    name: "Fiji Kokoda",
    accolades: {
      first: [46],
      second: [44],
    },
    players: [JAWAN, RIZO, JAKE, SAGE, SHANNON, MC],
    winner: JAWAN,
  },
  {
    captain: "Andrew and Lally",
    name: "Ogatally Devotes",
    players: [ANNIE, SOPHIE, SAVANNAH, RIZO, STEVEN, JEREMIAH],
    winner: ANNIE,
  },
  {
    captain: "Jacob",
    name: "With You 100%",
    players: [SOPHI, KRISTINA, ANNIE, SAVANNAH, STEVEN, ALEX],
    winner: SOPHI,
  },
  {
    captain: "Jacklyn",
    name: "JSpenny",
    players: [NICOLE, KRISTINA, JAWAN, SHANNON, JEREMIAH, SOPHIE],
    winner: NICOLE,
  },
  {
    captain: "Sab and Bruno",
    name: "Bing and Bugz",
    players: [ANNIE, SHANNON, SAGE, KRISTINA, JEREMIAH, JAKE],
    winner: ANNIE,
  },
  {
    captain: "Meagan",
    name: "Totally Oswald",
    players: [SAVANNAH, KRISTINA, JAWAN, SOPHI, SHANNON, SAGE],
    winner: SAVANNAH,
  },
  {
    captain: "Taylor",
    name: "Clyde's Castaways",
    players: [ANNIE, STEVEN, SAVANNAH, KRISTINA, JEREMIAH, JASON],
    winner: ANNIE,
  },
  {
    captain: "Dan and Dana",
    name: "Boinko and Ducky 4ever",
    players: [JEREMIAH, SHANNON, SOPHIE, MC, MATT, RIZO],
    winner: JEREMIAH,
  },
  {
    captain: "Dean & Anne",
    name: "D's Sss and A's Winners",
    accolades: {
      first: [44, 45],
      third: [45],
    },
    players: [ALEX, JEREMIAH, ANNIE, SHANNON, SOPHI, KRISTINA],
    winner: KRISTINA,
  },
  {
    captain: "Jeremy",
    name: "Jer-iatrics",
    players: [JASON, SHANNON, KRISTINA, SOPHIE, SAGE, JAWAN],
    winner: KRISTINA,
  },
  {
    captain: "Jessie",
    name: "Blindside Kings",
    players: [SAVANNAH, SAGE, NICOLE, JASON, KRISTINA, ALEX],
    winner: NICOLE,
  },
];

export const fakeTeams = [
  {
    name: "1",
    winner: ALEX,
    players: [ALEX, ANNIE, JAKE, JASON, JAWAN, JEREMIAH],
  },
  {
    name: "2",
    winner: ALEX,
    players: [KRISTINA, MATT, MC, NATE, NICOLE, RIZO],
  },
  {
    name: "3",
    winner: ALEX,
    players: [SAGE, SAVANNAH, SHANNON, SOPHI, SOPHIE, STEVEN],
  },
  {
    name: "4",
    winner: ALEX,
    players: [MATT, MC, NATE, NICOLE, RIZO, SAGE],
  },
  {
    name: "5",
    winner: ALEX,
    players: [SOPHI, SOPHIE, STEVEN, KRISTINA, MATT, MC],
  },
  {
    name: "6",
    winner: ALEX,
    players: [JAWAN, JEREMIAH, KRISTINA, MATT, MC, NATE],
  },
  {
    name: "7",
    winner: ALEX,
    players: [NATE, NICOLE, RIZO, SAGE, SAVANNAH, SHANNON],
  },
  {
    name: "8",
    winner: ALEX,
    players: [SHANNON, SOPHI, SOPHIE, STEVEN, KRISTINA, MATT],
  },
];
