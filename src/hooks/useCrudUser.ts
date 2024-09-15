import axios from 'axios';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
const useGetAllUsers = () => {
  const paramz = {page: 1, _limit: 10};
  const fetchUsers = async ({
    params,
  }: {
    params: {page: number; _limit: number};
  }) => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
      {params: {page: params.page, _limit: 10}},
    );
    return data;
  };

  return useInfiniteQuery({
    queryKey: ['fetchUsers', paramz],
    queryFn: () => fetchUsers({params: {page: 1, _limit: 10}}),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
};

export const usePostUser = () => {
  const queryClient = useQueryClient();
  const url = 'https://jsonplaceholder.typicode.com/users';
  const url2 = 'https://avicashapitest.avitechng.com/api/Account/SignUp';
  const addUser = async (payload: any) => {
    const response = await axios.post(url2, payload);
    queryClient.invalidateQueries('fetchUsers');
    return response;
  };

  return useMutation(addUser);
};

export default useGetAllUsers;
