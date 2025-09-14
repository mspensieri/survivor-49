import { Player, Team } from "../data/types";
import { weeks } from "../data/weeks";
import {
  computePlayerScore,
  computePlayerStatus,
  computeUpsideDownPlayerScore,
  getPlayerUpsideDownAchievements,
} from "./playerStatsProvider";
import {
  computeTeamScore,
  computeUpsideDownTeamScore,
} from "./teamStatsProvider";
import {
  PlayerRankings,
  TeamRankings,
  UpsideDownPlayerRankings,
} from "./types";

function getTeamRankingsForWeek(
  teams: Array<Team>,
  weekNumber: number
): TeamRankings {
  const partialRankings = [...teams]
    .map((team) => {
      return {
        team,
        total: computeTeamScore(team, weekNumber),
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

function getUpsideDownTeamRankingsForWeek(
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

export function getTeamRankings(teams: Array<Team>): {
  standard: Array<TeamRankings>;
  upsideDown: Array<TeamRankings>;
} {
  return {
    standard: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getTeamRankingsForWeek(teams, weekNumber);
    }),
    upsideDown: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getUpsideDownTeamRankingsForWeek(teams, weekNumber);
    }),
  };
}

function getPlayerRankingsForWeek(
  players: Array<Player>,
  weekNumber: number
): PlayerRankings {
  const partialRankings = [...players]
    .map((player) => {
      return {
        player,
        total: computePlayerScore(player, weekNumber, "total"),
        points: {
          survival: computePlayerScore(player, weekNumber, "survival"),
          votes: computePlayerScore(player, weekNumber, "votes"),
          teamImmunity: computePlayerScore(player, weekNumber, "teamImmunity"),
          individualImmunity: computePlayerScore(
            player,
            weekNumber,
            "individualImmunity"
          ),
          advantage: computePlayerScore(player, weekNumber, "advantage"),
          idolFound: computePlayerScore(player, weekNumber, "idolFound"),
          voteNullified: computePlayerScore(
            player,
            weekNumber,
            "voteNullified"
          ),
          placement: computePlayerScore(player, weekNumber, "placement"),
        },
        status: computePlayerStatus(player, weekNumber),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });

  const rankings: PlayerRankings = [
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

function getUpsideDownPlayerRankingsForWeek(
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

export function getPlayerRankings(players: Array<Player>): {
  standard: Array<PlayerRankings>;
  upsideDown: Array<UpsideDownPlayerRankings>;
} {
  return {
    standard: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getPlayerRankingsForWeek(players, weekNumber);
    }),
    upsideDown: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getUpsideDownPlayerRankingsForWeek(players, weekNumber);
    }),
  };
}
