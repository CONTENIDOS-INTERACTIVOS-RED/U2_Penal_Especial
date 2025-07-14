export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Delitos contra el patrimonio económico',
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
        titulo: 'Afectaciones directas al patrimonio: el hurto y la estafa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Hurto simple y calificado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estafa',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formas indirectas de afectación: fraude, abuso y usurpación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fraude mediante cheque',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Abuso de confianza',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Usurpación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Extorsión y daño en bien ajeno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Extorsión',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Daño en bien ajeno',
            hash: 't_3_2',
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
        'Gutiérrez Francés, M. L. (2015). Fraude informático y estafa. Ministerio de Justicia de España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/52457?page=1',
    },
    {
      referencia:
        'Sanz, C. E. (2006). Otra vez los clasificados truchos: fashion time no se cansa de estafar. Tribuna de periodistas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/15674',
    },
    {
      referencia:
        'Agudo Fernández, E. & Jaén Vallejo, M. (2018). Derecho penal aplicado: parte especial. Dykinson.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58998?page=28',
    },
    {
      referencia:
        'Gadea Soler, E. (2007). Los títulos - valor: letra de cambio, cheque y pagaré. (2ª ed.). Dykinson.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/35692?page=106',
    },
    {
      referencia:
        'Buen, N. D. (2000). Derechos del trabajador de confianza. Instituto de Investigaciones Jurídicas - UNAM.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/titulos/72289',
    },
    {
      referencia:
        'Calero-Alarc, R. S., Carvajal Cáceres, N. J., Cedeño-Guanga, D. G., & Rojas-Cárdenas, J. A. (2022). La usurpación como delito de acción privada de un bien inmueble. CIENCIAMATRIA, 8(4), 1279-1289.',
      link:
        'https://www.researchgate.net/publication/369188011_La_usurpacion_como_delito_de_accion_privada_de_un_bien_inmueble',
    },
    {
      referencia:
        'Acero Soto, S. M. & Pérez Salazar, B. (2008). Los delitos contra el patrimonio en Colombia: Comentarios sobre su comportamiento en décadas recientes. Revista Criminalidad, 50(1), 59-72.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S1794-31082008000100004&script=sci_arttext',
    },
    {
      referencia:
        'Rincón Ortiz, O. I. (2019). ANÁLISIS DEL TIPO PENAL DE EXTORSIÓN. ARTÍCULO 244 DEL CÓDIGO PENAL COLOMBIANO (Tesis para optar por el título de Magíster en Derecho Penal).',
      link:
        'https://repository.eafit.edu.co/server/api/core/bitstreams/e67241da-61e8-48bb-902b-07f14be53d14/content',
    },
  ],
  glosario: [
    {
      termino: 'Abuso de confianza',
      significado:
        'Apropiación de un bien que fue entregado lícitamente al autor, en razón de confianza previa.',
    },
    {
      termino: 'Afectación patrimonial',
      significado:
        'Daño o menoscabo en los bienes económicos de una persona, sea por desapoderamiento o engaño.',
    },
    {
      termino: 'Apoderamiento',
      significado:
        'Toma de un bien mueble ajeno sin consentimiento del propietario, con intención de apropiación.',
    },
    {
      termino: 'Daño en bien ajeno',
      significado:
        'Destrucción, deterioro o inutilización de un bien de otro, sin ánimo de lucro.',
    },
    {
      termino: 'Desapoderamiento',
      significado:
        'Acción de privar ilegítimamente a alguien de un bien de su propiedad.',
    },
    {
      termino: 'Estafa',
      significado:
        'Obtención de un beneficio económico mediante engaño que induce a la víctima a entregar un bien.',
    },
    {
      termino: 'Extorsión',
      significado:
        'Constreñimiento a una persona, mediante amenaza, para obtener provecho ilícito.',
    },
    {
      termino: 'Fraude mediante cheque',
      significado:
        'Empleo de cheques sin fondos o sin autorización válida para obtener ilícitamente un beneficio.',
    },
    {
      termino: 'Hurto',
      significado:
        'Apoderamiento de un bien ajeno mueble sin violencia ni engaño y con ánimo de lucro.',
    },
    {
      termino: 'Patrimonio económico',
      significado:
        'Conjunto de bienes, derechos y obligaciones de una persona, valorables en términos económicos.',
    },
    {
      termino: 'Posesión',
      significado:
        'Tenencia de un bien con intención de usarlo o explotarlo, sin necesidad de ser propietario legal.',
    },
    {
      termino: 'Usurpación',
      significado:
        'Ocupación ilegítima de un bien inmueble ajeno, con intención de alterar su posesión.',
    },
    {
      termino: 'Violación de confianza',
      significado:
        'Quebrantamiento del deber de fidelidad o custodia sobre bienes o derechos ajenos.',
    },
  ],
}
