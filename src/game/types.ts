export interface Character {
  id: number;
  username: string;
  enemy: boolean;
  selectionStatus: number;
  level: number;
  power: number;
  defense: number;
  entity: {
    name: string;
    energy: number;
    maxEnergy: number;
    energyRate: number;
    health: number;
    maxHealth: number;
    defense: number;
    attacks: {
      [attackId: string]: Attack;
    };
    inventory: {
      [itemId: string]: InventoryItem;
    };
  };
  sprite: any;
  _nameTag: any;
  _healthBar: any;
  _healthBarBackground: any;
  _healthText: any;
}
export interface Attack {
  name: string;
  description: string;
  stats: {
    baseDamage: number;
    energy: number;
  };
}
export interface InventoryItem {
  name: string;
  id: string;
  type: string;
  amount: number;
}
export interface CombatEvent {
  baseDamage: number;
  characterId: string;
  receiverId: string;
  action: {
      type: string;
      id: string;
  }
  outcome: {
    damage: number;
    attackBase: number;
    heal: number;
    xp: number;
  }
}