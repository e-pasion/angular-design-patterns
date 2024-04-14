type CharacterClass = 'warrior' | 'mage' |  'ranger'

class CharacterBuilder {
    private character:Character
    constructor( private name:string, private characterClass:CharacterClass ){
        this.character= new Character(name,characterClass);
    }

    setHp(hp:number){
        this.character.hp=hp;
        return this;
    }

    setMana(mana:number){
        this.character.mana=mana;
        return this;
    }

    setDefense(defense:number){
        this.character.defense=defense;
        return this;
    }

    setSpeed(speed:number){
        this.character.speed=speed;
        return this;
    }

    build():Character{
        return this.character
    }

}

class Character {
    hp:number;
    mana:number;
    defense:number;
    speed:number;
    constructor( private name:string, private characterClass:CharacterClass ){}

    showStats():void{
        console.log(`
            Name: ${this.name}
            Class: ${this.characterClass}
            Hp: ${this.hp}
            Mana: ${this.mana}
            Defense: ${this.defense}
            Speed: ${this.speed}
        `)
    }
}


const templarBuilder = new CharacterBuilder('Templar','warrior');
const templarPlayer = templarBuilder.setHp(500).setDefense(200).setMana(0).setSpeed(10).build();