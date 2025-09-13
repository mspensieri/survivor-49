import { PlayerKeys, Player } from "./players";
import { PlayerStatus } from "./rankings";

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
  survival?: number;
  votes?: number;
};

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

export const weeks: Array<Week> = [
  {
    eliminated: [PlayerKeys.ALEX],
    JEREMIAH: {
      votes: 1,
      advantage: 1,
      idolFound: 2,
    },
    NICOLE: {
      votes: 1,
    },
    RIZO: {
      votes: 1,
    },
    SAVANNAH: {
      votes: 1,
    },
    MATT: {
      teamImmunity: 1,
    },
    SAGE: {
      teamImmunity: 1,
    },
    SOPHI: {
      teamImmunity: 1,
    },
    MC: {
      teamImmunity: 1,
    },
    JASON: {
      teamImmunity: 1,
    },
    JAWAN: {
      teamImmunity: 1,
    },
    SHANNON: {
      teamImmunity: 1,
    },
    JAKE: {
      teamImmunity: 1,
    },
    KRISTINA: {
      teamImmunity: 1,
    },
    ANNIE: {
      teamImmunity: 1,
    },
    SOPHIE: {
      teamImmunity: 1,
    },
    NATE: {
      teamImmunity: 1,
    },
  },
  {
    eliminated: [PlayerKeys.NICOLE],
    JEREMIAH: {
      voteNullified: 1,
      survival: 1,
      votes: 1,
    },
    NICOLE: {
      survival: 1,
    },
    RIZO: {
      survival: 1,
      votes: 1,
    },
    SAVANNAH: {
      survival: 1,
      votes: 1,
    },
    STEVEN: {
      survival: 1,
    },
    MATT: {
      survival: 1,
      teamImmunity: 1,
    },
    SAGE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHI: {
      survival: 1,
      teamImmunity: 1,
    },
    MC: {
      survival: 1,
      teamImmunity: 1,
    },
    JASON: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
      idolFound: 2,
    },
    JAWAN: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    SHANNON: {
      survival: 1,
      teamImmunity: 1,
    },
    JAKE: {
      survival: 1,
      teamImmunity: 1,
    },
    KRISTINA: {
      survival: 1,
      teamImmunity: 1,
    },
    ANNIE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHIE: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    NATE: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
  },
  {
    eliminated: [PlayerKeys.SAVANNAH],
    JEREMIAH: {
      survival: 1,
    },
    RIZO: {
      survival: 1,
      votes: 1,
    },
    SAVANNAH: {
      survival: 1,
    },
    STEVEN: {
      survival: 1,
      voteNullified: 2,
    },
    MATT: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    SAGE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHI: {
      survival: 1,
      teamImmunity: 1,
    },
    MC: {
      survival: 1,
      teamImmunity: 1,
    },
    JASON: {
      survival: 1,
      teamImmunity: 1,
    },
    JAWAN: {
      survival: 1,
      teamImmunity: 1,
    },
    SHANNON: {
      survival: 1,
      teamImmunity: 1,
    },
    JAKE: {
      survival: 1,
      teamImmunity: 1,
    },
    KRISTINA: {
      survival: 1,
      teamImmunity: 1,
    },
    ANNIE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHIE: {
      survival: 1,
      teamImmunity: 1,
    },
    NATE: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [PlayerKeys.NATE],
    JEREMIAH: {
      survival: 1,
      teamImmunity: 1,
    },
    RIZO: {
      survival: 1,
      teamImmunity: 1,
    },
    STEVEN: {
      survival: 1,
      teamImmunity: 1,
    },
    MATT: {
      survival: 1,
      votes: 1,
    },
    SAGE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHI: {
      survival: 1,
      teamImmunity: 1,
    },
    MC: {
      survival: 1,
      teamImmunity: 1,
    },
    JASON: {
      survival: 1,
      voteNullified: 3,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      teamImmunity: 1,
    },
    SHANNON: {
      survival: 1,
      teamImmunity: 1,
    },
    JAKE: {
      survival: 1,
      teamImmunity: 1,
    },
    KRISTINA: {
      survival: 1,
    },
    ANNIE: {
      survival: 1,
    },
    SOPHIE: {
      survival: 1,
      teamImmunity: 1,
    },
    NATE: {
      survival: 1,
    },
  },
  {
    eliminated: [PlayerKeys.SHANNON],
    JEREMIAH: {
      survival: 1,
    },
    RIZO: {
      survival: 1,
      votes: 1,
    },
    STEVEN: {
      survival: 1,
      teamImmunity: 1,
    },
    MATT: {
      survival: 1,
      teamImmunity: 1,
    },
    SAGE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHI: {
      survival: 1,
      votes: 1,
    },
    MC: {
      survival: 1,
      teamImmunity: 1,
    },
    JASON: {
      survival: 1,
      teamImmunity: 1,
    },
    JAWAN: {
      survival: 1,
    },
    SHANNON: {
      survival: 1,
    },
    JAKE: {
      survival: 1,
      teamImmunity: 1,
      idolFound: 2,
    },
    KRISTINA: {
      survival: 1,
      teamImmunity: 1,
    },
    ANNIE: {
      survival: 1,
      teamImmunity: 1,
    },
    SOPHIE: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [PlayerKeys.SAGE],
    JEREMIAH: {
      survival: 1,
      advantage: 1,
    },
    RIZO: {
      survival: 1,
      votes: 1,
    },
    STEVEN: {
      survival: 1,
      votes: 1,
    },
    MATT: {
      survival: 1,
      votes: 1,
    },
    SAGE: {
      survival: 1,
    },
    SOPHI: {
      survival: 1,
      votes: 1,
    },
    MC: {
      survival: 1,
    },
    JASON: {
      survival: 1,
      individualImmunity: 2,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
    },
    JAKE: {
      survival: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
    },
    ANNIE: {
      survival: 1,
    },
    SOPHIE: {
      survival: 1,
      votes: 1,
    },
  },
  {
    eliminated: [PlayerKeys.JEREMIAH],
    jury: [PlayerKeys.RIZO],
    JEREMIAH: {
      survival: 1,
    },
    RIZO: {
      survival: 1,
      placement: 2,
    },
    STEVEN: {
      survival: 1,
      votes: 1,
    },
    MATT: {
      survival: 1,
      votes: 1,
    },
    SOPHI: {
      survival: 1,
      votes: 1,
    },
    MC: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      votes: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    ANNIE: {
      survival: 1,
      votes: 1,
    },
    SOPHIE: {
      survival: 1,
      votes: 1,
    },
  },
  {
    jury: [PlayerKeys.SOPHI],
    STEVEN: {
      survival: 1,
      votes: 1,
    },
    MATT: {
      survival: 1,
      votes: 1,
    },
    SOPHI: {
      survival: 1,
      placement: 2,
    },
    MC: {
      survival: 1,
      votes: 1,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      votes: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
    },
    ANNIE: {
      survival: 1,
      votes: 1,
    },
    SOPHIE: {
      survival: 1,
    },
  },
  {
    jury: [PlayerKeys.MC],
    STEVEN: {
      survival: 1,
    },
    MATT: {
      survival: 1,
      votes: 1,
    },
    MC: {
      survival: 1,
      placement: 2,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      votes: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
      advantage: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    ANNIE: {
      survival: 1,
      votes: 1,
    },
    SOPHIE: {
      survival: 1,
    },
  },
  {
    jury: [PlayerKeys.SOPHIE],
    STEVEN: {
      survival: 1,
      votes: 1,
    },
    MATT: {
      survival: 1,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    ANNIE: {
      survival: 1,
      votes: 1,
    },
    SOPHIE: {
      survival: 1,
      placement: 2,
    },
  },
  {
    jury: [PlayerKeys.STEVEN],
    STEVEN: {
      survival: 1,
      placement: 2,
    },
    MATT: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      votes: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
    },
    ANNIE: {
      survival: 1,
      votes: 1,
    },
  },
  {
    jury: [PlayerKeys.ANNIE],
    MATT: {
      survival: 1,
    },
    JASON: {
      survival: 1,
      votes: 1,
    },
    JAWAN: {
      survival: 1,
      votes: 1,
    },
    JAKE: {
      survival: 1,
      votes: 1,
    },
    KRISTINA: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    ANNIE: {
      survival: 1,
      placement: 2,
    },
  },
  {
    eliminated: [PlayerKeys.JAKE, PlayerKeys.KRISTINA],
    jury: [PlayerKeys.JAWAN, PlayerKeys.MATT],
    MATT: {
      survival: 2,
      individualImmunity: 2,
      votes: 1,
      placement: 5,
    },
    JASON: {
      survival: 3,
      votes: 1,
      individualImmunity: 2,
      placement: 10,
    },
    JAWAN: {
      survival: 1,
      placement: 3,
    },
    JAKE: {
      survival: 3,
      votes: 1,
      advantage: 1,
      placement: 9,
    },
    KRISTINA: {
      survival: 3,
      votes: 1,
      placement: 7,
    },
  },
];

