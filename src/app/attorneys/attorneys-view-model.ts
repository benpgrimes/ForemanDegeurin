export interface Attorney {
    firstName: string,
    lastName: string,
    credentials: string[],
    biographyParagraphs: string[],
    photoUrl: string,
    vCardUrl: string,
}

export const AttorneysViewModelEn: Attorney[] = [
  {
    firstName: 'Mike',
    lastName: 'DeGeurin',
    credentials: ['JD Texas Tech University', 'BA University of Texas - Austin'],
    biographyParagraphs: [
      'Mike DeGeurin is widely recognized as one of our nation’s top trial attorneys. His courtroom success has earned him many honors, including being named one of The National Law Journal’s Top 50 Lawyers under 50, Outstanding Criminal Defense Lawyer of Texas by the State Bar of Texas, and Attorney of the Year by the Harris County Criminal Lawyers Association.',
      'Mike gained international acclaim by freeing inmate Clarence Brandley from over a decade of wrongful imprisonment on Texas’ Death Row. Mike has also won numerous victories in white-collar and corporate crime cases, including bank fraud, bribery, government contracting, wire fraud, money laundering and conspiracy cases.',
      'Mike has successfully represented many international clients with legal matters, including individuals and companies from Mexico, Canada, England, France, and Germany. Though Mike has made headlines with many high profile cases, he is often called upon to offer discreet advice to business leaders and their employees regarding legal matters.'
    ],
    photoUrl: '/assets/images/profilepic_mike.jpg',
    vCardUrl: '/assets/vCards/Mike_DeGeurin.vcf'
  },
  {
    firstName: 'Michael',
    lastName: 'DeGeurin',
    credentials: ['JD St. Mary’s University', 'Institute on World Legal Problems, University of Innsbruck, Austria', 'BA History, University of Colorado – Boulder'],
    biographyParagraphs: [
      'Michael DeGeurin worked on the Texas Court of Criminal Appeals as a briefing attorney for the Honorable Charlie Baird. Michael then spent three years with the Austin-based firm Joseph A. Turner, P.C., focusing on State criminal cases. In 1999, Michael returned to Houston and worked as an Assistant Federal Public Defender representing hundreds of individuals charged with a variety of federal crimes. Michael joined Foreman, DeGeurin & DeGeurin in 2003, and has continued his Federal and State practice.',
      'Michael has a reputation of true caring for his clients and their families. His compassion and dedication brings a unique perspective to his cases — helping clients tailor results that fit their specific interests and situations.'
    ],
    photoUrl: '/assets/images/profilepic_michael.jpg',
    vCardUrl: '/assets/vCards/Michael_DeGeurin.vcf'
  },
];

export const AttorneysViewModelEs: Attorney[] = [
  {
    firstName: 'Mike',
    lastName: 'DeGeurin',
    credentials: ['JD Texas Tech University', 'BA University of Texas - Austin'],
    biographyParagraphs: [
      'Mike DeGeurin es reconocido a todo lo largo del país como uno de los abogados litigantes más destacados de los Estados Unidos. Sus éxitos en las salas de juicio son legendarios y le han merecido multitud de honores, incluyendo el ser nombrado como uno de los 50 mejores abogados de menos de 50 años por The National Law Journal (La Revista Jurídica Nacional), como Abogado Defensor Penalista Extraordinario de Texas por la Barra de Abogados de Texas, y como el Abogado del Año por la Asociación de Abogados Penalistas del Condado de Harris.',
      'Se ganó renombre internacional cuando logró la libertad de Clarence Brandley después de 10 años de encarcelamiento injustificado esperando una condena de muerte en el llamado “Pasillo de la Muerte de Texas.” Mike ha ganado asimismo victorias impresionantes en una amplia variedad de delitos sin violencia de tipo corporativo incluyendo fraude bancario, soborno, contratación del gobierno, fraude por giros, blanqueo de dinero y asociación delictiva.',
      'Ha representado con éxito a muchos clientes internacionales en sus asuntos jurídicos, incluyendo individuos y compañías de México, Canadá, Inglaterra, Francia y Alemania. Aunque los logros de Mike han aparecido en encabezados periodísticos en sus casos de mayor renombre, frecuentemente se le pide que dé asesoría altamente confidencial a dirigentes empresariales y sus empleados con respecto a asuntos jurídicos.'
    ],
    photoUrl: '/assets/images/profilepic_mike.jpg',
    vCardUrl: '/assets/vCards/Mike_DeGeurin.vcf'
  },
  {
    firstName: 'Michael',
    lastName: 'DeGeurin',
    credentials: ['JD St. Mary’s University', 'Institute on World Legal Problems, University of Innsbruck, Austria', 'BA History, University of Colorado – Boulder'],
    biographyParagraphs: ['Michael trabajó como Abogado Proyectista del Honorable Charlie F. Baird en el Tribunal de Apelación de Texas. Después de trabajar tres años en el Bufete Jurídico de Joseph A. Turner, P.C. en Austin, Michael regresó a Houston y trabajó como Defensor Público Federal Adjunto desde 1999–2003. Michael tiene la reputación de verdaderamente preocuparse por sus clientes. Su duro trabajo y dedicación vienen de su genuina compasión por sus clientes y las familias de los mismos.'],
    photoUrl: '/assets/images/profilepic_michael.jpg',
    vCardUrl: '/assets/vCards/Michael_DeGeurin.vcf'
  },
];
