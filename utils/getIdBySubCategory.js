import { JOB_CATEGORIES } from "~/constants/JOB_CATEGORIES";

export const getIdBySubCategory = (subCategoryName) => {
    for (let category of JOB_CATEGORIES) {
        if (category.subCategories.includes(subCategoryName)) {
            return category.id;
        }
    }
    return null;
}