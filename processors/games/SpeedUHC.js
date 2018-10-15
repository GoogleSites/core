/* eslint-disable camelcase */
/*
 * SpeedUHC
 */

const {
  getWeeklyStat,
  getMonthlyStat,
  getRatio,
  pickKeys,
} = require('../../util/utility');

module.exports = ({
  // General
  arrows_hit = 0,
  arrows_shot = 0,
  assists = 0,
  blocks_broken = 0,
  blocks_placed = 0,
  coins = 0,
  deaths = 0,
  games = 0,
  items_enchanted = 0,
  kills = 0,
  kills_weekly_a = 0,
  kills_weekly_b = 0,
  kills_monthly_a = 0,
  kills_monthly_b = 0,
  killstreak = 0,
  losses = 0,
  quits = 0,
  salt = 0,
  tears = 0,
  tears_gathered = 0,
  tearWellUses = 0,
  wins = 0,
  winstreak = 0,
  survived_players = 0,
  enderpearls_thrown = 0,
  activeMasterPerk,
  extra_wheels = 0,
  found_RARE = 0,
  found_COMMON = 0,
  found_LEGENDARY = 0,
  highestKillstreak = 0,
  highestWinstreak = 0,

  // Normal perks
  normal_arrow_recovery = 0,
  normal_bow_flex = 0,
  normal_cold_blood = 0,
  normal_ender_generosity = 0,
  normal_expert_miner = 0,
  normal_low_gravity = 0,
  normal_marksmob = 0,
  normal_master_brewer = 0,
  normal_medicine = 0,
  normal_monster_tamer = 0,
  normal_no_mercy = 0,
  normal_nourishment = 0,
  normal_portal_protection = 0,
  normal_swimming_champion = 0,
  normal_telekinesis = 0,
  normal_tenacity = 0,
  normal_vitamins = 0,

  // Insane perks
  insane_adrenaline = 0,
  insane_annoy_o_fish = 0,
  insane_blazing_arrow = 0,
  insane_bow_flex = 0,
  insane_ender_generosity = 0,
  insane_juggernaut = 0,
  insane_knowledge = 0,
  insane_low_gravity = 0,
  insane_master_breeder = 0,
  insane_medicine = 0,
  insane_no_mercy = 0,
  insane_notoriety = 0,
  insane_portal_protection = 0,
  insane_swimming_champion = 0,
  insane_tank = 0,
  insane_telekinesis = 0,
  insane_tenacity = 0,
  insane_vitamins = 0,

  // Solo
  assists_solo = 0,
  deaths_solo = 0,
  games_solo = 0,
  kills_solo = 0,
  killstreak_solo = 0,
  losses_solo = 0,
  survived_players_solo = 0,
  wins_solo = 0,
  winstreak_solo = 0,

  // Team
  assists_team = 0,
  deaths_team = 0,
  games_team = 0,
  kills_team = 0,
  killstreak_team = 0,
  losses_team = 0,
  survived_players_team = 0,
  wins_team = 0,
  winstreak_team = 0,

  // Normal
  activeKit_NORMAL,
  assists_normal = 0,
  deaths_normal = 0,
  games_normal = 0,
  kills_normal = 0,
  killstreak_normal = 0,
  losses_normal = 0,
  survived_players_normal = 0,
  wins_normal = 0,
  winstreak_normal = 0,

  // Insane
  activeKit_INSANE,
  assists_insane = 0,
  deaths_insane = 0,
  games_insane = 0,
  kills_insane = 0,
  killstreak_insane = 0,
  losses_insane = 0,
  survived_players_insane = 0,
  wins_insane = 0,
  winstreak_insane = 0,

  // Normal solo
  deaths_solo_normal = 0,
  kills_solo_normal = 0,
  losses_solo_normal = 0,
  wins_solo_normal = 0,

  // Normal teams
  deaths_team_normal = 0,
  kills_team_normal = 0,
  losses_team_normal = 0,
  wins_team_normal = 0,

  // Insane solo
  deaths_solo_insane = 0,
  kills_solo_insane = 0,
  losses_solo_insane = 0,
  wins_solo_insane = 0,

  // Insane teams
  deaths_team_insane = 0,
  kills_team_insane = 0,
  losses_team_insane = 0,
  wins_team_insane = 0,

  // Votes
  votes_Hailstone = 0,
  votes_Pinnacle = 0,
  votes_Plains = 0,
  votes_Taiga = 0,

  packages,
  ...rest
}) => {
  const pick = options => pickKeys(rest, options);

  const getKitStats = (regexp) => {
    const picks = pick({
      regexp,
      keyMap: key => key.replace(regexp, '').replace('_kit_basic', ''),
    });
    return Object.keys(picks).length === 0 ? picks : undefined;
  };

  return {
    arrows_hit,
    arrows_shot,
    assists,
    blocks_broken,
    blocks_placed,
    coins,
    deaths,
    games,
    items_enchanted,
    kills,
    kd: getRatio(kills, deaths),
    weekly_kills: getWeeklyStat(kills_weekly_a, kills_weekly_b),
    monthly_kills: getMonthlyStat(kills_monthly_a, kills_monthly_b),
    killstreak,
    losses,
    win_loss: getRatio(wins, losses),
    win_percentage: getRatio(wins, wins + losses),
    quits,
    salt,
    tears,
    tears_gathered,
    tear_well_uses: tearWellUses,
    wins,
    winstreak,
    survived_players,
    enderpearls_thrown,
    extra_wheels,
    rares_found: found_RARE,
    commons_found: found_COMMON,
    legendaries_found: found_LEGENDARY,
    highest_killstreak: highestKillstreak,
    highest_winstreak: highestWinstreak,

    mastery: {
      active_mastery: activeMasterPerk && activeMasterPerk.replace('mastery_', ''),
      berserk: pick({ regexp: /_mastery_berserk$/, keyMap: key => key.replace('_mastery_berserk', '') }),
      fortune: pick({ regexp: /_mastery_fortune$/, keyMap: key => key.replace('_mastery_fortune', '') }),
      huntsman: pick({ regexp: /_mastery_huntsman$/, keyMap: key => key.replace('_mastery_huntsman', '') }),
      invigorate: pick({ regexp: /_mastery_invigorate$/, keyMap: key => key.replace('_mastery_invigorate', '') }),
      master_baker: pick({ regexp: /_mastery_master_baker$/, keyMap: key => key.replace('_mastery_master_baker', '') }),
      sniper: pick({ regexp: /_mastery_sniper$/, keyMap: key => key.replace('_mastery_sniper', '') }),
      wild_specialist: pick({ regexp: /_mastery_wild_specialist$/, keyMap: key => key.replace('_mastery_wild_specialist', '') }),
    },

    gamemodes: {
      solo: {
        assists: assists_solo,
        deaths: deaths_solo,
        games: games_solo,
        kills: kills_solo,
        kd: getRatio(kills_solo, deaths_solo),
        killstreaks: killstreak_solo,
        losses: losses_solo,
        survived_players: survived_players_solo,
        wins: wins_solo,
        win_loss: getRatio(wins_solo, losses_solo),
        win_percentage: getRatio(wins_solo, wins_solo + losses_solo),
        winstreak: winstreak_solo,
      },
      teams: {
        assists: assists_team,
        deaths: deaths_team,
        games: games_team,
        kills: kills_team,
        kd: getRatio(kills_team, deaths_team),
        killstreaks: killstreak_team,
        losses: losses_team,
        survived_players: survived_players_team,
        wins: wins_team,
        win_loss: getRatio(wins_team, losses_team),
        win_percentage: getRatio(wins_team, wins_team + losses_team),
        winstreak: winstreak_team,
      },
      normal: {
        active_kit: activeKit_NORMAL && activeKit_NORMAL.replace('kit_basic_normal_', ''),
        assists: assists_normal,
        deaths: deaths_normal,
        games: games_normal,
        kills: kills_normal,
        kd: getRatio(kills_normal, deaths_normal),
        killstreaks: killstreak_normal,
        losses: losses_normal,
        survived_players: survived_players_normal,
        wins: wins_normal,
        win_loss: getRatio(wins_normal, losses_normal),
        win_percentage: getRatio(wins_normal, wins_normal + losses_normal),
        winstreak: winstreak_normal,
        solo: {
          deaths: deaths_solo_normal,
          kills: kills_solo_normal,
          kd: getRatio(kills_solo_normal, deaths_solo_normal),
          losses: losses_solo_normal,
          wins: wins_solo_normal,
          win_loss: getRatio(wins_solo_normal, losses_solo_normal),
          win_percentage: getRatio(wins_solo_normal, wins_solo_normal + losses_solo_normal),
        },
        teams: {
          deaths: deaths_team_normal,
          kills: kills_team_normal,
          kd: getRatio(kills_team_normal, deaths_team_normal),
          losses: losses_team_normal,
          wins: wins_team_normal,
          win_loss: getRatio(wins_team_normal, losses_team_normal),
          win_percentage: getRatio(wins_team_normal, wins_team_normal + losses_team_normal),
        },
        kit_stats: {
          archaelogist: getKitStats(/_normal_archaeologist$/),
          archer: getKitStats(/_normal_archer$/),
          cowboy: getKitStats(/_normal_cowboy$/),
          default: getKitStats(/_normal_default$/),
          enchanter: getKitStats(/_normal_enchanter$/),
          farmer: getKitStats(/_normal_farmer$/),
          healer: getKitStats(/_normal_healer$/),
          knight: getKitStats(/_normal_knight$/),
          logger: getKitStats(/_normal_logger$/),
          miner: getKitStats(/_normal_miner$/),
          nether_walker: getKitStats(/_normal_nether_walker$/),
          oink: getKitStats(/_normal_oink$/),
          pyro: getKitStats(/_normal_pyro$/),
          scout: getKitStats(/_normal_scout$/),
          tamer: getKitStats(/_normal_tamer$/),
        },
        perks: {
          arrow_recovery: normal_arrow_recovery,
          bow_flex: normal_bow_flex,
          cold_blood: normal_cold_blood,
          ender_generosity: normal_ender_generosity,
          expert_miner: normal_expert_miner,
          low_gravity: normal_low_gravity,
          marksmob: normal_marksmob,
          master_brewer: normal_master_brewer,
          medicine: normal_medicine,
          monster_tamer: normal_monster_tamer,
          no_mercy: normal_no_mercy,
          nourishment: normal_nourishment,
          portal_protection: normal_portal_protection,
          swimming_champion: normal_swimming_champion,
          telekinesis: normal_telekinesis,
          tenacity: normal_tenacity,
          vitamins: normal_vitamins,
        },
      },
      insane: {
        active_kit: activeKit_INSANE && activeKit_INSANE.replace('kit_basic_insane_', ''),
        assists: assists_insane,
        deaths: deaths_insane,
        games: games_insane,
        kills: kills_insane,
        kd: getRatio(kills_insane, deaths_insane),
        killstreaks: killstreak_insane,
        losses: losses_insane,
        survived_players: survived_players_insane,
        wins: wins_insane,
        win_loss: getRatio(wins_insane, losses_insane),
        win_percentage: getRatio(wins_insane, wins_insane + losses_insane),
        winstreak: winstreak_insane,
        solo: {
          deaths: deaths_solo_insane,
          kills: kills_solo_insane,
          kd: getRatio(kills_solo_insane, deaths_solo_insane),
          losses: losses_solo_insane,
          wins: wins_solo_insane,
          win_loss: getRatio(wins_solo_insane, losses_solo_insane),
          win_percentage: getRatio(wins_solo_insane, wins_solo_insane + losses_solo_insane),
        },
        teams: {
          deaths: deaths_team_insane,
          kills: kills_team_insane,
          kd: getRatio(kills_team_insane, deaths_team_insane),
          losses: losses_team_insane,
          wins: wins_team_insane,
          win_loss: getRatio(wins_team_insane, losses_team_insane),
          win_percentage: getRatio(wins_team_insane, wins_team_insane + losses_team_insane),
        },
        kit_stats: {
          archaeologist: getKitStats(/_insane_archaelogist$/),
          archer: getKitStats(/_insane_archer$/),
          cowboy: getKitStats(/_insane_cowboy$/),
          default: getKitStats(/_insane_default$/),
          enchanter: getKitStats(/_insane_enchanter$/),
          farmer: getKitStats(/_insane_farmer$/),
          healer: getKitStats(/_insane_healer$/),
          knight: getKitStats(/_insane_knight$/),
          logger: getKitStats(/_insane_logger$/),
          miner: getKitStats(/_insane_miner$/),
          nether_walker: getKitStats(/_insane_nether_walker$/),
          oink: getKitStats(/_insane_oink$/),
          pyro: getKitStats(/_insane_pyro$/),
          scout: getKitStats(/_insane_scout$/),
          tamer: getKitStats(/_insane_tamer$/),
        },
        perks: {
          adrenaline: insane_adrenaline,
          annoy_o_fish: insane_annoy_o_fish,
          blazing_arrow: insane_blazing_arrow,
          bow_flex: insane_bow_flex,
          ender_generosity: insane_ender_generosity,
          juggernaut: insane_juggernaut,
          knowledge: insane_knowledge,
          low_gravity: insane_low_gravity,
          master_breeder: insane_master_breeder,
          medicine: insane_medicine,
          no_mercy: insane_no_mercy,
          notoriety: insane_notoriety,
          portal_protection: insane_portal_protection,
          swimming_champion: insane_swimming_champion,
          tank: insane_tank,
          telekinesis: insane_telekinesis,
          tenacity: insane_tenacity,
          vitamins: insane_vitamins,
        },
      },
    },
    drops: pickKeys(rest, {
      regexp: /_drop$/,
      keyMap: key => key.replace(/_drop$/, '').replace(/§\S/, ''),
    }),
    votes: {
      hailstone: votes_Hailstone,
      pinnacle: votes_Pinnacle,
      plains: votes_Plains,
      taiga: votes_Taiga,
    },
    packages,
  };
};
