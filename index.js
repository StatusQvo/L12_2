const hero = {
  name: 'Batman',
  health: 100,
  hitEnemy: (enemy) => (enemy.health -= 10),
}

const enemy = {
  name: 'Joker',
  health: 100,
  hitHero: (hero) => (hero.health -= 10),
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function winnerMessage({ name, health }) {
  alert(`${name} победил! У него осталось ${health} здоровья`)
}

function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    let winRandom = getRandomNumberInRange(0, 1)
    if (winRandom) {
      heroPlayer.hitEnemy(enemyPlayer)
    } else enemyPlayer.hitHero(heroPlayer)
  }

  if (heroPlayer.health) {
    winnerMessage(heroPlayer)
  } else {
    winnerMessage(enemyPlayer)
  }
}

startGame(hero, enemy)
