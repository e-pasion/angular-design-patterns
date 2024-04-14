# Design patterns


Un patrón de diseño define una solución a un problema recurrente, y esta solución se replica de varias formas, dependiendo la tecnología.

*Se clasifican 3 campos generales:*

**Creacionales**: Son aquellos que se encargan de solucionar problemas que implican la creación de objetos, su objetivo es dar soluciones para poder crear instancias concretas de ciertos objetos. 

**Estructurales**: Nos ayudan a la hora de configurar relaciones entre objetos

**Comportamiento:** Nos ayudan a realizar interacción entre clases o objetos de forma en la que podamos distribuir las responsabilidades de cada uno de estos elementos de una forma mucho mas organizada

---

## Creacionales

---

### Patrón Factory

Proporciona una interfaz para crear objetos en una superclase, y permite a las subclases alterar el tipo de objetos que se crearán. 

Se recomienda cuando: 

- Se crean múltiples tipos de objetos y no se conoce exactamente cuales son: El patrón Factory nos permite usar el principio OPEN/CLOSE por lo cual cada que se añada un nuevo producto, solo es que implemente la interfaz general sin afectar el código original
- Si la lógica de creación de objetos cambia con frecuencia: Por ejemplo en un videojuego tenemos múltiples dificultades, y la lógica de creación de enemigos puede cambiar frecuentemente.


---

### Patrón Singleton

Permite asegurarnos que una clase tenga una única instancia, a la ves que proporciona un punto de acceso global a esa instancia. 

El patrón Singleton se recomienda usar en los siguientes casos:

- Cuando se necesita un control estricto sobre las variables globales.
- Cuando solo se requiere una única instancia de una clase y ésta debe ser accesible desde cualquier punto del código.
- Cuando se quiere limitar el número de instancias asegurando que solo exista una.

No se recomienda debido a que dificulta los test unitarios, al no permitir tener acceso al constructor.


---

### Patrón Builder

Crear entidades, paso a paso

Se recomienda cuando:

- Se debe crear un objeto con muchas opciones posibles de configuración

---

## Estructurales

---

### Patrón Adapter

**Adapter** es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles. Busca adaptar una entidad para que pueda funcionar en una entidad diferente

Se recomienda cuando:

- Se requiere usar una clase existente, pero su interfaz no es compatible con el resto del codigo.

---

## Patrón Decorator

Permite añadir funcionalidad a un objeto dinámicamente. Es una alternativa flexible a la herencia para extender la funcionalidad.

Se recomienda cuando:

- Utiliza el patrón Decorator cuando necesites asignar funcionalidades adicionales a objetos durante el tiempo de ejecución y al hacerlo con herencia sea complejo o tenga una jerarquia muy extraña