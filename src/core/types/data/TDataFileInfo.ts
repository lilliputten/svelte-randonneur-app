export type TDataFileMode = 'demo' | 'uploaded';
export interface TDataFileInfo {
  name: string;
  type: TDataFileMode;
  size: number;
}
