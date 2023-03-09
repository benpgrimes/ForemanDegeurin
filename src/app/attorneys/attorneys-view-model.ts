export interface Attorney {
    firstName: string,
    lastName: string,
    credentials: string[],
    biography: string,
    photoUrl: string,
    vCardUrl: string,
}

const Mike: Attorney = {
    firstName: 'Mike',
    lastName: 'Degeurin',
    credentials: ['JD Texas Tech University', 'BA University of Texas - Austin'],
    biography: 'Mike DeGeurin is widely recognized as one of our nation’s top trial attorneys. His courtroom success has earned him many honors, including being named one of The National Law Journal’s Top 50 Lawyers under 50, Outstanding Criminal Defense Lawyer of Texas by the State Bar of Texas, and Attorney of the Year by the Harris County Criminal Lawyers Association.Mike gained international acclaim by freeing inmate Clarence Brandley from over a decade of wrongful imprisonment on Texas’ Death Row. Mike has also won numerous victories in white-collar and corporate crime cases, including bank fraud, bribery, government contracting, wire fraud, money laundering and conspiracy cases.Mike has successfully represented many international clients with legal matters, including individuals and companies from Mexico, Canada, England, France, and Germany. Though Mike has made headlines with many high profile cases, he is often called upon to offer discreet advice to business leaders and their employees regarding legal matters.',
    photoUrl: '/assets/images/profilepic_mike.jpg',
    vCardUrl: '/assets/vCards/Mike_DeGeurin.vcf'
}

const Michael: Attorney = {
    firstName: 'Michael',
    lastName: 'DeGeurin',
    credentials: ['JD St. Mary’s University', 'Institute on World Legal Problems, University of Innsbruck, Austria', 'BA History, University of Colorado – Boulder'],
    biography: 'Michael DeGeurin worked on the Texas Court of Criminal Appeals as a briefing attorney for the Honorable Charlie Baird. Michael then spent three years with the Austin-based firm Joseph A. Turner, P.C., focusing on State criminal cases. In 1999, Michael returned to Houston and worked as an Assistant Federal Public Defender representing hundreds of individuals charged with a variety of federal crimes. Michael joined Foreman, DeGeurin & DeGeurin in 2003, and has continued his Federal and State practice. Michael has a reputation of true caring for his clients and their families. His compassion and dedication brings a unique perspective to his cases — helping clients tailor results that fit their specific interests and situations.',
    photoUrl: '/assets/images/profilepic_michael.jpg',
    vCardUrl: '/assets/vCards/Michael_DeGeurin.vcf'
}

const Bryan: Attorney = {
    firstName: 'Bryan',
    lastName: 'Garris',
    credentials: ['JD University of Houston Law Center', 'BS Biology, Texas Southern University'],
    biography: 'Bryan joined Foreman, DeGeurin & DeGeurin in 2012. His litigation practice focuses primarily on Texas state cases, both civil and criminal. Bryan has represented clients in State criminal cases ranging from drug possession to murder cases. Bryan also helps clients with administrative issues, and represents clients facing state or federal licensing issues. Bryan graduated from the University of Houston Law Center in 2011. While in law school, Bryan worked with the Federal Public Defender’s office in Houston. He also interned with the Honorable Royal Furgeson in the U.S. District Court for the Western District of Texas.',
    photoUrl: '/assets/images/profilepic_bryan.jpg',
    vCardUrl: '/assets/vCards/Bryan_Garris.vcf',
}

export const AttorneysViewModel: Attorney[] = [Mike, Michael, Bryan]