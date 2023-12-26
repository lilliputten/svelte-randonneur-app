import { browser } from '$app/environment';
import { goto } from '$app/navigation';

import { addToast } from '@/src/components/ui/Toasts';

// NOTE: This function is unused
export function checkReadiness(hasData: boolean, goingOut?: boolean) {
	if (!hasData && !goingOut) {
		const errorMsg = 'Data has not been initialized. Going to the main page.';
		const error = new Error(errorMsg);
		console.warn('[EditorPage:checkReadiness]', error.message);
		// Leave page if no data anymore...
		goingOut = true;
		if (browser) {
			addToast({ message: errorMsg, type: 'error' });
			goto('/', { replaceState: true });
		}
	}
}
