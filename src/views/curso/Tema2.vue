<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Formas indirectas de afectación: fraude, abuso y usurpación '")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-7.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up").text-white Dentro del ámbito del Derecho Penal patrimonial, no todas las conductas que afectan el patrimonio económico se manifiestan mediante el apoderamiento material o violento de un bien. Existen también formas indirectas de afectación que operan a través del fraude, el abuso de confianza o la usurpación, donde el sujeto activo se vale de maniobras intelectuales o de relaciones previas de cercanía para obtener ilícitamente un beneficio económico. 
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") Estas figuras revisten una especial complejidad jurídica, porque muchas veces se camuflan bajo apariencias de legalidad o se ejecutan en contextos donde existe un vínculo preexistente, contractual o interpersonal, que dificulta la detección del delito, por parte de la víctima.
      
          .bg-color-5.p-4.mb-5(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema5/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En este tipo de conductas, el sujeto pasivo suele consentir, de manera formal, la entrega del bien, ya sea dinero, un título valor, la posesión de un inmueble o la administración de recursos, pero lo hace viciado por error, engaño, confianza o desconocimiento. A diferencia del hurto, que implica una sustracción no consentida, en estas modalidades, el apoderamiento se produce mediante una cesión o entrega voluntaria, pero obtenida de manera ilegítima. Así, el resultado es idéntico. Una lesión al patrimonio del titular, pero los medios comisivos son más sutiles y requieren un análisis más detallado de la estructura del delito.
          p Entre las figuras que hacen parte de esta categoría, se encuentran: 
      
      .bg-full-width.bg-fondo-2.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema5/4.svg', alt='', style="max-width: 1106px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="28.5%" y="32.5%" numero="+")
                  h5 1. El fraude con cheque
                  p El sujeto utiliza un instrumento jurídico aparentemente válido, como un título valor, para inducir a error a la víctima y obtener un provecho patrimonial. 
      
                .bg-color-white.box-shadow.p-3(x="43%" y="18%" numero="+")
                  h5 2. El abuso de confianza
                  p Se construye sobre la base de una relación de administración, depósito o guarda, en la que el sujeto activo habiendo recibido legítimamente un bien, decide apropiárselo o disponer de él en contra de la voluntad del propietario. 
      
                .bg-color-white.box-shadow.p-3(x="72%" y="18%" numero="+")
                  h5 3. La usurpación 
                  p Se presenta cuando una persona se arroga sin derecho, la posesión o el uso de un bien inmueble, invadiendo o reteniendo indebidamente un espacio, muchas veces aprovechando situaciones de ausencia, desinformación, o lentitud en la respuesta judicial.
      
      p.mb-5 Estas formas indirectas de afectación al patrimonio, suelen requerir un análisis más detallado del elemento subjetivo. En todos los casos, el dolo debe estar claramente determinado, debido a que la voluntad del agente se dirige a obtener un provecho indebido mediante una conducta aparentemente neutra o amparada en alguna formalidad. De igual forma, se requiere establecer un perjuicio concreto y verificable para la víctima, que haya derivado del acto abusivo o fraudulento.
  
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
            p(data-aos="fade-left") Un ejemplo práctico de fraude mediante cheque, podría ser el caso de una persona que, sabiendo que no tiene fondos en su cuenta bancaria, emite un cheque para adquirir mercancía en un establecimiento comercial. La víctima, confiando en la validez del título valor, entrega la mercancía, pero posteriormente se entera de que el cheque fue rechazado por fondos insuficientes. 
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/5.png" data-aos="zoom-in")
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-6.tarjeta.p-3.h-100(data-aos="fade-left")
            p(data-aos="fade-left") En esta situación, aunque hubo una entrega voluntaria del bien, el acto está viciado por el engaño y configura un delito penal. Otro ejemplo sería el de un administrador de propiedad horizontal que, con acceso a los fondos de la copropiedad, decide transferir recursos a su cuenta personal, para fines diferentes a los autorizados. Aquí se configura un abuso de confianza, dado que la tenencia legítima del bien se convierte en ilegítima, al momento de apropiarse de él.
      
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Estas figuras no solo lesionan el patrimonio individual, sino que también afectan gravemente la confianza pública en los instrumentos jurídicos, la estabilidad de las relaciones comerciales y la credibilidad en el sistema legal. Por ello, el Legislador colombiano ha previsto penas específicas para cada una de ellas y ha delimitado, con claridad, sus elementos típicos en el Código Penal. 
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Fraude mediante cheque
      
      p.mb-5 El fraude mediante cheque representa una conducta delictiva que afecta gravemente la confianza en los medios de pago y en las relaciones comerciales.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7.order-2
              h2.mb-4(data-aos="flip-up") Fraude mediante cheque 
              p.mb-4(data-aos="fade-right") En el PDF <b>Fraude mediante cheque</b>, se analiza detalladamente cómo el uso doloso de este título valor, puede constituir una maniobra fraudulenta orientada a obtener beneficios económicos indebidos, explorando sus elementos típicos, diferencias frente a otras figuras jurídicas, ejemplos prácticos y las consecuencias jurídicas asociadas. Este contenido resulta esencial para comprender el alcance penal de las operaciones financieras, realizadas con instrumentos aparentes de legitimidad.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Fraude mediante cheque.
      
            .col-lg-5.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/7.png', alt='') 
  
  
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Abuso de confianza
      
      p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      p.mb-5 Es importante diferenciar este delito de otros con los que puede confundirse, como la estafa o el fraude, mediante contrato simulado:
  
      .bg-full-width.bg-color-3
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center En la estafa
                  p.mb-0 El consentimiento en la entrega del bien está viciado por el engaño previo; en el abuso de confianza, no hay engaño en la entrega inicial, sino una deslealtad posterior.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center En el fraude contractual
                  p.mb-0 Puede existir una apariencia de legalidad desde el inicio, pero la intención defraudatoria se manifiesta en la configuración misma del contrato, lo que lo distingue del abuso de confianza, donde el contrato o acuerdo inicial, suele ser legítimo.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/10.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-5(data-aos="fade-left") Las penas previstas para este delito oscilan entre 1 y 4 años de prisión, así como multas proporcionales al valor del perjuicio. En los casos agravados, estas penas pueden incrementarse significativamente. Además, la conducta puede generar consecuencias civiles, como la obligación de restituir el bien y de indemnizar los daños causados al propietario.
      
          .bg-color-5.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema5/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El abuso de confianza es especialmente frecuente en contextos familiares, laborales, comerciales y comunitarios, donde la cercanía entre las personas, genera una expectativa razonable de lealtad. Precisamente por esa razón, la conducta reviste una gravedad particular, puesto que no solo afecta el patrimonio económico, sino que socava la confianza interpersonal que sostiene la vida en sociedad. Su represión busca preservar el valor jurídico y social de la buena fe, evitando que las relaciones basadas en la confianza se conviertan en escenarios de fraude y perjuicio.
  
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Usurpación
      
      .bg-color-6.bordes.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.order-2
            figure
              img(src='@/assets/curso/tema5/12.svg', alt='')
          .col-lg.order-1.mb-3.mb-lg-0
            .p-4
              p.mb-0(data-aos="fade-up") El delito de usurpación es una forma de afectación indirecta al patrimonio económico y a la posesión legítima de bienes inmuebles. A diferencia del hurto, donde se trata de un apoderamiento material de bienes muebles con ánimo de lucro, en la usurpación la conducta gira en torno a la invasión o perturbación de bienes inmuebles, sin que medie un derecho legítimo y sin que se requiera ánimo de apropiación permanente del dominio. Este delito protege tanto el derecho de propiedad como la posesión, entendidos como formas de disfrute, uso y aprovechamiento del bien inmueble (Alarc, Cáceres, Guanga & Cárdenas, 2022).
      
      p El Artículo 261 del Código Penal colombiano, tipifica la usurpación de inmuebles como la conducta consistente en ocupar un bien inmueble ajeno, total o parcialmente, sin autorización de quien tenga derecho a otorgarla. En otras palabras, el tipo penal sanciona el ingreso y permanencia en un inmueble sin consentimiento de su legítimo propietario o poseedor, configurándose incluso si no se produce violencia. La simple ocupación, cuando es arbitraria y sin justificación legal, constituye el núcleo de este comportamiento delictivo.
      p.mb-5 Para que se configure el delito, deben concurrir ciertos elementos esenciales:
  
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/13.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Primero")
              p En primer lugar, el bien afectado debe ser un inmueble, es decir, un predio, una casa, un lote o cualquier construcción adherida permanentemente al suelo. 
      
            .div(titulo="Segundo")
              p En segundo lugar, debe haber una ocupación efectiva, aunque sea parcial, y no es necesario que se trate de una apropiación definitiva del bien; basta con que el sujeto activo impida el ejercicio del derecho, por parte del titular legítimo.
      
            .div(titulo="Tercero")
              p En tercer lugar, dicha ocupación debe realizarse sin autorización legal, sin justo título ni causa jurídica que habilite la permanencia en el lugar.
      
            .div(titulo="Cuarto")
              p Finalmente, debe demostrarse la intención de alterar el estado de tenencia, posesión o propiedad, afectando así los derechos del titular legítimo (Alarc, Cáceres, Guanga & Cárdenas, 2022).
      
      p.mb-5 Un ejemplo clásico de este delito se presenta cuando:
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema5/14.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                p Una persona invade un lote con cercas, viviendas improvisadas o construcciones precarias, sin haber adquirido el terreno ni contar con autorización del propietario. 
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema5/15.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                p Se entra a una casa desocupada con la intención de habitarla sin permiso de sus dueños, o cuando un exempleado doméstico permanece en el inmueble, luego de haber sido despedido y requerido para desocupar. 
      
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/16.svg", style="max-width: 190px").mx-auto
            .col-lg.text-white
              p En todos estos casos, el bien no se toma con violencia visible, pero el acto mismo de ocuparlo, vulnera el derecho del legítimo poseedor o propietario.
              p.mb-0 El Artículo 262 del mismo código, desarrolla una conducta diferente pero complementaria, conocida como perturbación de la posesión o tenencia, que sanciona a quien altera ilegítimamente el goce pacífico de un inmueble por parte de su poseedor o tenedor, sin llegar a ocuparlo totalmente. 
  
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/17.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p(data-aos="fade-left") Esta figura es especialmente relevante porque protege no solo la propiedad, sino también la posesión, es decir, la posibilidad de tener la cosa bajo poder y actuar como si se fuera su dueño, aun sin serlo jurídicamente. Esta disposición es una herramienta penal frente a agresiones que, aunque no implican apoderamiento físico total, afectan el uso tranquilo del bien por parte de quien lo habita o explota.
      
          .bg-color-2.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema5/18.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los sistemas de monitoreo y seguimiento aseguran la supervisión continua del avance del proyectEjemplos frecuentes de perturbación de la posesión, incluyen el ingreso violento o clandestino a un terreno para destruir cultivos, retirar cercas, abrir accesos ilegales o impedir el ingreso del legítimo poseedor. También se configura cuando un vecino lanza objetos, establece construcciones invasivas o introduce animales en un predio colindante, con el propósito de dificultar el uso del bien. Estos actos no equivalen a la ocupación total, pero sí interfieren con el derecho de uso, disfrute y administración del inmueble.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-7.p-4.h-100.text-white(data-aos="fade-left")
            p.mb-0 Ambos delitos tienen especial relevancia en contextos urbanos y rurales donde existen conflictos sociales por la tierra, tensiones entre comunidades y propietarios, o disputas sobre límites de predios. La jurisprudencia ha aclarado que estos delitos no requieren que el afectado sea el propietario inscrito, porque el Derecho Penal protege también al poseedor legítimo, aun cuando no cuente con título de propiedad. El bien jurídico tutelado no es solamente el derecho de dominio, sino la estabilidad en la tenencia y la paz jurídica, en las relaciones sobre los inmuebles.
      
      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.order-2
            figure
              img(src='@/assets/curso/tema5/20.svg', alt='')
          .col-lg.order-1.mb-3.mb-lg-0
            .p-4
              p.mb-0(data-aos="fade-up") Las penas previstas para estos delitos son relativamente moderadas, pero pueden incrementarse si se agravan las circunstancias. El Artículo 261 establece una pena de prisión de cuarenta y ocho a cincuenta y cuatro meses y multa de trece a setenta y cinco salarios mínimos legales mensuales vigentes, que puede aumentarse si se comete en predios protegidos por interés social o ecológico, si hay reincidencia o si se comete con violencia. Para la perturbación de la posesión, el Artículo 262 contempla prisión de uno a tres años. Aunque estas penas pueden ser susceptibles de medidas alternativas, el Ministerio Público y la jurisprudencia han recordado su función disuasiva en contextos donde la informalidad, el desplazamiento forzado o la presión inmobiliaria, aumentan la frecuencia de estos delitos (Alarc, Cáceres, Guanga & Cárdenas, 2022).
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/21.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left") La Corte Suprema de Justicia ha sostenido que estos delitos no solo protegen el derecho individual, sino que cumplen una función social, debido a que impiden que se consoliden hechos consumados mediante la ocupación arbitraria o violenta de bienes ajenos. En particular, ha señalado que estos tipos penales son compatibles con el derecho de defensa de la propiedad, mediante mecanismos judiciales, y que deben interpretarse sistemáticamente, con el Derecho Civil.
      
          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema5/22.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En conclusión, los delitos de usurpación de inmueble y perturbación de la posesión, tipifican formas graves y reiteradas de violencia contra la estabilidad jurídica de la propiedad y la tenencia. Su persecución penal busca mantener el orden en las relaciones sobre los bienes inmuebles, evitar conflictos sociales y garantizar que el acceso a la tierra y la vivienda se realice por vías legales, sin recurrir a la ocupación arbitraria ni al desconocimiento de los derechos ajenos.
  
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span Arboleda Vallejo, M. & Ruiz Salazar, J. A. (2025). Manual de Derecho Penal Especial. Editorial Leyer. 
  
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://revistas.urosario.edu.co/index.php/sociojuridicos/article/view/14606/12944 " target="_blank" rel="noopener noreferrer") Páez Jaimes J. C. & Rangel Angulo, D. V. (2023). Análisis constitucional del tipo penal de invasión de tierras en Colombia: una propuesta para su condicionamiento frente a las necesidades reales de los sujetos de especial protección constitucional. Estudios Socio-Jurídicos. 
  
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=UmF6ouu3J_g " target="_blank" rel="noopener noreferrer") Lo dijo Junior- PodCast. (2024). ROBAN $48K EN CHEQUES DE LA COMPAÑÍA ALEGAN QUE TIENEN A SU HIJA SECUESTRADA Y LE TUMBAN $7,500 [video]. YouTube. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=gJxcclPbLnc " target="_blank" rel="noopener noreferrer") LA ESQUINA MIGRATORIA. (2025). Diferencia entre Robo y Abuso de Confianza: Base Legal en la República Dominicana [video]. YouTube. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=Ul8vyG9dieA " target="_blank" rel="noopener noreferrer") Ignacio Enrique Ferreira Morais. (2020). Denuncia por Usurpación [video]. YouTube. 
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
