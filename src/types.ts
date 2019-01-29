import { Character, CombatEvent } from '@/game/types';

// Store
export interface State {
    headerVisibility: boolean;
    player: Player;
    world: World;
    combatHub: CombatHub;
    combatGame: CombatGame;
    socket: SocketState;
}
// Action Context
export interface ActionContext {
    state: State,
    dispatch: any,
    commit: any,
}

// Models
export interface Player {
    id: number|null;
    username: string;
    role: string;
    gold: number;
    created_at: string;
    is_admin: boolean;
    token: string|null;
    authenticated: boolean;
}
export interface World {
    timeOfDay: number;
    connections: number;
}
export interface CombatHub {
    rooms: {
        [id: string]: CombatRoom,
    }
}
export interface CombatRoom {
    id: string;
    title: string;
    playerCount: number;
    maxPlayers: number;
    turn: number;
    level: number;
    playState: number;
    players: {
        [id: string]: Character,
    },
    enemies: {
        [id: string]: Character,
    },
    turnEvents: { // TODO: probably should make an interface for ``
        [turnIndex: number]: [CombatEvent]
    }
    readyToContinue: {
        [userId: string]: boolean;
    },
    levelRecord: {
        [userId: number]: {
            killed: {
                [characterId: string]: { total: number; times: number; reward: number };
            }
            healed: {
                [characterId: string]: { total: number; times: number; reward: number };
            };
            gold: number;
            damageDealt: number;
            damageReceived: number;
        }
    }
}
export interface CombatGame {
    gameState: CombatRoom;
    selectionMode: string;
}
export interface SocketState {
    connected: boolean;
    loading: boolean;
    room: null | {
        name: string;
        parameter: any;
    };
}