import { Task } from "entities/task/model/types";
import { baseApi } from "shared/api/baseApi";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => "todos",
      transformResponse: (response: { todos: Task[] }) => response.todos,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi;
