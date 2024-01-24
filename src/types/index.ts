export interface ApartProps {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export interface AboutProps {
  title: string;
  text: string;
}

export interface DropdownContentProps {
  title: string;
  content: string | string[] | undefined;
}

export interface HeroProps {
  children: string;
}
