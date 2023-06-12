const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    return dragon.damage = parseInt(Math.random() * (dragon.strength - 15) + 15);
};
// console.log(dragonDamage());

const warriorDamage = () => {
    return warrior.damage = parseInt(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
};
//  console.log(warriorDamage());

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };
  console.log(mageAttack(mage));
