import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, doc) => {
      const { title, items } = doc
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
export const selectCategoryIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)