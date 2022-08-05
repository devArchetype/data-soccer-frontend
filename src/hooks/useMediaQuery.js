import { useState, useEffect } from 'react';

export const useMediaQuery = (rule) => {
	const [ruleMatches, setRuleMatches] = useState(false);
	const media = window.matchMedia(rule);

	useEffect(() => {
		const mediaListener = () => setRuleMatches(media.matches);

		if (media.matches !== ruleMatches) setRuleMatches(media.matches);
		media.addEventListener('change', mediaListener);

		return () => media.removeEventListener('change', mediaListener);
	}, [ruleMatches, rule]);

	return ruleMatches;
};
