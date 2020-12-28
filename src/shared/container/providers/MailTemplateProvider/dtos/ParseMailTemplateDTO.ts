interface TemplateVariables {
  [key: string]: string | number;
}

export default interface ParseMailTemplateDTO {
  template: string;
  variables: TemplateVariables;
}