import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Gustavo Ferreira de Araujo',
    description: 'Breve descrição sobre mim',
    skills: ['JavaScript', 'React', 'Tailwind CSS'],
    projects: ['Projeto 1', 'Projeto 2'],
  },
  reducers: {},
});

export default userSlice.reducer;
