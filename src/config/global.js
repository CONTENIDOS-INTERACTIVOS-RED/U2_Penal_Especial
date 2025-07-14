export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Delitos contra la vida y el patrimonio económico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El homicidio y otras formas de afectación directa a la vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Homicidio doloso, culposo y preterintencional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Feminicidio ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Genocidio ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Desaparición forzada ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Lesiones, aborto, manipulación genética e inducción al suicidio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Lesiones personales ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aborto ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Manipulación genética ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Inducción o ayuda al suicidio ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Delitos contra personas y bienes protegidos por el Derecho Internacional Humanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Personas protegidas por el DIH',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bienes y misiones protegidos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Afectaciones directas al patrimonio: el hurto y la estafa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Hurto simple y calificado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estafa',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Formas indirectas de afectación: fraude, abuso y usurpación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Fraude mediante cheque',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Abuso de confianza',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Usurpación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Extorsión y daño en bien ajeno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Extorsión',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Daño en bien ajeno',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Díaz-Aranda, E. (2005). Las ciencias penales y el homicidio del Cardenal Posadas. Instituto de Investigaciones Jurídicas - UNAM.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/74465?page=55',
    },
    {
      referencia:
        'Román Pérez, R. & Sotomayor Peterson, Z. (2010). Génesis del homicida. Plaza y Valdés.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/38901?page=88',
    },
    {
      referencia:
        'Monárrez Fragoso, J. E. (2006). La cultura del feminicidio en ciudad Juárez, 1993-1999. Red Frontera Norte.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/8123?page=1',
    },
    {
      referencia:
        'López Cárdenas, C. M. (2017). La desaparición forzada de personas en el derecho internacional de los derechos humanos: estudio de su evolución, concepto y reparación a las víctimas. Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69775',
    },
    {
      referencia:
        'Luzón Cuesta, J. M. (2011). Compendio de Derecho Penal: parte especial (ed18). Dykinson.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63118?page=48',
    },
    {
      referencia: 'Navas, A. (2014). El aborto, a debate. EUNSA.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47160',
    },
    {
      referencia:
        'Varios, A. (2009). Del aborto y la manipulación genética, perspectiva en Derecho Penal. El Cid Editor | apuntes.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/28747?page=6',
    },
    {
      referencia:
        'Adera, L. (2009). Manipulación genética. El Cid Editor | apuntes. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/28391 ',
    },
    {
      referencia:
        'Olasolo Alonso, H. (2015). Introducción al derecho internacional penal. Editorial Universidad del Rosario.  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69690?page=182',
    },
    {
      referencia:
        'Camps Mirabet, N. (2005). El Derecho internacional ante las migraciones forzadas: refugiados, desplazados y otros migrantes involuntarios. Edicions de la Universitat de Lleida.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/54509?page=16',
    },
    {
      referencia:
        'Contreras Ortiz, J. F. (2009). El derecho internacional humanitario: principio de una educación para la paz. Educación y Educadores, 9(1).  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5867',
    },
  ],
  glosario: [
    {
      termino: 'Aborto',
      significado:
        'interrupción voluntaria del embarazo. Penalizado salvo en los casos autorizados por la Corte Constitucional.',
    },
    {
      termino: 'Bienes protegidos por el DIH',
      significado:
        'instalaciones culturales, religiosas, médicas o humanitarias, que no pueden ser atacadas durante conflictos armados.',
    },
    {
      termino: 'Desaparición forzada',
      significado:
        'privación de libertad seguida de la negación del paradero de la persona, con la intervención o aquiescencia del Estado.',
    },
    {
      termino: 'Emblemas protectores',
      significado:
        'símbolos como la Cruz Roja usados para identificar personal o vehículos humanitarios. Su uso indebido está penalizado.',
    },
    {
      termino: 'Feminicidio',
      significado:
        'delito que castiga la muerte de una mujer por razones de género, generalmente en contextos de discriminación o violencia sistemática contra la mujer.',
    },
    {
      termino: 'Genocidio',
      significado:
        'acto cometido con la intención de destruir total o parcialmente a un grupo étnico, racial, nacional o religioso.',
    },
    {
      termino: 'Homicidio doloso',
      significado:
        'conducta penal en la que el autor actúa con la intención deliberada de causar la muerte a otra persona.',
    },
    {
      termino: 'Homicidio culposo',
      significado:
        'es la muerte de una persona causada por negligencia, impericia o imprudencia, sin intención de matar.',
    },
    {
      termino: 'Homicidio preterintencional',
      significado:
        'ocurre cuando el autor desea causar una lesión, pero la víctima muere como resultado no previsto.',
    },
    {
      termino: 'Inducción o ayuda al suicidio',
      significado:
        'consiste en incitar o facilitar a otra persona a quitarse la vida, conducta penalizada por poner en riesgo la vida humana.',
    },
    {
      termino: 'Lesiones personales',
      significado:
        'daño causado a la salud o integridad física de una persona. Se diferencia según la duración de la incapacidad y el daño causado.',
    },
    {
      termino: 'Manipulación genética',
      significado:
        'alteración ilícita del material genético humano con fines distintos a los permitidos por la Ley.',
    },
    {
      termino: 'Personas protegidas por el DIH',
      significado:
        'civiles, prisioneros de guerra, heridos, enfermos y personal médico o humanitario que deben ser preservados en conflictos armados.',
    },
  ],
}
