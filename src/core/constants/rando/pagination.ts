import { isDev } from '@/src/core/constants/app';

const showDemoPageSize = false;
export const defaultPageSize = isDev && showDemoPageSize ? 5 : 10;
export const minPageSize = 5;
