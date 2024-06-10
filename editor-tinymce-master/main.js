tinymce.init({
    selector: '#editor, #url-conversion-relative-1',
    height: 1000,
    width: 1200,
    resize: 'both',
    promotion: false,
    language: 'es_MX',
    branding: false,
    statusbar:false,
	relative_urls: true,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
    toolbar: 'save | openfile | undo redo | styles forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image | pagebreak | template',
    plugins: 'image pagebreak template save link image code ',

    save_onsavecallback: function () {
        // Función que se ejecutará al hacer clic en el botón "Guardar"
        guardarContenido();
    },
    setup: function(editor) {
        editor.ui.registry.addButton('openfile', {
            icon: 'https://www.flaticon.es/svg/static/icons/svg/4847/4847498.svg',
            tooltip: 'Abrir archivo', // Agregamos un tooltip para indicar la función del botón
            onAction: function() {
                // Función que se ejecutará al hacer clic en el botón "Abrir archivo"
                abrirArchivo();
            }
        });
    },
    templates: [
		{
			title: 'Cita APA',
			description: 'Plantilla insertar una cita en formato APA',
			content: `
				<blockquote>
					<p>"Texto de la cita" (Nombre, Nombre, Nombre y Nombre, fecha, Lugar).</p>
				</blockquote>
			`
		},	
		{
			title: 'Cita de libro APA',
			description: 'Plantilla para insertar una cita de libro en formato APA',
			content: `
				<p>"Texto de la cita" <em>Nombre del libro</em> (Apellido del autor, año).</p>
			`
		},
		{
			title: 'Cita de artículo de revista APA',
			description: 'Plantilla para insertar una cita de artículo de revista en formato APA',
			content: `
				<p>"Texto de la cita" Nombre de la revista. <em>Nombre del articulo</em>, Volumen (), Paginas - . (Autor, año).</p>
			`
		},
			
    {
      title: 'Artículo Científico a Doble Columna',
      description: 'Plantilla para un artículo científico a doble columna con formato personalizado',
      content: `
        <div style="font-family: Times New Roman, Times, serif;">
          <h1 style="font-size: 14px; text-align: center;">Título del Artículo Científico</h1>
          <p style="font-size: 12px;">Autores: Nombre del Autor 1, Nombre del Autor 2, Nombre del Autor 3</p>
          <p style="font-size: 12px;">Afiliaciones: Institución 1, Institución 2, Institución 3</p>
          <h2 style="font-size: 14px; text-align: center;">Resumen</h2>
          <p style="font-size: 12px; text-align: justify;">
            El objetivo último de un investigador es dar a conocer sus hallazgos a la comunidad científica mediante la publicación de los mismos en una revista científica del campo correspondiente. La escritura científica tiene su complejidad y particularidades —no es una habilidad innata, sino que requiere tiempo y esfuerzo—. Sin embargo, esta destreza puede desarrollarse, comenzando por aprender la estructura general de un artículo científico. El propósito de este artículo es servir de guía a aquellos que se inician en investigación en salud mental para aprender a preparar un manuscrito científico. Un artículo científico tiene un formato específico conocido como sistema IMRaD (Introducción, Métodos, Resultados y Discusión). Proponemos recomendaciones generales que pueden variar en función de la disciplina y de los requisitos de cada revista/editor. Nos centramos en la estructura que ha de presentar un artículo científico, señalamos algunos errores comunes en los manuscritos de investigadores noveles y enfatizamos en el estilo de la redacción científica. No se abordarán otros aspectos de redacción, sintaxis, gramática u ortografía. El objetivo último del presente artículo es incrementar las probabilidades de publicación de una investigación mediante la redacción rigurosa de los resultados en formato de artículo científico.
          </p>
          <h2 style="font-size: 14px; text-align: center;">Abstract</h2>
          <p style="font-size: 12px; text-align: justify;">
            The primary goal of researchers is to share their discoveries with the scientific community through publication in a scientific or peer-reviewed journal within their field. Scientific writing presents its own challenges and nuances—it's not an inherent skill and demands time and dedication to cultivate. Nevertheless, proficiency in this area can be attained by familiarizing oneself with the standard structure of a scientific article. This article aims to provide guidance for individuals embarking on mental health research, assisting them in crafting their first scientific manuscript. A scientific paper typically adheres to the IMRaD system (Introduction, Methods, Results, and Discussion). We offer general recommendations that may vary based on the field of study and the specifications of each journal or publisher. Our focus lies in outlining the structure of a scientific paper, pinpointing common errors found in manuscripts from novice researchers, and stressing the importance of scientific writing style. We will not delve into other writing aspects such as syntax, grammar, or spelling. Ultimately, the objective of this article is to enhance the chances of publication by meticulously presenting research results in the format of a scientific article.
          </p>
          <p style="font-size: 12px; font-weight: bold; text-align: left;">Palabras clave: Keyword1, Keyword2, Keyword3</p>
          <div class="double-column" style="display: flex; gap: 20px;">
            <div class="column" style="flex: 1;">
              <h2 style="font-size: 14px; font-weight: bold;">Introducción</h2>
              <p style="font-size: 12px; text-align: justify;">
                Después de dedicar un considerable tiempo, esfuerzo y atención al diseño, ejecución y análisis de los resultados de un estudio, el objetivo primordial de un investigador es compartir sus hallazgos con la comunidad científica. La claridad, precisión y concisión son las características más relevantes de un artículo científico1. La guía para la redacción de artículos científicos publicada por la UNESCO2 también subraya que los resultados presentados deben ser veraces y válidos. La redacción científica demanda el uso de un estilo de escritura específico y la observancia de estándares estructurales y de división en secciones predefinidas. Este artículo pretende ser una breve guía para facilitar la tarea de aquellos que se inician en el ámbito de la investigación y nunca han redactado un artículo científico. Nos enfocaremos en la estructura que debe tener un artículo científico, señalaremos algunos errores comunes en los manuscritos de investigadores jóvenes y destacaremos el estilo de redacción científica, con el último objetivo de aumentar las posibilidades de publicación de una investigación.
              </p>
              <h2 style="font-size: 14px; font-weight: bold;">Partes de un artículo</h2>
              <p style="font-size: 12px; text-align: justify;">
                Todo artículo científico sigue un orden general, y la mayoría de las revistas adoptan el sistema IMRaD (Introducción, Métodos, Resultados y Discusión) establecido por el Comité Internacional de Editores de Revistas Médicas3 (ver tabla 1).
              3) población y participantes; 4) materiales; 5) intervenciones, y 6) análisis estadísticos
                </p>
            </div>
            <div class="column" style="flex: 1;">
              
              <p style="font-size: 12px; text-align: justify;">
                A este esquema general se le agrega un resumen al inicio del artículo y referencias bibliográficas al final del mismo. Es recomendable consultar las "guías para los autores" de cada revista para posibles variaciones de formato, como secciones diferenciadas para conclusiones y limitaciones, o puntos de resumen tras el manuscrito.
                Esta es la estructura estándar para estudios experimentales y cuasi-experimentales. Otros tipos de artículos, como los casos clínicos4 o las revisiones sistemáticas5,6, pueden seguir un formato diferente. Aunque este sea el orden en el que se presenta el trabajo final, no necesariamente corresponde al orden de escritura. Proponemos comenzar en el siguiente orden: métodos, resultados, introducción, discusión y, finalmente, el resumen.
              </p>
              <h2 style="font-size: 14px; font-weight: bold;">Métodos</h2>
            <p style="font-size: 12px;text-align: justify;">El método es el primer apartado en el que se puede trabajar dado que una vez terminado el estudio se conoce la metodología utilizada de antemano. Por ello, este apartado se escribe en pasado y de forma impersonal. El objetivo de la descripción metodológica es facilitar el que otros investigadores puedan replicar el estudio posteriormente. Se debe respetar la cronología de los eventos. En esta sección se pueden mencionar7: 1) diseño (aleatorio, controlado, ensayo clínico, casos y controles, prospectivo, etc.); 2) entorno de la investigación (centro de salud mental, hospitalización, escuelas, entrevista online, etc.);
            </div>
          </div>
        </div>
      `
    },
    
      {
        title: 'Artículo Periodístico a Doble Columna',
        description: 'Plantilla para un artículo periodístico a doble columna',
        content: `
          <h1>Título del Artículo Periodístico</h1>
          <p><strong>Autor:</strong> Nombre del Autor</p>
          <p><strong>Fecha:</strong> Fecha de Publicación</p>
          <h2>Encabezado</h2>
          <p>Encabezado del artículo.</p>
          <div class="double-column">
            <div class="column">
              <h2>Cuerpo del Artículo</h2>
              <p>Primera parte del contenido principal del artículo.</p>
            </div>
            <div class="column">
              <p>Segunda parte del contenido principal del artículo.</p>
            </div>
          </div>
          <h2>Conclusión</h2>
          <p>Conclusión y cierre del artículo.</p>
          <h2>Referencias</h2>
          <p>Referencias y fuentes utilizadas en el artículo.</p>
        `
      },
      {
        title: 'Artículo de Opinión a Doble Columna',
        description: 'Plantilla para un artículo de opinión a doble columna',
        content: `
          <h1>Título del Artículo de Opinión</h1>
          <p><strong>Autor:</strong> Nombre del Autor</p>
          <p><strong>Fecha:</strong> Fecha de Publicación</p>
          <div class="double-column">
            <div class="column">
              <h2>Introducción</h2>
              <p>Introducción y presentación del tema.</p>
              <h2>Argumentos</h2>
              <p>Primera parte de la exposición de los argumentos y puntos de vista.</p>
            </div>
            <div class="column">
              <p>Segunda parte de la exposición de los argumentos y puntos de vista.</p>
            </div>
          </div>
          <h2>Conclusión</h2>
          <p>Conclusión y resumen de la opinión presentada.</p>
        `
      }
    ],
    content_style: `
      body { font-family:Helvetica,Arial,sans-serif; font-size:16px }
      .double-column { display: flex; justify-content: space-between; margin-bottom: 20px; }
      .double-column .column { width: 48%; }
    `
});


function abrirArchivo() {
    // Crear un elemento input de tipo file invisible
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt'; // Limitar la selección a archivos de texto

    // Agregar un evento 'change' para manejar la selección de archivos
    input.addEventListener('change', function(event) {
        var file = event.target.files[0]; // Obtener el primer archivo seleccionado

        // Leer el contenido del archivo
        var reader = new FileReader();
        reader.onload = function() {
            var contenido = reader.result; // Contenido del archivo

            // Insertar el contenido del archivo en el editor TinyMCE
            tinymce.activeEditor.setContent(contenido);
        };
        reader.readAsText(file); // Leer el archivo como texto
    });

    // Simular clic en el elemento input para abrir el diálogo de selección de archivos
    input.click();
}

function guardarContenido() {
    // Obtiene el contenido del editor TinyMCE
    var contenido = tinymce.activeEditor.getContent();

    // Realiza una solicitud AJAX para guardar el contenido en el servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Muestra el mensaje de respuesta del servidor
            console.log(xhr.responseText);
        }
    };
    xhr.send("editor=" + encodeURIComponent(contenido));
}
