Pautas:
Para este taller trabajaremos con una nueva versión del registro trabajado en el taller 7.3.
Deberán llevar a cabo las mismas validaciones, pero en este caso trabajarán con un elemento del tipo form y deberán combinar las validaciones por atributo con validaciones propias.

Antes de empezar, investiguen sobre los siguientes temas:
Validación de restricciones -> 
required (en-US): Especifica si un campo de formulario debe completarse antes de que se pueda enviar el formulario.
minlength y maxlength (en-US): Especifican la longitud mínima y máxima de los datos de texto (cadenas).
min y max (en-US): Especifican los valores mínimo y máximo de los tipos de entrada numéricos.
type: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo de preajuste específico.
pattern (en-US): Especifica una expresión regular que define un patrón que los datos que se introduzcan deben seguir.

Feedback en validaciones (por ejemplo, con Bootstrap)
Atributo novalidate
Estados :valid e :invalid
Métodos setCustomValidity() y checkValidity()
Evento submit y los métodos preventDefault() y stopPropagation()


El formulario deberá enviarse solamente si cumple con los criterios definidos:

Ningún campo puede estar vacío
El Email debe tener un formato valido
La contraseña debe tener al menos 6 caracteres
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un modal).


Deberá darse feedback al usuario cumpliendo con los siguientes criterios:
Solamente se dará feedback al usuario, luego de que se intente ejecutar el submit, momento en el que se deberá mostrar el resultado de la validación para todos los campos.
Luego de ese momento, el feedback deberá funcionar en tiempo real para todos los casos.
Para cada caso, deberá alertarse al menos a través de un aviso que especifique la omisión y del color del borde del campo.
El campo "Repetir contraseña" solo se validará cuando se cumpla que su valor sea igual al del campo "Contraseña" y que el campo "Contraseña" se encuentre validado. Por lo que se mostrará como invalido mientras no se valide "Contraseña", aún cumpliéndose la igualdad.
El checkbox de los terminos y condiciones deberá dar feedback en 3 lugares:

-El mismo checkbox, dentro del modal
-El botón que despliega el modal
-Un texto al lado del mismo botón