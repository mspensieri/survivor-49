import { TeamRankings } from "./rankings";
import { computeUpsideDownTeamScore } from "./teams";
import { Player, Team, UpsideDownPlayerScore } from "./types";
import {
  weeks,
  computePlayerStatus,
  computeUpsideDownPlayerScore,
  getPlayerUpsideDownAchievements,
} from "./weeks";

export type UpsideDownPlayerRankings = Array<UpsideDownPlayerScore>;

function getUpsideDownWeeklyTeamRankings(
  teams: Array<Team>,
  weekNumber: number
): TeamRankings {
  const partialRankings = [...teams]
    .map((team) => {
      return {
        team,
        total: computeUpsideDownTeamScore(team, weekNumber),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });

  const rankings: TeamRankings = [
    {
      ...partialRankings[0],
      rank: 0,
    },
  ];

  for (let i = 1; i < partialRankings.length; i++) {
    const curr = partialRankings[i];
    const prev = rankings[i - 1];

    rankings.push({
      ...curr,
      rank: curr.total === prev.total ? prev.rank : prev.rank + 1,
    });
  }

  return rankings;
}

export function getUpsideDownTeamRankings(
  teams: Array<Team>
): Array<TeamRankings> {
  return new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
    return getUpsideDownWeeklyTeamRankings(teams, weekNumber);
  });
}

function getUpsideDownWeeklyPlayerRankings(
  players: Array<Player>,
  weekNumber: number
): UpsideDownPlayerRankings {
  const partialRankings = [...players]
    .map((player) => {
      return {
        player,
        total: computeUpsideDownPlayerScore(player, weekNumber),
        achievements: getPlayerUpsideDownAchievements(player, weekNumber),
        status: computePlayerStatus(player, weekNumber),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });

  const rankings: UpsideDownPlayerRankings = [
    {
      ...partialRankings[0],
      rank: 0,
    },
  ];

  for (let i = 1; i < partialRankings.length; i++) {
    const curr = partialRankings[i];
    const prev = rankings[i - 1];

    rankings.push({
      ...curr,
      rank: curr.total === prev.total ? prev.rank : prev.rank + 1,
    });
  }

  return rankings;
}

export function getUpsideDownPlayerRankings(
  players: Array<Player>
): Array<UpsideDownPlayerRankings> {
  return new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
    return getUpsideDownWeeklyPlayerRankings(players, weekNumber);
  });
}
