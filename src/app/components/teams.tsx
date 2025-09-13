"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

import { computePlayerScore, computePlayerStatus } from "../data/weeks";
import { PlayerRankings, TeamRankings } from "../data/rankings";
import { UpsideDownPlayerRankings } from "../data/upsideDownRankings";
import { Player } from "../data/types";

const styles: Record<string, React.CSSProperties> = {
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "var(--green-indicator-color)",
  },
  cardNumber: {
    fontSize: "40pt",
    marginTop: "-5px",
    filter: "var(--upside-down-image-filter)",
  },
  accolades: {
    textAlign: "center",
    position: "absolute",
    right: "10px",
    top: "20px",
    fontSize: "12pt",
    lineHeight: "1",
    fontWeight: "400",
  },
  medalContainer: {
    backgroundColor: "var(--medal-background-color)",
    borderRadius: "5px",
    padding: "5px",
    paddingTop: "10px",
    marginRight: "5px",
  },
  medal: {
    fontSize: "17pt",
    filter: "var(--upside-down-image-filter)",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "var(--red-indicator-color)",
  },
  card: {
    minHeight: "270px",
  },
  teamName: {
    fontSize: "20pt",
    marginBottom: "20px",
  },
  teamNameSmall: {
    fontSize: "17pt",
    paddingBottom: "5px",
    marginBottom: "20px",
  },
};

class Teams extends React.Component<{
  thisWeekRankings: TeamRankings;
  thisWeekPlayerRankings: PlayerRankings | UpsideDownPlayerRankings;
  currentWeek: number;
}> {
  render() {
    const {
      thisWeekRankings = [],
      thisWeekPlayerRankings = [],
      currentWeek,
    } = this.props;

    return (
      <Row>
        {...thisWeekRankings.map((teamScore) => {
          let accoladesComponent;

          if (teamScore.team.accolades) {
            const { first, second, third } = teamScore.team.accolades;
            accoladesComponent = (
              <div style={styles.accolades}>
                {first && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥇</span>S{first.join(", ")}
                  </span>
                )}
                {second && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥈</span>S{second.join(", ")}
                  </span>
                )}
                {third && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥉</span>S{third.join(", ")}
                  </span>
                )}
              </div>
            );
          }

          return (
            <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
              <Card style={styles.card}>
                {accoladesComponent}
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title
                    style={
                      teamScore.team.name.length > 21
                        ? styles.teamNameSmall
                        : styles.teamName
                    }
                  >
                    {teamScore.team.name}
                  </Card.Title>
                  <hr />
                  {...[...teamScore.team.players]
                    .sort(
                      (a, b) =>
                        thisWeekPlayerRankings.find((r) => r.player === b)!
                          .total -
                        thisWeekPlayerRankings.find((r) => r.player === a)!
                          .total
                    )
                    .map((player: Player, j) => {
                      const playerScore = thisWeekPlayerRankings.find(
                        (r) => r.player === player
                      )!;

                      return (
                        <Card.Text key={j}>
                          {player === teamScore.team.winner ? (
                            <span style={styles.indicatorGreenLarge}>[W] </span>
                          ) : (
                            ""
                          )}
                          {["eliminated", "jury"].includes(
                            playerScore.status
                          ) ? (
                            <span style={styles.playerEliminated}>
                              {player.name}
                            </span>
                          ) : (
                            player.name
                          )}{" "}
                          ({playerScore.total || 0})
                        </Card.Text>
                      );
                    })}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Teams;
