import { Category } from './category.model';

export class CategopryService {
    categoryList: Category[] = [];

    constructor() {
        this.categoryList = [ new Category(1, "Pojedyńcze łóżko"), new Category(2, "Podwójne łóżko"), new Category(3, "2 pojedyńcze łóżko"), new Category(4, "3 pojedyńcze łóżko")]
    }
}