import { TDisplayLayout } from './TDisplayLayout';
import { TEditableFieldSpec } from './TEditableFieldSpec';

export interface TEditableObject {
  displayLayout?: TDisplayLayout;
  specs: TEditableFieldSpec[];
}
