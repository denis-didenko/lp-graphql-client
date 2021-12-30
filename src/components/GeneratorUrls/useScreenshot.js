import { useMutation } from '@apollo/client';
import { SAVE_SCREENSHOT } from '../../apollo/gql/queryLp';

const useScreenshot = () => {
	const [saveScreenshot, { loading, error }] = useMutation(SAVE_SCREENSHOT);

	return { saveScreenshot, loading, error };
};

export default useScreenshot;
