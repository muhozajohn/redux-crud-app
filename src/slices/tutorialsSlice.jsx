import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tutorialService from "../services/tutorial.service";

const initialState = {
  tutorials: [],
};

export const createTutorial = createAsyncThunk(
  "tutorials/create",
  async ({ title, description, image }) => {
    const response = await tutorialService.create({
      title,
      description,
      image,
    });
    return response.data?.data;
  }
);

export const retrieveTutorials = createAsyncThunk(
  "tutorials/retrieve",
  async () => {
    const res = await tutorialService.getAll();
    return res.data?.data;
  }
);

export const updateTutorial = createAsyncThunk(
  "tutorials/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await tutorialService.update(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTutorial = createAsyncThunk(
  "tutorials/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      await tutorialService.delete(id);
      return { id };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOnetutorials = createAsyncThunk(
  "tutorials/getOne",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await tutorialService.get(id);
      return res.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const findTutorialsByTitle = createAsyncThunk(
  "tutorials/findByTitle",
  async ({ title }) => {
    const res = await tutorialService.findByTitle(title);
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: "tutorials",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createTutorial.fulfilled, (state, action) => {
        state.tutorials.push(action.payload);
      })
      .addCase(retrieveTutorials.fulfilled, (state, action) => {
        state.tutorials = action.payload;
      })
      .addCase(getOnetutorials.fulfilled, (state, action) => {
        state.tutorials = action.payload;
      })
      .addCase(findTutorialsByTitle.fulfilled, (state, action) => {
        state.tutorials = action.payload;
      })
      .addCase(updateTutorial.fulfilled, (state, action) => {
        const index = state.tutorials.findIndex(
          (tutorials) => tutorials.id === action.payload.id
        );
        state.tutorials[index] = {
          ...state.tutorials[index],
          ...action.payload,
        };
      })
      .addCase(deleteTutorial.fulfilled, (state, action) => {
        const index = state.tutorials.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.tutorials.splice(index, 1);
      });
  },
});

export const selectAllTutorial = (action) => action.tutorials.tutorials;
export default tutorialSlice.reducer;
