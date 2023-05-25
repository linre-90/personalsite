export interface colorTheme {
  mainColor: string;
  secondaryColor: string;
  complimentaryColor: string;
  textColor: string;
  linkColor: string;
  highlightColor: string;
}

export interface fontTheme {
  headerFont: string;
  textFont: string;
}

export class Dark implements colorTheme, fontTheme {
  textFont = "'Raleway', sans-serif;";
  headerFont = "'Major Mono Display', monospace;";
  mainColor = "#1B2430";
  secondaryColor = "#51557E";
  complimentaryColor = "#816797";
  textColor = "#f8f8f8";
  linkColor = "#f8f8f8";
  highlightColor = "#D6D5A8";
}

export class Light implements colorTheme, fontTheme {
  textFont = "'Raleway', sans-serif;";
  headerFont = "'Major Mono Display', monospace;";
  mainColor = "#1B2430";
  secondaryColor = "#51557E";
  complimentaryColor = "#816797";
  textColor = "#f8f8f8";
  linkColor = "#f8f8f8";
  highlightColor = "#D6D5A8";
}
