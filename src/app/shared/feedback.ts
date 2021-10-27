export class Feedback {
  firstname: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string

  constructor(firstname: string,
    lastname: string,
    telnum: number,
    email: string,
    agree: boolean,
    contacttype: string,
    message: string) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.telnum = telnum;
    this.email = email;
    this.agree = agree;
    this.contacttype = contacttype;
    this.message = message;
  }
}

export const ContactType = ['None', 'Tel', 'Email'];
