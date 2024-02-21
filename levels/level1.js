let level1;


function initLevel() {
    level1 = new Level(
        [
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new JellyFish('vertical', 900, 100, 1),
            new JellyFish('vertical', 1100, 100, 2),
            new JellyFish('horizontal', 1650, 100, 2),
            new JellyFish('horizontal', 1650, 200, 2),
            new JellyFish('horizontal', 1650, 300, 2),
            new JellyFish('vertical', 2400, 200, 2),
            new JellyFish('vertical', 2500, 100, 2, 'charged'),
            new JellyFish('vertical', 2600, 200, 2),
            new JellyFish('horizontal', 2950, 50, 2),
            new JellyFish('horizontal', 3050, 150, 1, 'charged'),
            new JellyFish('horizontal', 3150, 250, 2),
            new JellyFish('horizontal', 3250, 350, 1, 'charged')
        ],
        [
            new Coin(400, 200),
            new Coin(450, 150),
            new Coin(500, 200),
            new Coin(1250, 350),
            new Coin(1300, 350),
            new Coin(1900, 100),
            new Coin(2510.83, 100),
            new Coin(3350, 200),
            new Coin(3300, 250),
            new Coin(3250, 300),
            new Poison(447.5, 300),
            new Poison(1272.5, 100),
            new Poison(1897.5, 200),
            new Poison(1897.5, 275),
            new Poison(2508.33, 300),
            new Poison(3150, 100),
            new Poison(3400, 300),
            new Poison(3900, 75),
            new Poison(3900, 212.5),
            new Poison(3900, 350)
        ],
        [
            new Light(0),
            new Light(1706.67),
            new Light(3413.34),
            new Light(5120.01),
            new Light(6826.68),
            new Light(8533.35),
            new Light(10240.02),
            new Light(11946.69),
            new Light(13653.36),
            new Light(15360.03)
        ],
        [
            new BackgroundObject('../img/3. Background/Layers/5. Water/D.png', 0),
            new BackgroundObject('../img/3. Background/Layers/4.Fondo 2/D.png', 0),
            new BackgroundObject('../img/3. Background/Layers/3.Fondo 1/D.png', 0),
            new BackgroundObject('../img/3. Background/Layers/2. Floor/D.png', 0),
            new BackgroundObject('../img/3. Background/Layers/5. Water/D.png', 1706),
            new BackgroundObject('../img/3. Background/Layers/4.Fondo 2/D.png', 1706),
            new BackgroundObject('../img/3. Background/Layers/3.Fondo 1/D.png', 1706),
            new BackgroundObject('../img/3. Background/Layers/2. Floor/D.png', 1706),
            new BackgroundObject('../img/3. Background/Layers/5. Water/D.png', 3412),
            new BackgroundObject('../img/3. Background/Layers/4.Fondo 2/D.png', 3412),
            new BackgroundObject('../img/3. Background/Layers/3.Fondo 1/D.png', 3412),
            new BackgroundObject('../img/3. Background/Layers/2. Floor/D.png', 3412)
        ]);
}

