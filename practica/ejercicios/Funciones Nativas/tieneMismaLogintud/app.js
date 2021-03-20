/*
### `tienenMismaLongitud(a, b)`

Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b` y devuelva `true` si tienen la misma longitud o `false` de lo contrario

```javascript
tienenMismaLongitud('javascript', 'java') // false
tienenMismaLongitud('manzana', 'cerveza') // true
```
*/

const tienenMismaLongitud = (a, b) => {
  /* 13+34 -> 47
   "a" + "b" -> "ab"
   13>12->true*/
  /* 
  1.
  if(a.length == b.length){
    return true;
  }else{
    return false;
  }
2.
  if(a.length == b.length){
    return true;
  }
  return false;
  */

  //3.
  return a.length == b.length;
};
const sumafija = (a, b) => a + b;

const test = [
  {
    id: 10257,
    name: 'Romina Fetta',
    email: 'rominafetta@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 10257,
      status: 2,
      notes: '',
      postulation_reason:
        'Disfrut\u00e9 mucho de mi primera experiencia en mentor\u00edas. Siento que no solo fui de ayuda para los j\u00f3venes sino que me sirvi\u00f3 para crecer como persona y reencontrarme como profesional que apuesta a un futuro m\u00e1s humano y lleno de esperanza. Me gustar\u00eda poder seguir contagiando buenas vibras y apoyando a la meritocracia para construir un ma\u00f1ana mejor con j\u00f3venes empoderados y responsables hacia un bien com\u00fan.',
      created_at: '2020-12-26 14:10:13',
      updated_at: '2021-01-19 16:37:43',
    },
  },
  {
    id: 9241,
    name: 'Guillermo  Borda',
    email: 'guillermorborda@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 9241,
      status: 2,
      notes: '',
      postulation_reason:
        'Hola,volvi despues de un momento duro del.a\u00f1o pasado,un saludo',
      created_at: '2021-02-23 15:13:27',
      updated_at: '2021-02-23 12:22:41',
    },
  },
  {
    id: 8761,
    name: 'Alejandro Tenconi',
    email: 'alejandro.tenconi@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8761,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:09:08',
      updated_at: '2021-03-18 09:09:08',
    },
  },
  {
    id: 10267,
    name: 'Analia Vazquez',
    email: 'Ann.vazquez@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 10267,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:09:56',
      updated_at: '2021-03-18 09:09:56',
    },
  },
  {
    id: 8319,
    name: 'Anal\u00eda Redivo',
    email: 'aredivo@grupoagg.com',
    pivot: {
      activity_id: 239,
      user_id: 8319,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:46:18',
      updated_at: '2021-03-18 09:46:18',
    },
  },
  {
    id: 8782,
    name: 'Cynthia Hercovich',
    email: 'chercovich@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8782,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:46:57',
      updated_at: '2021-03-18 09:46:57',
    },
  },
  {
    id: 8789,
    name: 'Ernesto Bruggia',
    email: 'eabruggia@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8789,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:47:51',
      updated_at: '2021-03-18 09:47:51',
    },
  },
  {
    id: 9152,
    name: 'Erica Valeria Puppi',
    email: 'Ericapuppi@esconsultores.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 9152,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:48:09',
      updated_at: '2021-03-18 09:48:09',
    },
  },
  {
    id: 9860,
    name: 'Gabriela Behrend',
    email: 'Gabriela.behrend@lynks.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 9860,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:48:34',
      updated_at: '2021-03-18 09:48:34',
    },
  },
  {
    id: 9591,
    name: 'Gabriela Dunkielman',
    email: 'gabrielad30@yahoo.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 9591,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:49:00',
      updated_at: '2021-03-18 09:49:00',
    },
  },
  {
    id: 10256,
    name: 'Gabriela Terrile',
    email: 'gt@airaldi-shc.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 10256,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:49:21',
      updated_at: '2021-03-18 09:49:21',
    },
  },
  {
    id: 8800,
    name: 'Juan Nervi',
    email: 'jnervi48@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8800,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:50:17',
      updated_at: '2021-03-18 09:50:17',
    },
  },
  {
    id: 9542,
    name: 'Jorgelina Fernandez Valenti',
    email: 'jorgelina.fvalenti@aero.tur.ar',
    pivot: {
      activity_id: 239,
      user_id: 9542,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:50:37',
      updated_at: '2021-03-18 09:50:37',
    },
  },
  {
    id: 8802,
    name: 'Julio Risucci',
    email: 'jorisucci@yahoo.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 8802,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:51:03',
      updated_at: '2021-03-18 09:51:03',
    },
  },
  {
    id: 8801,
    name: 'Juan Pablo Rechter',
    email: 'juan.rechter@stonex.com',
    pivot: {
      activity_id: 239,
      user_id: 8801,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:51:28',
      updated_at: '2021-03-18 09:51:28',
    },
  },
  {
    id: 10258,
    name: 'Julieta Martin',
    email: 'julietagmartin@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 10258,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:52:00',
      updated_at: '2021-03-18 09:52:00',
    },
  },
  {
    id: 8870,
    name: 'Laura Encina',
    email: 'lencina@repicky.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 8870,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:52:40',
      updated_at: '2021-03-18 09:52:40',
    },
  },
  {
    id: 10268,
    name: 'Mercedes Motta',
    email: 'mercedes@dinaargentina.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 10268,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:53:02',
      updated_at: '2021-03-18 09:53:02',
    },
  },
  {
    id: 8344,
    name: 'Hector Polakoff',
    email: 'hpolakoff@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8344,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:54:08',
      updated_at: '2021-03-18 09:54:08',
    },
  },
  {
    id: 9594,
    name: 'Pablo Valeriano',
    email: 'pvaleriano@onapsis.com',
    pivot: {
      activity_id: 239,
      user_id: 9594,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:54:29',
      updated_at: '2021-03-18 09:54:29',
    },
  },
  {
    id: 8280,
    name: 'Roberto Manes',
    email: 'rmanes@anclaflex.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 8280,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:54:43',
      updated_at: '2021-03-18 09:54:43',
    },
  },
  {
    id: 8896,
    name: 'Ruben Ruiz',
    email: 'rubenruiz@rukawork.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 8896,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:55:20',
      updated_at: '2021-03-18 09:55:20',
    },
  },
  {
    id: 8419,
    name: 'Sebasti\u00e1n Alberto Fernandez',
    email: 'sebastian.fernandez@dacta.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 8419,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:56:02',
      updated_at: '2021-03-18 09:56:02',
    },
  },
  {
    id: 10255,
    name: 'Tamara Sternlieb',
    email: 'tamara.sternlieb@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 10255,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:56:18',
      updated_at: '2021-03-18 09:56:18',
    },
  },
  {
    id: 10298,
    name: 'Analia Torres',
    email: 'torres.analia@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 10298,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:56:38',
      updated_at: '2021-03-18 09:56:38',
    },
  },
  {
    id: 9282,
    name: 'Cecilia Alejandra Arg\u00fcello Sotomayor',
    email: 'cecydelmar@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 9282,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:56:59',
      updated_at: '2021-03-18 09:56:59',
    },
  },
  {
    id: 8599,
    name: 'Diego Javier Sansone',
    email: 'diego@ideatranslations.com',
    pivot: {
      activity_id: 239,
      user_id: 8599,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:57:31',
      updated_at: '2021-03-18 09:57:31',
    },
  },
  {
    id: 10248,
    name: 'Laura',
    email: 'laurabeatrizruz@yahoo.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 10248,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:58:10',
      updated_at: '2021-03-18 09:58:10',
    },
  },
  {
    id: 8919,
    name: 'Jaime Ximenes',
    email: 'jaimeximenes@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8919,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 09:59:23',
      updated_at: '2021-03-18 09:59:23',
    },
  },
  {
    id: 9991,
    name: 'Mariana Leibinstein',
    email: 'mleibinstein@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 9991,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:00:03',
      updated_at: '2021-03-18 10:00:03',
    },
  },
  {
    id: 9767,
    name: 'Natalia Vanesa Jara',
    email: 'Vanessa_jara20@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 9767,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:02:12',
      updated_at: '2021-03-18 10:02:12',
    },
  },
  {
    id: 8898,
    name: 'Roxana Bertolasi',
    email: 'rbertolasi@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 8898,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:03:48',
      updated_at: '2021-03-18 10:03:48',
    },
  },
  {
    id: 8481,
    name: 'Guillermo Ra\u00fal Borda',
    email: 'gborda@escuelalogos.com',
    pivot: {
      activity_id: 239,
      user_id: 8481,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:17:19',
      updated_at: '2021-03-18 10:17:19',
    },
  },
  {
    id: 8481,
    name: 'Guillermo Ra\u00fal Borda',
    email: 'gborda@escuelalogos.com',
    pivot: {
      activity_id: 239,
      user_id: 8481,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:17:21',
      updated_at: '2021-03-18 10:17:21',
    },
  },
  {
    id: 10270,
    name: 'Diego',
    email: 'diegospereira@outlook.com',
    pivot: {
      activity_id: 239,
      user_id: 10270,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:18:11',
      updated_at: '2021-03-18 10:18:11',
    },
  },
  {
    id: 11058,
    name: 'Mar\u00eda Rosanna Molinos',
    email: 'xmrosannamolinos@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11058,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:27:05',
      updated_at: '2021-03-18 10:27:05',
    },
  },
  {
    id: 11057,
    name: 'Micaela Colombatti',
    email: 'xmicaela.colombatti@aero.tur.ar',
    pivot: {
      activity_id: 239,
      user_id: 11057,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03\r\n',
      created_at: '2021-03-18 10:27:27',
      updated_at: '2021-03-18 10:27:27',
    },
  },
  {
    id: 11059,
    name: 'Maria Lorena Santi',
    email: 'xlorenasanti74@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11059,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 10:34:54',
      updated_at: '2021-03-18 10:34:54',
    },
  },
  {
    id: 11085,
    name: 'Walter Levatino',
    email: 'xlevatinos@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11085,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 12:10:26',
      updated_at: '2021-03-18 12:10:26',
    },
  },
  {
    id: 11084,
    name: 'Jorge Martinez',
    email: 'x\u00a0jhmartinez44@yahoo.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 11084,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 12:10:50',
      updated_at: '2021-03-18 12:10:50',
    },
  },
  {
    id: 11061,
    name: 'Alejandra Molina',
    email: 'xlic.alejandramolina@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11061,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:33:03',
      updated_at: '2021-03-18 14:33:03',
    },
  },
  {
    id: 11060,
    name: 'Romina Rodr\u00edguez',
    email: 'xromina1996.rr@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11060,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:34:04',
      updated_at: '2021-03-18 14:34:04',
    },
  },
  {
    id: 11062,
    name: 'Ester Suarez',
    email: 'xevsuarez@yahoo.com.ar',
    pivot: {
      activity_id: 239,
      user_id: 11062,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:34:39',
      updated_at: '2021-03-18 14:34:39',
    },
  },
  {
    id: 11063,
    name: 'Ariana Villena',
    email: 'xrrhh.conectando@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11063,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:35:01',
      updated_at: '2021-03-18 14:35:01',
    },
  },
  {
    id: 11064,
    name: 'Leandro Gonz\u00e1lez Barbero',
    email: 'xLeandrogonzalezbarbero@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11064,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:35:28',
      updated_at: '2021-03-18 14:35:28',
    },
  },
  {
    id: 11065,
    name: 'Luc\u00eda Rivera Zanotti',
    email: 'xLuciariverazanotti@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11065,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:36:10',
      updated_at: '2021-03-18 14:36:10',
    },
  },
  {
    id: 11066,
    name: 'Alberto Carmona',
    email: 'xalbert.cb@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11066,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:36:43',
      updated_at: '2021-03-18 14:36:43',
    },
  },
  {
    id: 11067,
    name: '\u00c9rica Urdininea',
    email: 'xerica.urdininea7@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11067,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:37:28',
      updated_at: '2021-03-18 14:37:28',
    },
  },
  {
    id: 11068,
    name: 'Melisa Souto',
    email: 'xsoutomelisa@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11068,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:37:53',
      updated_at: '2021-03-18 14:37:53',
    },
  },
  {
    id: 11069,
    name: 'Natalia Quiroz',
    email: 'xquiroznataliav@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11069,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:38:57',
      updated_at: '2021-03-18 14:38:57',
    },
  },
  {
    id: 11070,
    name: 'Constanza P\u00e9rez',
    email: 'xconstanzafperez@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11070,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:39:25',
      updated_at: '2021-03-18 14:39:25',
    },
  },
  {
    id: 11071,
    name: 'Viviana Pielvitori',
    email: 'xviviana.benezeth@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11071,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:39:50',
      updated_at: '2021-03-18 14:39:50',
    },
  },
  {
    id: 11072,
    name: 'Sonia Paula Osinski',
    email: 'xsoniosinski@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11072,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:40:16',
      updated_at: '2021-03-18 14:40:16',
    },
  },
  {
    id: 11073,
    name: 'Eduardo Ortega',
    email: 'xeduardo.ortega@bue.edu.ar',
    pivot: {
      activity_id: 239,
      user_id: 11073,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:40:38',
      updated_at: '2021-03-18 14:40:38',
    },
  },
  {
    id: 11074,
    name: 'Karen Echaz\u00fa',
    email: 'xKaren.echazu@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11074,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:41:07',
      updated_at: '2021-03-18 14:41:07',
    },
  },
  {
    id: 11075,
    name: 'Nahuel C\u00e1ceres',
    email: 'xmnahuelcaceres@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11075,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:41:24',
      updated_at: '2021-03-18 14:41:24',
    },
  },
  {
    id: 11076,
    name: 'Valeria Follonier',
    email: 'xvfollonier1207@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11076,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:41:44',
      updated_at: '2021-03-18 14:41:44',
    },
  },
  {
    id: 11077,
    name: 'Carlos Alberto Paredes',
    email: 'xbetoparedes@live.com',
    pivot: {
      activity_id: 239,
      user_id: 11077,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:42:02',
      updated_at: '2021-03-18 14:42:02',
    },
  },
  {
    id: 11078,
    name: 'Elizabeth Surita',
    email: 'xelizabethsm_@hotmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11078,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:42:35',
      updated_at: '2021-03-18 14:42:35',
    },
  },
  {
    id: 11079,
    name: 'Mara Andrea Mollo',
    email: 'xmollomara@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11079,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:42:54',
      updated_at: '2021-03-18 14:42:54',
    },
  },
  {
    id: 11081,
    name: 'Ruben Calderon',
    email: 'xruben.calderon@bue.edu.ar',
    pivot: {
      activity_id: 239,
      user_id: 11081,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:43:20',
      updated_at: '2021-03-18 14:43:20',
    },
  },
  {
    id: 11082,
    name: 'Karla Velarde',
    email: 'xVelardekarla.29@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11082,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:43:39',
      updated_at: '2021-03-18 14:43:39',
    },
  },
  {
    id: 11083,
    name: 'Ana In\u00e9s Ruffolo',
    email: 'xanaruffolo@gmail.com',
    pivot: {
      activity_id: 239,
      user_id: 11083,
      status: 2,
      notes: '',
      postulation_reason: 'manual ML 18/03',
      created_at: '2021-03-18 14:44:08',
      updated_at: '2021-03-18 14:44:08',
    },
  },
];

console.log(tienenMismaLongitud('javascript', 'java')); // false
console.log(tienenMismaLongitud('manzana', 'cerveza')); // true
