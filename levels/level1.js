const level1 = new Level(
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
        new JellyFish('charged'),
        new JellyFish(),
        new JellyFish(),
        new JellyFish('charged'),
        new JellyFish(),
        new JellyFish(),
        new JellyFish('charged'),
        new JellyFish(),
        new JellyFish(),
        new JellyFish('charged'),
        new Endboss()
    ],
    [
        new Coin(400, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Coin(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(1, 100),
        new Poison(300, 200)
        // TODO: Place coins and poisons perfectly after size readjustment
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

// TODO: Place all objects perfectly like in a real level


// TODO: if to easy, add barriers 