export function computePlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  let score = 0;

  for (const week of weeks.slice(0, weekNumber + 1)) {
    if (scoreKey === "total") {
      score +=
        (week[player.key]?.survival || 0) +
        (week[player.key]?.votes || 0) +
        (week[player.key]?.teamImmunity || 0) +
        (week[player.key]?.individualImmunity || 0) +
        (week[player.key]?.advantage || 0) +
        (week[player.key]?.idolFound || 0) +
        (week[player.key]?.voteNullified || 0) +
        (week[player.key]?.placement || 0);
    } else {
      score += week[player.key]?.[scoreKey] || 0;
    }
  }

  return score;
}

export function getPlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  return computePlayerScore(player, weekNumber, scoreKey) || "-";
}

export function computePlayerStatus(
  player: Player,
  weekNumber: number
): PlayerStatus {
  const precedingWeeks = weeks.slice(0, weekNumber + 1);
  const eliminated = precedingWeeks.some((week) =>
    week.eliminated?.includes(player.key)
  );
  const inJury = precedingWeeks.some((week) => week.jury?.includes(player.key));

  if (eliminated) {
    return "eliminated";
  } else if (inJury) {
    return "jury";
  } else if (weekNumber === airDates.length - 1) {
    return "winner";
  } else {
    return "active";
  }
}
