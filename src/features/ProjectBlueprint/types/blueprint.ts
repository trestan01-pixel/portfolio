export interface Chapter {
  id: string;
  englishTitle: string;
  russianTitle: string;
  content: string; // HTML string with custom placeholders like <[COMPONENT]>
  tags?: string[];
  related?: string[];
}

export interface Tome {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface ColorDefinition {
  name: string;
  hex: string;
  description: string;
}

export interface PaletteData {
  accents: ColorDefinition[];
  backgrounds: ColorDefinition[];
}