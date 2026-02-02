/**
 * Tarot Card Type Definitions
 * For use in applications consuming the tarot deck data
 */

export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

export type MajorArcanaName =
  | 'The Fool'
  | 'The Magician'
  | 'The High Priestess'
  | 'The Empress'
  | 'The Emperor'
  | 'The Hierophant'
  | 'The Lovers'
  | 'The Chariot'
  | 'Strength'
  | 'The Hermit'
  | 'Wheel of Fortune'
  | 'Justice'
  | 'The Hanged Man'
  | 'Death'
  | 'Temperance'
  | 'The Devil'
  | 'The Tower'
  | 'The Star'
  | 'The Moon'
  | 'The Sun'
  | 'Judgement'
  | 'The World';

export type MinorArcanaRank =
  | 'Ace'
  | 'Two'
  | 'Three'
  | 'Four'
  | 'Five'
  | 'Six'
  | 'Seven'
  | 'Eight'
  | 'Nine'
  | 'Ten'
  | 'Page'
  | 'Knight'
  | 'Queen'
  | 'King';

export interface TarotCard {
  id: string;
  name: string;
  number: number;
  suit: Suit;
  arcana: 'major' | 'minor';
  image: string;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
  description: string;
}

export interface TarotDeck {
  name: string;
  version: string;
  author: string;
  description: string;
  totalCards: number;
  cards: TarotCard[];
}
