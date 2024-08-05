// Wrap and join
// ^v$hS"A,Jj
// Wram and join with Fest prefix
// ^v$hS"A,_A^aFest-j
// Numeric
// s/\(\d*\)\. \(.*\)/"Fest-\1 - \2",

// update 7/17/24
// based on https://docs.google.com/document/u/0/d/10jGnHCqKcaVoQ6uPxohy57YKhQUjo20H_ddVXzSot3I

export const tierListRaw: string[][] = [
  [
    "TOP-1 - Dark Kasli",
    "TOP-2 - Phono",
    "TOP-3 - Balrog",
    "TOP-4 - Dark Phono",
    "TOP-5 - Izanagi",
    "TOP-6 - Miko Mitama",
    "TOP-7 - D’arktanyan",
    "TOP-8 - Yukimura",
    "TOP-9 - Chronos",
    "TOP-10 - Sirius",
  ],
  [
    "S - Balrog, Lasvoss, Baby Cat (UF), Yukimura, Keiji, Kuu (UT), Windy (UF), Kalisa, Daliasan, Akira (UT), Saki, Vigler, Chronos, Poseidon, Anubis (UT), Amaterasu, Ganesha, Siege (UF), Tecoluga",
    "A - Baby Cat, Ice (UT), Satoru, Shingen (UT), Kai, Coppermine (UT), Lilin, Dioramos (UT), Kasa Jizo, Ushiwakamaru, Sarukani, Kintaro, Momotaro (UT), Momotaro, Thunder Jack, Warlock (UT), Catman, Aphrodite (UT), Lucifer, Aphrodite, Hades, Gaia, Deth Troy, Aethur, Thermae, Muu, Lumina, Nanaho, Kanna, Himeyuri (UT), Himeyuri",
    "B - Momoco, Ice, Cat Machine (UT), Cat Machine, Akechi, Shingen, Kenshin, Amakusa, Hanzo, Jeanne, Windy, Thundia, Twinstars, Terun, Ganglion, Hevijak, Raiden (UT), Gamereon, Cosmo, Kaguya (UF), Issun, Shitakiri, Warlock, Hayabusa, Prof Abyss, Mekako, Cyclops, White Rabbit (UF), Aset, Drednot, Rekon Korps, Bora, Gravi, Yamii, Ruri (UT), Ruri, Reika, Balaluga, Asiluga",
    "C - Paladin, Tengu, Musashi, Yoshimoto, Oda (UF), Masamune (UT), Vars, Gundros, Raiden, Kachi Kachi (UT), Kachi Kachi, Kaguya, Akira, Zeus (UT), Anubis, Bomburr, Volta, Aer (UF), Vega, Deale, Shishilan, Kubiluga, Furiluga",
    "D - Nurse (UT), Nurse, Cat Clan Heroes, Kaihime, Masamune, Kuu, Pegasa, Gladios, Kamukura (UT), Kamukura, Megidora (UT), Megidora, Babel, Dioramos, Zeus, Mizli, Tetsukachi, Tomoe, Legeluga, Nekoluga (UT)",
    "E - Coppermine, Sodom, White Rabbit, Sphinx Korps, Siege, Aer, Blizana, Verbena, Nekoluga, Kaoluga",
    "F - Oda, Myrcia, Envanz, Nobiluga, Papaluga",
  ],
  [
    "S - Izanagi",
    "A - Gaia, Nanaho, Black Zeus, Izanami, Ushi, Muu, Lumina",
    "B - Emperor, Momoco, Doktor Heaven, Jeanne",
    "C - Akuma, Musashi",
    "D - Babel, Legeluga",

    "L-1 - Izanagi",
    "L-2 - Gaia",
    "L-3 - Nanaho",
    "L-4 - Black Zeus",
    "L-5 - Izanami",
    "L-6 - Ushiwakamaru",
    "L-7 - Muu",
    "L-8 - Lumina",
    "L-9 - Emperor",
    "L-10 - Momoco",
    "L-11 - Heaven",
    "L-12 - Jeanne",
    "L-13 - Akuma",
    "L-14 - Musashi",
    "L-15 - Babel",
    "L-16 - Legeluga",
  ],
  [
    "Fest-S - Dark Kasli, Phono, Dark Phono, Izanagi",
    "Fest-A - Mitama, D’arktanyan",
    "Fest-B - Kasli, Dartanyan, Gao",
    "Fest-C - Shadow Gao, Garu, Izanami",
    "Fest-D - Dark Izu, Izu",
    "Fest-E - Dark Mitama",
    "Fest-F - Dark Garu",

    "Fest-1 - Dark Kasli",
    "Fest-2 - Phono",
    "Fest-3 - Dark Phono",
    "Fest-4 - Izanagi",
    "Fest-5 - Mitama",
    "Fest-6 - D’arktanyan",
    "Fest-7 - Kasli",
    "Fest-8 - D’artanyan",
    "Fest-9 - Gao",
    "Fest-10 - Shadow Gao",
    "Fest-11 - Garu",
    "Fest-12 - Izanami",
    "Fest-13 - Dark Izu",
    "Fest-14 - Izu",
    "Fest-15 - Dark Mitama",
    "Fest-16 - Dark Garu",
  ],
  [
    "Ban-1 - Yukimura",
    "Ban-2 - Keiji",
    "Ban-3 - Shingen",
    "Ban-4 - Akechi",
    "Ban-5 - Kenshin",
    "Ban-6 - Amakusa",
    "Ban-7 - Hanzo",
    "Ban-8 - Musashi",
    "Ban-9 - Yoshimoto",
    "Ban-10 - Oda",
    "Ban-11 - Masamune",
    "Ban-12 - Kaihime",
  ],
  [
    "Ban-1 - Kuu",
    "Ban-2 - Windy",
    "Ban-3 - Kalisa",
    "Ban-4 - Kai",
    "Ban-5 - Coppermine",
    "Ban-6 - Lilin",
    "Ban-7 - Jeanne",
    "Ban-8 - Thundia",
    "Ban-9 - Twinstars",
    "Ban-10 - Terun",
    "Ban-11 - Pegasa",
    "Ban-12 - Myrcia",
  ],
  [
    "Ban-1 - Daliasan",
    "Ban-2 - Dioramos",
    "Ban-3 - Ganglion",
    "Ban-4 - Hevijak",
    "Ban-5 - Raiden",
    "Ban-6 - Vars",
    "Ban-7 - Gunduros",
    "Ban-8 - Gladios",
    "Ban-9 - Kamukura",
    "Ban-10 - Megidora",
    "Ban-11 - Babel",
    "Ban-12 - Sodom",
  ],
  [
    "Ban-1 - Kasa Jizo",
    "Ban-2 - Ushiwakamaru",
    "Ban-3 - Sarukani",
    "Ban-4 - Kintaro",
    "Ban-5 - Momotaro",
    "Ban-6 - Gamereon",
    "Ban-7 - Cosmo",
    "Ban-8 - Kaguya",
    "Ban-9 - Issun",
    "Ban-10 - Shitakiri",
    "Ban-11 - Kachi Kachi",
  ],
  [
    "Ban-1 - Akira",
    "Ban-2 - Saki",
    "Ban-3 - Vigler",
    "Ban-4 - Thunder Jack",
    "Ban-5 - Klay",
    "Ban-6 - Catman",
    "Ban-7 - Hayabusa",
    "Ban-8 - Heaven",
    "Ban-9 - Mekako",
    "Ban-10 - Cyclops",
    "Ban-11 - White Rabbit",
  ],
  [
    "Ban-1 - Chronos",
    "Ban-2 - Poseidon",
    "Ban-3 - Anubis",
    "Ban-4 - Amaterasu",
    "Ban-5 - Ganesha",
    "Ban-6 - Aphrodite",
    "Ban-7 - Lucifer",
    "Ban-8 - Hades",
    "Ban-9 - Gaia",
    "Ban-10 - Aset",
    "Ban-11 - Zeus",
  ],
  [
    "Ban-1 - Siege Engine",
    "Ban-2 - Deth Troy",
    "Ban-3 - Aethur",
    "Ban-4 - Thermae",
    "Ban-5 - Muu",
    "Ban-6 - Drednot",
    "Ban-7 - Rekon Korps",
    "Ban-8 - Bomburr",
    "Ban-9 - Sphinx Korps",
    "Ban-10 - Envanz",
  ],
  [
    "Ban-1 - Lumina",
    "Ban-2 - Bora",
    "Ban-3 - Gravi",
    "Ban-4 - Yamii",
    "Ban-5 - Volta",
    "Ban-6 - Aer",
    "Ban-7 - Mizli",
    "Ban-8 - Tetsukachi",
    "Ban-9 - Blizana",
  ],
  [
    "Ban-1 - Nanaho",
    "Ban-2 - Kanna",
    "Ban-3 - Himeyuri",
    "Ban-4 - Ruri",
    "Ban-5 - Reika",
    "Ban-6 - Vega",
    "Ban-7 - Deale",
    "Ban-8 - Tomoe",
    "Ban-9 - Verbena",
  ],
  [
    "Ban-1 - Tecoluga",
    "Ban-2 - Balaluga",
    "Ban-3 - Asiluga",
    "Ban-4 - Togeluga",
    "Ban-5 - Kubiluga",
    "Ban-6 - Furiluga",
    "Ban-7 - Legeluga",
    "Ban-8 - Nekoluga",
    "Ban-9 - Kaoluga",
    "Ban-10 - Nobiluga",
    "Ban-11 - Papaluga",
  ],
];

export default tierListRaw.flat(1);
