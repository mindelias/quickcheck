import axios from 'axios';
import {useMutation} from 'react-query';

export const usePostCreateStore = () => {
  //   const queryClient = useQueryClient();
  const url = 'https://avicashapitest.avitechng.com/api/Account/SignUp';
  const addStore = async (payload: any) => {
    const response = await axios.post(url, payload);
    // queryClient.invalidateQueries('fetchUsers');

    return response;
  };

  return useMutation(addStore);
};
