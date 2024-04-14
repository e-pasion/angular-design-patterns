interface Component {
    operation() :string;
}

class ConcreteComponent implements Component{
    operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    constructor(protected component:Component){}
    operation(): string {
        return this.component.operation();
    }

}

class ComponentDecoratorA extends Decorator {
    public operation():string {
        return `ComponentDecoratorA(${super.operation()})`
    }
}

const component = new ConcreteComponent();
const decorator= new ComponentDecoratorA(component);

console.log(decorator.operation()); //ComponentDecoratorA(ConcreteComponent)

//Decoramos la funcionalidad con mas cosas