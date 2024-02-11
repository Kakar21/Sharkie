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
        new JellyFish('charged')
    ],
    [
        new Coin(100, 100),
        new Coin(150, 100),
        new Coin(200, 100),
        new Coin(250, 100),
        new Coin(300, 100),
        new Coin(350, 100),
        new Coin(400, 100),
        new Coin(450, 100),
        new Coin(500, 100),
        new Coin(550, 100),
        new Poison(100, 150),
        new Poison(150, 150),
        new Poison(200, 150),
        new Poison(250, 150),
        new Poison(300, 150),
        new Poison(350, 150),
        new Poison(400, 150),
        new Poison(450, 150),
        new Poison(500, 150),
        new Poison(550, 150)
        // TODO: Perfectly place coins and poisons  after size readjustment
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

// TODO: Perfectly place all objects like in a real level


// TODO: if to easy, add barriers 