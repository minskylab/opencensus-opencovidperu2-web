[OpenCovid2.0](https://opencovid2.tk), 
[Metabase](https://metabase.opencovid2.tk),
[Mockups](https://www.youtube.com/watch?v=R6XS2L7k90U&feature=youtu.be)
# Plan de implementación

#### 1.- ¿Qué lenguajes y/o frameworks de programación están usando en su propuesta?

![arquitectura](https://raw.githubusercontent.com/EmanuelSamir/assets_opencensus/main/arquitecture.png)

- **Back-end**: [Golang](https://golang.org/), [GraphQL](https://graphql.org/), [EntGo](https://entgo.io/).
- **Front-end**: [NextJS](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/), [Chakra](https://chakra-ui.com/), [Redux](https://es.redux.js.org/), [Framer-Motion](https://www.framer.com/motion/), [JWT](https://jwt.io/).
- **Database**: [PostgreSQL](https://www.postgresql.org/).

#### 2.-  ¿Qué plataforma tecnológica (infraestructura) usarán en su solución?
- **Cloud service**: [Digital Ocean](https://www.digitalocean.com/).
- **Open source GraphQL Engine**: [Hasura](https://hasura.io/).
- **Open source Analytics Platform**: [Metabase](https://www.metabase.com/).

#### 3.- La solución planteada podrá correr en automático o tiene dependencias manuales?
&nbsp;&nbsp;&nbsp;La solución que hemos realizado obtiene y actualiza información de forma automática, tan pronto como se actualicen las bases de datos de origen. Sin embargo, en caso que cambie la plataforma de donde se extrae información, es probable que las implementaciones de extracción automática no funcionen.  Por ende, se recomienda realizar mantenimiento al menos cada mes para verificar el buen funcionamiento de los scripts y del código de integración. Cabe resaltar que los organizadores del evento mencionan que es un escenario poco probable.

#### 4.- La solución cuenta con un manual de configuración en ambiente local?
&nbsp;&nbsp;&nbsp;&nbsp;Si, contamos con un manual de la infraestructura docker-compose para levantar hasura, postgress y otros servicios. El readme.txt se encuentra en el proyecto [opencensus/framework-core](https://gitlab.com/cix-hack-groups/open-census/framework-core).

#### 5.- Actualmente ¿Cómo está compuesto tu equipo (indicar roles)? Considerando que tienen un mes para la implementación en Producción de la solución final.
| Nombre | Rol | LinkedIn |
| ------ | ------ | ------ |
| Maria Noriega | UI Design | https://www.linkedin.com/in/guadalupenoriega/ |
| Raúl Escandón | UX Research | https://www.linkedin.com/in/elmerescandontufino/ |
| Max Landeo | Marketing | https://www.linkedin.com/in/winfred-landeo/ |
| Anthony Aróstegui | Backend Developer | https://www.linkedin.com/in/anthonyarostegui/ |
| Bregy Malpartida | Fullstack Developer | https://www.linkedin.com/in/bregy/ |
| Jhonatan Macazana | Fullstack Developer | https://www.linkedin.com/in/jhonatanmacazana/ |
| Samir Muñoz | Data Processing | https://www.linkedin.com/in/emanuelsamirmp/ |
| Karina Vásquez | Analytics | https://www.linkedin.com/in/kevasquezh/ |

#### 6.- ¿Cómo distribuirán los S/ 10K del premio?
Costos de DevOps, React Front-end, Go Backend y servidores, utilizar system design pro, persona que ilustre y persona que tenga conocimientos en comunicar la informacion a diferentes perfiles de personas.

#### 7.- ¿Cuál es la estrategia de implementación de la solución final?

##### Actividades realizadas durante la Hackathon
- [x] Investigación de usuarios para conocer sus perfiles a través de [entrevistas](https://www.notion.so/Entrevistas-18a7fc3ffe434183b4acb1a0e0537c3e). 
- [x] Definición de la arquitectura de datos y back-end.
- [x] [Framework-core](https://gitlab.com/cix-hack-groups/open-census/framework-core) para automatización para extracción de datos y despliegue en Metabase para posterior uso en el front-end.
- [x] Diseño de la página web en [Figma](https://www.figma.com/proto/nCH06w3AV4wEdZdVHzBRVA/OpenCensus?node-id=173%3A599&viewport=2281%2C328%2C0.32656049728393555&scaling=min-zoom) para 2 perfiles utilizando un enfoque de componentes y sistema de diseño a medida (modo Desktop). 
- [x] Maquetación, integración y despliegue front-end de la plataforma [OpenCovidPeru2.0](https://gitlab.com/cix-hack-groups/open-census/opencovidperu2-web).

##### Actividades pendientes por implementar en 1 mes

###### Semana 1
- [ ] User Testing de los Mockups.
- [ ] Terminar implementación de componentes.
- [ ] Obtener todos los datos desde el inicio de la pandemia para todos los records.
- [ ] Extraer data de fallecidos de MINSA y SINADEF.
- [ ] Añadir data de recuperados.
- [ ] Data de cantidad de personas vacunadas por distrito y edad.
- [ ] Añadir información de vacunación.

###### Semana 2
- [ ] Optimizar recolección de datos
- [ ] Actualizar a recolección eficiente: diaria o ante algún cambio.
- [ ] Llegar al nivel de distrito en la data obtenida.
- [ ] Mejorar obtención de datos csv.
- [ ] Añadir un análisis de web (e.g Google Analytics)
- [ ] Testeo y validación del sitio con muestra de personas de ambos perfiles 
- [ ] Realizar gráficos para información añadida

###### Semana 3
- [ ] Uso de dominio .com
- [ ] Exploración de más tipos de perfiles
- [ ] Actualizar componentes de información de validación y gráficos tras evidencias en testeo.
- [ ] Revisión de funcionalidades.
- [ ] Data de stock de medicinas desde la web de Inkafarma y Mifarma.

###### Semana 4
- [ ] Despliegue de la plataforma.
- [ ] Posibilidad de uso de API de google de sitios.
- [ ] Revisar vulnerabilidades.
- [ ] Corrección de bugs.
- [ ] User Testing.
  

#### 8.- ¿Quiénes son los integrantes del equipo que implementarán la solución final?
Todos los ingresantes participantes del evento participarán de la implementación de la solución final. La solución será bajo la supervisión de la Empresa tecnológica  [minsky.cc](minsky.cc)

#### 9.- Adicional a lo mostrado en el prototipo presentado ¿Hay alguna funcionalidad adicional que piensan implementar en el periodo indicado?
Abarcar el otro perfil de prevención y generar la base para la creacion de otros perfiles a nivel de backend. Indagar en los scrapper de las necesidades de informacion faltantes.
En el mes de implementacion trabajaremos en el perfil 2 (Perfil de Prevención) que tendrá la siguiente información:

- [ ] Casos diarios, recuperados, fallecidos.
- [ ] Incidencia de COVID por Distrito.
- [ ] Síntomas.
- [ ] Medidas de movilización (restricción).
- [ ] Cantidad de personas vacunadas por distrito y por edad.
- [ ] Stock de medicamentos.

Además, se incluye el mejoramiento de la web para que siga los lineamientos correctos de diseño e integración de cierta data que faltó debido al tiempo, por ser una solución tanto con la infraestructura a medida como el diseño.

Finalmente, después de indagar sobre posibles características que serían importantes, identificamos que las siguientes son muy complejas de implementar en un mes, pero se encuentra en la mapeado para este tipo de perfil.
- Aforo de personas en supermercados y horario sugerido.
- Frecuencia de movilización (paraderos, personas).
- Frecuencia de personas en transporte público (tren, metropolitano) 

#### 



