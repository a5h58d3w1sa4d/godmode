player.onChat("/godmode", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_HELMET,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_BOOTS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    SHIELD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ENCHANTED_APPLE,
    128
    )
    mobs.applyEffect(HASTE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(HEALTH_BOOST, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(REGENERATION, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(WATER_BREATHING, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 600, 255)
    space.randomSphere(
    [
    WATER,
    STONE,
    DIRT,
    LOG_OAK,
    GRASS,
    MOSS_BLOCK
    ],
    pos(0, 100, 0),
    30,
    ShapeOperation.Replace
    )
    player.teleport(pos(0, 120, 0))
    player.say("I am god, you obey me now!!")
    gameplay.timeSet(gameplay.time(DAY))
    gameplay.setWeather(CLEAR)
    music.playMusic(MusicDisc.Pigstep)
})
