import { Team } from "../data/types";
import {
  computePlayerScore,
  computeUpsideDownPlayerScore,
} from "./playerStatsProvider";

export function computeTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computePlayerScore(player, weekNumber, "total");
  }

  return score;
}

export function computeUpsideDownTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computeUpsideDownPlayerScore(player, weekNumber);
  }

  return score;
}

export function getTeamScore(team: Team, weekNumber: number) {
  return computeTeamScore(team, weekNumber) || "-";
}
