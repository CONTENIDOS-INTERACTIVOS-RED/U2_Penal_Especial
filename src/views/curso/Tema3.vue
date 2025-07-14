<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Delitos contra personas y bienes protegidos por el Derecho Internacional Humanitario'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La protección de personas y bienes en contextos de conflicto armado representa uno de los desafíos más sensibles y urgentes del Derecho Penal contemporáneo.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Delitos contra personas y bienes protegidos por el Derecho Internacional Humanitario 
            p.mb-4(data-aos="fade-right") En el PDF <b>Delitos contra personas y bienes protegidos por el Derecho Internacional Humanitario</b>, se examinan las conductas tipificadas en el ordenamiento jurídico colombiano, que constituyen infracciones graves al Derecho Internacional Humanitario, así como las condiciones específicas para su configuración y sanción. A través del análisis de normas penales, tratados internacionales y casos emblemáticos, este documento proporciona las herramientas necesarias para comprender el papel del Derecho en la defensa de la vida, la dignidad y los derechos fundamentales en situaciones de guerra, promoviendo una formación jurídica comprometida con la justicia y la paz.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Delitos contra personas y bienes protegidos por el Derecho Internacional Humanitario.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/1.png', alt='') 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Personas protegidas por el DIH
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-10.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el marco del conflicto armado, el Derecho Internacional Humanitario DIH impone una protección especial a ciertos grupos de personas que no participan o han dejado de participar directamente en las hostilidades. Estas personas, denominadas personas protegidas, se encuentran amparadas por los Convenios de Ginebra, sus Protocolos Adicionales y el Código Penal colombiano. La protección que se les otorga tiene como propósito preservar su vida, su integridad física y mental, y su dignidad en situaciones de extrema vulnerabilidad generadas por el conflicto armado.

        p(data-aos="fade-left") Dentro de este grupo de personas protegidas, se encuentran:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Civiles")
            p En primer lugar, los civiles que no participan directamente en las hostilidades. Esta categoría abarca a toda la población civil, incluyendo mujeres, niños, personas mayores, comunidades étnicas y otras poblaciones afectadas por el conflicto. En Colombia, el homicidio de persona protegida Artículo 135 del Código Penal constituye un delito grave que puede ser sancionado con penas de hasta 30 años de prisión, cuando se causa la muerte de un civil en el contexto del conflicto armado. Por ejemplo, si un grupo armado ilegal asesina a líderes sociales o campesinos por considerarlos colaboradores de otra facción, sin que estas personas hayan participado directamente en el conflicto, se configura este delito (Camps Mirabet, 2005).
    
          .div(titulo="Heridos y enfermos")
            p En segundo lugar, se incluyen los heridos y enfermos, tanto de las fuerzas armadas como de los grupos armados irregulares, una vez que ya no pueden continuar participando en las hostilidades. El DIH exige que se les brinde asistencia médica sin discriminación, y cualquier atentado contra su integridad física constituye una violación grave. Un caso ilustrativo es el de un combatiente herido que es ejecutado extrajudicialmente en lugar de ser atendido médicamente. Esta conducta, además de ser una infracción al DIH, puede ser tipificada como trato cruel o inhumano a persona protegida Artículo 137 del Código Penal.
    
          .div(titulo="Prisioneros de guerra")
            p También gozan de especial protección los prisioneros de guerra, entendidos como los combatientes capturados durante las hostilidades, ya sea de las fuerzas regulares o de grupos armados organizados. Estos prisioneros no deben ser objeto de tortura, amenazas, humillaciones o tratos degradantes, y deben recibir un trato digno y conforme a las normas del DIH. Si un prisionero es sometido a castigos físicos, negación de alimento o tratos vejatorios, quien lo realiza puede incurrir en el delito de trato cruel a persona protegida, también sancionado por la Ley penal colombiana (Camps Mirabet, 2005).
    
          .div(titulo="Personal médico y humanitario")
            p Otra categoría clave es la del personal médico y humanitario, que incluye médicos, enfermeros, voluntarios de la Cruz Roja, misiones de asistencia humanitaria y todo aquel que se encuentre brindando ayuda neutral en medio del conflicto. Este personal está protegido bajo los principios de neutralidad y humanidad, y atacarles constituye una violación directa al DIH. Por ejemplo, disparar contra una ambulancia marcada con el emblema de la Cruz Roja Internacional o impedir el paso de misiones médicas puede configurar el delito de atentado contra misión médica o humanitaria.
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/5.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La importancia de estas protecciones no solo reside en la dimensión nacional, sino también en su carácter de crímenes internacionales. Cuando estos delitos se cometen de forma sistemática o generalizada, pueden ser investigados y juzgados por tribunales internacionales como la Corte Penal Internacional (CPI), o incluso por jurisdicciones especiales como la Jurisdicción Especial para la paz. En estos casos, el Derecho Internacional complementa y refuerza la acción de la justicia penal nacional, reconociendo que estas violaciones afectan no solo a las víctimas directas, sino a la humanidad en su conjunto.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Bienes y misiones protegidos

    p.mb-5 En el marco del Derecho Internacional Humanitario, no solo las personas gozan de especial protección, sino también ciertos bienes y misiones que, por su función humanitaria, médica, cultural o espiritual, deben ser respetados y preservados incluso en contextos de conflicto armado. El Código Penal colombiano, en armonía con los tratados internacionales ratificados por el país, tipifica diversas conductas como delitos cuando se afectan estos bienes protegidos, al reconocer que su ataque constituye una grave infracción al DIH y a los principios básicos de humanidad, distinción y proporcionalidad (Contreras Ortiz, 2009).

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Bienes culturales y religiosos
              p Uno de los bienes más importantes en esta categoría son los bienes culturales y religiosos, como templos, monasterios, bibliotecas, monumentos históricos y obras de arte. Estos bienes representan la identidad, la memoria y la herencia espiritual de los pueblos, por lo que están especialmente protegidos por la Convención de La Haya de 1954 y por el Artículo 138 del Código Penal colombiano, que sanciona el ataque a bienes culturales y de culto religioso. Esta norma establece que quien, en el contexto del conflicto armado, dirija ataques contra estos bienes, incurrirá en prisión de ocho a quince años. Por ejemplo, si en medio de operaciones militares se destruye deliberadamente una iglesia histórica que no estaba siendo utilizada con fines bélicos, se configura un atentado contra un bien cultural protegido.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Misiones médicas y humanitarias
              p Otro aspecto es el relativo a las misiones médicas y humanitarias, tales como hospitales, ambulancias, centros de atención a víctimas, y convoyes de la Cruz Roja u otras organizaciones de socorro. Estas misiones tienen el propósito de aliviar el sufrimiento humano y proteger a los más vulnerables. Por ello, gozan de una protección reforzada bajo el DIH, y su ataque es un crimen grave. El Código Penal castiga el atentado contra misión médica o humanitaria con penas de prisión de ocho a quince años. Un caso claro sería el de un grupo armado que detiene un convoy con ayuda humanitaria destinada a poblaciones desplazadas, saquea su contenido y les impide continuar con su labor; esta conducta viola el principio de humanidad y constituye un delito penal.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-1.py-4.px-5.mb-5(data-aos="fade-left")
          p.mb-0 Además, es fundamental destacar el uso correcto de los emblemas protectores, como la cruz roja, la media luna roja y otros símbolos reconocidos internacionalmente. Estos signos tienen como finalidad identificar a quienes no participan directamente en las hostilidades o están dedicados a labores de auxilio. El Código Penal colombiano establece penas para quien haga uso indebido de estos emblemas, puesto que tal comportamiento no solo desvirtúa su significado, sino que pone en riesgo la vida y la integridad de quienes realmente están protegidos por ellos. Por ejemplo, si un grupo armado utiliza un vehículo marcado con la cruz roja para transportar armas o personal armado, no solo se viola el DIH, sino que se comete un delito penal por instrumentalización indebida de emblemas.
        p El estudio de estos delitos también implica comprender dos principios esenciales del DIH:
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Principio de distinción
                p.mb-0 Que obliga a diferenciar en todo momento, entre objetivos militares y bienes civiles.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Principio de proporcionalidad
                p.mb-0 Que prohíbe ataques en los que el daño colateral a bienes protegidos, sea excesivo en relación con la ventaja militar esperada.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Si una operación militar causa la destrucción de un hospital o escuela que no estaba siendo utilizada con fines bélicos, sin justificación válida, se incurre en una violación del DIH y en responsabilidad penal internacional y nacional (Contreras Ortiz, 2009).

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.corteconstitucional.gov.co/relatoria/2007/c-291-07.htm " target="_blank" rel="noopener noreferrer") Corte Constitucional. (2007). MP. Manuel José Cepeda Espinosa. Sentencia C-291. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/119781?page=10 " target="_blank" rel="noopener noreferrer") Gutiérrez Posse, H. D. T. (2016). Elementos de Derecho Internacional Humanitario. Eudeba. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/6368?page=5 " target="_blank" rel="noopener noreferrer") Angarita Piña, R. (2006). El derecho internacional humanitario: sus reglas, su interpretación y la corte penal internacional. Red Reflexión Política.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0041-90602012000100006  " target="_blank" rel="noopener noreferrer") Jaimes-Amado, M. C. & Prieto-Sanjuán, R. A. (2012). VIOLACIONES AL DERECHO INTERNACIONAL HUMANITARIO: PREVENIR, ANTES QUE SANCIONAR. Vniversitas, (124), 119-145. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-51362021000300081" target="_blank" rel="noopener noreferrer") Villarreal Palos, A. (2021). Sobre la definición y contenido del derecho internacional penal y sus diferencias con el Derecho Penal internacional. Derecho global. Estudios sobre derecho y justicia, 7(19), 81-111.  

 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=83l7trw3Y_o " target="_blank" rel="noopener noreferrer") Cultura Jurídica Org. (2020). Derecho Penal Internacional. Fernando Fernández. Estado del Derecho [video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wZlxV073Eak" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Fundamentos doctrinarios del Derecho Internacional Humanitario [video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
