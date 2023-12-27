export type TToastId = number;
export type TToastType = 'info' | 'success' | 'error';
export interface TToast {
  id: TToastId;
  type: TToastType;
  dismissible: boolean;
  timeout: number;
  message: string;
}
export type TToastParams = Partial<TToast>;
