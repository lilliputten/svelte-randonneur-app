import { isDev } from '@/src/core/constants/app';

const showDemoPageSize = true;
export const defaultPageSize = isDev && showDemoPageSize ? 5 : 10;
export const minPageSize = isDev && showDemoPageSize ? 2 : 5;
