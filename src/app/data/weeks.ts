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

export const weeks: Array<Week> = [{}];
