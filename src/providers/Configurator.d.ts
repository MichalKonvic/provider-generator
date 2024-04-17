export type StringPrimitiveType = 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'symbol' | 'bigint'|'any'|'unknown'|'never';

export type PropType = {
  name: string;
  required: boolean;
  type: "primitive"
  isArray: boolean;
  data: string;
  value: StringPrimitiveType[]; // All possible str primitive types
} | {
  name: string;
  required: boolean;
  type: "custom";
  isArray: boolean;// Ignored in code generation
  data: string;
  value: string; // Custom user defined type
}