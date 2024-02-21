let muted = false;

let MENU_SOUND_CLICK = new Audio('../audio/MENU_CLICK.mp3');
MENU_SOUND_CLICK.volume = 0.5;

let BACKGROUND_SOUND_MUSIC = new Audio('../audio/BACKGROUND_MUSIC.mp3');
BACKGROUND_SOUND_MUSIC.volume = 0.15;

let GAME_SOUND_WON = new Audio('../audio/GAME_WON.mp3');
GAME_SOUND_WON.loop = false;

let GAME_SOUND_LOST = new Audio('../audio/GAME_LOST.mp3');
GAME_SOUND_LOST.loop = false;

let COIN_SOUND = new Audio('../audio/COIN.mp3');
COIN_SOUND.volume = 0.7;

let POISON_SOUND = new Audio('../audio/POISON.mp3');
POISON_SOUND.volume = 0.20;

let CHARACTER_SOUND_SWIM = new Audio('../audio/CHARACTER_SWIM.mp3');

let CHARACTER_SOUND_FINSLAP = new Audio('../audio/CHARACTER_FINSLAP.mp3');
CHARACTER_SOUND_FINSLAP.volume = 0.5;

let CHARACTER_SOUND_BUBBLETRAP = new Audio('../audio/CHARACTER_BUBBLETRAP.mp3');
CHARACTER_SOUND_BUBBLETRAP.volume = 0.45;

let CHARACTER_SOUND_SHOCK = new Audio('../audio/CHARACTER_SHOCK.mp3');
CHARACTER_SOUND_SHOCK.volume = 0.6;

let CHARACTER_SOUND_POISON = new Audio('../audio/CHARACTER_POISON.mp3');
CHARACTER_SOUND_POISON.volume = 0.75;

let CHARACTER_SOUND_DEAD = new Audio('../audio/CHARACTER_DEAD.mp3');

let ENDBOSS_SOUND_BITE = new Audio('../audio/ENDBOSS_BITE.mp3');
ENDBOSS_SOUND_BITE.volume = 0.75;

let ENDBOSS_SOUND_HURT = new Audio('../audio/ENDBOSS_HURT.mp3');

let ENDBOSS_SOUND_DEAD = new Audio('../audio/ENDBOSS_DEAD.mp3');

let BUBBLE_SOUND = new Audio('../audio/BUBBLE.mp3');
BUBBLE_SOUND.volume = 0.75;

let BUBBLE_SOUND_POP = new Audio('../audio/BUBBLE_POP.mp3');

let PUFFERFISH_SOUND_PUFFING_UP = new Audio('../audio/PUFFERFISH_PUFFING_UP.mp3');
PUFFERFISH_SOUND_PUFFING_UP.volume = 0.25;


function toggleSounds(boolean, type) {
    if (type !== 'ingame') {
        GAME_SOUND_WON.muted = boolean;
        GAME_SOUND_LOST.muted = boolean;
        muted = boolean;
    }

    BACKGROUND_SOUND_MUSIC.muted = boolean;
    COIN_SOUND.muted = boolean;
    POISON_SOUND.muted = boolean;
    CHARACTER_SOUND_SWIM.muted = boolean;
    CHARACTER_SOUND_FINSLAP.muted = boolean;
    CHARACTER_SOUND_BUBBLETRAP.muted = boolean;
    CHARACTER_SOUND_SHOCK.muted = boolean;
    CHARACTER_SOUND_POISON.muted = boolean;
    CHARACTER_SOUND_DEAD.muted = boolean;
    ENDBOSS_SOUND_BITE.muted = boolean;
    ENDBOSS_SOUND_HURT.muted = boolean;
    ENDBOSS_SOUND_DEAD.muted = boolean;
    BUBBLE_SOUND.muted = boolean;
    BUBBLE_SOUND_POP.muted = boolean;
    PUFFERFISH_SOUND_PUFFING_UP.muted = boolean;
}


function playClickSound() {
    MENU_SOUND_CLICK.currentTime = 0;
    MENU_SOUND_CLICK.play();
}