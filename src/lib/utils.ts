import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tempLink = "#"

export const topDesiredGames = [
  { id: Math.random(), title: "The Last of Us Part II Remastered", platform: "PS5", desired: 130, offered: 41, rating: 9.3, cover: "/covers/ps5/the-last-of-us-part-ii-remastered.jpg" },
  { id: Math.random(), title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { id: Math.random(), title: "Spider-Man 2", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { id: Math.random(), title: "Stellar Blade", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
  { id: Math.random(), title: "Cyberpunk 2077: Ultimate Edition", platform: "PS5", desired: 70, offered: 5, rating: 8.6, cover: "/covers/ps5/cyberpunk-2077-ultimate-edition.jpg" },
  { id: Math.random(), title: "The Last of Us Part II Remastered", platform: "PS5", desired: 130, offered: 41, rating: 9.3, cover: "/covers/ps5/the-last-of-us-part-ii-remastered.jpg" },
]

export const topOfferedGames = [
  { id: Math.random(), title: "Ratchet & Clank: Rift Apart", platform: "PS5", desired: 210, offered: 268, rating: 8.8, cover: "/covers/ps5/ratchet-and-clank-rift-apart.jpg" },
  { id: Math.random(), title: "God of War", platform: "PS4", desired: 2164, offered: 3034, rating: 9.7, cover: "/covers/ps4/god-of-war.jpg" },
  { id: Math.random(), title: "Returnal", platform: "PS5", desired: 191, offered: 251, rating: 8.4, cover: "/covers/ps5/returnal.jpg" },
  { id: Math.random(), title: "God Of War: Ragnarök", platform: "PS5", desired: 282, offered: 317, rating: 9.5, cover: "/covers/ps5/god-of-war-ragnarok.jpg" },
  { id: Math.random(), title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { id: Math.random(), title: "Ratchet & Clank: Rift Apart", platform: "PS5", desired: 210, offered: 268, rating: 8.8, cover: "/covers/ps5/ratchet-and-clank-rift-apart.jpg" },
]

export const newReleases = [
  {
    id: Math.random(),
    title: "Suikoden I & II HD Remaster Gate Rune and Dunan Unification Wars",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }, { name: "Nintendo Switch", logo: "/logos/switch.svg" }],
    cover: "/covers/ps5/stellar-blade.jpg",
    description: "Suikoden I & II HD Remaster: Clássicos RPGs Ganham Vida Nova no PS5!\n\nOs lendários jogos de RPG Suikoden I e II retornam com um remaster em HD, trazendo uma experiência visual e sonora totalmente revigorada. Gráficos e sons foram atualizados para proporcionar ao jogador um mergulho ainda mais profundo nas histórias épicas desses clássicos. Não perca a oportunidade de reviver essa aventura melhor do que nunca!"
  },
  {
    id: Math.random(),
    title: "Atomfall",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }, { name: "Playstation 4", logo: "/logos/ps4.svg" }],
    cover: "/covers/ps4/god-of-war.jpg",
    description: "Prepare-se para uma jornada intensa em \"Atomfall\", onde suas escolhas serão cruciais em um cenário devastado por um desastre nuclear. Explore a tranquila, mas perigosa, paisagem do campo britânico e descubra os segredos ocultos dessa intrigante narrativa. Cada decisão pode mudar o rumo de sua sobrevivência!"
  },
  {
    id: Math.random(),
    title: "The First Berserker Khazan",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }],
    cover: "/covers/ps5/astro-bot.jpg",
    description: "Mergulhe no Passado com Khazan: Aventure-se no Universo de DNF\n\nDesperte seu herói interior em \"The First Berserker: Khazan\". Reviva a história de Khazan e Ozma, os lendários salvadores do Império Pell Los. Acompanhe Khazan, o herói exilado, em sua busca por justiça após ser injustamente acusado de traição. Experimente um RPG de ação carregado de batalhas intensas e uma narrativa envolvente."
  },
  {
    id: Math.random(),
    title: "Assassin's Creed Shadows",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }],
    cover: "/covers/ps5/spider-man-2.jpg",
    description: "Mergulhe no Japão Feudal: Uma Aventura Inesquecível em Terra de Samurais e Shinobis\n\nEntre no mundo vibrante do Japão Feudal e experimente uma aventura épica ao lado de Naoe, o assassino furtivo, e Yasuke, o icônico samurai. Explore paisagens impressionantes e absorva a mudança das estações enquanto desvenda a intrigante trama que une estes lendários guerreiros. Descubra um universo onde a tática e a ação se entrelaçam para criar uma experiência única."
  },
  {
    id: Math.random(),
    title: "Monster Hunter Wilds",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }],
    cover: "/covers/ps5/stellar-blade.jpg",
    description: "Aventura Selvagem - Monster Hunter Wilds Leva os Jogadores para as Terras Proibidas"
  },
  {
    id: Math.random(),
    title: "Suikoden I & II HD Remaster Gate Rune and Dunan Unification Wars",
    platforms: [{ name: "Playstation 5", logo: "/logos/ps5.svg" }, { name: "Nintendo Switch", logo: "/logos/switch.svg" }],
    cover: "/covers/ps5/stellar-blade.jpg",
    description: "Suikoden I & II HD Remaster: Clássicos RPGs Ganham Vida Nova no PS5!\n\nOs lendários jogos de RPG Suikoden I e II retornam com um remaster em HD, trazendo uma experiência visual e sonora totalmente revigorada. Gráficos e sons foram atualizados para proporcionar ao jogador um mergulho ainda mais profundo nas histórias épicas desses clássicos. Não perca a oportunidade de reviver essa aventura melhor do que nunca!"
  },
]
