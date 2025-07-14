<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Afectaciones directas al patrimonio: el hurto y la estafa'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/1.svg", data-aos="zoom-in")
        .col-lg-10
          p(data-aos="fade-left") El patrimonio económico es uno de los bienes jurídicos más relevantes, protegidos por el Derecho Penal. Se entiende como el conjunto de bienes, derechos y obligaciones susceptibles de valoración económica que una persona puede poseer, adquirir o transmitir dentro del marco legal. Cualquier conducta que atente contra esa integridad patrimonial, mediante el desapoderamiento ilegítimo de bienes ajenos o el aprovechamiento indebido mediante el engaño, constituye una infracción penal. En esta unidad se estudian dos de las figuras más representativas de las afectaciones patrimoniales directas. El hurto y la estafa, ambas consagradas y desarrolladas en el Código Penal colombiano, Ley 599 del 2000:
    
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema4/2.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 El hurto
                p Regulado en el Artículo 239 y siguientes del Código Penal, implica una conducta activa de apoderamiento de un bien mueble ajeno sin consentimiento de su propietario y con ánimo de lucro. Es decir, se concreta cuando alguien toma algo que no le pertenece, sin violencia o engaño, con la intención de incorporarlo de forma definitiva a su propio patrimonio o al de un tercero. Este delito no requiere que el apoderamiento se prolongue en el tiempo, basta con que se interrumpa la tenencia legítima y el agente actúe con dolo, es decir, con plena conciencia y voluntad de cometer la apropiación ilegítima. Por ejemplo, si un individuo sustrae una bicicleta estacionada en vía pública sin autorización del propietario, se configura un delito de hurto, independientemente de que la venda o simplemente la utilice.
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src="@/assets/curso/tema4/3.png")
              .col-lg-7.order-1.mb-3.mb-lg-0
                h5 La estafa
                p Se encuentra prevista en el Artículo 246 del mismo Código. A diferencia del hurto, que recae sobre una acción física de apoderamiento, la estafa se configura mediante el empleo de maniobras engañosas para inducir a error a otra persona y obtener de ella una disposición patrimonial en perjuicio propio o de un tercero. Este delito requiere, por tanto, no solo el resultado económico negativo para la víctima, sino también la existencia de un ardid o engaño que haya sido decisivo en la conducta de quien fue inducido a desprenderse de su bien. Por ejemplo, si una persona ofrece la venta de un vehículo inexistente mediante documentos falsificados y logra que la víctima transfiera una suma de dinero bajo la creencia de que adquirirá el bien, se materializa el tipo penal de estafa.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-3(data-aos="fade-left") Ambas figuras tienen como eje común la afectación al patrimonio ajeno, pero se distinguen por la forma en que se produce dicha afectación. En el hurto, la disposición patrimonial se da sin participación de la víctima, pues esta no consiente el desapoderamiento. En la estafa, en cambio, la víctima sí participa en la entrega del bien, pero lo hace inducida en error por las maniobras fraudulentas del autor. Esta diferencia es esencial para la adecuada tipificación del comportamiento en el proceso penal.
      
          .bg-color-5.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En Colombia, tanto el hurto como la estafa pueden agravarse si se configuran circunstancias especiales, como el uso de medios violentos, el hecho de actuar en grupo, el aprovechamiento de condiciones de confianza o la utilización de sistemas informáticos. El Código Penal contempla estos agravantes para aumentar la pena en atención al mayor reproche social que generan estos comportamientos, especialmente cuando afectan a personas vulnerables o bienes de especial valor económico, cultural o sentimental.
      
      p.mb-5 En síntesis, las conductas que afectan directamente el patrimonio económico, como el hurto y la estafa, comprometen no solo la seguridad de los bienes individuales, sino también la confianza en las relaciones sociales, comerciales y jurídicas. Por ello, el ordenamiento penal colombiano establece mecanismos de control y sanción que buscan prevenir, reprimir y reparar este tipo de afectaciones, protegiendo así el orden económico y jurídico de la sociedad.
  
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Hurto simple y calificado
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          .bg-color-11.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema4/6.svg", style="max-width: 170px").mx-auto
              .col-lg
                p.mb-0 En el marco del Derecho Penal colombiano, el hurto es uno de los delitos más comunes y representa una afectación directa al patrimonio económico de las personas. Este delito está regulado por los Artículos 239 y 240 del Código Penal, Ley 599 del 2000, donde se establece su configuración típica, sus elementos constitutivos y las variantes agravadas. 
          .bg-color-1.p-4(data-aos="fade-left")
           p.mb-0 La esencia del hurto radica en el apoderamiento ilegítimo de un bien ajeno con ánimo de lucro, es decir, con la intención de incorporarlo de manera permanente o definitiva al patrimonio del autor o de un tercero. No se trata simplemente de tomar lo ajeno, sino de hacerlo con conciencia de su ilicitud, sin autorización del propietario y con la finalidad de obtener un provecho indebido (Agudo Fernández & Jaén Vallejo, 2018).
      
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/8.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="El hurto simple")
              p Consagrado en el Artículo 239, se configura cuando una persona se apodera de un bien mueble que pertenece a otro, sin que medie violencia ni intimidación sobre las personas o sobre las cosas. En este tipo penal, el autor actúa con dolo directo, consciente de que se está apropiando de lo ajeno, y guiado por un ánimo de lucro. Para que exista hurto simple, no es necesario el uso de fuerza o amenaza; basta con que se materialice el desapoderamiento sin consentimiento del legítimo propietario. Por ejemplo, si una persona en un supermercado aprovecha un descuido y se guarda productos en su ropa para salir sin pagarlos, comete hurto simple. La acción es discreta, no violenta, pero implica un apoderamiento con clara intencionalidad. También es hurto simple, cuando un trabajador de una oficina se apropia de equipos, herramientas o dinero en efectivo pertenecientes a la empresa, sin ejercer violencia alguna, pero con el propósito de quedarse con esos bienes de forma definitiva.
      
            .div(titulo="El hurto calificado")
              p Tipificado en el Artículo 240, es una modalidad más grave del delito, y, por tanto, se sanciona con mayor severidad. Esta calificación surge cuando el apoderamiento se realiza en circunstancias especialmente reprochables por su peligrosidad o lesividad, como el uso de violencia sobre las personas o las cosas, la utilización de medios engañosos, el actuar en grupo o cuadrilla, o el ingreso a lugares sagrados o especialmente protegidos. En estos casos, el legislador ha entendido que el daño al bien jurídico protegido, es decir, al patrimonio económico, se agrava no solo por el valor del bien hurtado, sino por el modo en que se vulnera la seguridad o la dignidad de la víctima (Agudo Fernández & Jaén Vallejo, 2018).
      
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.order-2
            figure
              img(src='@/assets/curso/tema4/9.svg', alt='')
          .col-lg.order-1.mb-3.mb-lg-0
            .p-4
              p(data-aos="fade-up") Un ejemplo clásico de hurto calificado, es el robo de objetos al interior de un vehículo tras romper una ventana con una piedra. Aquí hay una violencia sobre la cosa, el vehículo, lo cual agrava la conducta. Otro caso es el de una persona que ingresa a una casa con llaves hurtadas y sustrae bienes, mientras los residentes están ausentes. También se configura hurto calificado cuando el delito se comete en grupo, como en los casos de pandillas que ingresan a establecimientos comerciales para apoderarse de mercancía, repartiendo roles entre quienes vigilan, intimidan o sustraen los objetos. 
              p.mb-0 A diferencia del hurto simple, en el hurto calificado el uso de medios peligrosos, el ataque sorpresivo, o el aprovechamiento de condiciones vulnerables, incrementan el reproche penal.
      
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              
              p.mb-0 Otra circunstancia calificada es la comisión del hurto en lugares especiales, como templos religiosos, hospitales, centros educativos o instituciones de beneficencia. Por ejemplo, hurtar dinero de las limosnas en una iglesia, además de implicar un apoderamiento indebido, ofende un lugar de especial respeto social, por lo que la conducta adquiere una mayor gravedad.
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.py-4.px-5(data-aos="fade-left")
            p.mb-0 Desde el punto de vista técnico, ambos tipos penales comparten los elementos estructurales básicos. La conducta dolosa, el objeto mueble ajeno, el ánimo de lucro y la falta de consentimiento del titular. Sin embargo, en el hurto calificado se suman elementos que elevan el nivel de antijuridicidad material y exigen del Estado una respuesta penal más contundente. Esto se traduce en un aumento de la pena privativa de la libertad, que puede alcanzar entre seis y catorce años, e incluso incrementarse aún más, si concurren circunstancias adicionales, como la reincidencia o el hurto de bienes de alto valor económico.
      
      p.mb-5 En cuanto a la sanción, el hurto simple es reprimido con penas de dos a seis años de prisión, dependiendo del valor del bien hurtado y otros factores. Pero si concurren las circunstancias de calificación descritas por el Artículo 240, las penas oscilan entre seis y catorce años, con posibilidad de agravarse, según el Artículo 241 si existen múltiples circunstancias agravantes (Agudo Fernández & Jaén Vallejo, 2018).
  
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-10.tarjeta.p-3.h-100(data-aos="fade-left")
            p(data-aos="fade-left") Desde la perspectiva jurisprudencial, la Corte Suprema de Justicia ha reiterado en múltiples decisiones que, para diferenciar correctamente entre hurto simple y calificado, se debe analizar no solo la conducta delictiva, sino también las condiciones del contexto en que fue cometida. El análisis del dolo, la modalidad del apoderamiento, el impacto sobre la víctima y la naturaleza del bien sustraído, son elementos claves que permiten determinar el tipo penal aplicable.
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/12.png" data-aos="zoom-in")
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
            p(data-aos="fade-left") En conclusión, el hurto simple y el hurto calificado son figuras jurídicas que responden a una misma finalidad de tutela del patrimonio, pero que se distinguen por el grado de agresividad y la forma en que se comete el delito. La correcta tipificación tiene efectos directos sobre la responsabilidad penal del autor, la dosificación de la pena y las posibilidades de aplicación de subrogados penales o mecanismos de justicia restaurativa. 
  
  
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Estafa
  
      p.mb-5 La estafa es una de las figuras más representativas de las afectaciones patrimoniales en el ámbito penal, caracterizada por el uso del engaño como medio para obtener beneficios económicos indebidos.
  
      .bg-full-width.bg-color-8.mb-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7.order-2
              h2.mb-4(data-aos="flip-up") Estafa 
              p.mb-4(data-aos="fade-right") En el PDF <b>Estafa</b>, se expone con detalle la configuración legal de este delito, sus elementos constitutivos, ejemplos prácticos y sus modalidades contemporáneas, como la estafa informática o sentimental. Este análisis permite comprender el impacto jurídico y social de la estafa, así como los criterios para su adecuada tipificación y sanción.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Estafa.
      
            .col-lg-5.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/13.png', alt='') 
  
  
  
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/118325?page=28" target="_blank" rel="noopener noreferrer") Balmaceda Hoyos, G. (2016). El delito de estafa. Universidad de los Andes.  
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/56895?page=40 " target="_blank" rel="noopener noreferrer") Suárez López, J. M. (2013). El tratamiento penal del hurto y robo de uso de vehículos a motor. Dykinson. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-74412021000100215 " target="_blank" rel="noopener noreferrer") Ibarra Padilla, A. M., Martínez Martínez, G. C. & Mena Bermúdez, E. B. (2021). Política criminal contra el hurto en Colombia 2016-2020. Justicia, 26(39), 215-232. 
  
  
             
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=OGuteL9wcYQ " target="_blank" rel="noopener noreferrer") ALAIRE JHON. (2020). Estafa Telefónica - BBVA - Nueva modalidad de robo virtual en Colombia [video]. YouTube. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=MGO445xp1sU " target="_blank" rel="noopener noreferrer") El Siete TV. (2025). PREOCUPANTE NUEVA MODALIDAD DE ESTAFA: Le transfirieron su CAMIONETA en Neuquén sin venderla [video]. YouTube. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=Z4sRDAqhuyU " target="_blank" rel="noopener noreferrer") SFPIE UV. (2024). El delito de hurto [video]. YouTube. 
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
