const level1 = new Level(
    [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new Endboss()
    ],
    [
        new Coin(500, 100),
        new Coin(600, 100),
        new Poison(400, 100),
        new Poison(400, 200),
        new Coin(500, 200),
        new Coin(600, 200),
        new Poison(300, 100),
        new Poison(300, 200)
    ],
    [
        new Light()
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