export default function PrivacityPage() {
    return (
      <main className="p-6">
      <div className="mx-auto rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Política de privacidad de menores
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Menores de Edad que viajan solo/s o en compañía de uno de sus padres
          </h2>
          <p className="mb-2">(menor de 18 años para la Legislación Nacional).</p>
          <h3 className="font-semibold mb-2">Documentos requeridos:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Permiso/Autorización de Viaje del padre faltante: Si Ud. vive en la Ciudad de Bs. As., dicho permiso lo tramita ante escribano público y lo legaliza ante el Colegio de Escribanos de esa ciudad; si su domicilio no es la Provincia, similar trámite u opción mediante una justificación en la cual el juez del departamento judicial de su zona.
            </li>
            <li>
              Partida de Nacimiento o Libreta de Matrimonio, con el fin de demostrar la Filiación (Originales).
            </li>
          </ul>
          <h3 className="font-semibold mb-2">También deberá presentar alguno de los siguientes documentos:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>DNI (Ver observaciones)</li>
            <li>Cédula de identidad MERCOSUR, expedida por la Policía Federal Argentina</li>
            <li>Cédula de identidad, expedida por la Policía Federal Argentina (formato viejo sin Código de Lectura Mecánica)</li>
            <li>Cédula de Identidad Provincial, expedida por los Gobiernos Provinciales (para Bolivia y Chile)</li>
            <li>Libreta Cívica o de Enrolamiento</li>
            <li>Pasaporte de su nacionalidad vigente</li>
          </ul>
          <h3 className="font-semibold mb-2">Observaciones:</h3>
          <ul className="list-disc pl-6">
            <li>Cualquiera sea el documento que presente, deberá estar en buen estado de conservación.</li>
            <li>
              El menor que cumplió 16 años tiene un plazo de 180 días para el canje de su DNI (Decreto N° 538/04) extendiéndose durante ese lapso su validez para egresar del Territorio Nacional.
            </li>
            <li>
              Tanto mayores como menores de edad no podrán viajar con la constancia de trámite del DNI o Cédulas de Identidad ya vencidas.
            </li>
            <li>Tampoco se podrá salir del país sin la correspondiente ACTUALIZACIÓN de los 8 años en el DNI.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Régimen actual para la salida de menores al exterior
          </h2>
          <p className="mb-4">
            La Disposición 3110/06 que modificó a la Resolución 2895/95 que regula la documentación necesaria para que un menor esté autorizado a salir del país solo o acompañado exige los permisos si los menores no son hijos y/o viajan acompañados por terceros.
          </p>
          <h3 className="font-semibold mb-2">Caso A - Si el menor sale en compañía de sus dos padres</h3>
          <h4 className="font-semibold mb-2">Documentos válidos de viaje:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Partida de nacimiento del menor o libreta de familia donde esté asentado el menor.</li>
            <li>
              También deberá presentar alguno de los siguientes documentos:
              <ul className="list-disc pl-6">
                <li>DNI</li>
                <li>Cédula de identidad MERCOSUR, expedida por la Policía Federal Argentina</li>
                <li>Cédula de identidad, expedida por la Policía Federal Argentina (formato viejo sin Código de Lectura Mecánica)</li>
                <li>Cédula de Identidad Provincial, expedida por los Gobiernos Provinciales (para Bolivia y Chile)</li>
                <li>Pasaporte de su nacionalidad vigente</li>
              </ul>
            </li>
          </ul>

          <h3 className="font-semibold mb-2">Caso B - El menor sale con uno de sus padres</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Partida de nacimiento del menor o libreta de familia donde esté asentado el menor.
            </li>
            <li>
              Documento del progenitor acompañante que acredite la autorización del otro progenitor o ante autoridad pública competente.
            </li>
          </ul>

          <h3 className="font-semibold mb-2">Caso C - El menor no sale con sus padres</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Partida de nacimiento del menor o libreta de familia donde esté asentado el menor.
            </li>
            <li>
              Documento del responsable mayor de edad debidamente autorizado para acompañarlo, junto con los siguientes documentos del menor:
              <ul className="list-disc pl-6">
                <li>DNI</li>
                <li>Cédula de identidad MERCOSUR, expedida por la Policía Federal Argentina</li>
                <li>Cédula de identidad, expedida por la Policía Federal Argentina (formato viejo sin Código de Lectura Mecánica)</li>
                <li>Cédula de Identidad Provincial, expedida por los Gobiernos Provinciales (para Bolivia y Chile)</li>
                <li>Pasaporte de su nacionalidad vigente</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </main>
    );
  };