<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Lesiones, aborto, manipulación genética e inducción al suicidio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Derecho Penal no solo protege la vida en su existencia biológica, sino también su desarrollo íntegro, su autonomía y la dignidad inherente al ser humano. Existen conductas que, sin llegar a causar la muerte, afectan de manera grave otros aspectos de la persona, como su integridad física, su capacidad reproductiva, su autodeterminación genética o su equilibrio emocional.
        p(data-aos="fade-left") Este tema aborda precisamente esas formas de agresión que, aunque no siempre resultan letales, representan atentados profundos contra bienes jurídicos fundamentales reconocidos en la Constitución Política de Colombia y el Código Penal.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Lesiones personales")
            p En primer lugar, se encuentra el delito de lesiones personales, previsto en el Artículo 111 del Código Penal. A través de este tipo penal, el legislador busca sancionar todas aquellas conductas que causen daño en el cuerpo o en la salud de otro, con independencia de que la afectación sea temporal o permanente. Aquí no se tutela la vida como tal, sino la integridad física y la salud, entendidas como condiciones necesarias para el pleno ejercicio de los derechos. La norma establece varias modalidades, según la gravedad del daño, el tiempo de incapacidad y las consecuencias funcionales o estéticas para la víctima. En su desarrollo, también se contemplan circunstancias agravantes cuando la conducta se comete con sevicia, en relaciones de pareja, contra menores de edad, o utilizando sustancias corrosivas.
    
          .div(titulo="Aborto")
            p Por otro lado, el aborto, regulado en el Artículo 122 y siguientes del Código Penal, constituye un punto de intersección entre el Derecho Penal y los derechos sexuales y reproductivos de la mujer. Tradicionalmente, la interrupción voluntaria del embarazo fue penalizada en casi todas sus formas, salvo en tres circunstancias excepcionales fijadas por la Corte Constitucional en la Sentencia C-355 del 2006. Cuando existe peligro para la vida o salud de la madre, cuando el embarazo es resultado de acceso carnal violento, inseminación artificial o transferencia de óvulo fecundado no consentidas, y cuando existe malformación fetal incompatible con la vida. Sin embargo, la jurisprudencia evolucionó de manera significativa con la Sentencia C-055 del 2022, que despenalizó el aborto hasta la semana 24 de gestación. Esta decisión transformó el enfoque del Derecho Penal en este ámbito, reconociendo el derecho de las mujeres a decidir sobre su cuerpo durante una etapa crítica del embarazo, sin ser criminalizadas por ello. A partir de este fallo, el Estado colombiano asumió un deber de garantía sobre la autonomía reproductiva, exigiendo además la eliminación de barreras institucionales que limiten el acceso a este derecho.
    
          .div(titulo="Manipulación genética")
            p En tercer lugar, el delito de manipulación genética, contemplado en el Artículo 123 del Código Penal, representa una figura penal moderna que responde al desarrollo científico y a los avances en biotecnología. Esta norma busca proteger la integridad biológica de la especie humana, sancionando a quien, mediante intervención en el genoma, realice prácticas que puedan generar alteraciones hereditarias o perjuicios a la descendencia. A diferencia de los delitos comunes contra la vida o la integridad física, este tipo penal opera en un plano más técnico y preventivo, ya que el daño que se sanciona no es necesariamente visible en el presente, sino que puede proyectarse a generaciones futuras. Ejemplos de estas conductas podrían incluir la manipulación no autorizada de embriones con técnicas de edición genética, la creación de seres humanos con rasgos seleccionados por fuera de controles éticos, o la clonación con fines reproductivos en ausencia de regulación legal.
    
          .div(titulo="Inducción o ayuda al suicidio")
            p Finalmente, el Artículo 107 del Código Penal, regula el delito de inducción o ayuda al suicidio. Esta conducta se configura cuando una persona incita a otra a quitarse la vida o le presta asistencia para que lo haga, ya sea suministrándole medios, instrucciones o apoyo moral. A diferencia del homicidio, aquí el autor no ejecuta directamente la acción que causa la muerte, sino que interviene en el proceso de decisión o facilitación de la víctima. Este tipo penal plantea tensiones jurídicas relevantes, especialmente en contextos de enfermedades terminales o sufrimiento extremo, donde la línea entre el delito y los derechos a una muerte digna puede ser difusa. En Colombia, a partir de la Sentencia C-239 de 1997 y otras decisiones de la Corte Constitucional, se ha reconocido el derecho de los pacientes con enfermedades incurables a solicitar la eutanasia bajo condiciones estrictas, lo que implica una diferenciación importante entre la inducción al suicidio y el ejercicio legítimo del derecho a morir con dignidad. Sin embargo, cualquier acto que se realice fuera de los protocolos definidos por el Ministerio de Salud y sin el consentimiento libre e informado de la persona puede dar lugar a responsabilidad penal.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p.mb-0 En conjunto, este grupo de delitos evidencia cómo el Derecho Penal debe adaptarse constantemente, para responder no solo a la defensa de la vida como existencia biológica, sino también al respeto por la dignidad, la salud, la autonomía y la integridad personal. El estudio de estas figuras penales exige comprender tanto los elementos técnicos de cada tipo penal como los contextos sociales, éticos y jurisprudenciales que los rodean. 
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Lesiones personales 
    
    p El delito de lesiones personales, tipificado en el Artículo 111 del Código Penal colombiano, constituye una violación directa al bien jurídico de la integridad física y psíquica del ser humano. A diferencia del homicidio, en donde la bien jurídica vida es extinguida de manera total, en las lesiones personales se vulnera de forma parcial la salud del individuo, afectando su funcionalidad, autonomía o equilibrio emocional.
    p Esta figura penal se configura cuando una persona, mediante una conducta dolosa o culposa, causa daño en la salud corporal o mental de otra (Luzón Cuesta, 2011).
    p.mb-5 Desde la perspectiva jurídica, el delito de lesiones personales exige la concurrencia de varios elementos:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Una conducta activa como golpear, empujar, herir con un objeto, causar quemaduras, mutilar o envenenar. 
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Un resultado lesivo verificable alteración en la salud física o psicológica, un vínculo causal entre la conducta y el resultado, y la existencia de dolo o culpa, dependiendo del tipo subjetivo. 
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3
        p.mb-5 Ahora:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Dolo
                p.mb-0 Se presenta cuando el sujeto actúa con conocimiento y voluntad de causar el daño, como en una pelea o agresión deliberada.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Culpa
                p.mb-0 Se manifiesta cuando la persona actúa sin intención, pero con descuido, imprudencia o violación del deber objetivo de cuidado, como un conductor que atropella a alguien por mirar el celular mientras maneja.

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/10.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up").text-white En Colombia, el análisis de este delito no se agota con la simple constatación de un daño físico, sino que debe extenderse a la evaluación médica, psicológica y social de sus efectos. Por ello, se acude a exámenes de medicina legal, dictámenes periciales, historia clínica de la víctima y entrevistas psicológicas que permitan establecer la gravedad del daño, el tiempo de incapacidad, las secuelas funcionales y la relación con el evento denunciado. Además, se debe considerar el contexto del hecho, la relación entre el agresor y la víctima, la reiteración de actos violentos, y la existencia de amenazas u otros agravantes.
    
    p.mb-5 El Artículo 111 del Código Penal no establece un tipo único de lesión, sino que reconoce la existencia de diferentes grados de afectación. En este sentido, el ordenamiento jurídico distingue entre lesiones personales leves, graves, gravísimas y deformantes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lesiones leves
              p Son aquellas que producen incapacidad médica igual o inferior a treinta días, sin que generen secuelas permanentes. Por ejemplo, una contusión en el brazo que sana en dos semanas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lesiones graves
              p Causan incapacidad por más de treinta días o producen perturbaciones temporales en el funcionamiento del cuerpo, como una fractura en una pierna que impide caminar durante dos meses.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lesiones gravísimas
              p Son las que derivan en pérdida de un órgano, sentido o miembro, en enfermedad incurable, en incapacidad permanente para el trabajo o en una alteración mental irreversible. Un ejemplo claro sería una víctima que queda ciega o paralítica como consecuencia de una golpiza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lesiones deformantes
              p Afectan la apariencia física de manera permanente y visible, especialmente en partes del cuerpo expuestas como la cara, el cuello o las manos. Es el caso de personas agredidas con sustancias químicas, comúnmente conocidas como ataques con ácido, que producen cicatrices profundas, traumas emocionales duraderos y exclusión social.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-5.bordes-1(data-aos="fade-left")
          p.mb-0 Una característica relevante del delito de lesiones personales es su carácter pluriofensivo. No solo lesiona el cuerpo, sino que también atenta contra la dignidad, la autoestima, la libertad y, en muchos casos, el proyecto de vida de la víctima. Esto es especialmente evidente en situaciones de violencia intrafamiliar o de género, donde el agresor busca ejercer control y dominación psicológica sobre la víctima a través de la agresión física. Por ello, la Corte Suprema de Justicia y la Corte Constitucional han sostenido que el tratamiento jurídico de las lesiones debe incluir una lectura contextualizada, con enfoque diferencial, de modo que se visibilicen las condiciones sociales, culturales y económicas que rodean el hecho.
        p En cuanto a la modalidad subjetiva, el delito puede ser:

    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3
        p.mb-5 Ahora:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Doloso
                p.mb-0 En el primer caso, el sujeto actúa con voluntad de causar daño, como cuando alguien golpea a su pareja en un arranque de celos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Culposo
                p.mb-0 En el segundo, el daño se produce por negligencia o descuido, como en el caso de un obrero que, sin tomar las precauciones necesarias, deja caer una herramienta pesada sobre un compañero.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Ambos supuestos generan responsabilidad penal, pero la pena varía según la intencionalidad, la gravedad del daño y las circunstancias del hecho (Luzón Cuesta, 2011).
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p.mb-5(data-aos="fade-left") El proceso penal por lesiones personales se inicia generalmente con la denuncia de la víctima o de un tercero, y puede tramitarse por querella. La víctima tiene derecho a participar activamente en el proceso, solicitar pruebas, pedir medidas de protección y, eventualmente, obtener una reparación integral de los daños sufridos.
    
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 En conclusión, el delito de lesiones personales constituye una expresión compleja de violencia que exige del operador jurídico una valoración integral y precisa de los hechos. No se trata solo de medir la duración de la incapacidad o la magnitud de la herida, sino de comprender el impacto físico, emocional y social que el daño produce en la vida de la víctima. 

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aborto

    p.mb-5 La regulación penal del aborto en Colombia ha evolucionado significativamente en las últimas décadas, dando paso a un enfoque que armoniza la normativa penal con los derechos fundamentales de las mujeres y personas gestantes.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Aborto 
            p.mb-4(data-aos="fade-right") En el PDF <b>Aborto</b>, se analiza en detalle la tipificación del delito, según el Código Penal, así como también los cambios introducidos por la jurisprudencia constitucional, especialmente la Sentencia C-055 del 2022. Este documento ofrece una visión integral sobre los límites legales de la penalización del aborto, las excepciones despenalizadas, y las obligaciones del Estado para garantizar el acceso a este derecho, promoviendo una comprensión jurídica con perspectiva de género y respeto por la autonomía reproductiva.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aborto.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='') 
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Manipulación genética 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La manipulación genética, regulada en el Artículo 132 del Código Penal colombiano, se tipifica como un delito que protege la dignidad humana, la identidad genética y el patrimonio biológico de las personas. Esta conducta punible sanciona la alteración del genoma humano con fines no terapéuticos o sin justificación médica válida, y se inscribe dentro de los delitos contra la vida e integridad personal, en su modalidad más científica y contemporánea.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El Artículo establece que quien, sin justificación médica, altere el genoma humano de manera que pueda perjudicar la integridad física o mental de la persona, incurre en pena de prisión. Esta disposición penal reconoce los avances científicos en biotecnología y medicina genética, pero al mismo tiempo impone límites éticos y legales para evitar abusos o prácticas que comprometan la naturaleza humana.
    
    p.mb-5 Este tipo penal gira en torno a tres elementos fundamentales:

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/22.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="20%" y="77.5%" numero="+")
                h5 1
                p Debe existir una intervención sobre el genoma humano, es decir, sobre el conjunto completo de genes que constituyen la información hereditaria de una persona.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="77.5%" numero="+")
                h5 2
                p Dicha intervención debe carecer de una finalidad estrictamente terapéutica o médica; en otras palabras, si se demuestra que el procedimiento tiene un objetivo curativo, como corregir una enfermedad genética, no se incurre en delito.
    
              .bg-color-white.box-shadow.p-3(x="80%" y="77.5%" numero="+")
                h5 3
                p Debe haber un riesgo o daño potencial para la salud física o psíquica del sujeto intervenido, lo cual convierte la acción en lesiva, desde el punto de vista penal.
              
    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/23.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up").text-white Este delito también se configura cuando se realiza manipulación genética sin el consentimiento libre, previo, informado y válido de la persona afectada, o cuando se interviene en embriones humanos sin control ético ni científico. La finalidad punitiva es clara. Impedir experimentaciones ilícitas, la creación de seres humanos con características determinadas al margen de la autonomía de la voluntad y evitar la eugenesia, es decir, la selección o modificación genética para imponer ciertos atributos o eliminar otros considerados indeseables (Adera, 2009).
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Por ejemplo, si una clínica genética decide modificar los genes de un embrión para alterar el color de ojos o aumentar sus capacidades cognitivas sin razones médicas, y sin regulación estatal ni consentimiento informado, estaríamos frente a una conducta claramente delictiva. A diferencia de los tratamientos médicos de edición genética para enfermedades como la fibrosis quística o la distrofia muscular, que pueden estar amparados por la ley, cualquier alteración que busque una mejora no terapéutica constituye una infracción penal.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto actual, este tipo penal cobra relevancia por los avances de tecnologías como CRISPR-Cas9, que permiten editar genes de manera precisa y a bajo costo. Estas herramientas, aunque útiles en tratamientos médicos, también han abierto la puerta a experimentaciones no autorizadas, como ocurrió con el caso del científico chino He Jiankui, quien anunció en el 2018, la edición genética de dos bebés para hacerlos resistentes al VIH, generando un escándalo internacional y múltiples condenas éticas y jurídicas.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-10.py-4.px-5.mb-5(data-aos="fade-left")
          p El bien jurídico protegido en este delito es, por tanto, la integridad genética del ser humano y el respeto por su identidad biológica. Colombia, en línea con tratados internacionales como la Declaración Universal sobre el Genoma Humano y los Derechos Humanos de la UNESCO, reafirma que el patrimonio genético no debe ser objeto de manipulación sin criterios médicos y éticos estrictos (Adera, 2009).
          p.mb-0 En suma, el delito de manipulación genética sanciona el uso indebido de avances científicos que puedan comprometer la integridad del ser humano.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Inducción o ayuda al suicidio 

    p.mb-5 La comprensión de los delitos que afectan la vida humana desde su dimensión autónoma y emocional resulta clave en el estudio del Derecho Penal.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Inducción o ayuda al suicidio  
            p.mb-4(data-aos="fade-right") En el PDF <b>Inducción o ayuda al suicidio</b>, se analiza esta figura penal contemplada en el Artículo 107 del Código Penal colombiano, diferenciándola de otras conductas como el homicidio o el suicidio autónomo. El documento examina los elementos jurídicos que configuran este delito, incluyendo el dolo, el nexo de causalidad y la influencia sobre la víctima, así como sus implicaciones éticas y jurisprudenciales. A través de ejemplos y análisis normativos, se busca promover una interpretación rigurosa y crítica que permita proteger la vida y la dignidad humana en contextos de especial vulnerabilidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Inducción o ayuda al suicidio.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/27.png', alt='') 





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/6008 " target="_blank" rel="noopener noreferrer") Cotes Mestre, M. I. (2009). La despenalización del aborto en Colombia: una solución innecesaria. Persona y Bioética, 9(25). D - Universidad de La Sabana. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Arboleda Vallejo, M., & Ruiz Salazar, J. A. (2025). Manual de Derecho Penal Especial. Editorial Leyer. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/101947" target="_blank" rel="noopener noreferrer") Juanate y Dorado, C. (1994). Derecho, suicidio y eutanasia. Ministerio de Justicia de España.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.18273/saluduis.54.e:22046 " target="_blank" rel="noopener noreferrer") Zúñiga-Bolivar, S. M. & Bustamante de la Cruz, A. (2022). Prevalencia y factores asociados a los conocimientos sobre lesiones ocurridas en el hogar en cuidadores de niños menores de 5 años. Salud UIS, 54. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-91932023000200457 " target="_blank" rel="noopener noreferrer") Vivas-Barrera, T. G. (2023). El lugar del derecho comparado en la despenalización del aborto en el sur global. Cuestiones constitucionales, (49), 457-487. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ZI8q79lArF0 " target="_blank" rel="noopener noreferrer") Sonsón Televisión Oficial. (2017). CRECIENTE NÚMERO DE LESIONES PERSONALES [video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DwC15x5gUd8 " target="_blank" rel="noopener noreferrer") RevistaMSP. (2022). En Colombia despenalizaron el aborto hasta los 6 meses - ExclusivoMSP [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
