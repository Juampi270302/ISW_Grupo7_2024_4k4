# ISW_Grupo7_2024_4k4
<h2>Repositorio del grupo 7 que incluye los directorios y contenidos de la materia Ingeniería y Calidad de Software.</h2>

<h3>Integrantes:</h3>

- Abadía, Martina - 89633.
- Sanchez, Valentina - 89442.
- Lambertucci, Juan Pablo - 90606.
- Oliva Paez, Javier Nicolas - 90664.
- Gutierrez Cuetti, Ulises Matheo - 89874.
- Gimenez Scarponi, Federico - 89340.
- Vigliocco, Mariano - 89434.
- Morales, Emiliano - 54112.

<h3>Estructura del repositorio</h3>

Se estableció un archivo .txt en la raíz del repositorio con su estructura inicial, el nombre del archivo es:

        ISW_DOC_Estructura_Repositorio_v1.0.0

<h3>Reglas de nombrado</h3>

Para cada item de configuración dentro del repositorio, comenzaremos con la abreviatura del nombre de la materia (ISW). A continuacion, se escribirá un prefijo que establezca la ubicación del archivo dentro de la estructura de carpetas. Dichos prefijos se detallan en el glosario al final de este documento. Luego, escribiremos el nombre del archivo y la versión del item. Por ultimo, se especificara la extension del archivo para saber que tipo de archivo es. Cada una de estas tres características estará separada por "_".


Evitamos el uso de caracteres especiales e intentamos que los nombres sean lo mas cortos y concisos posibles.

Nos quedaría de la siguiente manera:

        <NombreDeLaMateria>_<Prejifo>_<NombreDelArchivo>_<VersionDelItem>_<ExtensionDelArchivo>

Por ejemplo, para nombrar la bibliografía, lo haríamos de la siguiente manera:

        ISW_BIB_LeanUX_v1.0.0_.pdf

Los Items con prefijo DIR, es decir directorios, no llevan extension de archivo

<h3>Criterio de Linea Base</h3>

Para establecer la primera linea base, consideraremos que se hayan subido correctamente y con el nombre apropiado los items de configuración relacionados a "Materiales de Clase", "Bibliografía", "Planificación de la Materia", "Consignas de Trabajos Prácticos".

Para el resto de las lineas base el criterio será: 

Cada vez que exista un nuevo item de configuración que haga referencia a un trabajo práctico completo y terminado del cuatrimestre, se marcará una linea base.

Al momento de realizar el proyecto de programación, el criterio será marcar una línea base por cada cambio que genere un software estable y usable. Consideramos "estable y usable" al software cuando funciona de manera consistente y predecible sin ningún error significativo, considerando que cada programador haya realizado y verificado que funcionen correctamente las tareas que se le han asignado en la organización del proyecto.
Antes de marcar una línea base, cada programador deberá realizar pruebas exhaustivas para garantizar el correcto funcionamiento de las funcionalidades implementadas, asegurándose de que no haya errores críticos ni problemas que afecten la experiencia del usuario, y verificando que todas las tareas asignadas estén completadas con éxito e integradas coherentemente en el software. Además, se realizará una revisión por pares (code review) para garantizar la calidad y consistencia del código antes de la aprobación de la línea base por parte de todo el equipo, lo que indica que el software ha pasado por un riguroso proceso de verificación y está listo para su implementación. 

Para cada línea base su nombre será "LíneaBase_númeroDeLínea" (por ejemplo, "LíneaBase_1" para la primera). En los comentarios de cada línea base explicaremos qué contiene y cuales son los nuevos cambios asociados con respecto a la línea base anterior. Además, incluiremos la fecha en la que se establece la misma. 


<h3>Estructura De Commits</h3>

        <tipo>(<área>): <descripción>
        <Cuerpo del mensaje>
        <Footers>
        
A continuacion explicamos cada parte de la estructura en detalle:
- tipo: Indica el propósito del cambio. Algunos tipos comunes son: feat, fix, docs, style, refactor, test, chore, cuyos significados estan especificados en el Glosario.
- área: Opcional. Indica la parte del sistema afectada por el cambio, puede ser BIB,TEM,PPT,PDF,TPS; cuyos significados estan especificados en el Glosario.
- descripción: Un resumen conciso del cambio.
- Cuerpo del mensaje: Proporciona una descripción más detallada del cambio. Puede incluir la razón del cambio, la solución implementada y cualquier otro detalle relevante.
- Footers: Opcional. Se utilizan para hacer referencia a números de problemas, enlaces a documentación, o mencionar otros cambios relacionados.

A continuacion presentamos un ejemplo:

        feat(auth): Agregar autenticación con OAuth2
        Se ha implementado la autenticación utilizando OAuth2 para permitir a los usuarios iniciar sesión con sus cuentas de Google, Facebook y Twitter.
        Cuerpo del mensaje opcional, que proporciona más detalles sobre la implementación del sistema de autenticación.


<h3>Glosario</h3>

A continuación detallaremos el glosario necesario para la completa comprensión del repositorio y sus archivos.

<h4>Prefijos</h4>

- ISW = "Ingeniería y Calidad de Software"
- BIB = "Bibliografía"
- TEM = "Template"
- PPT = "Presentación/PowerPoint"
- PDM = "Planificación de la materia"
- TPS = "Trabajos prácticos"
- DIR = "Direcotorio"
- DOC = "Documento"

Los prefijos DOC y DIR son prefijos genericos que representan un tipo generico de item, documento y directorio respectivamente, a diferencia del resto de prefijos (BIB,TEM,PPT,PDM,TPS) que reflejan la ubicacion del archivo dentro de la estructura del respositorio

<h4>Tipos de cambios de commit</h4>

- feat: Para cambios que introducen nuevas características.
- fix: Para cambios de corrección de errores.
- docs: Para cambios en documentación.
- style: Para cambios que no afectan la lógica del código (espacios en blanco, formato, etc.).
- refactor: Para cambios en el código que no corrigen errores ni agregan características.
- test: Para agregado de pruebas faltantes o corrección de pruebas existentes.
- chore: Para tareas de mantenimiento, como actualizar dependencias.
- delete: Para eliminacion de documentacion

<h4>Otros</h4>

La fecha estará en formato "dd/mm/aaaa". Por ejemplo, el día 1 de abril de 2024 sería "01/04/2024".

Cada vez que nos referimos al "proyecto", estamos haciendo referencia al trabajo práctico programable de la materia.

<h3>Versionado</h3>

En cuanto a las versiones de los items de configuración, utilizaremos el versionado semántico. Este tipo de versionado incluye tres números separados por puntos, por ejemplo "1.0.0". El primer numero es el "Major", hace referencia a cambios importantes 
en la arquitectura del software o eliminación de características antiguas.Se incrementa cuando se realizan cambios significativos que pueden no ser compatibles con versiones anteriores.
El segundo numero es el "Minor", hace referencia a la adición de nuevas características o mejoras que no rompen la compatibilidad. Se incrementa cuando se agregan nuevas funcionalidades de una manera que aún es compatible con versiones anteriores.
El tercer numero es el "Patch", hace referencia a correcciones de bugs, mejoras de rendimiento, entre otras. Se incrementa cuando se realizan correcciones de errores o actualizaciones menores que no afectan la compatibilidad con versiones anteriores


