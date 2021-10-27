export class Leader {
  id: string;
  name: string;
  image: string;
  designation: string;
  abbr: string;
  featured: boolean;
  description: string;

  constructor (id: string,
    name: string,
    image: string,
    designation: string,
    abbr: string,
    featured: boolean,
    description: string) {

    this.id = id;
    this.name = name;
    this.image = image;
    this.designation = designation;
    this.abbr = abbr;
    this.featured = featured;
    this.description = description;
  }

}
