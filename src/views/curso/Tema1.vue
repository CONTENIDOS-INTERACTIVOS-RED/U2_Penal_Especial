<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El homicidio y otras formas de afectación directa a la vida'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La vida es el bien jurídico tutelado por excelencia, sobre el cual se estructuran todos los demás derechos, razón por la cual el Derecho Penal colombiano establece una especial protección a este bien jurídico, consagrando severas sanciones para quienes incurren en conductas que atentan directamente contra ella. En esta línea, el Código Penal Ley 599 del 2000, tipifica diferentes formas de afectación a la vida humana, reconociendo que no todas las conductas homicidas tienen la misma naturaleza, intención ni gravedad y, por tanto, merecen un tratamiento punitivo diferenciado (Díaz-Aranda, 2005).
    
    p.mb-5 El homicidio, como figura penal básica, consiste en causar la muerte de otra persona. Esta conducta, en principio, puede clasificarse de tres formas: dolosa, culposa y preterintencional. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Homicidio doloso
              p El homicidio doloso Artículo 103 CP, ocurre cuando el autor actúa con intención, es decir, con la voluntad deliberada de causar la muerte de la víctima. Por ejemplo, en el caso de un ajuste de cuentas, donde el autor persigue y dispara contra la víctima para quitarle la vida, se configura claramente, un homicidio doloso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Homicidio culposo
              p el homicidio culposo Artículo 109 CP, se presenta cuando la muerte se causa por negligencia, impericia, imprudencia o inobservancia de normas, sin que exista la intención directa de matar. Un caso frecuente es el del conductor que, en exceso de velocidad y bajo los efectos del alcohol, atropella y mata a un peatón. Aunque no quería matar, su conducta imprudente fue la causa del deceso, lo que configura responsabilidad penal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Homicidio preterintencional
              p El homicidio preterintencional Artículo 104 CP, ocupa un lugar intermedio. El autor tiene la intención de causar un daño menor, como una lesión, pero el resultado termina siendo mucho más grave, como la muerte. Por ejemplo, si alguien golpea a otra persona con el ánimo de herirla, pero la golpea en un lugar letal y esta muere, estaríamos ante un homicidio preterintencional. La pena es menos severa, que en el doloso.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.h-100(data-aos="fade-left")
          p.mb-0 A estas formas básicas, se suman otros delitos que implican una agresión directa a la vida, pero que el legislador ha considerado especialmente graves por el contexto o las circunstancias que los rodean. Tal es el caso del feminicidio Artículo 104A, que sanciona con mayor severidad el asesinato de una mujer por razones de género; el genocidio Artículo 101, que castiga la eliminación sistemática de miembros de un grupo nacional, étnico, racial, religioso o político; y la desaparición forzada Artículo 165, que consiste en privar de la libertad a una persona con el propósito de ocultarla y negar información sobre su paradero, lo cual generalmente conlleva la afectación o supresión definitiva de la vida (Díaz-Aranda, 2005).
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/6.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p(data-aos="fade-up") Estudiar estas modalidades no solo permite identificar los elementos típicos de cada conducta, sino también analizar las motivaciones, estructuras de responsabilidad penal y el enfoque de derechos humanos, que exige el respeto a la vida.
            p.mb-0 A través del análisis de estas figuras, se fortalece la comprensión del rol del Derecho Penal, como herramienta de protección de los bienes jurídicos más valiosos, en especial cuando se trata de conductas irreversibles como la privación de la existencia humana.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Homicidio doloso, culposo y preterintencional

    p.mb-5 El homicidio, como figura central del Derecho Penal, es la expresión máxima del atentado contra el bien jurídico de la vida humana. El legislador colombiano ha dispuesto una clasificación dogmática que permite diferenciar los supuestos en los que la muerte es causada con intención, sin intención, pero con descuido, o de manera intermedia, es decir, cuando se quiso causar un daño menor y el resultado fue más grave. Así, el homicidio doloso, el homicidio culposo y el homicidio preterintencional, constituyen tres formas de manifestación de una conducta que produce la muerte de una persona, y cuya tipificación está contenida en los Artículo s 103, 109 y 105 del Código Penal colombiano, respectivamente.


    AcordionA(tipo="b").mb-5
      .div(titulo="Homicidio doloso")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')
          .col-lg-9
            p En el homicidio doloso, el autor actúa con la clara voluntad y conciencia de provocar la muerte. El dolo se manifiesta tanto de manera directa como eventual. El dolo directo implica que el sujeto obra con la finalidad específica de quitarle la vida a otra persona, mientras que el dolo eventual se presenta cuando, sin buscar expresamente el resultado, el sujeto prevé la posibilidad de causar la muerte y, aun así, continúa con la conducta. En ambos casos, existe un conocimiento previo del riesgo y una aceptación consciente de este. 
            p Un ejemplo de dolo directo lo encontramos en un sicario que, tras recibir un pago, dispara varias veces contra su víctima en un sitio determinado. En cambio, en el dolo eventual, podría pensarse en una persona que arroja un objeto pesado desde un octavo piso a una calle transitada. Aunque no quiere matar a nadie en particular, es consciente de que su conducta puede ocasionar la muerte, y aun así persiste en su actuar. La jurisprudencia de la Corte Suprema de Justicia, ha reiterado que, en el dolo eventual, el juicio de imputación se basa en la previsibilidad del resultado y la indiferencia del autor frente a su ocurrencia, aspecto determinante para la calificación jurídica del hecho.


      .div(titulo="Homicidio culposo")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/8.png', alt='')
          .col-lg-9
            p El homicidio culposo contempla aquellos casos en que el resultado de muerte no fue querido ni previsto por el autor, pero se produce debido a una conducta imprudente, negligente, imperita o contraria a los reglamentos. En estos eventos, la culpa se configura por la infracción a un deber, objetivo de cuidado, que cualquier persona prudente habría observado en una situación similar. Este tipo penal responde a un modelo normativo que impone responsabilidad a quienes, con su actuar descuidado, generan consecuencias previsibles y evitables. 
            p Un caso típico es el de un conductor que, usando el teléfono celular mientras manejaba, pierde el control del vehículo y atropelló a un peatón, causándole la muerte. Aunque no tenía intención de matar, su conducta fue imprudente y vulnera normas básicas de conducción, generando un riesgo no permitido. En tales casos, el juez debe determinar si existía una conducta alternativa adecuada que habría evitado el resultado, lo cual se conoce como juicio de evitabilidad. Además, es relevante que exista un nexo causal entre la omisión del deber de cuidado y la muerte, pues no toda conducta descuidada implica responsabilidad penal, si el resultado no le es objetivamente imputable al autor (Román Pérez & Sotomayor Peterson, 2010).


      .div(titulo="Homicidio preterintencional")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/9.png', alt='')
          .col-lg-9
            p Una forma intermedia entre el dolo y la culpa, es el homicidio preterintencional, que se configura cuando el autor actúa con dolo inicial, es decir, con intención de causar una lesión, pero el resultado termina siendo la muerte de la víctima. Aquí, la conducta inicial sí es dolosa, pero el desenlace excede lo buscado, sin que haya intención de matar. Este tipo penal refleja un mayor grado de reprochabilidad que el homicidio culposo, pero menor que el doloso. Para que exista imputación, es necesario que el resultado más grave, la muerte pueda ser atribuido objetivamente al autor, es decir, que sea consecuencia previsible del actuar violento inicial. 
            p Un ejemplo recurrente es el de una persona que, durante una pelea, golpea fuertemente a otra con el propósito de lesionarla, pero esta última cae y sufre un traumatismo craneoencefálico que le causa la muerte. Aunque el atacante no quería matar, debe responder por homicidio preterintencional porque asumió el riesgo inicial con su actuar agresivo y violento. La doctrina penal considera que esta figura permite valorar el exceso de la conducta y atribuir consecuencias más graves, sin necesidad de demostrar un dolo directo, respecto del resultado final.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-7.p-4.h-100.text-white(data-aos="fade-left")
          p.mb-0 Desde una perspectiva político criminal, la existencia de estas tres formas de homicidio permite al sistema penal ofrecer una respuesta diferenciada y proporcional, adecuada a las circunstancias subjetivas del autor y a las condiciones objetivas del hecho. Así, se evita tratar igual a quien mata con intención deliberada, a quien lo hace por descuido y a quien causa un resultado no querido por exceso en su conducta violenta. El principio de culpabilidad, previsto en el Artículo 12 del Código Penal, se manifiesta aquí como una garantía del ciudadano frente al poder punitivo del Estado, dado que impide sancionar más allá de lo que efectivamente se pueda atribuir, con base en la voluntad o el descuido demostrados (Román Pérez & Sotomayor Peterson, 2010). 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Feminicidio 

    p.mb-5 El estudio del feminicidio es fundamental para comprender las formas más extremas de violencia ejercida contra las mujeres en razón de su género, así como los marcos normativos que lo regulan y sancionan.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Feminicidio 
            p.mb-4(data-aos="fade-right") En el PDF <b>Feminicidio</b>, se analiza esta figura penal autónoma, destacando su tipificación en el ordenamiento jurídico colombiano, los elementos que la diferencian del homicidio común, y las circunstancias agravantes que deben considerarse en su investigación y juzgamiento. A través de ejemplos ilustrativos, referencias jurisprudenciales y un enfoque con perspectiva de género, se busca fortalecer la comprensión crítica y jurídica de este delito, promoviendo una actuación profesional que contribuya a la erradicación de la violencia contra las mujeres.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Feminicidio.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Genocidio 

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El genocidio representa una de las más graves y repudiables violaciones a los derechos humanos en el ámbito nacional e internacional. Este delito no solo atenta contra la vida y la integridad de las personas, sino que busca eliminar de forma sistemática, a grupos humanos enteros por razones discriminatorias, ligadas a su identidad colectiva. 
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto colombiano, el delito de genocidio está regulado en el Artículo 101 del Código Penal, y su configuración responde a los compromisos internacionales asumidos por el Estado, a través de tratados como la Convención para la Prevención y la Sanción del Delito de Genocidio de 1948 y el Estatuto de Roma de la Corte Penal Internacional, ratificado por Colombia mediante la Ley 742 del 2002.
        p Conozcamos más sobre esta temática:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              p El tipo penal de genocidio establece que incurre en este delito quien, con el propósito de destruir total o parcialmente un grupo nacional, étnico, racial o religioso, realice cualquiera de los siguientes actos: matar a sus miembros, causarles lesiones graves físicas o mentales, someterlos deliberadamente a condiciones de existencia que lleven a su destrucción física, imponer medidas destinadas a impedir nacimientos dentro del grupo, o trasladar por la fuerza a niños del grupo a otro grupo. Cada uno de estos actos configura una modalidad típica del genocidio, y su común denominador es la intención de exterminar a un grupo humano, por razón de su pertenencia identitaria.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              p Una de las claves para entender este delito es el elemento subjetivo especial, conocido como dolo genocida. No basta con que se cometan actos violentos o inhumanos contra miembros de un grupo protegido; es necesario probar que el autor actuó con la intención específica de destruir ese grupo, ya sea en su totalidad o en parte. Esta intención debe ser demostrada a partir de las circunstancias del hecho, las expresiones del autor, los antecedentes del conflicto o el patrón sistemático de violencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              p Por ejemplo, si un grupo armado ilegal asesina sistemáticamente a los miembros de una comunidad indígena con el propósito de apropiarse de su territorio y erradicar su cultura, y se comprueba que la motivación principal era eliminar la identidad colectiva del grupo étnico, estaríamos frente a un caso de genocidio. Lo mismo ocurriría si una autoridad estatal ordena el traslado forzoso de niños pertenecientes a una comunidad religiosa específica, con el fin de reeducarlos bajo otra doctrina, borrando sus raíces culturales y religiosas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7
              p El genocidio no solo puede manifestarse en asesinatos masivos, sino también en prácticas como la esterilización forzada de mujeres de un grupo étnico, la prohibición de uso del idioma o de las costumbres tradicionales, o el sometimiento a condiciones de vida insalubres y degradantes que provoquen la destrucción lenta del grupo. Estas acciones, cuando están dirigidas a eliminar la existencia o la continuidad de una comunidad protegida, encajan dentro del alcance del Artículo 101.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7
              p El genocidio es considerado además un crimen internacional y, por tanto, imprescriptible. Esto significa que puede ser investigado y sancionado en cualquier momento, sin que el paso del tiempo extinga la acción penal. Además, su juzgamiento puede ser asumido por tribunales internacionales como la Corte Penal Internacional, en aquellos casos donde el Estado no actúe con la debida diligencia o cuando se trate de crímenes de competencia universal.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La Corte Constitucional colombiana, en sentencias como la C-578 del 2002, ha enfatizado que la tipificación del genocidio en la legislación nacional no solo responde a obligaciones internacionales, sino también a la necesidad de proteger el pluralismo étnico y cultural reconocido en el Artículo 7 de la Constitución Política. En este sentido, el genocidio atenta contra los pilares fundamentales del Estado Social de Derecho, como la dignidad humana, la igualdad, la diversidad cultural y la convivencia pacífica.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por su gravedad, el genocidio tiene prevista una de las penas más altas en el ordenamiento penal colombiano. Prisión entre 480 y 600 meses, además de inhabilitación para el ejercicio de derechos y funciones públicas por hasta 20 años, según las normas de agravación establecidas en el Código Penal. Esta sanción refleja la dimensión del daño causado y la necesidad de reparar integralmente a las víctimas y a las comunidades afectadas.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.svg", data-aos="zoom-in")
      .col-lg-9
        .bg-color-6.bordes.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Finalmente, el estudio del genocidio requiere una perspectiva crítica que permita identificar no solo su ocurrencia en escenarios de guerra o dictaduras, sino también su manifestación en contextos internos de violencia estructural, discriminación histórica o persecución sistemática de comunidades marginadas. En Colombia, algunos sectores de la doctrina penal han debatido sobre si ciertos crímenes cometidos durante el conflicto armado interno, podrían encajar dentro del tipo penal de genocidio, especialmente cuando han afectado a pueblos indígenas, comunidades afrodescendientes o sectores políticos perseguidos.
        p(data-aos="fade-left") En conclusión, el genocidio es un crimen que pone en riesgo la existencia misma de comunidades humanas y que exige una respuesta contundente del Derecho Penal nacional e internacional. 
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Desaparición forzada 
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        p.mb-5 La desaparición forzada de personas, es una de las conductas más graves y complejas en el Derecho Penal contemporáneo, pues atenta simultáneamente contra varios derechos fundamentales:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La vida.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La libertad.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La integridad personal.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/25.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center El acceso a la justicia. 
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Se trata de una violación múltiple y continuada de derechos humanos que genera sufrimiento prolongado tanto a la víctima directa, como a sus familiares y a la sociedad. En Colombia, este delito está tipificado en el Artículo 165 del Código Penal, y su comprensión exige un enfoque garantista y humanitario.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="¿Cuándo se configura?")
            p La desaparición forzada se configura cuando una persona es privada de su libertad, ya sea por agentes del Estado o por particulares que actúan con el consentimiento o la aquiescencia de funcionarios públicos, y se niega información sobre su paradero, con el propósito de sustraerla de la protección de la Ley. La norma penal establece claramente que este delito no se agota con la acción inicial, sino que tiene un carácter permanente, lo que significa que continúa cometiéndose mientras no se conozca la suerte o el destino final de la víctima (López Cárdenas, 2017).
    
          .div(titulo="Elemento característico")
            p Uno de los elementos característicos de la desaparición forzada es la intervención de agentes estatales o la tolerancia activa u omisiva del Estado frente a particulares que ejecutan la conducta. Esto diferencia a la desaparición forzada de otros delitos como el secuestro simple o extorsivo, que pueden realizarse sin relación alguna con el aparato estatal. En el caso de la desaparición forzada, existe un quiebre institucional, pues quienes están llamados a proteger los derechos fundamentales, se convierten en partícipes o cómplices de su violación.
    
          .div(titulo="Ejemplo")
            p Por ejemplo, si una persona es detenida por miembros de la fuerza pública sin orden judicial y luego no se informa su paradero, negándose su retención en cualquier centro oficial, y días después su familia no recibe explicación alguna, estaríamos frente a un caso típico de desaparición forzada. Asimismo, si un grupo armado ilegal captura a alguien en zona militarizada y las autoridades, pese a conocer el hecho, no intervienen ni reportan lo sucedido, podrían configurarse condiciones de tolerancia estatal, que permiten imputar el delito conforme al Artículo 165.
    
          .div(titulo="Ocultación sistemática de información")
            p Otro aspecto fundamental de este delito es la ocultación sistemática de información. No basta con la privación de la libertad, sino que debe haber una negación activa o pasiva del reconocimiento de la detención, lo cual impide que los familiares accedan a instancias judiciales, interpongan acciones de hábeas <em>corpus</em> o reciban atención institucional. La finalidad es despojar al sujeto de su estatus legal, convertirlo en invisible y dejarlo sin garantías jurídicas, lo que configura una forma de tortura prolongada tanto para la víctima como para sus seres queridos.
    
    p.mb-5 En este contexto, la desaparición forzada también constituye un delito de ejecución permanente, es decir, el delito continúa mientras no se esclarezca el destino final de la persona desaparecida. Esta característica tiene implicaciones importantes en términos procesales. Permite que la acción penal no prescriba mientras persista la desaparición, obliga al Estado a investigar de forma continua y abre la puerta a la intervención de mecanismos internacionales, cuando no se garantiza una respuesta efectiva a nivel interno.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El marco jurídico colombiano sobre este delito, ha sido reforzado por sentencias de la Corte Constitucional, como la Sentencia C-317 del 2002, en la que se enfatiza que la desaparición forzada constituye una violación sistemática de los derechos humanos, incompatible con el Estado Social de Derecho. Asimismo, la Ley 589 del 2000, que tipifica y desarrolla el delito en concordancia con la Convención Interamericana sobre Desaparición Forzada de Personas, establece obligaciones estatales en materia de prevención, sanción y reparación integral.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La Corte Interamericana de Derechos Humanos también ha emitido pronunciamientos importantes en relación con Colombia, declarando la responsabilidad internacional del Estado por casos emblemáticos como el de los desaparecidos del Palacio de Justicia. En esas decisiones, se ha reiterado que el derecho a la verdad, el derecho a la justicia y el derecho a la reparación, son inherentes a las víctimas de desaparición forzada y a sus familias (López Cárdenas, 2017).
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                p.mb-0 El Sistema Integral de Verdad, Justicia, Reparación y No Repetición, establecido tras el Acuerdo Final de Paz del 2016, incluye la desaparición forzada como uno de los crímenes más graves a ser esclarecidos por la Comisión para el Esclarecimiento de la Verdad y la Jurisdicción Especial para la Paz, JEP. La persistencia de miles de casos sin resolver en Colombia, hace de este delito una herida abierta en la memoria colectiva del país.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/29.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") En términos penales, el Artículo 165 establece una pena de doscientos cuarenta 340 a quinientos 540 meses de prisión, más inhabilitación para el ejercicio de derechos y funciones públicas por el mismo término, lo que demuestra la gravedad del delito en la escala del ordenamiento penal. Estas sanciones pueden agravarse si la víctima es menor de edad, mujer embarazada, persona en situación de discapacidad o miembro de grupo vulnerable, conforme a lo dispuesto en el Artículo 166 del Código Penal.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la desaparición forzada es un delito de alta complejidad jurídica y profunda carga humanitaria. Su análisis requiere considerar no solo los elementos típicos del tipo penal, sino también los contextos históricos, institucionales y sociales que permiten su ocurrencia y perpetuación. 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/6516?page=5 " target="_blank" rel="noopener noreferrer") Camara, M. (2006). Homicidios en América del Sur: ¿Los pobres son peligrosos? Red Revista de Economía Institucional. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/33312" target="_blank" rel="noopener noreferrer") Díaz Pérez, N. C. (2010). Discusión jurisprudencial sobre el dolo eventual y la culpa con representación en delitos de homicidio ocasionados en accidentes de tránsito. Logos Ciencia y Tecnología (2ª ed.). D - Dirección Nacional de Escuelas.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/28017?page=6 " target="_blank" rel="noopener noreferrer") Anaya de Pauta, B. S. (2012). El feminicidio: un atentado contra la dignidad de la mujer. Revista de Investigación Jurídica. IUS, 02(3). 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=JTMEbUai9J0 " target="_blank" rel="noopener noreferrer") Sprouts Español. (2024). Las 10 Etapas del Genocidio [video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=96IlcD8zz0E" target="_blank" rel="noopener noreferrer") ISRAEL BANGUERA. (2022). Homicidio preterintencional [video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rTU_8c3Gmq8 " target="_blank" rel="noopener noreferrer") Revista La 39 (Revista Virtual La 39). (2015). Capítulo 1: ¿Qué es el feminicidio? [video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3Wj8M-r-DzA " target="_blank" rel="noopener noreferrer") Augusto Sánchez: Sociología Jurídica. (2025). #246 La desaparición forzada en la Corte Interamericana de derechos humanos [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
